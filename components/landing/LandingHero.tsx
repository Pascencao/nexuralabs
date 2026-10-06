"use client";

import type { LandingHeroCopy } from "@/lib/i18n/types";
import { track } from "@/lib/analytics/track";

/** Hero de landing: un mensaje y un CTA que baja al formulario de la misma página. */
export default function LandingHero({ copy }: { copy: LandingHeroCopy }) {
  return (
    <section id="inicio" className="bg-ink-dark pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/70">
            {copy.kicker}
          </span>
          <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">{copy.title}</h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">{copy.intro}</p>
          <div className="mt-10">
            <a
              href="#contacto"
              onClick={() => track({ name: "click_hablemos", location: "landing_hero" })}
              className="inline-flex items-center rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink-dark transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink-dark"
            >
              {copy.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
