import { Hono } from "hono";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { sendSuccess, sendError } from "../lib/response";
import { optionalAuthMiddleware, adminOnlyMiddleware } from "../middleware/auth";

export const reportsRoutes = new Hono();

const createReportSchema = z.object({
  targetType: z.enum(["link", "server", "episode", "comment"]).default("link"),
  targetId: z.string().min(1, "معرف العنصر مطلوب"),
  reason: z.string().min(3, "سبب البلاغ مطلوب (على الأقل 3 أحرف)"),
});

// POST /api/v1/reports - الإبلاغ عن سيرفر معطل أو رابط لا يعمل
reportsRoutes.post("/", optionalAuthMiddleware, async (c) => {
  try {
    const rawBody = await c.req.json();
    const parsed = createReportSchema.safeParse(rawBody);

    if (!parsed.success) {
      return sendError(
        c,
        "VALIDATION_ERROR",
        parsed.error.errors[0]?.message || "بيانات البلاغ غير صالحة",
        400,
        parsed.error.format()
      );
    }

    const { targetType, targetId, reason } = parsed.data;
    const authUser = c.get("user");

    const report = await prisma.report.create({
      data: {
        userId: authUser?.userId || null,
        targetType,
        targetId,
        reason,
        status: "pending",
      },
    });

    // If it's a server, mark server lastCheckedAt
    if (targetType === "server" || targetType === "link") {
      await prisma.server.updateMany({
        where: { id: targetId },
        data: { lastCheckedAt: new Date() },
      }).catch(() => {});
    }

    return sendSuccess(
      c,
      {
        reportId: report.id,
        message: "تم استلام بلاغك بنجاح وسيقوم فريق العمل بفحص وتحديث السيرفر في أسرع وقت.",
      },
      undefined,
      201
    );
  } catch (error: any) {
    return sendError(c, "CREATE_REPORT_ERROR", error.message || "فشل تسجيل البلاغ", 500);
  }
});

// GET /api/v1/reports - للمشرفين فقط: عرض قائمة البلاغات
reportsRoutes.get("/", adminOnlyMiddleware, async (c) => {
  try {
    const status = c.req.query("status") || "pending";
    const page = Math.max(1, parseInt(c.req.query("page") || "1", 10));
    const limit = Math.min(50, Math.max(1, parseInt(c.req.query("limit") || "20", 10)));
    const skip = (page - 1) * limit;

    const where: any = status === "all" ? {} : { status };

    const [total, reports] = await Promise.all([
      prisma.report.count({ where }),
      prisma.report.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
    ]);

    return sendSuccess(c, reports, {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error: any) {
    return sendError(c, "FETCH_REPORTS_ERROR", error.message || "فشل جلب قائمة البلاغات", 500);
  }
});

// PATCH /api/v1/reports/:id - للمشرفين: تغيير حالة البلاغ (حل / تجاهل)
reportsRoutes.patch("/:id", adminOnlyMiddleware, async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    const { status } = body;

    if (!["pending", "resolved", "dismissed"].includes(status)) {
      return sendError(c, "VALIDATION_ERROR", "الحالة غير صالحة. يجب أن تكون: pending أو resolved أو dismissed", 400);
    }

    const updated = await prisma.report.update({
      where: { id },
      data: { status },
    });

    return sendSuccess(c, {
      report: updated,
      message: "تم تحديث حالة البلاغ بنجاح",
    });
  } catch (error: any) {
    return sendError(c, "UPDATE_REPORT_ERROR", error.message || "فشل تحديث البلاغ", 500);
  }
});
