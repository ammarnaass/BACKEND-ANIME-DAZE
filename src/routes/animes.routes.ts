import { Hono } from "hono";
import { prisma } from "../lib/prisma";
import { sendSuccess, sendError } from "../lib/response";

export const animesRoutes = new Hono();

// GET /api/v1/animes
animesRoutes.get("/", async (c) => {
  try {
    const q = c.req.query("q")?.toLowerCase().trim();
    const genre = c.req.query("genre");
    const status = c.req.query("status");
    const page = Math.max(1, parseInt(c.req.query("page") || "1", 10));
    const limit = Math.min(50, Math.max(1, parseInt(c.req.query("limit") || "20", 10)));
    const skip = (page - 1) * limit;

    const where: any = {};
    if (q) {
      where.OR = [
        { title: { contains: q, mode: "insensitive" } },
        { description: { contains: q, mode: "insensitive" } },
      ];
    }
    if (genre) {
      where.genres = { has: genre };
    }
    if (status && status !== "all") {
      where.status = { equals: status, mode: "insensitive" };
    }

    const [total, animes] = await Promise.all([
      prisma.anime.count({ where }),
      prisma.anime.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: {
          _count: { select: { episodes: true } },
        },
      }),
    ]);

    return sendSuccess(c, animes, {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error: any) {
    return sendError(c, "FETCH_ERROR", error.message || "فشل جلب قائمة الأعمال", 500);
  }
});

// GET /api/v1/animes/featured
animesRoutes.get("/featured", async (c) => {
  try {
    const featured = await prisma.anime.findMany({
      where: { isFeatured: true },
      take: 6,
      orderBy: { rating: "desc" },
    });
    return sendSuccess(c, featured);
  } catch (error: any) {
    return sendError(c, "FETCH_ERROR", error.message || "فشل جلب الأعمال المميزة", 500);
  }
});

// GET /api/v1/animes/:id
animesRoutes.get("/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const anime = await prisma.anime.findUnique({
      where: { id },
      include: {
        episodes: {
          orderBy: { episodeNumber: "asc" },
        },
        reviews: {
          take: 10,
          orderBy: { createdAt: "desc" },
          include: {
            user: {
              select: { id: true, name: true, avatar: true },
            },
          },
        },
      },
    });

    if (!anime) {
      return sendError(c, "NOT_FOUND", "العمل المطلوب غير موجود", 404);
    }

    return sendSuccess(c, anime);
  } catch (error: any) {
    return sendError(c, "FETCH_ERROR", error.message || "فشل جلب تفاصيل العمل", 500);
  }
});

// GET /api/v1/animes/:id/episodes
animesRoutes.get("/:id/episodes", async (c) => {
  try {
    const id = c.req.param("id");
    const episodes = await prisma.episode.findMany({
      where: { animeId: id },
      orderBy: { episodeNumber: "asc" },
      include: { servers: true },
    });
    return sendSuccess(c, episodes);
  } catch (error: any) {
    return sendError(c, "FETCH_ERROR", error.message || "فشل جلب قائمة الحلقات", 500);
  }
});

// GET /api/v1/characters
animesRoutes.get("/characters/all", async (c) => {
  try {
    const team = c.req.query("team");
    const where: any = team ? { team: { contains: team, mode: "insensitive" } } : {};
    const characters = await prisma.character.findMany({
      where,
      orderBy: { number: "asc" },
    });
    return sendSuccess(c, characters);
  } catch (error: any) {
    return sendError(c, "FETCH_ERROR", error.message || "فشل جلب الشخصيات", 500);
  }
});
