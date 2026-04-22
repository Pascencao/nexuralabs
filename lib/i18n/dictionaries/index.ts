import type { Locale } from "../config";
import { defaultLocale, isLocale } from "../config";
import type { Dictionary } from "../types";
import en from "./en";
import es from "./es";

const byLocale: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: string): Dictionary {
  return isLocale(locale) ? byLocale[locale] : byLocale[defaultLocale];
}
