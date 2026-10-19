"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { hubAccentFontVars } from "@/components/landing/hub/fonts";
import { ROUTES } from "@/lib/i18n/routes";

/**
 * Sección de la home (justo después del hero) que presenta los servicios RIGI y lleva a /rigi.
 * Banda ámbar a todo el ancho con el estilo de las landings RIGI ("sala de control"), para
 * que se destaque contra el hero oscuro y anticipe a dónde lleva.
 */
export default function RigiTeaser() {
  const { dict, locale } = useLanguage();
  const t = dict.rigiTeaser;
  const services = [
    { ...dict.landings.rigiHub.supplier, href: ROUTES.rigiProveedores[locale] },
    { ...dict.landings.rigiHub.company, href: ROUTES.rigiEmpresas[locale] },
  ];

  return (
    <section
      id="rigi"
      className={`${hubAccentFontVars} hub-theme relative overflow-hidden bg-hub-amber py-20 text-hub-ink sm:py-28`}
    >
      {/* Textura de grilla en tinta, la misma trama de las landings pero sobre ámbar. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#0A0E14_1px,transparent_1px),linear-gradient(90deg,#0A0E14_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div className="relative mx-auto grid max-w-site grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(10,14,20,.35)] py-1.5 pl-2.5 pr-3.5 font-plex-mono text-xs tracking-[0.06em] text-[#3D2A00]">
            <span aria-hidden="true" className="hub-live h-2 w-2 rounded-full bg-hub-ink" />
            {t.kicker}
          </p>
          <h2 className="mt-6 font-display text-[clamp(38px,5.2vw,64px)] font-extrabold leading-[0.98] tracking-[-0.03em]">
            {t.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-[1.55] text-[#2E2410]">{t.body}</p>
          <a
            href={ROUTES.rigi[locale]}
            className="group mt-10 inline-flex min-h-[56px] items-center gap-3 rounded-full bg-hub-ink px-8 py-4 text-base font-semibold text-white transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hub-ink focus-visible:ring-offset-2 focus-visible:ring-offset-hub-amber"
          >
            {t.cta}
            <ArrowRight
              size={20}
              aria-hidden="true"
              className="text-hub-amber transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="hub-grid overflow-hidden rounded-[22px] border border-hub-line-2 bg-hub-ink shadow-[0_40px_90px_rgba(10,14,20,.45)] lg:rotate-[-1.5deg]">
          <div className="flex items-center justify-between gap-3 border-b border-hub-line px-5 py-3">
            <span className="font-plex-mono text-xs text-hub-muted">{t.panelTitle}</span>
            <span className="inline-flex items-center gap-2 font-plex-mono text-[11px] text-hub-live">
              <span aria-hidden="true" className="hub-live h-[7px] w-[7px] rounded-full bg-hub-live" />
              {t.panelTag}
            </span>
          </div>
          <ul className="flex flex-col gap-3 p-5">
            {services.map((service) => (
              <li key={service.tag}>
                <a
                  href={service.href}
                  className="group block rounded-[14px] border border-hub-line bg-hub-surface-2 p-5 transition-colors hover:border-hub-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hub-amber"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-plex-mono text-xs tracking-[0.06em] text-hub-amber">{service.tag}</p>
                      <h3 className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">{service.title}</h3>
                    </div>
                    <ArrowRight
                      size={20}
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-hub-subtle transition-all group-hover:translate-x-1 group-hover:text-hub-amber"
                    />
                  </div>
                  <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
                    {service.facts.map((fact) => (
                      <div key={fact.label} className="flex flex-col-reverse">
                        <dt className="text-xs text-hub-subtle">{fact.label}</dt>
                        <dd className="font-display text-[40px] font-extrabold leading-none text-hub-amber">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
