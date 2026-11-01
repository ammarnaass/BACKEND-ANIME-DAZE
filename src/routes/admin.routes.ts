import { Hono } from "hono";
import { prisma } from "../lib/prisma";
import { sendSuccess, sendError } from "../lib/response";
import { adminOnlyMiddleware } from "../middleware/auth";

export const adminRoutes = new Hono();

// All routes under /api/admin require admin role
adminRoutes.use("*", adminOnlyMiddleware);

// GET /api/admin/stats
adminRoutes.get("/stats", async (c) => {
  try {
    const [usersCount, animesCount, episodesCount, commentsCount] = await Promise.all([
      prisma.user.count(),
      prisma.anime.count(),
      prisma.episode.count(),
      prisma.comment.count(),
    ]);

    return sendSuccess(c, {
      totalUsers: usersCount,
      totalAnimes: animesCount,
      totalEpisodes: episodesCount,
      totalComments: commentsCount,
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

// POST /api/admin/settings
adminRoutes.post("/settings", async (c) => {
  try {
    const body = await c.req.json();
    const updated = await prisma.settings.upsert({
      where: { id: "global" },
      update: body,
      create: {
        id: "global",
        ...body,
      },
    });

    return sendSuccess(c, updated);
  } catch (error: any) {
    return sendError(c, "SETTINGS_ERROR", error.message || "فشل حفظ الإعدادات", 500);
  }
});
