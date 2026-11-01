import { Hono } from "hono";
import { prisma } from "../lib/prisma";
import { sendSuccess, sendError } from "../lib/response";
import { optionalAuthMiddleware, authMiddleware } from "../middleware/auth";
import { resolveStreamUrl } from "../lib/resolvers";
import rawEpisodes from "../data/episodes.json";
import rawAnimes from "../data/animes.json";
import rawCharacters from "../data/characters.json";

export const mobileRoutes = new Hono();

// Lookup map for static fallback episodes and servers
const fallbackEpMap = new Map<string, any>();
for (const ep of rawEpisodes as any[]) {
  fallbackEpMap.set(String(ep.id), ep);
  if (ep.episodeNumber) fallbackEpMap.set(String(ep.episodeNumber), ep);
  if (ep.episode_number) fallbackEpMap.set(String(ep.episode_number), ep);
}

// Helper to normalize and enrich an episode with streaming servers
function formatEpisode(ep: any, fallbackAnimeId?: string) {
  const epIdStr = String(ep.id);
  const epNum = ep.episodeNumber || ep.episode_number || 1;
  const fallbackEp = fallbackEpMap.get(epIdStr) || fallbackEpMap.get(String(epNum));

  let servers = ep.servers && ep.servers.length > 0 ? ep.servers : [];
  if (servers.length === 0 && fallbackEp) {
    if (fallbackEp.servers && fallbackEp.servers.length > 0) {
      servers = fallbackEp.servers;
    } else if (fallbackEp.mega_link) {
      servers = [
        {
          id: `srv-mega-${epIdStr}`,
          name: "سيرفر ميجا السريع",
          url: fallbackEp.mega_link,
          quality: "1080p FHD",
          provider: "mega",
          category: "both",
        },
      ];
    }
  }

  const mappedServers = servers.map((s: any, idx: number) => {
    const resolved = resolveStreamUrl(s.url || "", s.quality);
    return {
      id: s.id || `srv-${Math.random().toString(36).substring(2, 7)}`,
      name: s.name || resolved.defaultName,
      url: s.url,
      directUrl: s.directUrl || resolved.directUrl,
      provider: s.provider || resolved.provider,
      category: s.category || resolved.category,
      quality: s.quality || resolved.quality,
      type: s.type || resolved.type,
      priority: s.priority || idx + 1,
      isWorking: s.isWorking !== undefined ? Boolean(s.isWorking) : true,
      lastCheckedAt: s.lastCheckedAt || null,
      latencyMs: s.latencyMs || null,
      supportedQualities: s.supportedQualities && s.supportedQualities.length > 0
        ? s.supportedQualities
        : ["1080p", "720p", "480p", "Auto"],
    };
  });

  const watchServers = mappedServers.filter((s: any) => s.category === "streaming" || s.category === "both");
  const downloadServers = mappedServers.filter((s: any) => s.category === "download" || s.category === "both");

  return {
    id: epIdStr,
    animeId: ep.animeId || fallbackAnimeId || "slam-dunk",
    title: ep.title,
    description: ep.description || fallbackEp?.description || "",
    thumbnail: ep.thumbnail || fallbackEp?.thumbnail || "/logoep.jpg",
    duration: ep.duration || fallbackEp?.duration || "23:30",
    episodeNumber: Number(epNum),
    episode_number: Number(epNum),
    seasonNumber: Number(ep.seasonNumber || ep.season_number || 1),
    season_number: Number(ep.seasonNumber || ep.season_number || 1),
    introStart: ep.introStart ?? 0,
    introEnd: ep.introEnd ?? 90,
    outroStart: ep.outroStart ?? (ep.durationSeconds ? ep.durationSeconds - 90 : 1320),
    outroEnd: ep.outroEnd ?? (ep.durationSeconds || 1410),
    storyboardUrl: ep.storyboardUrl || null,
    subtitles: ep.subtitles || [],
    audioTracks: (ep.audioTracks && ep.audioTracks.length > 0)
      ? ep.audioTracks
      : [
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
        ],
    servers: mappedServers,
    watchServers,
    downloadServers,
    createdAt: ep.createdAt ? (typeof ep.createdAt === "string" ? ep.createdAt : ep.createdAt.toISOString()) : new Date().toISOString(),
  };
}

