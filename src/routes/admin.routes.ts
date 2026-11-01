import { Hono } from "hono";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { sendSuccess, sendError } from "../lib/response";
import { adminOnlyMiddleware } from "../middleware/auth";
import { resolveStreamUrl } from "../lib/resolvers";

export const adminRoutes = new Hono();

// All routes under /api/admin require admin role
adminRoutes.use("*", adminOnlyMiddleware);

// GET /api/admin/stats
adminRoutes.get("/stats", async (c) => {
  try {
    const [usersCount, animesCount, episodesCount, commentsCount, reportsCount] = await Promise.all([
      prisma.user.count(),
      prisma.anime.count(),
      prisma.episode.count(),
      prisma.comment.count(),
      prisma.report.count({ where: { status: "pending" } }),
    ]);

    return sendSuccess(c, {
      totalUsers: usersCount,
      totalAnimes: animesCount,
      totalEpisodes: episodesCount,
      totalComments: commentsCount,
      pendingReports: reportsCount,
    });
  } catch (error: any) {
    return sendError(c, "STATS_ERROR", error.message || "فشل جلب إحصائيات النظام", 500);
  }
});

// GET /api/admin/users
adminRoutes.get("/users", async (c) => {
  try {
    const page = Math.max(1, parseInt(c.req.query("page") || "1", 10));
    const limit = Math.min(100, Math.max(1, parseInt(c.req.query("limit") || "20", 10)));
    const skip = (page - 1) * limit;

    const [total, users] = await Promise.all([
      prisma.user.count(),
      prisma.user.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
          subscription: true,
        },
      }),
    ]);

    return sendSuccess(c, users, {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error: any) {
    return sendError(c, "USERS_ERROR", error.message || "فشل جلب المستخدمين", 500);
  }
});

// ==========================================
// Video Servers & Streaming Management (Admin)
// ==========================================

// GET /api/admin/servers - جلب سيرفرات حلقة معينة
adminRoutes.get("/servers", async (c) => {
  try {
    const episodeId = c.req.query("episodeId");
    if (!episodeId) {
      return sendError(c, "VALIDATION_ERROR", "معرف الحلقة episodeId مطلوب", 400);
    }

    const servers = await prisma.server.findMany({
      where: { episodeId },
      orderBy: [{ priority: "asc" }, { isWorking: "desc" }],
    });

    return sendSuccess(c, servers);
  } catch (error: any) {
    return sendError(c, "FETCH_ERROR", error.message || "فشل جلب سيرفرات الحلقة", 500);
  }
});

const serverSchema = z.object({
  episodeId: z.string().min(1, "معرف الحلقة مطلوب"),
  name: z.string().optional(),
  url: z.string().url("رابط السيرفر يجب أن يكون رابطاً صالحاً"),
  directUrl: z.string().url().optional().nullable(),
  provider: z.string().optional(),
  category: z.enum(["streaming", "download", "both"]).optional().default("streaming"),
  type: z.enum(["hls", "mp4", "embed", "mega", "dash"]).optional(),
  quality: z.string().optional().default("1080p FHD"),
  priority: z.number().int().min(1).default(1),
  isWorking: z.boolean().default(true),
  supportedQualities: z.array(z.string()).optional().default(["1080p", "720p", "480p", "Auto"]),
});

// POST /api/admin/servers - إضافة سيرفر فردي لحلقة مع التحليل التلقائي
adminRoutes.post("/servers", async (c) => {
  try {
    const body = await c.req.json();
    const parsed = serverSchema.safeParse(body);

    if (!parsed.success) {
      return sendError(c, "VALIDATION_ERROR", parsed.error.errors[0]?.message || "بيانات السيرفر غير صالحة", 400);
    }

    const resolved = resolveStreamUrl(parsed.data.url, parsed.data.quality);

    const server = await prisma.server.create({
      data: {
        episodeId: parsed.data.episodeId,
        url: parsed.data.url.trim(),
        name: parsed.data.name || resolved.defaultName,
        directUrl: parsed.data.directUrl || resolved.directUrl,
        provider: parsed.data.provider || resolved.provider,
        category: parsed.data.category || resolved.category,
        type: parsed.data.type || resolved.type,
        quality: parsed.data.quality || resolved.quality,
        priority: parsed.data.priority,
        isWorking: parsed.data.isWorking,
        supportedQualities: parsed.data.supportedQualities,
        lastCheckedAt: new Date(),
      },
    });

    return sendSuccess(c, server, undefined, 201);
  } catch (error: any) {
    return sendError(c, "CREATE_SERVER_ERROR", error.message || "فشل إضافة السيرفر", 500);
  }
});

