"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";

export default function Stats() {
  const { dict } = useLanguage();

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold">
          {dict.stats.kicker}
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-bold text-ink sm:text-4xl">
          {dict.stats.title}
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {dict.stats.items.map((item) => (
            <div key={item.label}>
              <p className="text-5xl font-bold text-ink">{item.value}</p>
              <p className="mt-2 text-sm text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
