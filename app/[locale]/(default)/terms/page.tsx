import type { Metadata } from "next";
import { TermsOfService } from "@/components/TermsOfService";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "es";
  const dict = getDictionary(locale);
  const base = SITE_URL.replace(/\/$/, "");
  const path = `/${locale}/terms`;

  return {
    title: dict.meta.termsTitle,
    description: dict.meta.termsDescription,
    keywords: dict.meta.termsKeywords,
    alternates: {
      canonical: path,
      languages: {
        es: `${base}/es/terms`,
        en: `${base}/en/terms`,
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "es";
  const dict = getDictionary(locale);

  return (
    <TermsOfService
      homeHref={`/${locale}`}
      labels={dict.legal.terms}
      locale={locale}
    />
  );
}
