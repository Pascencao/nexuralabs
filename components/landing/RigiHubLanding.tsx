"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import HubShell from "@/components/landing/hub/HubShell";
import TrackLandingView from "@/components/landing/hub/TrackLandingView";
import { ArrowIcon, Container, LiveDot, Section, SectionHead } from "@/components/landing/hub/ui";
import { track } from "@/lib/analytics/track";
import { ROUTES } from "@/lib/i18n/routes";
import type { HubChoice } from "@/lib/i18n/types";

const CHOOSE_ID = "elegir";

/** Tarjeta de elección: toda la tarjeta es el link a la landing correspondiente. */
function ChoiceCard({
  choice,
  href,
  onSelect,
  featured,
}: {
  choice: HubChoice;
  href: string;
  onSelect: () => void;
  featured: boolean;
}) {
  return (
    <a
      href={href}
      onClick={onSelect}
      className={`group flex min-w-0 flex-[1_1_420px] flex-col gap-6 rounded-[22px] border p-7 no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hub-amber focus-visible:ring-offset-4 focus-visible:ring-offset-hub-ink sm:p-9 ${
        featured
          ? "border-transparent bg-hub-amber text-hub-ink hover:bg-[#FFD27A]"
          : "border-hub-line-2 bg-hub-surface text-hub-text hover:border-hub-amber"
      }`}
    >
      <span
        className={`inline-flex items-center gap-2 self-start rounded-full border px-3 py-1.5 font-plex-mono text-xs tracking-[0.06em] ${
          featured ? "border-[rgba(10,14,20,.3)] text-[#3D2A00]" : "border-hub-line-2 text-hub-amber"
        }`}
      >
        {choice.tag}
      </span>
      <h2
        className={`m-0 font-display text-[clamp(28px,3.2vw,40px)] font-extrabold leading-[1.05] tracking-[-0.02em] ${
          featured ? "" : "text-white"
        }`}
      >
        {choice.title}
      </h2>
      <p className={`m-0 text-[17px] leading-[1.55] ${featured ? "text-[#2E2410]" : "text-hub-muted"}`}>
        {choice.text}
      </p>
      <dl className={`mt-auto grid grid-cols-2 gap-4 border-t pt-6 ${featured ? "border-[rgba(10,14,20,.2)]" : "border-hub-line"}`}>
        {choice.facts.map((fact) => (
          <div key={fact.label} className="flex flex-col-reverse">
            <dt className={`mt-1 text-sm ${featured ? "text-[#2E2410]" : "text-hub-subtle"}`}>{fact.label}</dt>
            <dd className={`m-0 font-display text-[44px] font-extrabold leading-none ${featured ? "" : "text-hub-amber"}`}>
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
      <span
        className={`inline-flex min-h-[52px] items-center justify-between gap-3 rounded-full px-[26px] py-4 text-base font-semibold ${
          featured ? "bg-hub-ink text-white" : "bg-hub-amber text-hub-ink"
        }`}
      >
        {choice.cta}
        <ArrowIcon className="transition-transform group-hover:translate-x-1" />
      </span>
    </a>
  );
}

export default function RigiHubLanding() {
  const { dict, locale } = useLanguage();
  const r = dict.landings.rigiHub;
  const suppliersHref = ROUTES.rigiProveedores[locale];
  const companiesHref = ROUTES.rigiEmpresas[locale];

  return (
    <HubShell
      links={[
        { href: suppliersHref, label: r.nav.suppliers },
        { href: companiesHref, label: r.nav.companies },
      ]}
      cta={r.nav.cta}
      ctaHref={`#${CHOOSE_ID}`}
    >
      <TrackLandingView landing="rigi" />

      <section id="top" className="hub-grid border-b border-[#1C2534]">
        <Container className="flex flex-col gap-14 pb-20 pt-14 sm:pb-28 sm:pt-[88px]">
          <div className="flex max-w-[860px] flex-col gap-7">
            <p className="inline-flex items-center gap-2.5 self-start rounded-full border border-hub-line-2 py-[7px] pl-2.5 pr-3.5 font-plex-mono text-xs tracking-[0.04em] text-hub-muted">
              <LiveDot />
              {r.hero.eyebrow}
            </p>
            <h1 className="m-0 font-display text-[clamp(44px,7vw,92px)] font-extrabold leading-[0.95] tracking-[-0.03em] text-white">
              {r.hero.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <span className="block text-hub-amber">{r.hero.titleHighlight}</span>
            </h1>
            <p className="m-0 max-w-[620px] text-[19px] leading-[1.55] text-hub-muted">{r.hero.lead}</p>
          </div>

          <div id={CHOOSE_ID} role="group" aria-label={r.chooseLabel} className="flex scroll-mt-24 flex-wrap gap-5">
            <ChoiceCard
              choice={r.supplier}
              href={suppliersHref}
              featured={false}
              onSelect={() => track({ name: "select_rigi_path", path: "proveedores" })}
            />
            <ChoiceCard
              choice={r.company}
              href={companiesHref}
              featured
              onSelect={() => track({ name: "select_rigi_path", path: "empresas" })}
            />
          </div>
        </Container>
      </section>

      <Section id="dudas" bg="paper">
        <div className="flex flex-col gap-12">
          <SectionHead tone="light" eyebrow={r.help.eyebrow} title={r.help.title} />
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            {r.help.items.map((item) => (
              <li key={item.lead} className="border-t-2 border-hub-ink pt-5 text-[17px] leading-[1.55] text-hub-paper-muted">
                <strong className="font-display text-xl font-bold text-hub-ink">{item.lead}</strong> {item.text}
              </li>
            ))}
          </ul>
          <p className="m-0 text-base text-hub-paper-muted">
            {r.help.contact.before}
            <a href="mailto:pablo@nexuralabs.agency" className="text-hub-amber-ink underline underline-offset-4">
              {r.help.contact.link}
            </a>
            {r.help.contact.after}
          </p>
        </div>
      </Section>
    </HubShell>
  );
}
