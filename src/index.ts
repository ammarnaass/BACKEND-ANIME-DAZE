import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { sendError } from "./lib/response";
import { isAllowedOrigin } from "./lib/config";

import { authRoutes } from "./routes/auth.routes";
import { sessionsRoutes } from "./routes/sessions.routes";
import { animesRoutes } from "./routes/animes.routes";
import { charactersRoutes } from "./routes/characters.routes";
import { episodesRoutes } from "./routes/episodes.routes";
import { meRoutes } from "./routes/me.routes";
import { mobileRoutes } from "./routes/mobile.routes";
import { adminRoutes } from "./routes/admin.routes";
import { planetsRoutes } from "./routes/planets.routes";
import { reportsRoutes } from "./routes/reports.routes";

export const app = new Hono();

// Global Middlewares
app.use("*", logger());
app.use("*", prettyJSON());

// Secure CORS Configuration
app.use(
  "*",
  cors({
    origin: (origin) => {
      if (isAllowedOrigin(origin)) {
        return origin || "*";
      }
      return "https://slam-dunk-w.vercel.app";
    },
    credentials: true,
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
    exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
    maxAge: 600,
  })
);

// Health Check Endpoints
app.get("/health", (c) => {
  return c.json({
    status: "ok",
    service: "ANIME DAZE / Slam Dunk Hono Backend",
    engine: "Hono.js on Vercel Serverless",
    timestamp: new Date().toISOString(),
    version: "2.6.0",
  });
});

app.get("/", (c) => {
  return c.json({
    status: "ok",
    message: "Welcome to ANIME DAZE Standalone Streaming API Gateway",
    documentation: "/api/v1/animes",
    health: "/health",
    version: "2.6.0",
  });
});

app.get("/api", (c) => {
  return c.json({
    status: "ok",
    service: "ANIME DAZE / Slam Dunk Hono Backend",
    engine: "Hono.js on Vercel Serverless",
    timestamp: new Date().toISOString(),
    version: "2.6.0",
  });
});

app.get("/api/health", (c) => {
  return c.json({
    status: "ok",
    service: "ANIME DAZE / Slam Dunk Hono Backend",
    engine: "Hono.js on Vercel Serverless",
    timestamp: new Date().toISOString(),
    version: "2.6.0",
  });
});

// Mount Routes
app.route("/api/v1/auth/sessions", sessionsRoutes);
app.route("/api/v1/auth", authRoutes);
app.route("/api/v1/animes", animesRoutes);
app.route("/api/v1/characters", charactersRoutes);
app.route("/api/v1/episodes", episodesRoutes);
app.route("/api/v1/me", meRoutes);
app.route("/api/v1/planets", planetsRoutes);
app.route("/api/planets", planetsRoutes);
app.route("/api/v1/reports", reportsRoutes);
app.route("/api/mobile/v1", mobileRoutes);
app.route("/api/admin", adminRoutes);

// 404 Handler
app.notFound((c) => {
  return sendError(c, "NOT_FOUND", `المسار المطلوب غير موجود: ${c.req.method} ${c.req.path}`, 404);
});

// Centralized Error Handler (Masking internal details in production)
app.onError((err, c) => {
  console.error("Hono Application Error:", err);
  const isProd = process.env.NODE_ENV === "production";
  const safeMessage = isProd
    ? "حدث خطأ غير متوقع في الخادم، يرجى المحاولة لاحقاً"
    : (err.message || "حدث خطأ غير متوقع في خادم الـ API");
  return sendError(c, "INTERNAL_SERVER_ERROR", safeMessage, 500);
});

export default app;
