"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  app: () => app,
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);
var import_hono10 = require("hono");
var import_cors = require("hono/cors");
var import_logger = require("hono/logger");
var import_pretty_json = require("hono/pretty-json");

// src/lib/response.ts
function sendSuccess(c, data, meta, status = 200) {
  return c.json(
    {
      ok: true,
      data,
      ...meta ? { meta } : {}
    },
    status
  );
}
function sendError(c, code, message, status = 400, details) {
  return c.json(
    {
      ok: false,
      error: {
        code,
        message,
        details: details ?? null
      }
    },
    status
  );
}

// src/routes/auth.routes.ts
var import_hono = require("hono");
var import_bcryptjs = __toESM(require("bcryptjs"));
var import_crypto = __toESM(require("crypto"));
var import_jose2 = require("jose");

// src/lib/prisma.ts
var import_node_dns = __toESM(require("node:dns"));
var import_dotenv = __toESM(require("dotenv"));
var import_client = require("@prisma/client");
var import_adapter_pg = require("@prisma/adapter-pg");
var import_pg = __toESM(require("pg"));
if (import_node_dns.default.setDefaultResultOrder) {
  import_node_dns.default.setDefaultResultOrder("ipv4first");
}
import_dotenv.default.config();
var connectionString = process.env.DATABASE_URL || "";
if (!connectionString) {
  console.error("\u26A0\uFE0F [CRITICAL] DATABASE_URL is missing! Please set DATABASE_URL in Vercel Environment Variables.");
}
var isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
var pool = new import_pg.default.Pool({
  connectionString: connectionString || void 0,
  ssl: isLocal ? false : { rejectUnauthorized: false },
  max: 10,
  idleTimeoutMillis: 3e4,
  connectionTimeoutMillis: 5e3
});
var adapter = new import_adapter_pg.PrismaPg(pool);
var prisma = global.prismaInstance || new import_client.PrismaClient({
  adapter,
  log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"]
});
if (process.env.NODE_ENV !== "production") {
  global.prismaInstance = prisma;
}

// src/middleware/auth.ts
var import_jose = require("jose");
var JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "slam-dunk-super-secret-jwt-key-2026"
);
async function optionalAuthMiddleware(c, next) {
  const authHeader = c.req.header("Authorization");
  let token = "";
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.substring(7).trim();
  } else {
    const cookieHeader = c.req.header("Cookie") || "";
    const sessionMatch = cookieHeader.match(/session=([^;]+)/);
    if (sessionMatch) {
      token = sessionMatch[1];
    }
  }
  if (token) {
    try {
      const { payload } = await (0, import_jose.jwtVerify)(token, JWT_SECRET);
      c.set("user", {
        userId: payload.userId || payload.sub || payload.id,
        email: payload.email,
        role: payload.role || "user",
        name: payload.name
      });
    } catch {
    }
  }
  await next();
}
async function authMiddleware(c, next) {
  await optionalAuthMiddleware(c, async () => {
  });
  const user = c.get("user");
  if (!user) {
    return sendError(c, "UNAUTHORIZED", "\u064A\u0631\u062C\u0649 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0644\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u062E\u062F\u0645\u0629", 401);
  }
  await next();
}
async function adminOnlyMiddleware(c, next) {
  await optionalAuthMiddleware(c, async () => {
  });
  const user = c.get("user");
  if (!user || user.role !== "admin") {
    return sendError(c, "FORBIDDEN", "\u0647\u0630\u0647 \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u062A\u062A\u0637\u0644\u0628 \u0635\u0644\u0627\u062D\u064A\u0627\u062A \u0627\u0644\u0645\u0634\u0631\u0641 \u0627\u0644\u0625\u062F\u0627\u0631\u064A (Admin)", 403);
  }
  await next();
}

// src/routes/auth.routes.ts
var authRoutes = new import_hono.Hono();
var JWT_SECRET2 = new TextEncoder().encode(
  process.env.JWT_SECRET || "slam-dunk-super-secret-jwt-key-2026"
);
async function generateTokens(user) {
  const token = await new import_jose2.SignJWT({
    userId: user.id,
    email: user.email,
    role: user.role,
    name: user.name
  }).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("15m").sign(JWT_SECRET2);
  const refreshToken = import_crypto.default.randomBytes(40).toString("hex");
  const refreshTokenHash = import_crypto.default.createHash("sha256").update(refreshToken).digest("hex");
  const expiresAt = /* @__PURE__ */ new Date();
  expiresAt.setDate(expiresAt.getDate() + 30);
  await prisma.session.create({
    data: {
      userId: user.id,
      refreshTokenHash,
      expiresAt
    }
  });
  return { token, refreshToken };
}
authRoutes.post("/login", async (c) => {
  try {
    const body = await c.req.json();
    const { email, password } = body;
    if (!email || !password) {
      return sendError(c, "VALIDATION_ERROR", "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0645\u0637\u0644\u0648\u0628\u0627\u0646", 400);
    }
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() }
    });
    if (!user) {
      return sendError(c, "INVALID_CREDENTIALS", "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629", 401);
    }
    const isMatch = await import_bcryptjs.default.compare(password, user.password);
    if (!isMatch) {
      return sendError(c, "INVALID_CREDENTIALS", "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629", 401);
    }
    const { token, refreshToken } = await generateTokens(user);
    return sendSuccess(c, {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar
      },
      token,
      refreshToken
    });
  } catch (error) {
    return sendError(c, "INTERNAL_ERROR", error.message || "\u0641\u0634\u0644 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644", 500);
  }
});
authRoutes.post("/register", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, password } = body;
    if (!name || !email || !password) {
      return sendError(c, "VALIDATION_ERROR", "\u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0645\u0637\u0644\u0648\u0628\u0629", 400);
    }
    const normalizedEmail = email.toLowerCase().trim();
    const existing = await prisma.user.findUnique({ where: { email: normalizedEmail } });
    if (existing) {
      return sendError(c, "USER_EXISTS", "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0645\u0633\u062C\u0644 \u0628\u0627\u0644\u0641\u0639\u0644", 409);
    }
    const hashedPassword = await import_bcryptjs.default.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: normalizedEmail,
        password: hashedPassword,
        role: "user"
      }
    });
    const { token, refreshToken } = await generateTokens(user);
    return sendSuccess(
      c,
      {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
        },
        token,
        refreshToken
      },
      void 0,
      201
    );
  } catch (error) {
    return sendError(c, "INTERNAL_ERROR", error.message || "\u0641\u0634\u0644 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062D\u0633\u0627\u0628", 500);
  }
});
authRoutes.post("/refresh", async (c) => {
  try {
    const { refreshToken } = await c.req.json();
    if (!refreshToken) {
      return sendError(c, "MISSING_TOKEN", "\u0631\u0645\u0632 \u0627\u0644\u062A\u062C\u062F\u064A\u062F \u0645\u0637\u0644\u0648\u0628", 400);
    }
    const refreshTokenHash = import_crypto.default.createHash("sha256").update(refreshToken).digest("hex");
    const session = await prisma.session.findUnique({
      where: { refreshTokenHash },
      include: { user: true }
    });
    if (!session || session.revokedAt || /* @__PURE__ */ new Date() > session.expiresAt) {
      return sendError(c, "INVALID_TOKEN", "\u0627\u0646\u062A\u0647\u062A \u0635\u0644\u0627\u062D\u064A\u0629 \u062C\u0644\u0633\u0629 \u0627\u0644\u062A\u062C\u062F\u064A\u062F", 401);
    }
    const newToken = await new import_jose2.SignJWT({
      userId: session.user.id,
      email: session.user.email,
      role: session.user.role,
      name: session.user.name
    }).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("15m").sign(JWT_SECRET2);
    return sendSuccess(c, {
      token: newToken,
      user: {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        role: session.user.role
      }
    });
  } catch (error) {
    return sendError(c, "INTERNAL_ERROR", error.message || "\u0641\u0634\u0644 \u062A\u062C\u062F\u064A\u062F \u0627\u0644\u0631\u0645\u0632", 500);
  }
});
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
      createdAt: true
    }
  });
  if (!user) {
    return sendError(c, "USER_NOT_FOUND", "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F", 404);
  }
  return sendSuccess(c, user);
});
authRoutes.post("/logout", async (c) => {
  try {
    const body = await c.req.json().catch(() => ({}));
    if (body.refreshToken) {
      const hash = import_crypto.default.createHash("sha256").update(body.refreshToken).digest("hex");
      await prisma.session.updateMany({
        where: { refreshTokenHash: hash },
        data: { revokedAt: /* @__PURE__ */ new Date() }
      });
    }
  } catch {
  }
  return sendSuccess(c, { message: "\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C \u0628\u0646\u062C\u0627\u062D" });
});

