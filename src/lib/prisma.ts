import dns from "node:dns";
if (dns.setDefaultResultOrder) {
  dns.setDefaultResultOrder("ipv4first");
}

import dotenv from "dotenv";
dotenv.config();

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

declare global {
  var prismaInstance: PrismaClient | undefined;
}

const connectionString = process.env.DATABASE_URL || "";
if (!connectionString) {
  console.error("⚠️ [CRITICAL] DATABASE_URL is missing! Please set DATABASE_URL in Vercel Environment Variables.");
}

const isLocal = connectionString.includes("localhost") || connectionString.includes("127.0.0.1");
const isServerless = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.NODE_ENV === "production");

const pool = new pg.Pool({
  connectionString: connectionString || undefined,
  ssl: isLocal ? false : { rejectUnauthorized: false },
  max: isServerless ? (Number(process.env.PG_POOL_MAX) || 2) : 10,
  idleTimeoutMillis: isServerless ? 10000 : 30000,
  connectionTimeoutMillis: 5000,
});

const adapter = new PrismaPg(pool);

export const prisma =
  global.prismaInstance ||
  new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  global.prismaInstance = prisma;
}

export default prisma;
