import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ServiceLines from "@/components/ServiceLines";
import ServiceDetails from "@/components/ServiceDetails";
import ConnectionDiagram from "@/components/ConnectionDiagram";
import About from "@/components/About";
import Companies from "@/components/Companies";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServiceLines />
      <ServiceDetails />
      <ConnectionDiagram />
      <About />
      <Companies />
      <Stats />
      <Contact />
    </>
  );
}