// src/routes/sessions.routes.ts
var import_hono2 = require("hono");
var sessionsRoutes = new import_hono2.Hono();
sessionsRoutes.use("*", authMiddleware);
sessionsRoutes.get("/", async (c) => {
  try {
    const user = c.get("user");
    const sessions = await prisma.session.findMany({
      where: {
        userId: user.userId,
        revokedAt: null,
        expiresAt: { gt: /* @__PURE__ */ new Date() }
      },
      select: {
        id: true,
        deviceName: true,
        userAgent: true,
        ip: true,
        createdAt: true,
        expiresAt: true
      },
      orderBy: { createdAt: "desc" }
    });
    return sendSuccess(c, sessions);
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0627\u0644\u062C\u0644\u0633\u0627\u062A \u0627\u0644\u0646\u0634\u0637\u0629", 500);
  }
});
sessionsRoutes.delete("/:id", async (c) => {
  try {
    const user = c.get("user");
    const id = c.req.param("id");
    await prisma.session.updateMany({
      where: {
        id,
        userId: user.userId
      },
      data: {
        revokedAt: /* @__PURE__ */ new Date()
      }
    });
    return sendSuccess(c, { message: "\u062A\u0645 \u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u062C\u0644\u0633\u0629 \u0628\u0646\u062C\u0627\u062D" });
  } catch (error) {
    return sendError(c, "REVOKE_ERROR", error.message || "\u0641\u0634\u0644 \u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u062C\u0644\u0633\u0629", 500);
  }
});
sessionsRoutes.delete("/", async (c) => {
  try {
    const user = c.get("user");
    await prisma.session.updateMany({
      where: {
        userId: user.userId,
        revokedAt: null
      },
      data: {
        revokedAt: /* @__PURE__ */ new Date()
      }
    });
    return sendSuccess(c, { message: "\u062A\u0645 \u0625\u0646\u0647\u0627\u0621 \u0643\u0627\u0641\u0629 \u0627\u0644\u062C\u0644\u0633\u0627\u062A \u0627\u0644\u0646\u0634\u0637\u0629 \u0644\u062C\u0645\u064A\u0639 \u0627\u0644\u0623\u062C\u0647\u0632\u0629" });
  } catch (error) {
    return sendError(c, "REVOKE_ALL_ERROR", error.message || "\u0641\u0634\u0644 \u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u062C\u0644\u0633\u0627\u062A", 500);
  }
});

// src/routes/animes.routes.ts
var import_hono3 = require("hono");
var animesRoutes = new import_hono3.Hono();
animesRoutes.get("/", async (c) => {
  try {
    const q = c.req.query("q")?.toLowerCase().trim();
    const genre = c.req.query("genre");
    const status = c.req.query("status");
    const page = Math.max(1, parseInt(c.req.query("page") || "1", 10));
    const limit = Math.min(50, Math.max(1, parseInt(c.req.query("limit") || "20", 10)));
    const skip = (page - 1) * limit;
    const where = {};
    if (q) {
      where.OR = [
        { title: { contains: q, mode: "insensitive" } },
        { description: { contains: q, mode: "insensitive" } }
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
          _count: { select: { episodes: true } }
        }
      })
    ]);
    return sendSuccess(c, animes, {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    });
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0623\u0639\u0645\u0627\u0644", 500);
  }
});
animesRoutes.get("/featured", async (c) => {
  try {
    const featured = await prisma.anime.findMany({
      where: { isFeatured: true },
      take: 6,
      orderBy: { rating: "desc" }
    });
    return sendSuccess(c, featured);
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u0645\u064A\u0632\u0629", 500);
  }
});
animesRoutes.get("/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const anime = await prisma.anime.findUnique({
      where: { id },
      include: {
        episodes: {
          orderBy: { episodeNumber: "asc" }
        },
        reviews: {
          take: 10,
          orderBy: { createdAt: "desc" },
          include: {
            user: {
              select: { id: true, name: true, avatar: true }
            }
          }
        }
      }
    });
    if (!anime) {
      return sendError(c, "NOT_FOUND", "\u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F", 404);
    }
    return sendSuccess(c, anime);
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0639\u0645\u0644", 500);
  }
});
animesRoutes.get("/characters/all", async (c) => {
  try {
    const team = c.req.query("team");
    const where = team ? { team: { contains: team, mode: "insensitive" } } : {};
    const characters = await prisma.character.findMany({
      where,
      orderBy: { number: "asc" }
    });
    return sendSuccess(c, characters);
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0627\u0644\u0634\u062E\u0635\u064A\u0627\u062A", 500);
  }
});

