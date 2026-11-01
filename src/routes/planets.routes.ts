import { Hono } from "hono";
import { prisma } from "../lib/prisma";
import { sendSuccess, sendError } from "../lib/response";
import { DEFAULT_ADMIN_PLANETS, DEFAULT_PLANETS_SETTINGS } from "../lib/planets-presets";

export const planetsRoutes = new Hono();

// GET /api/v1/planets
planetsRoutes.get("/", async (c) => {
  try {
    const enabledPlanets = DEFAULT_ADMIN_PLANETS.filter((p) => p.isEnabled).sort(
      (a, b) => a.order - b.order
    );

    return sendSuccess(c, {
      planets: enabledPlanets,
      settings: DEFAULT_PLANETS_SETTINGS,
    });
  } catch (error: any) {
    return sendError(c, "FETCH_ERROR", error.message || "فشل جلب بيانات الكواكب", 500);
  }
});

// GET /api/v1/planets/:id
planetsRoutes.get("/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const planet = DEFAULT_ADMIN_PLANETS.find((p) => p.id === id);

    if (!planet) {
      return sendError(c, "NOT_FOUND", "الكوكب المطلوب غير موجود", 404);
    }

    // Find anime matching this planet genre or title
    const matchingAnimes = await prisma.anime.findMany({
      where: {
        OR: [
          { genres: { has: planet.genreKey } },
          { genres: { has: planet.arabicGenre } },
        ],
      },
      take: 20,
    });

    return sendSuccess(c, {
      planet,
      animes: matchingAnimes,
    });
  } catch (error: any) {
    return sendError(c, "FETCH_ERROR", error.message || "فشل جلب تفاصيل الكوكب", 500);
  }
});
