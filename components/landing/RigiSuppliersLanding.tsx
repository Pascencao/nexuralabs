"use client";

import { Database, FileCheck, Route } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import LandingHero from "@/components/landing/LandingHero";
import IconList from "@/components/landing/IconList";
import StepsSection from "@/components/landing/StepsSection";
import Faq from "@/components/Faq";
import ScoreChart from "@/components/landing/rigi/ScoreChart";
import RigiFormSection from "@/components/landing/rigi/RigiFormSection";
import TrackLandingView from "@/components/landing/rigi/TrackLandingView";
import {
  AudienceList,
  DeliverablesSection,
  NumberedAreas,
  PrecedentSection,
} from "@/components/landing/rigi/Sections";

const FORM_ID = "reservar";

export default function RigiSuppliersLanding() {
  const { dict, locale } = useLanguage();
  const r = dict.landings.rigiSuppliers;
  const chartRows = r.areas.items.map((area, i) => ({
    label: area.name,
    score: r.deliverables.chart.scores[i] ?? 0,
  }));

  return (
    <>
      <TrackLandingView landing="rigi-proveedores" />
      <LandingHero copy={r.hero} href={`#${FORM_ID}`} />
      <IconList
        id="por-que-importa"
        kicker={r.why.kicker}
        title={r.why.title}
        intro={r.why.intro}
        items={r.why.items}
        icons={[Database, Route, FileCheck]}
        note={r.why.note}
      />
      <NumberedAreas id="areas" kicker={r.areas.kicker} title={r.areas.title} items={r.areas.items} />
      <DeliverablesSection
        id="que-recibis"
        kicker={r.deliverables.kicker}
        title={r.deliverables.title}
        items={r.deliverables.items}
      >
        <ScoreChart
          locale={locale}
          title={r.deliverables.chart.title}
          scaleLabel={r.deliverables.chart.scaleLabel}
          illustrative={dict.landings.illustrative}
          rows={chartRows}
        />
      </DeliverablesSection>
      <StepsSection
        id="como-funciona"
        kicker={r.process.kicker}
        title={r.process.title}
        steps={r.process.steps}
      />
      <AudienceList
        id="para-quien"
        kicker={r.audience.kicker}
        title={r.audience.title}
        items={r.audience.items}
      />
      <PrecedentSection
        id="antecedente"
        kicker={r.precedent.kicker}
        title={r.precedent.title}
        intro={r.precedent.intro}
        item={dict.cases.items[0]}
        labels={{
          problem: dict.cases.problemLabel,
          solution: dict.cases.solutionLabel,
          results: dict.cases.resultsLabel,
        }}
      />
      <Faq kicker={r.faq.kicker} title={r.faq.title} items={r.faq.items} />
      <RigiFormSection id={FORM_ID} origin="rigi-proveedores" copy={r.form} />
    </>
  );
}