// src/routes/characters.routes.ts
var import_hono4 = require("hono");
var charactersRoutes = new import_hono4.Hono();
charactersRoutes.get("/", async (c) => {
  try {
    const team = c.req.query("team");
    const role = c.req.query("role");
    const where = {};
    if (team) where.team = { contains: team, mode: "insensitive" };
    if (role) where.role = { contains: role, mode: "insensitive" };
    const characters = await prisma.character.findMany({
      where,
      orderBy: { number: "asc" }
    });
    return sendSuccess(c, characters);
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0634\u062E\u0635\u064A\u0627\u062A", 500);
  }
});
charactersRoutes.get("/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const character = await prisma.character.findUnique({
      where: { id }
    });
    if (!character) {
      return sendError(c, "NOT_FOUND", "\u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629", 404);
    }
    return sendSuccess(c, character);
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0634\u062E\u0635\u064A\u0629", 500);
  }
});
charactersRoutes.post("/", adminOnlyMiddleware, async (c) => {
  try {
    const body = await c.req.json();
    const { id, name, name_ar, name_en, name_jp, team, position, number, height, weight, image, description, role } = body;
    if (!name) {
      return sendError(c, "VALIDATION_ERROR", "\u0627\u0633\u0645 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0645\u0637\u0644\u0648\u0628", 400);
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
        role: role || null
      }
    });
    return sendSuccess(c, created, void 0, 201);
  } catch (error) {
    return sendError(c, "CREATE_ERROR", error.message || "\u0641\u0634\u0644 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0634\u062E\u0635\u064A\u0629", 500);
  }
});
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
        number: body.number ? String(body.number) : void 0,
        height: body.height,
        weight: body.weight,
        image: body.image,
        description: body.description,
        role: body.role
      }
    });
    return sendSuccess(c, updated);
  } catch (error) {
    return sendError(c, "UPDATE_ERROR", error.message || "\u0641\u0634\u0644 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0634\u062E\u0635\u064A\u0629", 500);
  }
});
charactersRoutes.delete("/:id", adminOnlyMiddleware, async (c) => {
  try {
    const id = c.req.param("id");
    await prisma.character.delete({
      where: { id }
    });
    return sendSuccess(c, { message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0628\u0646\u062C\u0627\u062D" });
  } catch (error) {
    return sendError(c, "DELETE_ERROR", error.message || "\u0641\u0634\u0644 \u062D\u0630\u0641 \u0627\u0644\u0634\u062E\u0635\u064A\u0629", 500);
  }
});

// src/routes/episodes.routes.ts
var import_hono5 = require("hono");
var episodesRoutes = new import_hono5.Hono();
episodesRoutes.get("/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const episode = await prisma.episode.findUnique({
      where: { id },
      include: {
        anime: {
          select: { id: true, title: true, coverImage: true }
        },
        servers: true,
        serversList: false
      }
    });
    if (!episode) {
      return sendError(c, "NOT_FOUND", "\u0627\u0644\u062D\u0644\u0642\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629", 404);
    }
    const comments = await prisma.comment.findMany({
      where: { episodeId: id },
      orderBy: { createdAt: "desc" },
      take: 50
    });
    return sendSuccess(c, {
      ...episode,
      comments
    });
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062D\u0644\u0642\u0629", 500);
  }
});
episodesRoutes.post("/:id/comments", authMiddleware, async (c) => {
  try {
    const episodeId = c.req.param("id");
    if (!episodeId) {
      return sendError(c, "VALIDATION_ERROR", "\u0645\u0639\u0631\u0641 \u0627\u0644\u062D\u0644\u0642\u0629 \u0645\u0637\u0644\u0648\u0628", 400);
    }
    const user = c.get("user");
    const body = await c.req.json();
    const { content } = body;
    if (!content || !content.trim()) {
      return sendError(c, "VALIDATION_ERROR", "\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u062A\u0639\u0644\u064A\u0642 \u0645\u0637\u0644\u0648\u0628", 400);
    }
    const comment = await prisma.comment.create({
      data: {
        episodeId,
        userId: user.userId,
        userName: user.name || "\u0645\u0633\u062A\u062E\u062F\u0645",
        content: content.trim()
      }
    });
    return sendSuccess(c, comment, void 0, 201);
  } catch (error) {
    return sendError(c, "CREATE_ERROR", error.message || "\u0641\u0634\u0644 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062A\u0639\u0644\u064A\u0642", 500);
  }
});
episodesRoutes.post("/:id/rate", authMiddleware, async (c) => {
  try {
    const episodeId = c.req.param("id");
    if (!episodeId) {
      return sendError(c, "VALIDATION_ERROR", "\u0645\u0639\u0631\u0641 \u0627\u0644\u062D\u0644\u0642\u0629 \u0645\u0637\u0644\u0648\u0628", 400);
    }
    const user = c.get("user");
    const { rating } = await c.req.json();
    const numericRating = Math.min(5, Math.max(1, parseInt(rating, 10)));
    const rateRecord = await prisma.episodeRating.upsert({
      where: {
        userId_episodeId: {
          userId: user.userId,
          episodeId
        }
      },
      update: { rating: numericRating },
      create: {
        userId: user.userId,
        episodeId,
        rating: numericRating
      }
    });
    return sendSuccess(c, rateRecord);
  } catch (error) {
    return sendError(c, "RATE_ERROR", error.message || "\u0641\u0634\u0644 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062A\u0642\u064A\u064A\u0645", 500);
  }
});

// src/routes/me.routes.ts
var import_hono6 = require("hono");
var meRoutes = new import_hono6.Hono();
meRoutes.use("*", authMiddleware);
meRoutes.get("/progress", async (c) => {
  try {
    const user = c.get("user");
    const progressList = await prisma.watchProgress.findMany({
      where: { userId: user.userId },
      orderBy: { updatedAt: "desc" },
      take: 30
    });
    return sendSuccess(c, progressList);
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u062A\u0642\u062F\u0645 \u0627\u0644\u0645\u0634\u0627\u0647\u062F\u0629", 500);
  }
});
meRoutes.post("/progress", async (c) => {
  try {
    const user = c.get("user");
    const body = await c.req.json();
    const { episodeId, positionSeconds, durationSeconds, completed } = body;
    if (!episodeId) {
      return sendError(c, "VALIDATION_ERROR", "\u0645\u0639\u0631\u0641 \u0627\u0644\u062D\u0644\u0642\u0629 \u0645\u0637\u0644\u0648\u0628", 400);
    }
    const pos = parseFloat(positionSeconds) || 0;
    const dur = parseFloat(durationSeconds) || 0;
    const isCompleted = completed ?? (dur > 0 && pos / dur > 0.9);
    const record = await prisma.watchProgress.upsert({
      where: {
        userId_episodeId: {
          userId: user.userId,
          episodeId
        }
      },
      update: {
        positionSeconds: pos,
        durationSeconds: dur,
        completed: isCompleted
      },
      create: {
        userId: user.userId,
        episodeId,
        positionSeconds: pos,
        durationSeconds: dur,
        completed: isCompleted
      }
    });
    return sendSuccess(c, record);
  } catch (error) {
    return sendError(c, "SAVE_ERROR", error.message || "\u0641\u0634\u0644 \u062D\u0641\u0638 \u062A\u0642\u062F\u0645 \u0627\u0644\u0645\u0634\u0627\u0647\u062F\u0629", 500);
  }
});
meRoutes.get("/favorites", async (c) => {
  try {
    const user = c.get("user");
    const favorites = await prisma.favorite.findMany({
      where: { userId: user.userId },
      orderBy: { createdAt: "desc" }
    });
    return sendSuccess(c, favorites);
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0627\u0644\u0645\u0641\u0636\u0644\u0629", 500);
  }
});
meRoutes.post("/favorites", async (c) => {
  try {
    const user = c.get("user");
    const { targetId, targetType = "anime" } = await c.req.json();
    if (!targetId) {
      return sendError(c, "VALIDATION_ERROR", "\u0645\u0639\u0631\u0641 \u0627\u0644\u0639\u0646\u0635\u0631 \u0645\u0637\u0644\u0648\u0628", 400);
    }
    const existing = await prisma.favorite.findUnique({
      where: {
        userId_targetType_targetId: {
          userId: user.userId,
          targetType,
          targetId
        }
      }
    });
    if (existing) {
      await prisma.favorite.delete({
        where: { id: existing.id }
      });
      return sendSuccess(c, { isFavorited: false, message: "\u062A\u0645\u062A \u0627\u0644\u0625\u0632\u0627\u0644\u0629 \u0645\u0646 \u0627\u0644\u0645\u0641\u0636\u0644\u0629" });
    }
    await prisma.favorite.create({
      data: {
        userId: user.userId,
        targetType,
        targetId
      }
    });
    return sendSuccess(c, { isFavorited: true, message: "\u062A\u0645\u062A \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u0641\u0636\u0644\u0629" }, void 0, 201);
  } catch (error) {
    return sendError(c, "FAV_ERROR", error.message || "\u0641\u0634\u0644 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0641\u0636\u0644\u0629", 500);
  }
});
meRoutes.get("/history", async (c) => {
  try {
    const user = c.get("user");
    const history = await prisma.history.findMany({
      where: { userId: user.userId },
      orderBy: { watchedAt: "desc" },
      take: 50
    });
    return sendSuccess(c, history);
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0633\u062C\u0644 \u0627\u0644\u0645\u0634\u0627\u0647\u062F\u0629", 500);
  }
});

