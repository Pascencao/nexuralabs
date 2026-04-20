export const metadata = {
  title: "Nexura Labs | Plataforma de streaming y monetización",
  description:
    "Tené tu propia plataforma de streaming. Controlá tu monetización. Experiencia en TNT, DIRECTV GO y WarnerMedia.",
  keywords:
    "streaming, plataforma OTT, monetización directa, suscripciones, Smart TV, Nexura Labs",
  author: "Nexura Labs",
  url: "https://www.nexuralabs.com",
  image: "https://www.nexuralabs.com/og-image.jpg",
  ogDescription:
    "Ayudamos a empresas de medios a operar su propia plataforma en Web, Mobile y Smart TV con monetización directa.",
  ogType: "website",
  ogUrl: "https://www.nexuralabs.com",
  twitterCard: "summary_large_image",
  twitterTitle: "Nexura Labs | Plataforma de streaming y monetización",
  twitterDescription:
    "Construí tu propia plataforma de streaming y monetizá tu audiencia de forma directa.",
  twitterImage: "https://www.nexuralabs.com/twitter-image.jpg",
  canonical: "https://www.nexuralabs.com",
};

import HeroStreaming from "@/components/hero-streaming";
import ProblemSection from "@/components/sections/problem-section";
import OpportunitySection from "@/components/sections/opportunity-section";
import SolutionSection from "@/components/sections/solution-section";
import MonetizationSection from "@/components/sections/monetization-section";
import CaseStudiesSection from "@/components/sections/case-studies-section";
import ProcessSection from "@/components/sections/process-section";
import Cta from "@/components/cta";
import Calendar from "@/components/ui/calendar";

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
      <Calendar />
    </>
  );
}
