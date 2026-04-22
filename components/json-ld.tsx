import { headers } from "next/headers";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { SITE_URL, absoluteUrl } from "@/lib/site";
import { SOCIAL_LINKS } from "@/lib/social";

export default async function JsonLd() {
  const h = await headers();
  const raw = h.get("x-next-locale") ?? "es";
  const locale = isLocale(raw) ? raw : "es";
  const dict = getDictionary(locale);

  const organizationJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nexura Labs",
    url: SITE_URL,
    logo: absoluteUrl("/favicon.png"),
    sameAs: SOCIAL_LINKS.map((l) => l.href),
    description: dict.jsonLd.organizationDescription,
  };

  const websiteJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nexura Labs",
    url: SITE_URL,
    publisher: { "@type": "Organization", name: "Nexura Labs" },
    inLanguage: dict.jsonLd.websiteLanguage,
  };

  const payload = [organizationJson, websiteJson];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
