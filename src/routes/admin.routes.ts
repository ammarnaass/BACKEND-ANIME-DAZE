import { Hono } from "hono";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { sendSuccess, sendError } from "../lib/response";
import { adminOnlyMiddleware } from "../middleware/auth";

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
  name: z.string().min(1, "اسم السيرفر مطلوب"),
  url: z.string().url("رابط السيرفر يجب أن يكون رابطاً صالحاً"),
  type: z.enum(["hls", "mp4", "embed", "mega"]).default("hls"),
  quality: z.string().optional().default("1080p FHD"),
  priority: z.number().int().min(1).default(1),
  isWorking: z.boolean().default(true),
});

// POST /api/admin/servers - إضافة سيرفر جديد لحلقة
adminRoutes.post("/servers", async (c) => {
  try {
    const body = await c.req.json();
    const parsed = serverSchema.safeParse(body);

    if (!parsed.success) {
      return sendError(c, "VALIDATION_ERROR", parsed.error.errors[0]?.message || "بيانات السيرفر غير صالحة", 400);
    }

    const server = await prisma.server.create({
      data: parsed.data,
    });

    return sendSuccess(c, server, undefined, 201);
  } catch (error: any) {
    return sendError(c, "CREATE_SERVER_ERROR", error.message || "فشل إضافة السيرفر", 500);
  }
});

// PUT /api/admin/servers/:id - تعديل سيرفر (رابط، حالة، جودة، نوع)
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

// PATCH /api/admin/episodes/:id/timecodes - ضبط توقيت تخطي شارة البداية والنهاية
adminRoutes.patch("/episodes/:id/timecodes", async (c) => {
  try {
    const id = c.req.param("id");
    const { introStart, introEnd, outroStart, outroEnd, durationSeconds } = await c.req.json();

    const updated = await prisma.episode.update({
      where: { id },
      data: {
        introStart: introStart !== undefined ? Number(introStart) : undefined,
        introEnd: introEnd !== undefined ? Number(introEnd) : undefined,
        outroStart: outroStart !== undefined ? Number(outroStart) : undefined,
        outroEnd: outroEnd !== undefined ? Number(outroEnd) : undefined,
        durationSeconds: durationSeconds !== undefined ? Number(durationSeconds) : undefined,
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
      },
    });

    return sendSuccess(c, {
      episode: updated,
      message: "تم تحديث توقيتات تخطي الشارات بنجاح",
    });
  } catch (error: any) {
    return sendError(c, "TIMECODE_ERROR", error.message || "فشل تحديث توقيتات الشارات", 500);
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
