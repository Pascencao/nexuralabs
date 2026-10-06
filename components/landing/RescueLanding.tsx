"use client";

import { Ban, CircleHelp, TrendingUp, UserX } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import LandingHero from "@/components/landing/LandingHero";
import IconList from "@/components/landing/IconList";
import StepsSection from "@/components/landing/StepsSection";
import ChecklistOffer from "@/components/ChecklistOffer";
import Contact from "@/components/Contact";

export default function RescueLanding() {
  const { dict } = useLanguage();
  const r = dict.landings.rescue;

  return (
    <>
      <LandingHero copy={r.hero} />
      <IconList
        id="sintomas"
        kicker={r.symptoms.kicker}
        title={r.symptoms.title}
        items={r.symptoms.items}
        icons={[Ban, CircleHelp, TrendingUp, UserX]}
      />
      <StepsSection
        id="como"
        kicker={r.approach.kicker}
        title={r.approach.title}
        steps={r.approach.steps}
      />
      <ChecklistOffer />
      <Contact defaultNeed="ai-rescue" />
    </>
  );
}
