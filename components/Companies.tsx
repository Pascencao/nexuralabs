"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import Kicker from "@/components/Kicker";

export default function Companies() {
  const { dict } = useLanguage();

  return (
    <section id="experiencia" className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <Kicker>
          {dict.companies.kicker}
        </Kicker>
        <h2 className="mt-3 max-w-xl text-3xl font-bold text-ink sm:text-4xl">
          {dict.companies.title}
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-4">
          {dict.companies.names.map((name) => (
            <span key={name} className="text-lg font-semibold text-ink/70">
              {name}
            </span>
          ))}
          <span className="text-lg font-semibold text-muted">{dict.companies.moreLabel}</span>
        </div>
      </div>
    </section>
  );
}
