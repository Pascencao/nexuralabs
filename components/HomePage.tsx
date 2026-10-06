import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ServiceLines from "@/components/ServiceLines";
import ServiceDetails from "@/components/ServiceDetails";
import ConnectionDiagram from "@/components/ConnectionDiagram";
import AiApproach from "@/components/AiApproach";
import CaseStudies from "@/components/CaseStudies";
import ChecklistOffer from "@/components/ChecklistOffer";
import About from "@/components/About";
import Companies from "@/components/Companies";
import Stats from "@/components/Stats";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServiceLines />
      <ServiceDetails />
      <ConnectionDiagram />
      <AiApproach />
      <CaseStudies />
      <ChecklistOffer />
      <About />
      <Companies />
      <Stats />
      <Faq />
      <Contact />
    </>
  );
}
