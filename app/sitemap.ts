import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");
  const now = new Date();

  const localizedPaths = ["", "/privacy", "/terms"] as const;

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const suffix of localizedPaths) {
      const path = `/${locale}${suffix}`;
      entries.push({
        url: `${base}${path}`,
        lastModified: now,
        changeFrequency: suffix === "" ? "weekly" : "yearly",
        priority: suffix === "" ? 1 : 0.4,
      });
    }
  }

  return entries;
}