// POST /api/admin/episodes/:id/servers/batch - إضافة مصفوفة سيرفرات متعددة دفعة واحدة (Anime Slayer Style)
const batchServerSchema = z.object({
  servers: z.array(
    z.object({
      url: z.string().url("رابط السيرفر غير صالح"),
      name: z.string().optional(),
      quality: z.string().optional().default("1080p FHD"),
      category: z.enum(["streaming", "download", "both"]).optional(),
      priority: z.number().int().min(1).optional(),
    })
  ).min(1, "يجب إرسال سيرفر واحد على الأقل"),
});

adminRoutes.post("/episodes/:id/servers/batch", async (c) => {
  try {
    const episodeId = c.req.param("id");
    const body = await c.req.json();
    const parsed = batchServerSchema.safeParse(body);

    if (!parsed.success) {
      return sendError(c, "VALIDATION_ERROR", parsed.error.errors[0]?.message || "بيانات السيرفرات غير صالحة", 400);
    }

    const createdServers = [];
    let priorityTracker = 1;

    for (const item of parsed.data.servers) {
      const resolved = resolveStreamUrl(item.url, item.quality);
      const server = await prisma.server.create({
        data: {
          episodeId,
          url: item.url.trim(),
          directUrl: resolved.directUrl,
          provider: resolved.provider,
          name: item.name || resolved.defaultName,
          type: resolved.type,
          category: item.category || resolved.category,
          quality: item.quality || resolved.quality,
          priority: item.priority !== undefined ? item.priority : priorityTracker++,
          isWorking: true,
          supportedQualities: ["1080p", "720p", "480p", "Auto"],
          lastCheckedAt: new Date(),
        },
      });
      createdServers.push(server);
    }

    return sendSuccess(
      c,
      {
        totalAdded: createdServers.length,
        servers: createdServers,
        message: `تمت إضافة وتصنيف وحل روابط ${createdServers.length} سيرفرات بنجاح بمحرك البث المباشر`,
      },
      undefined,
      201
    );
  } catch (error: any) {
    return sendError(c, "BATCH_SERVER_ERROR", error.message || "فشل إضافة مصفوفة السيرفرات", 500);
  }
});

// PUT /api/admin/servers/:id - تعديل سيرفر (رابط، حالة، جودة، نوع، جودات مدعومة)
adminRoutes.put("/servers/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();

    const updated = await prisma.server.update({
      where: { id },
      data: {
        name: body.name,
        url: body.url,
        type: body.type,
        quality: body.quality,
        priority: body.priority !== undefined ? Number(body.priority) : undefined,
        isWorking: body.isWorking !== undefined ? Boolean(body.isWorking) : undefined,
        supportedQualities: Array.isArray(body.supportedQualities) ? body.supportedQualities : undefined,
        lastCheckedAt: new Date(),
      },
    });

    return sendSuccess(c, updated);
  } catch (error: any) {
    return sendError(c, "UPDATE_SERVER_ERROR", error.message || "فشل تعديل السيرفر", 500);
  }
});

// DELETE /api/admin/servers/:id - حذف سيرفر
adminRoutes.delete("/servers/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await prisma.server.delete({
      where: { id },
    });

    return sendSuccess(c, { message: "تم حذف السيرفر بنجاح" });
  } catch (error: any) {
    return sendError(c, "DELETE_SERVER_ERROR", error.message || "فشل حذف السيرفر", 500);
  }
});

