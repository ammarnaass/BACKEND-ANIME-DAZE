import { Hono } from "hono";
import { prisma } from "../lib/prisma";
import { sendSuccess, sendError } from "../lib/response";
import { optionalAuthMiddleware } from "../middleware/auth";

export const mobileRoutes = new Hono();

// GET /api/mobile/v1/home (Lightweight composite endpoint for React Native app)
mobileRoutes.get("/home", optionalAuthMiddleware, async (c) => {
  try {
    const user = c.get("user");

    const [slider, latest, characters, settings, progress] = await Promise.all([
      // 1. Featured Slider
      prisma.anime.findMany({
        where: { isFeatured: true },
        take: 5,
        orderBy: { rating: "desc" },
        select: {
          id: true,
          title: true,
          coverImage: true,
          bannerImage: true,
          rating: true,
        },
      }),

      // 2. Latest Episodes
      prisma.episode.findMany({
        take: 12,
        orderBy: { createdAt: "desc" },
        include: {
          anime: { select: { id: true, title: true, coverImage: true } },
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

    return sendSuccess(c, {
      slider,
      continueWatching: progress,
      latestEpisodes: latest,
      characters,
      settings: settings || {
        siteName: "Slam Dunk",
        maintenanceMode: false,
        admobEnabled: false,
      },
    });
  } catch (error: any) {
    return sendError(c, "HOME_FETCH_ERROR", error.message || "فشل جلب بيانات الصفحة الرئيسية للموبايل", 500);
  }
});

// GET /api/mobile/v1/config
mobileRoutes.get("/config", async (c) => {
  try {
    const settings = await prisma.settings.findUnique({
      where: { id: "global" },
    });

    return sendSuccess(c, settings || {
      siteName: "Slam Dunk",
      maintenanceMode: false,
      latestVersion: "1.0.0",
      updateUrl: "https://slam-dunk-w.vercel.app/download",
      admobEnabled: false,
    });
  } catch (error: any) {
    return sendError(c, "CONFIG_ERROR", error.message || "فشل جلب إعدادات التطبيق", 500);
  }
});

// GET /api/mobile/v1/plans
mobileRoutes.get("/plans", async (c) => {
  try {
    const plans = await prisma.plan.findMany({
      where: { isActive: true },
    });
    return sendSuccess(c, plans);
  } catch (error: any) {
    return sendError(c, "PLANS_ERROR", error.message || "فشل جلب باقات الاشتراك", 500);
  }
});