// ==========================================
// 1. GET /api/mobile/v1/home
// ==========================================
mobileRoutes.get("/home", optionalAuthMiddleware, async (c) => {
  try {
    const user = c.get("user");

    const [slider, latestDb, charactersDb, settings, progress] = await Promise.all([
      // 1. Featured Slider
      prisma.anime.findMany({
        where: { isFeatured: true },
        take: 5,
        orderBy: { rating: "desc" },
        select: {
          id: true,
          title: true,
          description: true,
          coverImage: true,
          bannerImage: true,
          rating: true,
          genres: true,
          type: true,
          status: true,
          totalEpisodes: true,
        },
      }),

      // 2. Latest Episodes
      prisma.episode.findMany({
        take: 12,
        orderBy: { createdAt: "desc" },
        include: {
          anime: { select: { id: true, title: true, coverImage: true } },
          servers: true,
        },
      }),

      // 3. Shohoku Roster Characters
      prisma.character.findMany({
        take: 10,
        orderBy: { number: "asc" },
      }),

      // 4. Global Settings
      prisma.settings.findUnique({
        where: { id: "global" },
      }),

      // 5. User Continue Watching (if authenticated)
      user
        ? prisma.watchProgress.findMany({
            where: { userId: user.userId, completed: false },
            take: 10,
            orderBy: { updatedAt: "desc" },
          })
        : Promise.resolve([]),
    ]);

    const formattedLatest = (latestDb && latestDb.length > 0 ? latestDb : (rawEpisodes as any[]).slice(0, 12)).map((ep) =>
      formatEpisode(ep)
    );

    return sendSuccess(c, {
      slider: slider && slider.length > 0 ? slider : (rawAnimes as any[]).slice(0, 5),
      continueWatching: progress,
      latest: formattedLatest,
      latestEpisodes: formattedLatest,
      characters: charactersDb && charactersDb.length > 0 ? charactersDb : (rawCharacters as any[]).slice(0, 10),
      settings: settings || {
        siteName: "Slam Dunk",
        maintenanceMode: false,
        admobEnabled: false,
      },
    });
  } catch (error: any) {
    console.error("Mobile Home Error:", error);
    // Graceful fallback from static files
    const staticLatest = (rawEpisodes as any[]).slice(0, 12).map((ep) => formatEpisode(ep));
    return sendSuccess(c, {
      slider: (rawAnimes as any[]).slice(0, 5),
      continueWatching: [],
      latest: staticLatest,
      latestEpisodes: staticLatest,
      characters: (rawCharacters as any[]).slice(0, 10),
      settings: { siteName: "Slam Dunk", maintenanceMode: false, admobEnabled: false },
    });
  }
});

// ==========================================
// 2. GET /api/mobile/v1/animes/:id/episodes
// (CRITICAL: Primary episode list endpoint)
// ==========================================
mobileRoutes.get("/animes/:id/episodes", async (c) => {
  const id = c.req.param("id");
  try {
    let episodes = await prisma.episode.findMany({
      where: { animeId: id },
      orderBy: { episodeNumber: "asc" },
      include: { servers: true },
    });

    if (!episodes || episodes.length === 0) {
      const filtered = (rawEpisodes as any[]).filter(
        (ep) => ep.animeId === id || id === "slam-dunk"
      );
      episodes = filtered;
    }

    const formatted = episodes.map((ep) => formatEpisode(ep, id));
    return sendSuccess(c, formatted);
  } catch (error: any) {
    console.warn("Mobile Anime Episodes Error, using fallback:", error.message);
    const filtered = (rawEpisodes as any[]).filter(
      (ep) => ep.animeId === id || id === "slam-dunk"
    );
    const formatted = filtered.map((ep) => formatEpisode(ep, id));
    return sendSuccess(c, formatted);
  }
});

