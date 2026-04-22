import type { Metadata } from "next";
import HeroStreaming from "@/components/hero-streaming";
import ProblemSection from "@/components/sections/problem-section";
import OpportunitySection from "@/components/sections/opportunity-section";
import SolutionSection from "@/components/sections/solution-section";
import MonetizationSection from "@/components/sections/monetization-section";
import CaseStudiesSection from "@/components/sections/case-studies-section";
import ProcessSection from "@/components/sections/process-section";
import Cta from "@/components/cta";
import DeferredCalendar from "@/components/deferred-calendar";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "es";
  const dict = getDictionary(locale);
  const base = SITE_URL.replace(/\/$/, "");
  const path = `/${locale}`;

  return {
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
    keywords: dict.meta.homeKeywords,
    alternates: {
      canonical: path,
      languages: {
        es: `${base}/es`,
        en: `${base}/en`,
      },
    },
    openGraph: {
      title: `Nexura Labs | ${dict.meta.homeTitle}`,
      description: dict.meta.homeDescription,
      url: path,
      locale: locale === "en" ? "en_US" : "es_AR",
    },
    twitter: {
      title: `Nexura Labs | ${dict.meta.homeTitle}`,
      description: dict.meta.homeDescription,
    },
  };
}

export default async function Home({ params }: Props) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "es";
  const dict = getDictionary(locale);

  return (
    <>
      <HeroStreaming dict={dict} />
      <ProblemSection copy={dict.problem} />
      <OpportunitySection copy={dict.opportunity} />
      <SolutionSection copy={dict.solution} />
      <MonetizationSection copy={dict.monetization} />
      <CaseStudiesSection copy={dict.cases} />
      <ProcessSection copy={dict.process} />
      <Cta
        tag={dict.cta.tag}
        title={dict.cta.title}
        description={dict.cta.description}
        buttonText={dict.cta.button}
      />
      <DeferredCalendar calendar={dict.calendar} />
    </>
  );
}
