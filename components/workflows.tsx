import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";
import SectionHeader from "./ui/sectionHeader";
import WorkflowCard from "./ui/workflowCard";
interface Service {
  title: string;
  description: string;
}
export default function Workflows({title, description, services}: {title: string, description: string, services: Service[]}) {
  const workflowCards = services;

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <SectionHeader
            tag="Services"
            title={title}
            description={description}
          />

          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {workflowCards.map((card, index) => (
              <WorkflowCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
