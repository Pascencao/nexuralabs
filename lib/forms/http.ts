/** Tope de tamaño del body de los formularios (bytes). */
export const MAX_BODY_BYTES = 10_000;

export type ParsedBody =
  | { ok: true; body: Record<string, unknown> }
  | { ok: false; status: 400 | 413 };

export async function readJsonBody(request: Request): Promise<ParsedBody> {
  const raw = await request.text();
  if (new TextEncoder().encode(raw).length > MAX_BODY_BYTES) return { ok: false, status: 413 };
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return { ok: false, status: 400 };
    }
    return { ok: true, body: parsed as Record<string, unknown> };
  } catch {
    return { ok: false, status: 400 };
  }
}
