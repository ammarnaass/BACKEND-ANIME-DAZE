import { serve } from "@hono/node-server";
import app from "./index";

const port = Number(process.env.PORT) || 4000;

console.log(`🏀 Standalone Hono.js Backend running on http://localhost:${port}`);
console.log(`🚀 Health Check: http://localhost:${port}/health`);
console.log(`📚 API Endpoint: http://localhost:${port}/api/v1/animes`);

serve({
  fetch: app.fetch,
  port,
});
