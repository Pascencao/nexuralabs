import type { Metadata, Viewport } from "next";
import type { Locale } from "./config";
import { getDictionary } from "./dictionaries";
import { SITE_URL } from "@/lib/site";

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
