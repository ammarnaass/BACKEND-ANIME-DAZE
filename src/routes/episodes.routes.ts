import { Hono } from "hono";
import { prisma } from "../lib/prisma";
import { sendSuccess, sendError } from "../lib/response";
import { authMiddleware } from "../middleware/auth";

export const episodesRoutes = new Hono();

// GET /api/v1/episodes/:id
episodesRoutes.get("/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const episode = await prisma.episode.findUnique({
      where: { id },
      include: {
        anime: {
          select: { id: true, title: true, coverImage: true },
        },
        servers: true,
        serversList: false,
      } as any,
    });

    if (!episode) {
      return sendError(c, "NOT_FOUND", "الحلقة المطلوبة غير موجودة", 404);
    }

    // Fetch comments
    const comments = await prisma.comment.findMany({
      where: { episodeId: id },
      orderBy: { createdAt: "desc" },
      take: 50,
    });

    return sendSuccess(c, {
      ...episode,
      comments,
    });
  } catch (error: any) {
    return sendError(c, "FETCH_ERROR", error.message || "فشل جلب تفاصيل الحلقة", 500);
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
