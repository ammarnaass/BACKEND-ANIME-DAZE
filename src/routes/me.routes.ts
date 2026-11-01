import { Hono } from "hono";
import { prisma } from "../lib/prisma";
import { sendSuccess, sendError } from "../lib/response";
import { authMiddleware } from "../middleware/auth";

export const meRoutes = new Hono();

// All routes under /api/v1/me require authentication
meRoutes.use("*", authMiddleware);

// GET /api/v1/me/progress
meRoutes.get("/progress", async (c) => {
  try {
    const user = c.get("user");
    const progressList = await prisma.watchProgress.findMany({
      where: { userId: user.userId },
      orderBy: { updatedAt: "desc" },
      take: 30,
    });
    return sendSuccess(c, progressList);
  } catch (error: any) {
    return sendError(c, "FETCH_ERROR", error.message || "فشل جلب تقدم المشاهدة", 500);
  }
});

// POST /api/v1/me/progress
meRoutes.post("/progress", async (c) => {
  try {
    const user = c.get("user");
    const body = await c.req.json();
    const { episodeId, positionSeconds, durationSeconds, completed } = body;

    if (!episodeId) {
      return sendError(c, "VALIDATION_ERROR", "معرف الحلقة مطلوب", 400);
    }

    const pos = parseFloat(positionSeconds) || 0;
    const dur = parseFloat(durationSeconds) || 0;
    const isCompleted = completed ?? (dur > 0 && pos / dur > 0.9);

    const record = await prisma.watchProgress.upsert({
      where: {
        userId_episodeId: {
          userId: user.userId,
          episodeId,
        },
      },
      update: {
        positionSeconds: pos,
        durationSeconds: dur,
        completed: isCompleted,
      },
      create: {
        userId: user.userId,
        episodeId,
        positionSeconds: pos,
        durationSeconds: dur,
        completed: isCompleted,
      },
    });

    return sendSuccess(c, record);
  } catch (error: any) {
    return sendError(c, "SAVE_ERROR", error.message || "فشل حفظ تقدم المشاهدة", 500);
  }
});

// GET /api/v1/me/favorites
meRoutes.get("/favorites", async (c) => {
  try {
    const user = c.get("user");
    const favorites = await prisma.favorite.findMany({
      where: { userId: user.userId },
      orderBy: { createdAt: "desc" },
    });
    return sendSuccess(c, favorites);
  } catch (error: any) {
    return sendError(c, "FETCH_ERROR", error.message || "فشل جلب المفضلة", 500);
  }
});

// POST /api/v1/me/favorites
meRoutes.post("/favorites", async (c) => {
  try {
    const user = c.get("user");
    const { targetId, targetType = "anime" } = await c.req.json();

    if (!targetId) {
      return sendError(c, "VALIDATION_ERROR", "معرف العنصر مطلوب", 400);
    }

    const existing = await prisma.favorite.findUnique({
      where: {
        userId_targetType_targetId: {
          userId: user.userId,
          targetType,
          targetId,
        },
      },
    });

    if (existing) {
      await prisma.favorite.delete({
        where: { id: existing.id },
      });
      return sendSuccess(c, { isFavorited: false, message: "تمت الإزالة من المفضلة" });
    }

    await prisma.favorite.create({
      data: {
        userId: user.userId,
        targetType,
        targetId,
      },
    });

    return sendSuccess(c, { isFavorited: true, message: "تمت الإضافة إلى المفضلة" }, undefined, 201);
  } catch (error: any) {
    return sendError(c, "FAV_ERROR", error.message || "فشل تحديث المفضلة", 500);
  }
});

// GET /api/v1/me/history
meRoutes.get("/history", async (c) => {
  try {
    const user = c.get("user");
    const history = await prisma.history.findMany({
      where: { userId: user.userId },
      orderBy: { watchedAt: "desc" },
      take: 50,
    });
    return sendSuccess(c, history);
  } catch (error: any) {
    return sendError(c, "FETCH_ERROR", error.message || "فشل جلب سجل المشاهدة", 500);
  }
});
