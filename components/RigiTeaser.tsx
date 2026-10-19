"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import Kicker from "@/components/Kicker";
import { hubAccentFontVars } from "@/components/landing/hub/fonts";
import { ROUTES } from "@/lib/i18n/routes";

/**
 * Sección de la home (justo después del hero) que presenta los servicios RIGI y lleva a /rigi.
 * El texto sigue el estilo del sitio; el panel de la derecha y el botón toman el de las
 * landings RIGI ("sala de control"), para anticipar a dónde lleva.
 */
export default function RigiTeaser() {
  const { dict, locale } = useLanguage();
  const t = dict.rigiTeaser;
  const services = [dict.landings.rigiHub.supplier, dict.landings.rigiHub.company];

  return (
    <section id="rigi" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-site grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Kicker>{t.kicker}</Kicker>
          <h2 className="mt-3 max-w-xl text-3xl font-bold text-ink sm:text-4xl">{t.title}</h2>
          <p className="mt-6 max-w-xl text-base text-muted">{t.body}</p>
          <a
            href={ROUTES.rigi[locale]}
            className="hub-theme mt-10 inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-hub-amber px-7 py-3.5 text-sm font-semibold text-hub-ink transition-colors hover:bg-[#FFD27A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
          >
            {t.cta}
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div
          className={`${hubAccentFontVars} hub-theme hub-grid overflow-hidden rounded-[22px] border border-hub-line-2 bg-hub-ink shadow-[0_30px_80px_rgba(10,14,20,.25),0_0_0_6px_rgba(244,183,64,.08)]`}
        >
          <div className="flex items-center justify-between gap-3 border-b border-hub-line px-5 py-3">
            <span className="font-plex-mono text-xs text-hub-muted">{t.panelTitle}</span>
            <span className="inline-flex items-center gap-2 font-plex-mono text-[11px] text-hub-live">
              <span aria-hidden="true" className="hub-live h-[7px] w-[7px] rounded-full bg-hub-live" />
              {t.panelTag}
            </span>
          </div>
          <ul className="flex flex-col gap-3 p-5">
            {services.map((service) => (
              <li key={service.tag} className="rounded-[14px] border border-hub-line bg-hub-surface-2 p-5">
                <p className="font-plex-mono text-xs tracking-[0.06em] text-hub-amber">{service.tag}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-white">{service.title}</h3>
                <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
                  {service.facts.map((fact) => (
                    <div key={fact.label} className="flex flex-col-reverse">
                      <dt className="text-xs text-hub-subtle">{fact.label}</dt>
                      <dd className="font-display text-[32px] font-extrabold leading-none text-hub-amber">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
