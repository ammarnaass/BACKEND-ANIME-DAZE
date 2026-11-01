import { handle } from "hono/vercel";
import app from "../src/index";

// Use Node.js runtime on Vercel for Prisma PostgreSQL compatibility
export const config = {
  runtime: "nodejs",
};

export default handle(app);
