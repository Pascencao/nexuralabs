"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { ROUTES } from "@/lib/i18n/routes";
import MethodSteps from "@/components/MethodSteps";
import ComparisonTable from "@/components/ComparisonTable";
import Kicker from "@/components/Kicker";

export default function AiApproach() {
  const { dict, locale } = useLanguage();
  const ai = dict.aiApproach;

  return (
    <section id="ia" className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <Kicker>{ai.kicker}</Kicker>
        <h2 className="mt-3 max-w-xl text-3xl font-bold text-ink sm:text-4xl">{ai.title}</h2>
        <p className="mt-6 max-w-2xl text-lg text-muted">{ai.intro}</p>

        <div className="mt-14">
          <MethodSteps label={ai.methodLabel} steps={ai.steps} />
        </div>

        <div className="mt-16">
          <ComparisonTable
            caption={ai.comparison.caption}
            headers={ai.comparison.headers}
            rows={ai.comparison.rows}
          />
        </div>

        <div className="mt-10">
          <a
            href={ROUTES.rescateIa[locale]}
            className="rounded text-base font-semibold text-ops underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            {ai.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