// src/routes/mobile.routes.ts
var import_hono7 = require("hono");
var mobileRoutes = new import_hono7.Hono();
mobileRoutes.get("/home", optionalAuthMiddleware, async (c) => {
  try {
    const user = c.get("user");
    const [slider, latest, characters, settings, progress] = await Promise.all([
      // 1. Featured Slider
      prisma.anime.findMany({
        where: { isFeatured: true },
        take: 5,
        orderBy: { rating: "desc" },
        select: {
          id: true,
          title: true,
          coverImage: true,
          bannerImage: true,
          rating: true
        }
      }),
      // 2. Latest Episodes
      prisma.episode.findMany({
        take: 12,
        orderBy: { createdAt: "desc" },
        include: {
          anime: { select: { id: true, title: true, coverImage: true } }
        }
      }),
      // 3. Shohoku Roster Characters
      prisma.character.findMany({
        take: 10,
        orderBy: { number: "asc" }
      }),
      // 4. Global Settings
      prisma.settings.findUnique({
        where: { id: "global" }
      }),
      // 5. User Continue Watching (if authenticated)
      user ? prisma.watchProgress.findMany({
        where: { userId: user.userId, completed: false },
        take: 10,
        orderBy: { updatedAt: "desc" }
      }) : Promise.resolve([])
    ]);
    return sendSuccess(c, {
      slider,
      continueWatching: progress,
      latestEpisodes: latest,
      characters,
      settings: settings || {
        siteName: "Slam Dunk",
        maintenanceMode: false,
        admobEnabled: false
      }
    });
  } catch (error) {
    return sendError(c, "HOME_FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 \u0644\u0644\u0645\u0648\u0628\u0627\u064A\u0644", 500);
  }
});
mobileRoutes.get("/config", async (c) => {
  try {
    const settings = await prisma.settings.findUnique({
      where: { id: "global" }
    });
    return sendSuccess(c, settings || {
      siteName: "Slam Dunk",
      maintenanceMode: false,
      latestVersion: "1.0.0",
      updateUrl: "https://slam-dunk-w.vercel.app/download",
      admobEnabled: false
    });
  } catch (error) {
    return sendError(c, "CONFIG_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u062A\u0637\u0628\u064A\u0642", 500);
  }
});
mobileRoutes.get("/plans", async (c) => {
  try {
    const plans = await prisma.plan.findMany({
      where: { isActive: true }
    });
    return sendSuccess(c, plans);
  } catch (error) {
    return sendError(c, "PLANS_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0628\u0627\u0642\u0627\u062A \u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643", 500);
  }
});

// src/routes/admin.routes.ts
var import_hono8 = require("hono");
var adminRoutes = new import_hono8.Hono();
adminRoutes.use("*", adminOnlyMiddleware);
adminRoutes.get("/stats", async (c) => {
  try {
    const [usersCount, animesCount, episodesCount, commentsCount] = await Promise.all([
      prisma.user.count(),
      prisma.anime.count(),
      prisma.episode.count(),
      prisma.comment.count()
    ]);
    return sendSuccess(c, {
      totalUsers: usersCount,
      totalAnimes: animesCount,
      totalEpisodes: episodesCount,
      totalComments: commentsCount
    });
  } catch (error) {
    return sendError(c, "STATS_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0644\u0646\u0638\u0627\u0645", 500);
  }
});
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
          subscription: true
        }
      })
    ]);
    return sendSuccess(c, users, {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    });
  } catch (error) {
    return sendError(c, "USERS_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646", 500);
  }
});
adminRoutes.post("/settings", async (c) => {
  try {
    const body = await c.req.json();
    const updated = await prisma.settings.upsert({
      where: { id: "global" },
      update: body,
      create: {
        id: "global",
        ...body
      }
    });
    return sendSuccess(c, updated);
  } catch (error) {
    return sendError(c, "SETTINGS_ERROR", error.message || "\u0641\u0634\u0644 \u062D\u0641\u0638 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A", 500);
  }
});

// src/routes/planets.routes.ts
var import_hono9 = require("hono");

