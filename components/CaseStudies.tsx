"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import CaseCard from "@/components/CaseCard";

export default function CaseStudies() {
  const { dict } = useLanguage();
  const cases = dict.cases;
  const labels = {
    problem: cases.problemLabel,
    solution: cases.solutionLabel,
    results: cases.resultsLabel,
  };

  return (
    <section id="casos" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold">{cases.kicker}</p>
        <h2 className="mt-3 max-w-xl text-3xl font-bold text-ink sm:text-4xl">{cases.title}</h2>

        <div className={`mt-14 grid gap-6 ${cases.items.length > 1 ? "lg:grid-cols-2" : ""}`}>
          {cases.items.map((item) => (
            <CaseCard key={item.id} item={item} labels={labels} />
          ))}
        </div>
      </div>
    </section>
  );
}
