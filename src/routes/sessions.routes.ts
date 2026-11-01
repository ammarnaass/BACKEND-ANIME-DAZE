import { Hono } from "hono";
import { prisma } from "../lib/prisma";
import { sendSuccess, sendError } from "../lib/response";
import { authMiddleware } from "../middleware/auth";

export const sessionsRoutes = new Hono();

sessionsRoutes.use("*", authMiddleware);

// GET /api/v1/auth/sessions
sessionsRoutes.get("/", async (c) => {
  try {
    const user = c.get("user");
    const sessions = await prisma.session.findMany({
      where: {
        userId: user.userId,
        revokedAt: null,
        expiresAt: { gt: new Date() },
      },
      select: {
        id: true,
        deviceName: true,
        userAgent: true,
        ip: true,
        createdAt: true,
        expiresAt: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return sendSuccess(c, sessions);
  } catch (error: any) {
    return sendError(c, "FETCH_ERROR", error.message || "فشل جلب الجلسات النشطة", 500);
  }
});

// DELETE /api/v1/auth/sessions/:id (Revoke specific session)
sessionsRoutes.delete("/:id", async (c) => {
  try {
    const user = c.get("user");
    const id = c.req.param("id");

    await prisma.session.updateMany({
      where: {
        id,
        userId: user.userId,
      },
      data: {
        revokedAt: new Date(),
      },
    });

    return sendSuccess(c, { message: "تم إنهاء الجلسة بنجاح" });
  } catch (error: any) {
    return sendError(c, "REVOKE_ERROR", error.message || "فشل إنهاء الجلسة", 500);
  }
});

// DELETE /api/v1/auth/sessions (Revoke all sessions for this user)
sessionsRoutes.delete("/", async (c) => {
  try {
    const user = c.get("user");

    await prisma.session.updateMany({
      where: {
        userId: user.userId,
        revokedAt: null,
      },
      data: {
        revokedAt: new Date(),
      },
    });

    return sendSuccess(c, { message: "تم إنهاء كافة الجلسات النشطة لجميع الأجهزة" });
  } catch (error: any) {
    return sendError(c, "REVOKE_ALL_ERROR", error.message || "فشل إنهاء الجلسات", 500);
  }
});