// src/lib/planets-presets.ts
var DEFAULT_PLANETS_SETTINGS = {
  displayMode: "hybrid",
  soundEffectsEnabled: true,
  autoRotate3D: true,
  homeStyle: "compact_grid"
};
var DEFAULT_ADMIN_PLANETS = [
  {
    id: "sports",
    name: "\u0643\u0648\u0643\u0628 \u0631\u064A\u0627\u0636\u0629",
    arabicGenre: "\u0631\u064A\u0627\u0636\u0629",
    genreKey: "Sports",
    badge: "\u{1F3C0}",
    icon: "sports_basketball",
    slogan: "\u0643\u0648\u0643\u0628 \u0627\u0644\u062A\u062D\u062F\u064A \u0648\u0627\u0644\u0628\u0637\u0648\u0644\u0629 \u0648\u0627\u0644\u0645\u0646\u0627\u0641\u0633\u0629 \u0627\u0644\u0634\u0631\u064A\u0641\u0629",
    description: "\u0645\u0648\u0637\u0646 \u0627\u0644\u0631\u0645\u064A\u0627\u062A \u0627\u0644\u062D\u0627\u0633\u0645\u0629\u060C \u0627\u0644\u0647\u062A\u0627\u0641\u0627\u062A \u0627\u0644\u062C\u0645\u0627\u0647\u064A\u0631\u064A\u0629\u060C \u0648\u0627\u0644\u0631\u0648\u062D \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0629 \u0627\u0644\u062E\u0627\u0644\u062F\u0629 \u0627\u0644\u062A\u064A \u0644\u0627 \u062A\u0639\u0631\u0641 \u0627\u0644\u0645\u0633\u062A\u062D\u064A\u0644.",
    anthemSnippet: "\u0641\u064A \u0643\u0644 \u0631\u0643\u0644\u0629\u060C \u0641\u064A \u0643\u0644 \u0631\u0645\u064A\u0629\u060C \u0628\u0627\u0644\u0639\u0632\u0645 \u0648\u0627\u0644\u0625\u0635\u0631\u0627\u0631 \u0646\u062D\u0642\u0642 \u0627\u0644\u0646\u0635\u0631!",
    flagshipWorks: ["\u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643", "\u0643\u0627\u0628\u062A\u0646 \u0645\u0627\u062C\u062F", "\u0628\u064A \u0628\u0644\u064A\u062F", "\u0634\u0628\u062D \u0628\u064A\u0646 \u0627\u0644\u0645\u0644\u0627\u0639\u0628"],
    color: "#dc2626",
    bgClass: "bg-red-500/15 border-red-500/30 text-red-400",
    glowColor: "rgba(220, 38, 38, 0.4)",
    isEnabled: true,
    order: 1,
    threeDConfig: {
      hasRings: true,
      ringColor: "rgba(239, 68, 68, 0.8)",
      ringTilt: 25,
      textureStyle: "sports",
      rotationSpeed: 1.2,
      atmosphereGlow: "#ef4444",
      scale: 1.05
    }
  },
  {
    id: "action",
    name: "\u0643\u0648\u0643\u0628 \u0623\u0643\u0634\u0646",
    arabicGenre: "\u0623\u0643\u0634\u0646",
    genreKey: "Action",
    badge: "\u2694\uFE0F",
    icon: "swords",
    slogan: "\u0643\u0648\u0643\u0628 \u0627\u0644\u0642\u0648\u0629 \u0648\u0627\u0644\u0634\u062C\u0627\u0639\u0629 \u0648\u0627\u0644\u0645\u0639\u0627\u0631\u0643 \u0627\u0644\u0645\u0635\u064A\u0631\u064A\u0629",
    description: "\u0635\u0631\u062E\u0627\u062A \u0627\u0644\u0642\u062A\u0627\u0644\u060C \u0637\u0627\u0642\u0627\u062A \u0627\u0644\u0646\u064A\u0646\u062C\u0627 \u0648\u0627\u0644\u0623\u0628\u0637\u0627\u0644 \u0627\u0644\u062E\u0627\u0631\u0642\u064A\u0646 \u0641\u064A \u0645\u0648\u0627\u062C\u0647\u0629 \u0642\u0648\u0649 \u0627\u0644\u0638\u0644\u0627\u0645 \u0644\u0625\u0646\u0642\u0627\u0630 \u0627\u0644\u0643\u0648\u0646.",
    anthemSnippet: "\u0643\u0627\u0644\u0628\u0631\u0642 \u0641\u064A \u0627\u0644\u0633\u0645\u0627\u0621\u060C \u0643\u0627\u0644\u0633\u064A\u0644 \u062D\u064A\u0646 \u064A\u0646\u0647\u0645\u0631\u060C \u0644\u0627 \u064A\u0646\u062D\u0646\u064A \u0627\u0644\u0641\u0627\u0631\u0633 \u0627\u0644\u062D\u0642 \u0648\u0644\u0627 \u064A\u0646\u0643\u0633\u0631!",
    flagshipWorks: ["\u0623\u0628\u0637\u0627\u0644 \u0627\u0644\u062F\u064A\u062C\u064A\u062A\u0627\u0644", "\u0633\u064A\u0641 \u0627\u0644\u0646\u0627\u0631", "\u062F\u0631\u0627\u063A\u0648\u0646 \u0628\u0648\u0644", "\u0623\u062C\u0646\u062D\u0629 \u0643\u0627\u0646\u062F\u0627\u0645"],
    color: "#ea580c",
    bgClass: "bg-orange-500/15 border-orange-500/30 text-orange-400",
    glowColor: "rgba(234, 88, 12, 0.4)",
    isEnabled: true,
    order: 2,
    threeDConfig: {
      hasRings: true,
      ringColor: "rgba(234, 88, 12, 0.85)",
      ringTilt: 35,
      textureStyle: "action",
      rotationSpeed: 1.4,
      atmosphereGlow: "#ea580c",
      scale: 1.15
    }
  },
  {
    id: "adventure",
    name: "\u0643\u0648\u0643\u0628 \u0645\u063A\u0627\u0645\u0631\u0627\u062A",
    arabicGenre: "\u0645\u063A\u0627\u0645\u0631\u0627\u062A",
    genreKey: "Adventure",
    badge: "\u{1F680}",
    icon: "explore",
    slogan: "\u0643\u0648\u0643\u0628 \u0627\u0644\u062E\u064A\u0627\u0644 \u0648\u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u0643\u0634\u0627\u0641\u064A\u0629 \u0627\u0644\u0643\u0628\u0631\u0649",
    description: "\u0639\u0648\u0627\u0644\u0645 \u0627\u0644\u062E\u064A\u0627\u0644 \u0627\u0644\u0641\u0633\u064A\u062D\u0629\u060C \u0627\u0644\u062C\u0632\u0631 \u0627\u0644\u063A\u0627\u0645\u0636\u0629\u060C \u0648\u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0623\u0633\u0637\u0648\u0631\u064A\u0629 \u0644\u0627\u0643\u062A\u0634\u0627\u0641 \u0627\u0644\u0643\u0646\u0648\u0632 \u0648\u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0635\u062F\u0627\u0642\u0629.",
    anthemSnippet: "\u0645\u0647\u0645\u0627 \u0637\u0627\u0644 \u0627\u0644\u0637\u0631\u064A\u0642 \u0648\u0635\u0639\u0628 \u0627\u0644\u0645\u0633\u064A\u0631\u060C \u062E\u0644\u0641 \u0627\u0644\u0623\u0641\u0642 \u064A\u0646\u062A\u0638\u0631\u0646\u0627 \u0627\u0644\u0645\u062C\u062F \u0627\u0644\u0643\u0628\u064A\u0631!",
    flagshipWorks: ["\u062F\u0627\u064A \u0627\u0644\u0634\u062C\u0627\u0639", "\u0627\u0644\u0642\u0646\u0627\u0635", "\u0647\u0632\u064A\u0645 \u0627\u0644\u0631\u0639\u062F", "\u0639\u0647\u062F \u0627\u0644\u0623\u0635\u062F\u0642\u0627\u0621"],
    color: "#f59e0b",
    bgClass: "bg-amber-500/15 border-amber-500/30 text-amber-400",
    glowColor: "rgba(245, 158, 11, 0.4)",
    isEnabled: true,
    order: 3,
    threeDConfig: {
      hasRings: true,
      ringColor: "rgba(245, 158, 11, 0.75)",
      ringTilt: 20,
      textureStyle: "adventure",
      rotationSpeed: 1,
      atmosphereGlow: "#f59e0b",
      scale: 1.1
    }
  },
  {
    id: "comedy",
    name: "\u0643\u0648\u0643\u0628 \u0643\u0648\u0645\u064A\u062F\u064A\u0627",
    arabicGenre: "\u0643\u0648\u0645\u064A\u062F\u064A\u0627",
    genreKey: "Comedy",
    badge: "\u{1F604}",
    icon: "sentiment_very_satisfied",
    slogan: "\u0643\u0648\u0643\u0628 \u0627\u0644\u0636\u062D\u0643 \u0648\u0627\u0644\u0645\u0631\u062D \u0648\u0627\u0644\u0637\u0631\u0627\u0626\u0641 \u0627\u0644\u0639\u0627\u0626\u0644\u064A\u0629",
    description: "\u0645\u0648\u0627\u0642\u0641 \u064A\u0648\u0645\u064A\u0629 \u0637\u0631\u064A\u0641\u0629 \u0648\u0634\u062E\u0635\u064A\u0627\u062A \u063A\u0631\u064A\u0628\u0629 \u0627\u0644\u0623\u0637\u0648\u0627\u0631 \u0644\u062C\u0631\u0639\u0627\u062A \u0644\u0627 \u062A\u062A\u0648\u0642\u0641 \u0645\u0646 \u0627\u0644\u0636\u062D\u0643 \u0648\u0627\u0644\u0628\u0647\u062C\u0629.",
    anthemSnippet: "\u0627\u0628\u062A\u0633\u0645 \u0644\u0644\u062D\u064A\u0627\u0629 \u062A\u0628\u062A\u0633\u0645 \u0644\u0643\u060C \u0648\u0627\u0635\u0646\u0639 \u0645\u0646 \u0643\u0644 \u0639\u062B\u0631\u0629 \u0637\u0631\u0641\u0629 \u0648\u0636\u062D\u0643\u0629!",
    flagshipWorks: ["\u0627\u0644\u0642\u0646\u0627\u0639 \u0627\u0644\u0623\u062E\u0636\u0631", "\u062A\u0627\u0645\u0627 \u0648\u0627\u0644\u0623\u0635\u062F\u0642\u0627\u0621", "\u0627\u0644\u0636\u0627\u062D\u0643\u0648\u0646", "\u0645\u0633\u062A\u0631 \u0628\u064A\u0646"],
    color: "#10b981",
    bgClass: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
    glowColor: "rgba(16, 185, 129, 0.4)",
    isEnabled: true,
    order: 4,
    threeDConfig: {
      hasRings: false,
      ringColor: "rgba(16, 185, 129, 0.6)",
      ringTilt: 15,
      textureStyle: "comedy",
      rotationSpeed: 1.3,
      atmosphereGlow: "#10b981",
      scale: 0.96
    }
  },
  {
    id: "emerald",
    name: "\u0643\u0648\u0643\u0628 \u0632\u0645\u0631\u062F\u0629",
    arabicGenre: "\u0632\u0645\u0631\u062F\u0629",
    genreKey: "Drama",
    badge: "\u{1F48E}",
    icon: "diamond",
    slogan: "\u0643\u0648\u0643\u0628 \u0627\u0644\u0641\u062A\u064A\u0627\u062A \u0648\u0627\u0644\u0631\u0642\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0639\u0631 \u0627\u0644\u0646\u0628\u064A\u0644\u0629",
    description: "\u0642\u0635\u0635 \u0627\u0644\u0643\u0641\u0627\u062D \u0648\u0627\u0644\u0623\u0645\u0644\u060C \u0627\u0644\u0635\u062F\u0627\u0642\u0629 \u0627\u0644\u0635\u0627\u062F\u0642\u0629\u060C \u0648\u0631\u0642\u0629 \u0627\u0644\u0645\u0634\u0627\u0639\u0631 \u0627\u0644\u062A\u064A \u062A\u0628\u0646\u064A \u062C\u0633\u0648\u0631\u0627\u064B \u0645\u0646 \u0627\u0644\u0646\u0648\u0631 \u0641\u064A \u0623\u0635\u0639\u0628 \u0627\u0644\u0638\u0631\u0648\u0641.",
    anthemSnippet: "\u0643\u0627\u0644\u0632\u0647\u0631\u0629 \u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D \u062A\u0646\u0634\u0631 \u0639\u0637\u0631 \u0627\u0644\u0623\u0645\u0644\u060C \u0648\u0627\u0644\u0642\u0644\u0628 \u0627\u0644\u0635\u0627\u0641\u064A \u064A\u0647\u0632\u0645 \u0623\u0635\u0639\u0628 \u0627\u0644\u0645\u062D\u0646!",
    flagshipWorks: ["\u062F\u0631\u0648\u0628 \u0631\u064A\u0645\u064A", "\u0633\u0627\u0644\u064A", "\u0644\u064A\u062F\u064A \u0623\u0648\u0633\u0643\u0627\u0631", "\u0633\u0646\u062F\u0631\u064A\u0644\u0627"],
    color: "#ec4899",
    bgClass: "bg-pink-500/15 border-pink-500/30 text-pink-400",
    glowColor: "rgba(236, 72, 153, 0.4)",
    isEnabled: true,
    order: 5,
    threeDConfig: {
      hasRings: true,
      ringColor: "rgba(236, 72, 153, 0.8)",
      ringTilt: -25,
      textureStyle: "emerald",
      rotationSpeed: 0.85,
      atmosphereGlow: "#ec4899",
      scale: 1.02
    }
  },
  {
    id: "mystery",
    name: "\u0643\u0648\u0643\u0628 \u063A\u0645\u0648\u0636",
    arabicGenre: "\u063A\u0645\u0648\u0636",
    genreKey: "Mystery",
    badge: "\u{1F50D}",
    icon: "search",
    slogan: "\u0643\u0648\u0643\u0628 \u0627\u0644\u0623\u0644\u063A\u0627\u0632 \u0648\u0627\u0644\u062A\u062D\u0642\u064A\u0642\u0627\u062A \u0648\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u062D\u0627\u062F",
    description: "\u062E\u064A\u0648\u0637 \u0627\u0644\u062C\u0631\u0627\u0626\u0645 \u0627\u0644\u0645\u0639\u0642\u062F\u0629\u060C \u0641\u0643 \u0627\u0644\u0634\u0641\u0631\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0639\u0635\u064A\u0629\u060C \u0648\u0645\u0637\u0627\u0631\u062F\u0629 \u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0645\u0647\u0645\u0627 \u0643\u0627\u0646\u062A \u0645\u062D\u062C\u0648\u0628\u0629 \u0639\u0646 \u0627\u0644\u0623\u0639\u064A\u0646.",
    anthemSnippet: "\u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u062F\u0627\u0626\u0645\u0627\u064B \u0648\u0627\u062D\u062F\u0629\u060C \u0648\u0639\u064A\u0646 \u0627\u0644\u0645\u062D\u0642\u0642 \u0627\u0644\u0630\u0643\u064A \u0644\u0627 \u062A\u063A\u0641\u0644 \u0639\u0646 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644!",
    flagshipWorks: ["\u0627\u0644\u0645\u062D\u0642\u0642 \u0643\u0648\u0646\u0627\u0646", "\u0627\u0644\u0645\u062D\u0642\u0642 \u0631\u064A\u0645\u064A", "\u0634\u0627\u0631\u0644\u0648\u0643 \u0647\u0648\u0644\u0645\u0632", "\u0628\u0627\u062A\u0645\u0627\u0646"],
    color: "#06b6d4",
    bgClass: "bg-cyan-500/15 border-cyan-500/30 text-cyan-400",
    glowColor: "rgba(6, 182, 212, 0.4)",
    isEnabled: true,
    order: 6,
    threeDConfig: {
      hasRings: true,
      ringColor: "rgba(6, 182, 212, 0.65)",
      ringTilt: 45,
      textureStyle: "mystery",
      rotationSpeed: 0.7,
      atmosphereGlow: "#06b6d4",
      scale: 1
    }
  },
  {
    id: "scifi",
    name: "\u0643\u0648\u0643\u0628 \u0639\u0644\u0648\u0645",
    arabicGenre: "\u0639\u0644\u0648\u0645",
    genreKey: "Sci-Fi",
    badge: "\u{1F52C}",
    icon: "rocket_launch",
    slogan: "\u0643\u0648\u0643\u0628 \u0627\u0644\u0627\u0643\u062A\u0634\u0627\u0641\u0627\u062A \u0648\u0627\u0644\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627 \u0648\u0627\u0644\u0643\u0648\u0646 \u0627\u0644\u0641\u0633\u064A\u062D",
    description: "\u0622\u0641\u0627\u0642 \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644\u060C \u0645\u062C\u0631\u0627\u062A \u0627\u0644\u0641\u0636\u0627\u0621 \u0627\u0644\u062E\u0627\u0631\u062C\u064A\u060C \u0648\u0627\u0644\u0631\u0648\u0628\u0648\u062A\u0627\u062A \u0627\u0644\u0645\u062A\u0642\u062F\u0645\u0629 \u0641\u064A \u062E\u062F\u0645\u0629 \u0627\u0644\u0628\u0634\u0631\u064A\u0629.",
    anthemSnippet: "\u0628\u0627\u0644\u0639\u0644\u0645 \u0648\u0627\u0644\u0625\u0631\u0627\u062F\u0629 \u0646\u0635\u0644 \u0625\u0644\u0649 \u0627\u0644\u0646\u062C\u0648\u0645 \u0648\u0646\u0628\u0646\u064A \u063A\u062F \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644 \u0627\u0644\u0645\u0634\u0631\u0642!",
    flagshipWorks: ["\u063A\u0631\u0646\u062F\u0627\u064A\u0632\u0631", "\u0623\u0628\u0637\u0627\u0644 \u0627\u0644\u062C\u0632\u064A\u0631\u0629", "\u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u0646\u062E\u064A\u0644", "\u0628\u0627\u0635 \u0627\u0644\u0645\u062F\u0631\u0633\u0629 \u0627\u0644\u0639\u062C\u064A\u0628"],
    color: "#14b8a6",
    bgClass: "bg-teal-500/15 border-teal-500/30 text-teal-400",
    glowColor: "rgba(20, 184, 166, 0.4)",
    isEnabled: true,
    order: 7,
    threeDConfig: {
      hasRings: true,
      ringColor: "rgba(20, 184, 166, 0.75)",
      ringTilt: -15,
      textureStyle: "scifi",
      rotationSpeed: 1.35,
      atmosphereGlow: "#14b8a6",
      scale: 1.08
    }
  },
  {
    id: "classics",
    name: "\u0643\u0648\u0643\u0628 \u062A\u0627\u0631\u064A\u062E",
    arabicGenre: "\u062A\u0627\u0631\u064A\u062E",
    genreKey: "Historical",
    badge: "\u{1F4DC}",
    icon: "history_edu",
    slogan: "\u0643\u0648\u0643\u0628 \u0627\u0644\u0639\u0628\u0631 \u0648\u0627\u0644\u0623\u0645\u062C\u0627\u062F \u0648\u0633\u064A\u0631 \u0627\u0644\u0643\u0628\u0627\u0631 \u0627\u0644\u062E\u0627\u0644\u062F\u0629",
    description: "\u0623\u0631\u0634\u064A\u0641 \u0627\u0644\u0632\u0647\u0631\u0629 \u0627\u0644\u0630\u0647\u0628\u064A \u0648\u0633\u064A\u0631 \u0627\u0644\u0623\u0628\u0637\u0627\u0644 \u0627\u0644\u062A\u0627\u0631\u064A\u062E\u064A\u0629 \u0627\u0644\u062A\u064A \u0623\u0644\u0647\u0645\u062A \u0623\u062C\u064A\u0627\u0644\u0627\u064B \u0639\u0628\u0631 \u0627\u0644\u0632\u0645\u0627\u0646.",
    anthemSnippet: "\u0645\u0646 \u0645\u0627\u0636\u064A\u0646\u0627 \u0627\u0644\u0639\u0631\u064A\u0642 \u0646\u0633\u062A\u0644\u0647\u0645 \u0627\u0644\u0639\u0628\u0631\u060C \u0644\u0646\u0633\u064A\u0631 \u0641\u064A \u062F\u0631\u0628 \u0627\u0644\u0645\u062C\u062F \u0648\u0627\u0644\u0638\u0641\u0631!",
    flagshipWorks: ["\u0635\u0642\u0648\u0631 \u0627\u0644\u0623\u0631\u0636", "\u0627\u0644\u0631\u0645\u064A\u0629 \u0627\u0644\u0645\u0644\u062A\u0647\u0628\u0629", "\u0645\u0627\u0648\u0643\u0644\u064A", "\u062C\u0632\u064A\u0631\u0629 \u0627\u0644\u0643\u0646\u0632"],
    color: "#d97706",
    bgClass: "bg-amber-600/15 border-amber-600/30 text-amber-500",
    glowColor: "rgba(217, 119, 6, 0.4)",
    isEnabled: true,
    order: 8,
    threeDConfig: {
      hasRings: true,
      ringColor: "rgba(217, 119, 6, 0.7)",
      ringTilt: 30,
      textureStyle: "classics",
      rotationSpeed: 0.6,
      atmosphereGlow: "#d97706",
      scale: 1.12
    }
  },
  {
    id: "movies",
    name: "\u0643\u0648\u0643\u0628 \u0623\u0641\u0644\u0627\u0645",
    arabicGenre: "\u0623\u0641\u0644\u0627\u0645",
    genreKey: "Movie",
    badge: "\u{1F3AC}",
    icon: "movie",
    slogan: "\u0643\u0648\u0643\u0628 \u0627\u0644\u0639\u0631\u0648\u0636 \u0627\u0644\u0643\u0628\u0631\u0649 \u0648\u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0642\u0629",
    description: "\u0623\u0631\u0648\u0639 \u0627\u0644\u0623\u0641\u0644\u0627\u0645 \u0627\u0644\u0637\u0648\u064A\u0644\u0629 \u0627\u0644\u062D\u0635\u0631\u064A\u0629 \u0648\u0627\u0644\u0625\u0646\u062A\u0627\u062C\u0627\u062A \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u062C\u0648\u062F\u0629 \u0633\u064A\u0646\u0645\u0627\u0626\u064A\u0629 \u0641\u0627\u0626\u0642\u0629 4K.",
    anthemSnippet: "\u062A\u062C\u0631\u0628\u0629 \u0633\u064A\u0646\u0645\u0627\u0626\u064A\u0629 \u062A\u0623\u0633\u0631 \u0627\u0644\u062D\u0648\u0627\u0633 \u0648\u062A\u0646\u0642\u0644\u0643 \u0625\u0644\u0649 \u0642\u0644\u0628 \u0627\u0644\u0642\u0635\u0629!",
    flagshipWorks: ["\u0641\u064A\u0644\u0645 \u0633\u0644\u0627\u0645 \u062F\u0627\u0646\u0643", "\u0641\u064A\u0644\u0645 \u0627\u0644\u0645\u062D\u0642\u0642 \u0643\u0648\u0646\u0627\u0646", "\u0641\u064A\u0644\u0645 \u0648\u0646 \u0628\u064A\u0633 \u0631\u064A\u062F"],
    color: "#8b5cf6",
    bgClass: "bg-purple-500/15 border-purple-500/30 text-purple-400",
    glowColor: "rgba(139, 92, 246, 0.4)",
    isEnabled: true,
    order: 9,
    threeDConfig: {
      hasRings: true,
      ringColor: "rgba(139, 92, 246, 0.8)",
      ringTilt: 18,
      textureStyle: "movies",
      rotationSpeed: 0.9,
      atmosphereGlow: "#8b5cf6",
      scale: 1.05
    }
  },
  {
    id: "bonbon",
    name: "\u0643\u0648\u0643\u0628 \u0628\u0648\u0646 \u0628\u0648\u0646",
    arabicGenre: "\u0623\u0637\u0641\u0627\u0644",
    genreKey: "Kids",
    badge: "\u{1F36D}",
    icon: "child_care",
    slogan: "\u0643\u0648\u0643\u0628 \u0627\u0644\u0635\u063A\u0627\u0631 \u0648\u0627\u0644\u0645\u0631\u062D \u0648\u0627\u0644\u0628\u062F\u0627\u064A\u0627\u062A \u0627\u0644\u0644\u0637\u064A\u0641\u0629",
    description: "\u062D\u0643\u0627\u064A\u0627\u062A \u062A\u0631\u0628\u0648\u064A\u0629 \u062F\u0627\u0641\u0626\u0629 \u0648\u0631\u0633\u0648\u0645 \u0645\u062A\u062D\u0631\u0643\u0629 \u0645\u0631\u062D\u0629 \u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0643\u0627\u0641\u0629 \u0623\u0641\u0631\u0627\u062F \u0627\u0644\u0639\u0627\u0626\u0644\u0629 \u0648\u0627\u0644\u0628\u0631\u0627\u0639\u0645.",
    anthemSnippet: "\u0643\u0648\u0643\u0628 \u0627\u0644\u0623\u0628\u0637\u0627\u0644 \u0627\u0644\u0635\u063A\u0627\u0631 \u062D\u064A\u062B \u0627\u0644\u0645\u0631\u062D \u0648\u0627\u0644\u062A\u0639\u0644\u0645 \u0648\u0627\u0644\u0623\u062D\u0644\u0627\u0645 \u0627\u0644\u0648\u0631\u062F\u064A\u0629!",
    flagshipWorks: ["\u0628\u0627\u0628\u0627\u0631 \u0627\u0644\u0641\u064A\u0644", "\u0628\u064A\u0644 \u0648\u0633\u0628\u0627\u0633\u062A\u064A\u0627\u0646", "\u0641\u0644\u0648\u0646\u0629", "\u062A\u0627\u0645\u0627 \u0648\u0627\u0644\u0623\u0635\u062F\u0642\u0627\u0621"],
    color: "#f43f5e",
    bgClass: "bg-rose-500/15 border-rose-500/30 text-rose-400",
    glowColor: "rgba(244, 63, 94, 0.4)",
    isEnabled: true,
    order: 10,
    threeDConfig: {
      hasRings: true,
      ringColor: "rgba(244, 63, 94, 0.75)",
      ringTilt: -20,
      textureStyle: "bonbon",
      rotationSpeed: 1.1,
      atmosphereGlow: "#f43f5e",
      scale: 0.94
    }
  }
];

