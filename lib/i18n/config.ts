export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const LOCALE_COOKIE = "NEXT_LOCALE";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function negotiateLocale(
  acceptLanguage: string | null,
  cookieLocale: string | undefined,
): Locale {
  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale;
  }
  if (acceptLanguage) {
    const first = acceptLanguage.split(",")[0]?.trim().toLowerCase() ?? "";
    if (first.startsWith("en")) return "en";
  }
  return defaultLocale;
}
