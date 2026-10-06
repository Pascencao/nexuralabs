import type { Locale } from "./config";

/**
 * Única fuente de verdad de las páginas y su URL en cada idioma.
 * Español sin prefijo, inglés bajo /en. Agregar acá las landings nuevas.
 */
export const ROUTES = {
  home: { es: "/", en: "/en" },
  privacy: { es: "/privacy", en: "/en/privacy" },
  terms: { es: "/terms", en: "/en/terms" },
  iaPosventa: { es: "/ia-posventa", en: "/en/ai-after-sales" },
  rescateIa: { es: "/rescate-ia", en: "/en/ai-rescue" },
} as const satisfies Record<string, Record<Locale, string>>;

export type PageKey = keyof typeof ROUTES;

/** Landings de un solo mensaje: header reducido (logo, idioma y "Hablemos"). */
export const LANDING_KEYS = ["iaPosventa", "rescateIa"] as const satisfies readonly PageKey[];

const LOCALES_IN_ORDER: readonly Locale[] = ["es", "en"];

function normalize(pathname: string): string {
  if (!pathname) return "/";
  return pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export function pageKeyFromPath(pathname: string): { key: PageKey; locale: Locale } | null {
  const path = normalize(pathname);
  for (const key of Object.keys(ROUTES) as PageKey[]) {
    for (const locale of LOCALES_IN_ORDER) {
      if (ROUTES[key][locale] === path) return { key, locale };
    }
  }
  return null;
}

/** Ruta equivalente en `target`; si `pathname` no está en la tabla, la home de `target`. */
export function alternatePath(pathname: string, target: Locale): string {
  const match = pageKeyFromPath(pathname);
  return match ? ROUTES[match.key][target] : ROUTES.home[target];
}

export function homeAnchor(locale: Locale, anchor: string): string {
  return `${ROUTES.home[locale]}#${anchor}`;
}

export function isLandingPath(pathname: string): boolean {
  const match = pageKeyFromPath(pathname);
  return match !== null && (LANDING_KEYS as readonly PageKey[]).includes(match.key);
}
