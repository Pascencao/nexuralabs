import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ServiceLines from "@/components/ServiceLines";
import ServiceDetails from "@/components/ServiceDetails";
import ConnectionDiagram from "@/components/ConnectionDiagram";
import AiApproach from "@/components/AiApproach";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import Companies from "@/components/Companies";
import Stats from "@/components/Stats";
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
      <About />
      <Companies />
      <Stats />
      <Contact />
    </>
  );
}
