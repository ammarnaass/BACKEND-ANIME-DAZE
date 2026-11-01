import { Context, Next } from "hono";
import { jwtVerify } from "jose";
import { sendError } from "../lib/response";

export interface AuthenticatedUser {
  userId: string;
  email: string;
  role: "user" | "admin";
  name?: string;
}

declare module "hono" {
  interface ContextVariableMap {
    user: AuthenticatedUser;
  }
}

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "slam-dunk-super-secret-jwt-key-2026"
);

export async function optionalAuthMiddleware(c: Context, next: Next) {
  const authHeader = c.req.header("Authorization");
  let token = "";

  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.substring(7).trim();
  } else {
    // Check cookie fallback
    const cookieHeader = c.req.header("Cookie") || "";
    const sessionMatch = cookieHeader.match(/session=([^;]+)/);
    if (sessionMatch) {
      token = sessionMatch[1];
    }
  }

  if (token) {
    try {
      const { payload } = await jwtVerify(token, JWT_SECRET);
      c.set("user", {
        userId: (payload.userId || payload.sub || payload.id) as string,
        email: payload.email as string,
        role: (payload.role as "user" | "admin") || "user",
        name: payload.name as string | undefined,
      });
    } catch {
      // invalid token, proceed unauthenticated
    }
  }

  await next();
}

export async function authMiddleware(c: Context, next: Next) {
  await optionalAuthMiddleware(c, async () => {});

  const user = c.get("user");
  if (!user) {
    return sendError(c, "UNAUTHORIZED", "يرجى تسجيل الدخول للوصول إلى هذه الخدمة", 401);
  }

  await next();
}

export async function adminOnlyMiddleware(c: Context, next: Next) {
  await optionalAuthMiddleware(c, async () => {});

  const user = c.get("user");
  if (!user || user.role !== "admin") {
    return sendError(c, "FORBIDDEN", "هذه العملية تتطلب صلاحيات المشرف الإداري (Admin)", 403);
  }

  await next();
}