// Helper for pinging video server URLs (HEAD or range GET)
async function testServerConnectivity(url: string): Promise<{ isWorking: boolean; latencyMs: number; statusText: string }> {
  const startTime = Date.now();
  try {
    // Attempt HEAD request first
    let res = await fetch(url, {
      method: "HEAD",
      signal: AbortSignal.timeout(6000),
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AnimeDazePlayer/1.0",
      },
    });

    // If method HEAD is not allowed (405), try range GET
    if (res.status === 405) {
      res = await fetch(url, {
        method: "GET",
        signal: AbortSignal.timeout(6000),
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AnimeDazePlayer/1.0",
          Range: "bytes=0-100",
        },
      });
    }

    const latencyMs = Date.now() - startTime;
    const isWorking = res.ok || [200, 206, 301, 302, 307, 308].includes(res.status);

    return {
      isWorking,
      latencyMs,
      statusText: `${res.status} ${res.statusText}`,
    };
  } catch (err: any) {
    const latencyMs = Date.now() - startTime;
    return {
      isWorking: false,
      latencyMs,
      statusText: err.name === "TimeoutError" ? "انتهت مهلة الاتصال (Timeout > 6s)" : (err.message || "فشل الاتصال بالخادم"),
    };
  }
}

// POST /api/admin/servers/:id/ping - فحص فوري ومباشر لسيرفر محدد
adminRoutes.post("/servers/:id/ping", async (c) => {
  try {
    const id = c.req.param("id");
    const server = await prisma.server.findUnique({ where: { id } });

    if (!server) {
      return sendError(c, "NOT_FOUND", "السيرفر المطلوب غير موجود", 404);
    }

    const result = await testServerConnectivity(server.url);

    const updated = await prisma.server.update({
      where: { id },
      data: {
        isWorking: result.isWorking,
        lastCheckedAt: new Date(),
      },
    });

    return sendSuccess(c, {
      server: updated,
      ping: result,
      message: result.isWorking
        ? `السيرفر سليم ويعمل بكفاءة (زمن الاستجابة: ${result.latencyMs}ms)`
        : `السيرفر لا يستجيب أو يعاني من عطل (${result.statusText})`,
    });
  } catch (error: any) {
    return sendError(c, "PING_SERVER_ERROR", error.message || "فشل فحص السيرفر", 500);
  }
});

// POST /api/admin/servers/health-check - فحص دوري جماعي لجميع سيرفرات حلقة أو المنصة
adminRoutes.post("/servers/health-check", async (c) => {
  try {
    const episodeId = c.req.query("episodeId");
    const limit = Math.min(30, Math.max(1, parseInt(c.req.query("limit") || "10", 10)));

    const where: any = episodeId ? { episodeId } : {};

    const serversToTest = await prisma.server.findMany({
      where,
      orderBy: [{ lastCheckedAt: "asc" }], // prioritize unchecked or least recently checked
      take: limit,
    });

    const results = await Promise.all(
      serversToTest.map(async (srv) => {
        const check = await testServerConnectivity(srv.url);
        await prisma.server.update({
          where: { id: srv.id },
          data: {
            isWorking: check.isWorking,
            lastCheckedAt: new Date(),
          },
        }).catch(() => {});

        return {
          id: srv.id,
          name: srv.name,
          url: srv.url,
          isWorking: check.isWorking,
          latencyMs: check.latencyMs,
          statusText: check.statusText,
        };
      })
    );

    const totalHealthy = results.filter((r) => r.isWorking).length;
    const totalFailed = results.length - totalHealthy;

    return sendSuccess(c, {
      totalTested: results.length,
      totalHealthy,
      totalFailed,
      servers: results,
    });
  } catch (error: any) {
    return sendError(c, "HEALTH_CHECK_ERROR", error.message || "فشل الفحص الشامل للسيرفرات", 500);
  }
});

