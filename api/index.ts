import { handle } from "@hono/node-server/vercel";
import app from "../src/index";

// Force Node.js Serverless Function runtime on Vercel for Prisma compatibility
export const config = {
  runtime: "nodejs",
};

export default handle(app);
