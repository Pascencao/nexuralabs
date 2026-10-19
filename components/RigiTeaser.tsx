"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import Kicker from "@/components/Kicker";
import { ROUTES } from "@/lib/i18n/routes";

/** Banda de la home que presenta los servicios RIGI y lleva a la página de entrada /rigi. */
export default function RigiTeaser() {
  const { dict, locale } = useLanguage();
  const t = dict.rigiTeaser;

  return (
    <section id="rigi" className="bg-ink-dark py-20 sm:py-28">
      <div className="mx-auto grid max-w-site grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Kicker tone="dark">{t.kicker}</Kicker>
          <h2 className="mt-3 max-w-xl text-3xl font-bold text-white sm:text-4xl">{t.title}</h2>
          <p className="mt-6 max-w-xl text-base text-white/70">{t.body}</p>
          <a
            href={ROUTES.rigi[locale]}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink-dark transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink-dark"
          >
            {t.cta}
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>

        <ul className="grid gap-4">
          {t.items.map((item) => (
            <li key={item.name} className="rounded-2xl border border-white/15 p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white">{item.name}</h3>
              <p className="mt-2 text-base text-white/70">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
