import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { ROUTES, type PageKey } from "@/lib/i18n/routes";
import { absoluteUrl } from "@/lib/site";

const SETTINGS: Record<
  PageKey,
  { priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }
> = {
  home: { priority: 1, changeFrequency: "weekly" },
  privacy: { priority: 0.4, changeFrequency: "yearly" },
  terms: { priority: 0.4, changeFrequency: "yearly" },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return (Object.keys(ROUTES) as PageKey[]).flatMap((key) =>
    locales.map((locale) => ({
      url: absoluteUrl(ROUTES[key][locale]),
      lastModified: now,
      ...SETTINGS[key],
      alternates: {
        languages: {
          es: absoluteUrl(ROUTES[key].es),
          en: absoluteUrl(ROUTES[key].en),
        },
      },
    })),
  );
}
