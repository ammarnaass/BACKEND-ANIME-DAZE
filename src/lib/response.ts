import { Context } from "hono";
import { ContentfulStatusCode } from "hono/utils/http-status";

export function sendSuccess<T>(
  c: Context,
  data: T,
  meta?: any,
  status: ContentfulStatusCode = 200
) {
  return c.json(
    {
      ok: true,
      success: true,
      data,
      ...(meta ? { meta } : {}),
    },
    status
  );
}

export function sendError(
  c: Context,
  code: string,
  message: string,
  status: ContentfulStatusCode = 400,
  details?: any
) {
  return c.json(
    {
      ok: false,
      error: {
        code,
        message,
        details: details ?? null,
      },
    },
    status
  );
}