// src/routes/planets.routes.ts
var planetsRoutes = new import_hono9.Hono();
planetsRoutes.get("/", async (c) => {
  try {
    const enabledPlanets = DEFAULT_ADMIN_PLANETS.filter((p) => p.isEnabled).sort(
      (a, b) => a.order - b.order
    );
    return sendSuccess(c, {
      planets: enabledPlanets,
      settings: DEFAULT_PLANETS_SETTINGS
    });
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0643\u0648\u0627\u0643\u0628", 500);
  }
});
planetsRoutes.get("/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const planet = DEFAULT_ADMIN_PLANETS.find((p) => p.id === id);
    if (!planet) {
      return sendError(c, "NOT_FOUND", "\u0627\u0644\u0643\u0648\u0643\u0628 \u0627\u0644\u0645\u0637\u0644\u0648\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F", 404);
    }
    const matchingAnimes = await prisma.anime.findMany({
      where: {
        OR: [
          { genres: { has: planet.genreKey } },
          { genres: { has: planet.arabicGenre } }
        ]
      },
      take: 20
    });
    return sendSuccess(c, {
      planet,
      animes: matchingAnimes
    });
  } catch (error) {
    return sendError(c, "FETCH_ERROR", error.message || "\u0641\u0634\u0644 \u062C\u0644\u0628 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0643\u0648\u0643\u0628", 500);
  }
});

