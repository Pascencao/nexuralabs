import { SITE_URL, absoluteUrl } from "@/lib/site";
import { SOCIAL_LINKS } from "@/lib/social";

const organizationJson = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nexura Labs",
  url: SITE_URL,
  logo: absoluteUrl("/favicon.png"),
  sameAs: SOCIAL_LINKS.map((l) => l.href),
  description:
    "Plataformas de streaming y monetización directa para empresas de medios.",
};

const websiteJson = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nexura Labs",
  url: SITE_URL,
  publisher: { "@type": "Organization", name: "Nexura Labs" },
  inLanguage: "es-AR",
};

export default function JsonLd() {
  const payload = [organizationJson, websiteJson];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
