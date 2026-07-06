"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import VennCircles from "@/components/VennCircles";

export default function Hero() {
  const { dict } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-ink-dark pb-24 pt-32 sm:pb-32 sm:pt-40"
    >
      <VennCircles className="pointer-events-none absolute -right-24 top-1/2 hidden h-[480px] w-[480px] -translate-y-1/2 opacity-40 md:block lg:-right-10" />
      <div className="relative mx-auto max-w-site px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/70">
            {dict.hero.badge}
          </span>
          <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {dict.hero.titleLead} <span className="text-gold">{dict.hero.titleHighlight}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">{dict.hero.body}</p>
          <div className="mt-10">
            <a
              href="#contacto"
              className="inline-flex items-center rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink-dark transition-transform hover:scale-[1.02]"
            >
              {dict.hero.primaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