// src/index.ts
var app = new import_hono10.Hono();
app.use("*", (0, import_logger.logger)());
app.use("*", (0, import_pretty_json.prettyJSON)());
app.use(
  "*",
  (0, import_cors.cors)({
    origin: (origin) => {
      if (!origin || origin.includes("localhost") || origin.includes("127.0.0.1") || origin.endsWith(".vercel.app") || origin === "https://slam-dunk-w.vercel.app") {
        return origin || "*";
      }
      return "https://slam-dunk-w.vercel.app";
    },
    credentials: true,
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
    exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
    maxAge: 600
  })
);
app.get("/health", (c) => {
  return c.json({
    status: "ok",
    service: "ANIME DAZE / Slam Dunk Hono Backend",
    engine: "Hono.js on Vercel Serverless",
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    version: "2.5.0"
  });
});
app.get("/", (c) => {
  return c.json({
    message: "Welcome to ANIME DAZE Standalone API Gateway",
    documentation: "/api/v1/animes",
    health: "/health"
  });
});
app.get("/api", (c) => {
  return c.json({
    status: "ok",
    service: "ANIME DAZE / Slam Dunk Hono Backend",
    engine: "Hono.js on Vercel Serverless",
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    version: "2.5.0"
  });
});
app.get("/api/health", (c) => {
  return c.json({
    status: "ok",
    service: "ANIME DAZE / Slam Dunk Hono Backend",
    engine: "Hono.js on Vercel Serverless",
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    version: "2.5.0"
  });
});
app.route("/api/v1/auth/sessions", sessionsRoutes);
app.route("/api/v1/auth", authRoutes);
app.route("/api/v1/animes", animesRoutes);
app.route("/api/v1/characters", charactersRoutes);
app.route("/api/v1/episodes", episodesRoutes);
app.route("/api/v1/me", meRoutes);
app.route("/api/v1/planets", planetsRoutes);
app.route("/api/planets", planetsRoutes);
app.route("/api/mobile/v1", mobileRoutes);
app.route("/api/admin", adminRoutes);
app.notFound((c) => {
  return sendError(c, "NOT_FOUND", `\u0627\u0644\u0645\u0633\u0627\u0631 \u0627\u0644\u0645\u0637\u0644\u0648\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F: ${c.req.method} ${c.req.path}`, 404);
});
app.onError((err, c) => {
  console.error("Hono Application Error:", err);
  return sendError(c, "INTERNAL_SERVER_ERROR", err.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u063A\u064A\u0631 \u0645\u062A\u0648\u0642\u0639 \u0641\u064A \u062E\u0627\u062F\u0645 \u0627\u0644\u0640 API", 500);
});
var index_default = app;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  app
});
const { handle } = require('@hono/node-server/vercel'); module.exports = handle(app); module.exports.default = module.exports;
