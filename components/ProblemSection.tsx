"use client";

import { Workflow, Code2, Building2 } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const icons = [Workflow, Code2, Building2];

export default function ProblemSection() {
  const { dict } = useLanguage();

  return (
    <section id="problema" className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold">
          {dict.problem.kicker}
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-bold text-ink sm:text-4xl">
          {dict.problem.title}
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {dict.problem.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.name}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-canvas">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink">{item.name}</h3>
                <p className="mt-2 text-base text-muted">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
