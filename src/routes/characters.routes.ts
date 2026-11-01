import { Hono } from "hono";
import { prisma } from "../lib/prisma";
import { sendSuccess, sendError } from "../lib/response";
import { adminOnlyMiddleware } from "../middleware/auth";

export const charactersRoutes = new Hono();

// GET /api/v1/characters
charactersRoutes.get("/", async (c) => {
  try {
    const team = c.req.query("team");
    const role = c.req.query("role");

    const where: any = {};
    if (team) where.team = { contains: team, mode: "insensitive" };
    if (role) where.role = { contains: role, mode: "insensitive" };

    const characters = await prisma.character.findMany({
      where,
      orderBy: { number: "asc" },
    });

    return sendSuccess(c, characters);
  } catch (error: any) {
    return sendError(c, "FETCH_ERROR", error.message || "فشل جلب قائمة الشخصيات", 500);
  }
});

// GET /api/v1/characters/:id
charactersRoutes.get("/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const character = await prisma.character.findUnique({
      where: { id },
    });

    if (!character) {
      return sendError(c, "NOT_FOUND", "الشخصية غير موجودة", 404);
    }

    return sendSuccess(c, character);
  } catch (error: any) {
    return sendError(c, "FETCH_ERROR", error.message || "فشل جلب تفاصيل الشخصية", 500);
  }
});

// POST /api/v1/characters (Admin only)
charactersRoutes.post("/", adminOnlyMiddleware, async (c) => {
  try {
    const body = await c.req.json();
    const { id, name, name_ar, name_en, name_jp, team, position, number, height, weight, image, description, role } = body;

    if (!name) {
      return sendError(c, "VALIDATION_ERROR", "اسم الشخصية مطلوب", 400);
    }

    const charId = id || name.toLowerCase().replace(/\s+/g, "-");

    const created = await prisma.character.create({
      data: {
        id: charId,
        name: name.trim(),
        name_ar: name_ar || null,
        name_en: name_en || null,
        name_jp: name_jp || null,
        team: team || null,
        position: position || null,
        number: number ? String(number) : null,
        height: height || null,
        weight: weight || null,
        image: image || null,
        description: description || null,
        role: role || null,
      },
    });

    return sendSuccess(c, created, undefined, 201);
  } catch (error: any) {
    return sendError(c, "CREATE_ERROR", error.message || "فشل إنشاء الشخصية", 500);
  }
});

// PUT /api/v1/characters/:id (Admin only)
charactersRoutes.put("/:id", adminOnlyMiddleware, async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();

    const updated = await prisma.character.update({
      where: { id },
      data: {
        name: body.name,
        name_ar: body.name_ar,
        name_en: body.name_en,
        name_jp: body.name_jp,
        team: body.team,
        position: body.position,
        number: body.number ? String(body.number) : undefined,
        height: body.height,
        weight: body.weight,
        image: body.image,
        description: body.description,
        role: body.role,
      },
    });

    return sendSuccess(c, updated);
  } catch (error: any) {
    return sendError(c, "UPDATE_ERROR", error.message || "فشل تحديث الشخصية", 500);
  }
});

// DELETE /api/v1/characters/:id (Admin only)
charactersRoutes.delete("/:id", adminOnlyMiddleware, async (c) => {
  try {
    const id = c.req.param("id");
    await prisma.character.delete({
      where: { id },
    });

    return sendSuccess(c, { message: "تم حذف الشخصية بنجاح" });
  } catch (error: any) {
    return sendError(c, "DELETE_ERROR", error.message || "فشل حذف الشخصية", 500);
  }
});
