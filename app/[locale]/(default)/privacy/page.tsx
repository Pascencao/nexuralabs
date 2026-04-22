import type { Metadata } from "next";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "es";
  const dict = getDictionary(locale);
  const base = SITE_URL.replace(/\/$/, "");
  const path = `/${locale}/privacy`;

  return {
    title: dict.meta.privacyTitle,
    description: dict.meta.privacyDescription,
    keywords: dict.meta.privacyKeywords,
    alternates: {
      canonical: path,
      languages: {
        es: `${base}/es/privacy`,
        en: `${base}/en/privacy`,
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "es";
  const dict = getDictionary(locale);

  return (
    <PrivacyPolicy
      homeHref={`/${locale}`}
      labels={dict.legal.privacy}
      locale={locale}
    />
  );
}
