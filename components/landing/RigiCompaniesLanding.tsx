"use client";

import { Clock3, FileSpreadsheet, History } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import Kicker from "@/components/Kicker";
import LandingHero from "@/components/landing/LandingHero";
import IconList from "@/components/landing/IconList";
import StepsSection from "@/components/landing/StepsSection";
import FeatureList from "@/components/landing/FeatureList";
import Faq from "@/components/Faq";
import HubDiagram from "@/components/landing/rigi/HubDiagram";
import ConsoleMockup from "@/components/landing/rigi/ConsoleMockup";
import RigiFormSection from "@/components/landing/rigi/RigiFormSection";
import TrackLandingView from "@/components/landing/rigi/TrackLandingView";
import { ReferenceStats, ValueBlocks } from "@/components/landing/rigi/Sections";

const FORM_ID = "prueba";

export default function RigiCompaniesLanding() {
  const { dict } = useLanguage();
  const r = dict.landings.rigiCompanies;

  return (
    <>
      <TrackLandingView landing="rigi-empresas" />
      <LandingHero copy={r.hero} href={`#${FORM_ID}`} />
      <IconList
        id="problema"
        kicker={r.problem.kicker}
        title={r.problem.title}
        intro={r.problem.intro}
        items={r.problem.items}
        icons={[FileSpreadsheet, Clock3, History]}
      />

      <section id="solucion" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <Kicker>{r.solution.kicker}</Kicker>
          <h2 className="mt-3 max-w-xl text-3xl font-bold text-ink sm:text-4xl">{r.solution.title}</h2>
          <p className="mt-6 max-w-2xl text-lg text-muted">{r.solution.intro}</p>
          <div className="mt-14">
            <HubDiagram
              sourcesLabel={r.solution.sourcesLabel}
              sources={r.solution.sources}
              hubName={r.solution.hubName}
              hubCaption={r.solution.hubCaption}
              outputsLabel={r.solution.outputsLabel}
              outputs={r.solution.outputs}
            />
          </div>
        </div>
      </section>

      <ValueBlocks id="valor" kicker={r.value.kicker} title={r.value.title} blocks={r.value.blocks} />
      <StepsSection
        id="como-funciona"
        kicker={r.process.kicker}
        title={r.process.title}
        steps={r.process.steps}
      />

      <section id="consola" className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <Kicker>{r.console.kicker}</Kicker>
          <h2 className="mt-3 max-w-xl text-3xl font-bold text-ink sm:text-4xl">{r.console.title}</h2>
          <p className="mt-6 max-w-2xl text-lg text-muted">{r.console.intro}</p>
          <div className="mt-12">
            <ConsoleMockup copy={r.console} illustrative={dict.landings.illustrative} />
          </div>
        </div>
      </section>

      <ReferenceStats
        id="antecedente"
        kicker={r.ypf.kicker}
        title={r.ypf.title}
        intro={r.ypf.intro}
        stats={r.ypf.stats}
        footnote={r.ypf.footnote}
        sourcesLabel={r.ypf.sourcesLabel}
        sources={r.ypf.sources}
      />
      <StepsSection
        id="prueba-de-valor"
        kicker={r.pilot.kicker}
        title={r.pilot.title}
        steps={r.pilot.steps}
        note={r.pilot.note}
      />
      <FeatureList
        id="seguridad"
        kicker={r.security.kicker}
        title={r.security.title}
        items={r.security.items}
        note={r.security.note}
      />
      <Faq kicker={r.faq.kicker} title={r.faq.title} items={r.faq.items} />
      <RigiFormSection id={FORM_ID} origin="rigi-empresas" copy={r.form} />
    </>
  );
}
