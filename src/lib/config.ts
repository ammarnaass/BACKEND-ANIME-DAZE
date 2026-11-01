import dotenv from "dotenv";
dotenv.config();

const rawJwtSecret = process.env.JWT_SECRET;
if (!rawJwtSecret) {
  if (process.env.NODE_ENV === "production") {
    console.error("🚨 [CRITICAL SECURITY ERROR]: JWT_SECRET is not set in environment variables! Using insecure fallback is disabled in production.");
  } else {
    console.warn("⚠️ [DEV WARNING]: JWT_SECRET is not set. Using local development fallback key.");
  }
}

export const JWT_SECRET_STRING = rawJwtSecret || "slam-dunk-dev-only-secret-key-change-in-production";
export const JWT_SECRET_ENCODED = new TextEncoder().encode(JWT_SECRET_STRING);

// Configured allowed origins for CORS
export const TRUSTED_DOMAINS = [
  "https://slam-dunk-w.vercel.app",
  "https://slamdunk.vercel.app",
];

export function isAllowedOrigin(origin?: string): boolean {
  if (!origin) return true; // allow mobile apps, curl, server-to-server

  // Local development allowed origins
  if (
    origin === "http://localhost:3000" ||
    origin === "http://localhost:4000" ||
    origin === "http://localhost:5173" ||
    origin === "http://127.0.0.1:3000" ||
    origin === "http://127.0.0.1:4000" ||
    origin === "http://127.0.0.1:5173"
  ) {
    return true;
  }

  // Trusted production domains
  if (TRUSTED_DOMAINS.includes(origin)) {
    return true;
  }

  // Allowed custom production/staging domain pattern (slam-dunk-w*.vercel.app)
  if (/^https:\/\/slam-dunk-w[a-z0-9-]*\.vercel\.app$/.test(origin)) {
    return true;
  }

  return false;
}