// PATCH /api/admin/episodes/:id/timecodes - ضبط توقيت تخطي شارة البداية والنهاية ومعاينة اللقطات
adminRoutes.patch("/episodes/:id/timecodes", async (c) => {
  try {
    const id = c.req.param("id");
    const { introStart, introEnd, outroStart, outroEnd, durationSeconds, storyboardUrl } = await c.req.json();

    const updated = await prisma.episode.update({
      where: { id },
      data: {
        introStart: introStart !== undefined ? Number(introStart) : undefined,
        introEnd: introEnd !== undefined ? Number(introEnd) : undefined,
        outroStart: outroStart !== undefined ? Number(outroStart) : undefined,
        outroEnd: outroEnd !== undefined ? Number(outroEnd) : undefined,
        durationSeconds: durationSeconds !== undefined ? Number(durationSeconds) : undefined,
        storyboardUrl: storyboardUrl !== undefined ? (storyboardUrl ? String(storyboardUrl) : null) : undefined,
      },
      select: {
        id: true,
        title: true,
        episodeNumber: true,
        introStart: true,
        introEnd: true,
        outroStart: true,
        outroEnd: true,
        durationSeconds: true,
        storyboardUrl: true,
      },
    });

    return sendSuccess(c, {
      episode: updated,
      message: "تم تحديث توقيتات تخطي الشارات وشريط المعاينة بنجاح",
    });
  } catch (error: any) {
    return sendError(c, "TIMECODE_ERROR", error.message || "فشل تحديث توقيتات الشارات", 500);
  }
});

// ==========================================
// Subtitles Management (Soft Subtitles WebVTT)
// ==========================================

const subtitleSchema = z.object({
  language: z.string().min(1, "رمز اللغة مطلوب (مثل: ar, en)"),
  label: z.string().min(1, "اسم الترجمة مطلوب للعرض للمستخدم"),
  url: z.string().url("رابط ملف الترجمة .vtt يجب أن يكون رابطاً صالحاً"),
  isDefault: z.boolean().optional().default(false),
});

// GET /api/admin/episodes/:id/subtitles
adminRoutes.get("/episodes/:id/subtitles", async (c) => {
  try {
    const episodeId = c.req.param("id");
    const subtitles = await prisma.subtitle.findMany({
      where: { episodeId },
      orderBy: { isDefault: "desc" },
    });
    return sendSuccess(c, subtitles);
  } catch (error: any) {
    return sendError(c, "FETCH_SUBTITLES_ERROR", error.message || "فشل جلب ملفات الترجمة", 500);
  }
});

// POST /api/admin/episodes/:id/subtitles
adminRoutes.post("/episodes/:id/subtitles", async (c) => {
  try {
    const episodeId = c.req.param("id");
    const body = await c.req.json();
    const parsed = subtitleSchema.safeParse(body);

    if (!parsed.success) {
      return sendError(c, "VALIDATION_ERROR", parsed.error.errors[0]?.message || "بيانات الترجمة غير صالحة", 400);
    }

    if (parsed.data.isDefault) {
      // Unset previous defaults for this episode
      await prisma.subtitle.updateMany({
        where: { episodeId },
        data: { isDefault: false },
      }).catch(() => {});
    }

    const subtitle = await prisma.subtitle.create({
      data: {
        episodeId,
        ...parsed.data,
      },
    });

    return sendSuccess(c, subtitle, undefined, 201);
  } catch (error: any) {
    return sendError(c, "CREATE_SUBTITLE_ERROR", error.message || "فشل إضافة ملف الترجمة", 500);
  }
});

// DELETE /api/admin/subtitles/:id
adminRoutes.delete("/subtitles/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await prisma.subtitle.delete({ where: { id } });
    return sendSuccess(c, { message: "تم حذف ملف الترجمة بنجاح" });
  } catch (error: any) {
    return sendError(c, "DELETE_SUBTITLE_ERROR", error.message || "فشل حذف ملف الترجمة", 500);
  }
});

