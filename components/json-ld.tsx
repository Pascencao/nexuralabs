import { getDictionary } from "@/lib/i18n/dictionaries";
import { defaultLocale } from "@/lib/i18n/config";
import { SITE_URL, absoluteUrl } from "@/lib/site";
import { SOCIAL_LINKS } from "@/lib/social";

export default function JsonLd() {
  const dict = getDictionary(defaultLocale);

  const organizationJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nexuralabs",
    url: SITE_URL,
    logo: absoluteUrl("/favicon.png"),
    sameAs: SOCIAL_LINKS.map((l) => l.href),
    description: dict.jsonLd.organizationDescription,
  };

  const websiteJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nexuralabs",
    url: SITE_URL,
    publisher: { "@type": "Organization", name: "Nexuralabs" },
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
