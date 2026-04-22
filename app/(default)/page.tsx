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

export const metadata: Metadata = {
  title: "Plataforma de streaming y monetización",
  description:
    "Tené tu propia plataforma de streaming. Controlá tu monetización. Experiencia en TNT, DIRECTV GO y WarnerMedia.",
  keywords: [
    "streaming",
    "plataforma OTT",
    "monetización directa",
    "suscripciones",
    "Smart TV",
    "Nexura Labs",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/",
    },
  },
  openGraph: {
    title: "Nexura Labs | Plataforma de streaming y monetización",
    description:
      "Ayudamos a empresas de medios a operar su propia plataforma en Web, Mobile y Smart TV con monetización directa.",
    url: "/",
  },
  twitter: {
    title: "Nexura Labs | Plataforma de streaming y monetización",
    description:
      "Construí tu propia plataforma de streaming y monetizá tu audiencia de forma directa.",
  },
};

export default function Home() {
  return (
    <>
      <HeroStreaming />
      <ProblemSection />
      <OpportunitySection />
      <SolutionSection />
      <MonetizationSection />
      <CaseStudiesSection />
      <ProcessSection />
      <Cta
        tag="Próximo paso"
        title="Exploremos cómo monetizar tu audiencia"
        description="Podemos analizar tu caso y proponerte un enfoque basado en tu contenido, audiencia y modelo actual. Monetización directa e ingresos recurrentes, con control sobre tu audiencia."
      />
      <DeferredCalendar />
    </>
  );
}