// ==========================================
// Audio Tracks Management (Dual Audio)
// ==========================================

const audioTrackSchema = z.object({
  language: z.string().min(1, "رمز اللغة مطلوب (مثل: ar, ja)"),
  label: z.string().min(1, "اسم المسار الصوتي مطلوب"),
  url: z.string().url().optional().nullable(),
  isDefault: z.boolean().optional().default(false),
});

// GET /api/admin/episodes/:id/audio-tracks
adminRoutes.get("/episodes/:id/audio-tracks", async (c) => {
  try {
    const episodeId = c.req.param("id");
    const tracks = await prisma.audioTrack.findMany({
      where: { episodeId },
      orderBy: { isDefault: "desc" },
    });
    return sendSuccess(c, tracks);
  } catch (error: any) {
    return sendError(c, "FETCH_AUDIO_TRACKS_ERROR", error.message || "فشل جلب المسارات الصوتية", 500);
  }
});

// POST /api/admin/episodes/:id/audio-tracks
adminRoutes.post("/episodes/:id/audio-tracks", async (c) => {
  try {
    const episodeId = c.req.param("id");
    const body = await c.req.json();
    const parsed = audioTrackSchema.safeParse(body);

    if (!parsed.success) {
      return sendError(c, "VALIDATION_ERROR", parsed.error.errors[0]?.message || "بيانات المسار الصوتي غير صالحة", 400);
    }

    if (parsed.data.isDefault) {
      await prisma.audioTrack.updateMany({
        where: { episodeId },
        data: { isDefault: false },
      }).catch(() => {});
    }

    const track = await prisma.audioTrack.create({
      data: {
        episodeId,
        ...parsed.data,
      },
    });

    return sendSuccess(c, track, undefined, 201);
  } catch (error: any) {
    return sendError(c, "CREATE_AUDIO_TRACK_ERROR", error.message || "فشل إضافة المسار الصوتي", 500);
  }
});

// DELETE /api/admin/audio-tracks/:id
adminRoutes.delete("/audio-tracks/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await prisma.audioTrack.delete({ where: { id } });
    return sendSuccess(c, { message: "تم حذف المسار الصوتي بنجاح" });
  } catch (error: any) {
    return sendError(c, "DELETE_AUDIO_TRACK_ERROR", error.message || "فشل حذف المسار الصوتي", 500);
  }
});

// POST /api/admin/settings - تحديث إعدادات النظام مع حماية الحقول
adminRoutes.post("/settings", async (c) => {
  try {
    const body = await c.req.json();

    // Whitelist only allowed settings fields
    const safeData: any = {};
    if (typeof body.siteName === "string") safeData.siteName = body.siteName;
    if (typeof body.logoUrl === "string") safeData.logoUrl = body.logoUrl;
    if (typeof body.faviconUrl === "string") safeData.faviconUrl = body.faviconUrl;
    if (typeof body.maintenanceMode === "boolean") safeData.maintenanceMode = body.maintenanceMode;
    if (typeof body.maintenanceMessage === "string") safeData.maintenanceMessage = body.maintenanceMessage;
    if (typeof body.latestVersion === "string") safeData.latestVersion = body.latestVersion;
    if (typeof body.updateUrl === "string") safeData.updateUrl = body.updateUrl;
    if (typeof body.admobEnabled === "boolean") safeData.admobEnabled = body.admobEnabled;
    if (typeof body.admobAppId === "string") safeData.admobAppId = body.admobAppId;
    if (typeof body.admobBannerId === "string") safeData.admobBannerId = body.admobBannerId;
    if (typeof body.admobInterstitialId === "string") safeData.admobInterstitialId = body.admobInterstitialId;

    const updated = await prisma.settings.upsert({
      where: { id: "global" },
      update: safeData,
      create: {
        id: "global",
        ...safeData,
      },
    });

    return sendSuccess(c, updated);
  } catch (error: any) {
    return sendError(c, "SETTINGS_ERROR", error.message || "فشل حفظ الإعدادات", 500);
  }
});
