"use client";

import { BookOpen, PackageX, Repeat, UserRound } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import LandingHero from "@/components/landing/LandingHero";
import IconList from "@/components/landing/IconList";
import FeatureList from "@/components/landing/FeatureList";
import StepsSection from "@/components/landing/StepsSection";
import CaseStudies from "@/components/CaseStudies";
import Faq from "@/components/Faq";
import ChecklistOffer from "@/components/ChecklistOffer";
import Contact from "@/components/Contact";

export default function PosventaLanding() {
  const { dict } = useLanguage();
  const p = dict.landings.posventa;

  return (
    <>
      <LandingHero copy={p.hero} />
      <IconList
        id="problema"
        kicker={p.pain.kicker}
        title={p.pain.title}
        items={p.pain.items}
        icons={[Repeat, UserRound, BookOpen, PackageX]}
      />
      <FeatureList
        id="solucion"
        kicker={p.build.kicker}
        title={p.build.title}
        items={p.build.items}
        note={p.build.note}
      />
      <CaseStudies />
      <StepsSection
        id="metodo"
        kicker={p.method.kicker}
        title={p.method.title}
        steps={dict.aiApproach.steps}
      />
      <Faq items={p.faq} />
      <ChecklistOffer />
      <Contact defaultNeed="ai" />
    </>
  );
}
