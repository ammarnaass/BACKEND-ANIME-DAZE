import { Hono } from "hono";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { sendSuccess, sendError } from "../lib/response";
import { authMiddleware } from "../middleware/auth";
import rawEpisodes from "../data/episodes.json";

export const episodesRoutes = new Hono();

// Default Dual Audio tracks when none are configured in database
const DEFAULT_AUDIO_TRACKS = [
  {
    id: "audio-ar-default",
    language: "ar",
    label: "الدبلجة العربية الأصلية (مركز الزهرة)",
    url: null,
    isDefault: true,
  },
  {
    id: "audio-ja-default",
    language: "ja",
    label: "اليابانية الأصلية",
    url: null,
    isDefault: false,
  },
];

// Helper to determine server type from URL if not explicitly set
function detectServerType(url: string, explicitType?: string | null): string {
  if (explicitType && ["hls", "mp4", "embed", "mega", "dash"].includes(explicitType)) {
    return explicitType;
  }
  const lower = url.toLowerCase();
  if (lower.includes("mega.nz") || lower.includes("mega.io")) return "mega";
  if (lower.includes(".m3u8")) return "hls";
  if (lower.includes(".mpd")) return "dash";
  if (lower.includes(".mp4")) return "mp4";
  if (
    lower.includes("embed") ||
    lower.includes("iframe") ||
    lower.includes("ok.ru") ||
    lower.includes("dailymotion") ||
    lower.includes("streamtape") ||
    lower.includes("vidmoly") ||
    lower.includes("dood")
  ) {
    return "embed";
  }
  return "hls";
}

