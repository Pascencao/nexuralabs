import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { ROUTES } from "@/lib/i18n/routes";
import { SITE_URL, absoluteUrl } from "@/lib/site";
import { SOCIAL_LINKS } from "@/lib/social";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export default function JsonLd({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const homeUrl = absoluteUrl(ROUTES.home[locale]);

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Nexura Labs",
    url: SITE_URL,
    logo: absoluteUrl("/favicon.png"),
    sameAs: SOCIAL_LINKS.map((l) => l.href),
    description: dict.jsonLd.organizationDescription,
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Nexura Labs",
    url: homeUrl,
    image: absoluteUrl("/favicon.png"),
    description: dict.meta.homeDescription,
    areaServed: [
      { "@type": "Place", name: "Latin America" },
      { "@type": "Country", name: "United States" },
    ],
    founder: { "@type": "Person", name: "Pablo Ascencao" },
    parentOrganization: { "@id": ORGANIZATION_ID },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nexura Labs",
    url: homeUrl,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: dict.jsonLd.websiteLanguage,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([organization, professionalService, website]) }}
    />
  );
}