// ==========================================
// 3. GET /api/mobile/v1/animes
// ==========================================
mobileRoutes.get("/animes", async (c) => {
  try {
    const type = c.req.query("type");
    const status = c.req.query("status");
    const genre = c.req.query("genre");

    const where: any = {};
    if (type) where.type = type;
    if (status) where.status = status;
    if (genre) where.genres = { has: genre };

    let animes = await prisma.anime.findMany({
      where,
      orderBy: { updatedAt: "desc" },
    });

    if (!animes || animes.length === 0) {
      let filtered = rawAnimes as any[];
      if (type) filtered = filtered.filter((a) => a.type === type);
      if (status) filtered = filtered.filter((a) => a.status === status);
      if (genre) filtered = filtered.filter((a) => a.genres?.includes(genre));
      animes = filtered;
    }

    return sendSuccess(c, animes);
  } catch (error: any) {
    return sendSuccess(c, rawAnimes);
  }
});

// ==========================================
// 4. GET /api/mobile/v1/animes/:id
// ==========================================
mobileRoutes.get("/animes/:id", async (c) => {
  const id = c.req.param("id");
  try {
    let anime = await prisma.anime.findUnique({
      where: { id },
      include: {
        episodes: {
          orderBy: { episodeNumber: "asc" },
          include: { servers: true },
        },
      },
    });

    if (!anime) {
      const found = (rawAnimes as any[]).find((a) => a.id === id);
      if (found) {
        anime = {
          ...found,
          episodes: (rawEpisodes as any[])
            .filter((ep) => ep.animeId === id || id === "slam-dunk")
            .map((ep) => formatEpisode(ep, id)),
        };
      }
    } else if (anime.episodes) {
      (anime as any).episodes = anime.episodes.map((ep) => formatEpisode(ep, id));
    }

    if (!anime) {
      return sendError(c, "NOT_FOUND", "الأنمي المطلوب غير موجود", 404);
    }

    return sendSuccess(c, anime);
  } catch (error: any) {
    const found = (rawAnimes as any[]).find((a) => a.id === id);
    if (found) {
      return sendSuccess(c, {
        ...found,
        episodes: (rawEpisodes as any[])
          .filter((ep) => ep.animeId === id || id === "slam-dunk")
          .map((ep) => formatEpisode(ep, id)),
      });
    }
    return sendError(c, "FETCH_ERROR", "فشل جلب تفاصيل العمل", 500);
  }
});

// ==========================================
// 5. GET /api/mobile/v1/episodes/:id
// ==========================================
mobileRoutes.get("/episodes/:id", async (c) => {
  const id = c.req.param("id");
  try {
    let episode = await prisma.episode.findUnique({
      where: { id },
      include: {
        servers: true,
        subtitles: true,
        audioTracks: true,
        anime: { select: { id: true, title: true, coverImage: true } },
      },
    });

    if (!episode && !isNaN(Number(id))) {
      episode = await prisma.episode.findFirst({
        where: { episodeNumber: Number(id) },
        include: {
          servers: true,
          subtitles: true,
          audioTracks: true,
          anime: { select: { id: true, title: true, coverImage: true } },
        },
      });
    }

    if (!episode) {
      const fallback = fallbackEpMap.get(id);
      if (fallback) {
        return sendSuccess(c, formatEpisode(fallback));
      }
      return sendError(c, "NOT_FOUND", "الحلقة المطلوبة غير موجودة", 404);
    }

    const formatted = formatEpisode(episode);
    return sendSuccess(c, {
      ...formatted,
      animeTitle: (episode as any).anime?.title || "سلام دانك",
      animeCover: (episode as any).anime?.coverImage || "/hero-bg.jpg",
    });
  } catch (error: any) {
    const fallback = fallbackEpMap.get(id);
    if (fallback) {
      return sendSuccess(c, formatEpisode(fallback));
    }
    return sendError(c, "FETCH_ERROR", "فشل جلب تفاصيل الحلقة", 500);
  }
});

// ==========================================
// 6. GET /api/mobile/v1/characters
// ==========================================
mobileRoutes.get("/characters", async (c) => {
  try {
    const animeId = c.req.query("animeId");
    const where: any = animeId && animeId !== "all" ? { animeId } : {};

    let characters = await prisma.character.findMany({
      where,
      orderBy: { number: "asc" },
    });

    if (!characters || characters.length === 0) {
      let filtered = rawCharacters as any[];
      if (animeId && animeId !== "all") {
        filtered = filtered.filter(
          (char) => char.animeId?.toLowerCase() === animeId.toLowerCase()
        );
      }
      characters = filtered;
    }

    return sendSuccess(c, characters);
  } catch (error: any) {
    return sendSuccess(c, rawCharacters);
  }
});

