/** Tiempo mínimo entre que se muestra el formulario y se envía; menos que esto es casi seguro un bot. */
export const MIN_FILL_MS = 2000;

export function isLikelyBot(input: { honeypot: unknown; elapsedMs: unknown }): boolean {
  if (input.honeypot !== undefined && input.honeypot !== null) {
    if (typeof input.honeypot !== "string" || input.honeypot.trim() !== "") return true;
  }
  const elapsed = input.elapsedMs;
  if (typeof elapsed !== "number" || !Number.isFinite(elapsed)) return true;
  return elapsed < MIN_FILL_MS;
}