// GET /api/v1/episodes/:id
episodesRoutes.get("/:id", async (c) => {
  try {
    const id = c.req.param("id");
    let episode = await prisma.episode.findUnique({
      where: { id },
      include: {
        anime: {
          select: { id: true, title: true, coverImage: true, bannerImage: true },
        },
        servers: {
          orderBy: [
            { isWorking: "desc" },
            { priority: "asc" },
          ],
        },
        subtitles: true,
        audioTracks: true,
      },
    });

    // Fallback if searched by numeric episodeNumber
    if (!episode && !isNaN(Number(id))) {
      episode = await prisma.episode.findFirst({
        where: { episodeNumber: Number(id) },
        include: {
          anime: {
            select: { id: true, title: true, coverImage: true, bannerImage: true },
          },
          servers: {
            orderBy: [
              { isWorking: "desc" },
              { priority: "asc" },
            ],
          },
          subtitles: true,
          audioTracks: true,
        },
      });
    }

    if (!episode) {
      // Check static fallback data
      const staticEp = (rawEpisodes as any[]).find(
        (e) => String(e.id) === id || String(e.episodeNumber) === id || String(e.episode_number) === id
      );

      if (!staticEp) {
        return sendError(c, "NOT_FOUND", "الحلقة المطلوبة غير موجودة", 404);
      }

      const staticServers = staticEp.servers && staticEp.servers.length > 0
        ? staticEp.servers.map((s: any, idx: number) => ({
            id: s.id || `srv-static-${idx + 1}`,
            name: s.name || `سيرفر ${idx + 1}`,
            url: s.url,
            quality: s.quality || "1080p FHD",
            type: detectServerType(s.url, s.type),
            priority: s.priority || idx + 1,
            isWorking: true,
            supportedQualities: ["1080p", "720p", "480p", "Auto"],
          }))
        : staticEp.mega_link
        ? [
            {
              id: `srv-mega-${id}`,
              name: "سيرفر ميجا السريع",
              url: staticEp.mega_link,
              quality: "1080p FHD",
              type: "mega",
              priority: 1,
              isWorking: true,
              supportedQualities: ["1080p", "720p", "480p", "Auto"],
            },
          ]
        : [];

      return sendSuccess(c, {
        id: String(staticEp.id),
        animeId: staticEp.animeId || "slam-dunk",
        title: staticEp.title,
        description: staticEp.description || "",
        thumbnail: staticEp.thumbnail || "/logoep.jpg",
        duration: staticEp.duration || "23:30",
        durationSeconds: 1410,
        episodeNumber: Number(staticEp.episodeNumber || staticEp.episode_number || 1),
        seasonNumber: Number(staticEp.seasonNumber || 1),
        introStart: 0,
        introEnd: 90,
        outroStart: 1320,
        outroEnd: 1410,
        storyboardUrl: null,
        subtitles: [],
        audioTracks: DEFAULT_AUDIO_TRACKS,
        anime: {
          id: "slam-dunk",
          title: "سلام دانك (Slam Dunk)",
          coverImage: "/hero-bg.jpg",
        },
        servers: staticServers,
        comments: [],
        nextEpisode: null,
        prevEpisode: null,
      });
    }

    // Format servers and fill in types and supported qualities
    let formattedServers = episode.servers.map((s) => ({
      id: s.id,
      name: s.name,
      url: s.url,
      quality: s.quality || "1080p FHD",
      type: detectServerType(s.url, s.type),
      priority: s.priority,
      isWorking: s.isWorking,
      lastCheckedAt: s.lastCheckedAt,
      supportedQualities: s.supportedQualities && s.supportedQualities.length > 0
        ? s.supportedQualities
        : ["1080p", "720p", "480p", "Auto"],
    }));

    // If no servers exist in database, check fallback JSON
    if (formattedServers.length === 0) {
      const staticEp = (rawEpisodes as any[]).find(
        (e) => String(e.id) === episode.id || Number(e.episodeNumber || e.episode_number) === episode.episodeNumber
      );
      if (staticEp?.servers && staticEp.servers.length > 0) {
        formattedServers = staticEp.servers.map((s: any, idx: number) => ({
          id: s.id || `srv-fb-${idx + 1}`,
          name: s.name || `سيرفر ${idx + 1}`,
          url: s.url,
          quality: s.quality || "1080p FHD",
          type: detectServerType(s.url, s.type),
          priority: idx + 1,
          isWorking: true,
          lastCheckedAt: null,
          supportedQualities: ["1080p", "720p", "480p", "Auto"],
        }));
      } else if (staticEp?.mega_link) {
        formattedServers = [
          {
            id: `srv-mega-${episode.id}`,
            name: "سيرفر ميجا السريع",
            url: staticEp.mega_link,
            quality: "1080p FHD",
            type: "mega",
            priority: 1,
            isWorking: true,
            lastCheckedAt: null,
            supportedQualities: ["1080p", "720p", "480p", "Auto"],
          },
        ];
      }
    }

    // Fetch next and previous episodes for Auto-Next in player
    const [prevEp, nextEp, comments] = await Promise.all([
      prisma.episode.findFirst({
        where: {
          animeId: episode.animeId,
          episodeNumber: episode.episodeNumber - 1,
        },
        select: { id: true, episodeNumber: true, title: true, thumbnail: true },
      }),
      prisma.episode.findFirst({
        where: {
          animeId: episode.animeId,
          episodeNumber: episode.episodeNumber + 1,
        },
        select: { id: true, episodeNumber: true, title: true, thumbnail: true },
      }),
      prisma.comment.findMany({
        where: { episodeId: episode.id },
        orderBy: { createdAt: "desc" },
        take: 50,
      }),
    ]);

    const audioTracks = episode.audioTracks && episode.audioTracks.length > 0
      ? episode.audioTracks
      : DEFAULT_AUDIO_TRACKS;

    return sendSuccess(c, {
      ...episode,
      servers: formattedServers,
      subtitles: episode.subtitles || [],
      audioTracks,
      storyboardUrl: episode.storyboardUrl || null,
      comments,
      prevEpisode: prevEp,
      nextEpisode: nextEp,
    });
  } catch (error: any) {
    return sendError(c, "FETCH_ERROR", error.message || "فشل جلب تفاصيل الحلقة", 500);
  }
});

// ==========================================
// Watch Progress (Resume Playback) Endpoints
// ==========================================

// GET /api/v1/episodes/:id/progress - جلب موضع المشاهدة المحفوظ للحلقة
episodesRoutes.get("/:id/progress", authMiddleware, async (c) => {
  try {
    const episodeId = c.req.param("id");
    const user = c.get("user");

    const progress = await prisma.watchProgress.findUnique({
      where: {
        userId_episodeId: {
          userId: user.userId,
          episodeId,
        },
      },
    });

    return sendSuccess(c, progress || {
      positionSeconds: 0,
      durationSeconds: 0,
      completed: false,
    });
  } catch (error: any) {
    return sendError(c, "FETCH_PROGRESS_ERROR", error.message || "فشل جلب موضع التقدم", 500);
  }
});

