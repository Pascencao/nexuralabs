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

const BOT_PATTERN =
  /bot|crawler|spider|crawling|facebookexternalhit|facebookcatalog|meta-externalagent|linkedin|slack|whatsapp|twitter|telegram|discord|preview|embedly|skype/i;

/** Rastreadores y previsualizadores de enlaces: no guardan cookies, así que nunca se redirigen. */
export function isBot(userAgent: string | null | undefined): boolean {
  if (!userAgent) return false;
  return BOT_PATTERN.test(userAgent);
}

/**
 * Primera visita a una página en español desde un navegador que prefiere inglés.
 * Si ya hay una preferencia guardada (cookie), se respeta siempre. Los bots nunca se redirigen.
 */
export function shouldRedirectToEnglish(input: {
  isSpanishPage: boolean;
  cookieLocale: string | undefined;
  acceptLanguage: string | null;
  userAgent: string | null;
}): boolean {
  if (!input.isSpanishPage) return false;
  if (input.cookieLocale) return false;
  if (isBot(input.userAgent)) return false;
  return preferredLocale(input.acceptLanguage) === "en";
}