// ==========================================
// 7. GET /api/mobile/v1/search
// ==========================================
mobileRoutes.get("/search", async (c) => {
  try {
    const q = c.req.query("q")?.trim() || "";
    if (!q) {
      return sendSuccess(c, { animes: [], episodes: [] });
    }

    const [animeResults, episodeResults] = await Promise.all([
      prisma.anime.findMany({
        where: {
          OR: [
            { title: { contains: q, mode: "insensitive" } },
            { description: { contains: q, mode: "insensitive" } },
          ],
        },
        take: 10,
      }),
      prisma.episode.findMany({
        where: {
          OR: [
            { title: { contains: q, mode: "insensitive" } },
            { description: { contains: q, mode: "insensitive" } },
          ],
        },
        include: { servers: true },
        take: 20,
      }),
    ]);

    let animes = animeResults;
    let episodes = episodeResults;

    if (animes.length === 0 && episodes.length === 0) {
      const lower = q.toLowerCase();
      animes = (rawAnimes as any[]).filter(
        (a) =>
          a.title?.toLowerCase().includes(lower) ||
          a.description?.toLowerCase().includes(lower)
      );
      episodes = (rawEpisodes as any[])
        .filter(
          (ep) =>
            ep.title?.toLowerCase().includes(lower) ||
            ep.description?.toLowerCase().includes(lower)
        )
        .slice(0, 20);
    }

    return sendSuccess(c, {
      animes,
      episodes: episodes.map((ep) => formatEpisode(ep)),
    });
  } catch (error: any) {
    return sendSuccess(c, { animes: [], episodes: [] });
  }
});

// ==========================================
// 8. GET /api/mobile/v1/config
// ==========================================
mobileRoutes.get("/config", async (c) => {
  try {
    const settings = await prisma.settings.findUnique({
      where: { id: "global" },
    });

    return sendSuccess(
      c,
      settings || {
        siteName: "Slam Dunk",
        maintenanceMode: false,
        latestVersion: "1.0.0",
        updateUrl: "https://slam-dunk-w.vercel.app/download",
        admobEnabled: false,
      }
    );
  } catch (error: any) {
    return sendError(c, "CONFIG_ERROR", error.message || "فشل جلب إعدادات التطبيق", 500);
  }
});

// ==========================================
// 9. GET /api/mobile/v1/plans
// ==========================================
mobileRoutes.get("/plans", async (c) => {
  try {
    const plans = await prisma.plan.findMany({
      where: { isActive: true },
      orderBy: { price: "asc" },
    });
    return sendSuccess(c, plans);
  } catch (error: any) {
    return sendError(c, "PLANS_ERROR", error.message || "فشل جلب باقات الاشتراك", 500);
  }
});

// ==========================================
// 10. POST /api/mobile/v1/plans (Subscription)
// ==========================================
mobileRoutes.post("/plans", authMiddleware, async (c) => {
  try {
    const user = c.get("user");
    const { planId } = await c.req.json();

    const plan = await prisma.plan.findUnique({
      where: { id: planId },
    });

    if (!plan) {
      return sendError(c, "PLAN_NOT_FOUND", "الباقة المحددة غير موجودة", 404);
    }

    const sub = await prisma.userSubscription.upsert({
      where: { userId: user.userId },
      update: {
        planType: plan.name,
        isActive: true,
        startDate: new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
      create: {
        userId: user.userId,
        planType: plan.name,
        isActive: true,
        startDate: new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
    });

    return sendSuccess(c, sub);
  } catch (error: any) {
    return sendError(c, "SUB_ERROR", error.message || "فشل إنشاء الاشتراك", 500);
  }
});

// ==========================================
// 11. GET /api/mobile/v1/health
// ==========================================
mobileRoutes.get("/health", (c) => {
  return sendSuccess(c, {
    status: "ok",
    service: "Mobile V1 API",
    version: "2.5.0",
    timestamp: new Date().toISOString(),
  });
});