const progressSchema = z.object({
  positionSeconds: z.number().min(0, "موضع المشاهدة بالثواني يجب أن يكون 0 أو أكبر"),
  durationSeconds: z.number().min(0).optional().default(0),
  completed: z.boolean().optional().default(false),
});

// POST /api/v1/episodes/:id/progress - حفظ وتحديث موضع المشاهدة الدقيق (Throttle / Debounce)
episodesRoutes.post("/:id/progress", authMiddleware, async (c) => {
  try {
    const episodeId = c.req.param("id");
    const user = c.get("user");
    const body = await c.req.json();
    const parsed = progressSchema.safeParse(body);

    if (!parsed.success) {
      return sendError(
        c,
        "VALIDATION_ERROR",
        parsed.error.errors[0]?.message || "بيانات موضع التقدم غير صالحة",
        400
      );
    }

    const { positionSeconds, durationSeconds, completed } = parsed.data;

    // 1. Upsert WatchProgress
    const watchProgress = await prisma.watchProgress.upsert({
      where: {
        userId_episodeId: {
          userId: user.userId,
          episodeId,
        },
      },
      update: {
        positionSeconds,
        durationSeconds: durationSeconds || undefined,
        completed,
      },
      create: {
        userId: user.userId,
        episodeId,
        positionSeconds,
        durationSeconds,
        completed,
      },
    });

    // 2. Sync to History asynchronously in background
    prisma.episode.findUnique({
      where: { id: episodeId },
      select: { animeId: true },
    }).then(async (ep) => {
      if (ep?.animeId) {
        const ratio = durationSeconds > 0 ? Math.min(1, positionSeconds / durationSeconds) : 0;
        await prisma.history.upsert({
          where: {
            userId_animeId_episodeId: {
              userId: user.userId,
              animeId: ep.animeId,
              episodeId,
            },
          },
          update: {
            progress: ratio,
            watchedAt: new Date(),
          },
          create: {
            userId: user.userId,
            animeId: ep.animeId,
            episodeId,
            progress: ratio,
            watchedAt: new Date(),
          },
        }).catch(() => {});
      }
    }).catch(() => {});

    return sendSuccess(c, {
      saved: true,
      positionSeconds: watchProgress.positionSeconds,
      durationSeconds: watchProgress.durationSeconds,
      completed: watchProgress.completed,
    });
  } catch (error: any) {
    return sendError(c, "SAVE_PROGRESS_ERROR", error.message || "فشل تسجيل موضع التقدم", 500);
  }
});

// POST /api/v1/episodes/:id/comments
episodesRoutes.post("/:id/comments", authMiddleware, async (c) => {
  try {
    const episodeId = c.req.param("id");
    if (!episodeId) {
      return sendError(c, "VALIDATION_ERROR", "معرف الحلقة مطلوب", 400);
    }
    const user = c.get("user");
    const body = await c.req.json();
    const { content } = body;

    if (!content || !content.trim()) {
      return sendError(c, "VALIDATION_ERROR", "محتوى التعليق مطلوب", 400);
    }

    const comment = await prisma.comment.create({
      data: {
        episodeId,
        userId: user.userId,
        userName: user.name || "مستخدم",
        content: content.trim(),
      },
    });

    return sendSuccess(c, comment, undefined, 201);
  } catch (error: any) {
    return sendError(c, "CREATE_ERROR", error.message || "فشل إضافة التعليق", 500);
  }
});

// POST /api/v1/episodes/:id/rate
episodesRoutes.post("/:id/rate", authMiddleware, async (c) => {
  try {
    const episodeId = c.req.param("id");
    if (!episodeId) {
      return sendError(c, "VALIDATION_ERROR", "معرف الحلقة مطلوب", 400);
    }
    const user = c.get("user");
    const { rating } = await c.req.json();

    const numericRating = Math.min(5, Math.max(1, parseInt(rating, 10)));

    const rateRecord = await prisma.episodeRating.upsert({
      where: {
        userId_episodeId: {
          userId: user.userId,
          episodeId,
        },
      },
      update: { rating: numericRating },
      create: {
        userId: user.userId,
        episodeId,
        rating: numericRating,
      },
    });

    return sendSuccess(c, rateRecord);
  } catch (error: any) {
    return sendError(c, "RATE_ERROR", error.message || "فشل تسجيل التقييم", 500);
  }
});
