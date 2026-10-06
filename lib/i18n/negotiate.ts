import type { Locale } from "./config";

/** Idioma soportado con mayor peso en Accept-Language, o null si no menciona es/en. */
export function preferredLocale(acceptLanguage: string | null | undefined): Locale | null {
  if (!acceptLanguage) return null;

  let best: { locale: Locale; q: number } | null = null;
  for (const part of acceptLanguage.split(",")) {
    const [rawTag, ...params] = part.trim().split(";");
    const base = rawTag.trim().toLowerCase().split("-")[0];
    if (base !== "es" && base !== "en") continue;

    const qParam = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
    const q = qParam ? Number(qParam.slice(2)) : 1;
    if (!Number.isFinite(q) || q <= 0) continue;

    if (!best || q > best.q) best = { locale: base, q };
  }
  return best?.locale ?? null;
}

/**
 * Primera visita a una página en español desde un navegador que prefiere inglés.
 * Si ya hay una preferencia guardada (cookie), se respeta siempre.
 */
export function shouldRedirectToEnglish(input: {
  isSpanishPage: boolean;
  cookieLocale: string | undefined;
  acceptLanguage: string | null;
}): boolean {
  if (!input.isSpanishPage) return false;
  if (input.cookieLocale) return false;
  return preferredLocale(input.acceptLanguage) === "en";
}
