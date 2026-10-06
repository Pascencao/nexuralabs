export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

/** Cookie con la preferencia explícita de idioma (toggle o primera redirección). */
export const LOCALE_COOKIE = "nexuralabs-locale";

export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
