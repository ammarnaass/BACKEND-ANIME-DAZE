import { Hono } from "hono";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { SignJWT } from "jose";
import { prisma } from "../lib/prisma";
import { sendSuccess, sendError } from "../lib/response";
import { authMiddleware } from "../middleware/auth";

export const authRoutes = new Hono();

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "slam-dunk-super-secret-jwt-key-2026"
);

async function generateTokens(user: { id: string; email: string; role: string; name: string }) {
  const token = await new SignJWT({
    userId: user.id,
    email: user.email,
    role: user.role,
    name: user.name,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("15m")
    .sign(JWT_SECRET);

  const refreshToken = crypto.randomBytes(40).toString("hex");
  const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");

  // Save session record
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 30);

  await prisma.session.create({
    data: {
      userId: user.id,
      refreshTokenHash,
      expiresAt,
    },
  });

  return { token, refreshToken };
}

// POST /api/v1/auth/login
authRoutes.post("/login", async (c) => {
  try {
    const body = await c.req.json();
    const { email, password } = body;

    if (!email || !password) {
      return sendError(c, "VALIDATION_ERROR", "البريد الإلكتروني وكلمة المرور مطلوبان", 400);
    }

    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (!user) {
      return sendError(c, "INVALID_CREDENTIALS", "بيانات الاعتماد غير صحيحة", 401);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return sendError(c, "INVALID_CREDENTIALS", "بيانات الاعتماد غير صحيحة", 401);
    }

    const { token, refreshToken } = await generateTokens(user);

    return sendSuccess(c, {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
      },
      token,
      refreshToken,
    });
  } catch (error: any) {
    return sendError(c, "INTERNAL_ERROR", error.message || "فشل تسجيل الدخول", 500);
  }
});

// POST /api/v1/auth/register
authRoutes.post("/register", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return sendError(c, "VALIDATION_ERROR", "جميع الحقول مطلوبة", 400);
    }

    const normalizedEmail = email.toLowerCase().trim();
    const existing = await prisma.user.findUnique({ where: { email: normalizedEmail } });
    if (existing) {
      return sendError(c, "USER_EXISTS", "البريد الإلكتروني مسجل بالفعل", 409);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: normalizedEmail,
        password: hashedPassword,
        role: "user",
      },
    });

    const { token, refreshToken } = await generateTokens(user);

    return sendSuccess(
      c,
      {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token,
        refreshToken,
      },
      undefined,
      201
    );
  } catch (error: any) {
    return sendError(c, "INTERNAL_ERROR", error.message || "فشل إنشاء الحساب", 500);
  }
});

// POST /api/v1/auth/refresh
authRoutes.post("/refresh", async (c) => {
  try {
    const { refreshToken } = await c.req.json();
    if (!refreshToken) {
      return sendError(c, "MISSING_TOKEN", "رمز التجديد مطلوب", 400);
    }

    const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");
    const session = await prisma.session.findUnique({
      where: { refreshTokenHash },
      include: { user: true },
    });

    if (!session || session.revokedAt || new Date() > session.expiresAt) {
      return sendError(c, "INVALID_TOKEN", "انتهت صلاحية جلسة التجديد", 401);
    }

    const newToken = await new SignJWT({
      userId: session.user.id,
      email: session.user.email,
      role: session.user.role,
      name: session.user.name,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("15m")
      .sign(JWT_SECRET);

    return sendSuccess(c, {
      token: newToken,
      user: {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        role: session.user.role,
      },
    });
  } catch (error: any) {
    return sendError(c, "INTERNAL_ERROR", error.message || "فشل تجديد الرمز", 500);
  }
});

// GET /api/v1/auth/me
authRoutes.get("/me", authMiddleware, async (c) => {
  const authUser = c.get("user");
  const user = await prisma.user.findUnique({
    where: { id: authUser.userId },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      avatar: true,
      gender: true,
      phoneNumber: true,
      birthDate: true,
      subscription: true,
      createdAt: true,
    },
  });

  if (!user) {
    return sendError(c, "USER_NOT_FOUND", "المستخدم غير موجود", 404);
  }

  return sendSuccess(c, user);
});

// POST /api/v1/auth/logout
authRoutes.post("/logout", async (c) => {
  try {
    const body = await c.req.json().catch(() => ({}));
    if (body.refreshToken) {
      const hash = crypto.createHash("sha256").update(body.refreshToken).digest("hex");
      await prisma.session.updateMany({
        where: { refreshTokenHash: hash },
        data: { revokedAt: new Date() },
      });
    }
  } catch {}

  return sendSuccess(c, { message: "تم تسجيل الخروج بنجاح" });
});
