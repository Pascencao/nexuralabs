import type { Metadata, Viewport } from "next";
import type { Locale } from "./config";
import { getDictionary } from "./dictionaries";
import { SITE_URL } from "@/lib/site";
import { ROUTES, type PageKey } from "./routes";
import type { Dictionary } from "./types";

export const siteViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F1B2D",
};

/** Metadata común a todas las páginas de un idioma (la usan los layouts). */
export function baseMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.homeTitle,
      template: "%s | Nexura Labs",
    },
    description: dict.meta.homeDescription,
    keywords: dict.meta.homeKeywords,
    authors: [{ name: "Nexura Labs", url: SITE_URL }],
    icons: {
      icon: [{ url: "/favicon.png", type: "image/png" }],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
    manifest: "/manifest.json",
    robots: { index: true, follow: true },
  };
}

const OG_LOCALE: Record<Locale, string> = { es: "es_AR", en: "en_US" };

const PAGE_TEXT: Record<PageKey, (d: Dictionary) => { title: string; description: string }> = {
  home: (d) => ({ title: d.meta.homeTitle, description: d.meta.homeDescription }),
  privacy: (d) => ({ title: d.meta.privacyTitle, description: d.meta.privacyDescription }),
  terms: (d) => ({ title: d.meta.termsTitle, description: d.meta.termsDescription }),
};

/** Metadata de una página: título, canonical, hreflang (es/en/x-default), Open Graph y Twitter. */
export function buildMetadata(key: PageKey, locale: Locale): Metadata {
  const { title, description } = PAGE_TEXT[key](getDictionary(locale));
  const other: Locale = locale === "es" ? "en" : "es";
  const path = ROUTES[key][locale];

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: path,
      languages: {
        es: ROUTES[key].es,
        en: ROUTES[key].en,
        "x-default": ROUTES[key].es,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Nexura Labs",
      locale: OG_LOCALE[locale],
      alternateLocale: OG_LOCALE[other],
      url: path,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
