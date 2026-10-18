"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import HubShell from "@/components/landing/hub/HubShell";
import HubFaq from "@/components/landing/hub/HubFaq";
import HubContact from "@/components/landing/hub/HubContact";
import HubLeadForm from "@/components/landing/hub/HubLeadForm";
import RoleConsole from "@/components/landing/hub/RoleConsole";
import SystemsToConsole from "@/components/landing/hub/SystemsToConsole";
import TrackLandingView from "@/components/landing/hub/TrackLandingView";
import { Container, HeroText, OfferStrip, Section, SectionHead } from "@/components/landing/hub/ui";
import { track } from "@/lib/analytics/track";
import type { HubTimeline } from "@/lib/i18n/types";

const FORM_ID = "contacto";

function Timeline({ data, dark }: { data: HubTimeline; dark: boolean }) {
  return (
    <div
      className={`flex min-w-0 flex-[1_1_440px] flex-col gap-[26px] rounded-[22px] p-7 sm:p-9 ${
        dark
          ? "bg-hub-ink text-hub-text shadow-[0_24px_60px_rgba(10,14,20,.25)]"
          : "border border-hub-paper-line bg-white"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className={`m-0 font-display text-[26px] font-bold ${dark ? "text-white" : ""}`}>{data.title}</h3>
        <span
          className={`rounded-full px-3 py-1.5 font-plex-mono text-xs ${
            dark ? "bg-hub-amber text-hub-ink" : "border border-hub-paper-line text-hub-paper-muted"
          }`}
        >
          {data.tag}
        </span>
      </div>
      <ol>
        {data.moments.map((m) => (
          <li
            key={m.t}
            className={`flex gap-[18px] border-t border-dashed py-4 ${dark ? "border-hub-line-2" : "border-[#D3D7DC]"}`}
          >
            <span className={`w-[76px] shrink-0 font-plex-mono text-sm ${dark ? "text-hub-amber" : "text-[#5F6A7A]"}`}>
              {m.t}
            </span>
            <span className={`text-base leading-[1.5] ${dark ? "text-[#D5DCE6]" : "text-[#3A4352]"}`}>{m.x}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function RigiCompaniesLanding() {
  const { dict } = useLanguage();
  const r = dict.landings.rigiCompanies;
  const formHref = `#${FORM_ID}`;

  return (
    <HubShell links={r.nav.links} cta={r.nav.cta} ctaHref={formHref}>
      <TrackLandingView landing="rigi-empresas" />

      <section id="top" className="hub-grid border-b border-[#1C2534]">
        <Container className="flex flex-wrap items-center gap-14 pb-[72px] pt-14 sm:pt-[88px]">
          <HeroText
            eyebrow={r.hero.eyebrow}
            titleLines={r.hero.titleLines}
            titleHighlight={r.hero.titleHighlight}
            lead={r.hero.lead}
            primaryCta={r.hero.primaryCta}
            primaryHref={formHref}
            onPrimaryClick={() => track({ name: "click_hablemos", location: "landing_hero" })}
            secondaryCta={r.hero.secondaryCta}
            secondaryHref="#producto"
            checks={r.hero.checks}
          />
          <SystemsToConsole systems={r.hero.systems} copy={r.hero.console} />
        </Container>
        <OfferStrip items={r.offer} />
      </section>

      <Section id="antes-despues" bg="paper">
        <div className="flex flex-col gap-14">
          <SectionHead
            tone="light"
            eyebrow={r.beforeAfter.eyebrow}
            title={r.beforeAfter.title}
            intro={r.beforeAfter.intro}
          />
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-5">
              <Timeline data={r.beforeAfter.today} dark={false} />
              <Timeline data={r.beforeAfter.withHub} dark />
            </div>
            <p className="m-0 text-[13px] text-[#5F6A7A]">{r.beforeAfter.caption}</p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
            {r.beforeAfter.pains.map((pain) => (
              <div key={pain.name} className="flex flex-col gap-2.5 border-t-2 border-hub-ink pt-5">
                <h3 className="m-0 font-display text-xl font-bold">{pain.name}</h3>
                <p className="m-0 text-[15px] leading-[1.55] text-hub-paper-muted">{pain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="paper" className="border-t border-hub-paper-line">
        <div className="flex flex-col gap-14">
          <SectionHead tone="light" eyebrow={r.how.eyebrow} title={r.how.title} />
          <ol className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            {r.how.steps.map((step, i) => {
              const dark = i === r.how.steps.length - 1;
              return (
                <li
                  key={step.name}
                  className={`flex flex-col gap-4 rounded-[22px] p-8 ${
                    dark ? "bg-hub-ink text-hub-text" : "border border-hub-paper-line bg-white"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`font-display text-[72px] font-extrabold leading-[0.9] ${dark ? "text-hub-amber" : ""}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={`m-0 font-display text-2xl font-bold ${dark ? "text-white" : ""}`}>{step.name}</h3>
                  <p className={`m-0 text-base leading-[1.55] ${dark ? "text-hub-muted" : "text-hub-paper-muted"}`}>
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </Section>

      <Section id="producto" bg="grid">
        <RoleConsole copy={r.console} />
      </Section>

      <Section id="caso" bg="amber">
        <div className="flex flex-col gap-12">
          <SectionHead tone="amber" eyebrow={r.ypf.eyebrow} title={r.ypf.title} intro={r.ypf.intro} />
          <dl className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] border-t-2 border-hub-ink">
            {r.ypf.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse justify-end gap-2.5 pb-2 pr-6 pt-7">
                <dt className="text-[15px] leading-[1.45] text-[#2E2410]">{stat.label}</dt>
                <dd className="font-display text-[clamp(44px,5vw,64px)] font-extrabold leading-none tracking-[-0.03em]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="m-0 max-w-[820px] text-[13px] leading-[1.55] text-[#3D2A00]">
            {r.ypf.footnote} {r.ypf.sourcesLabel}:{" "}
            {r.ypf.sources.map((source, i) => (
              <span key={source.url}>
                {i > 0 && " · "}
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded text-hub-ink underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hub-ink"
                >
                  {source.name}
                </a>
              </span>
            ))}
          </p>
        </div>
      </Section>

      <Section id="piloto" bg="ink">
        <div className="flex flex-col gap-14">
          <SectionHead tone="dark" eyebrow={r.pilot.eyebrow} title={r.pilot.title} intro={r.pilot.intro} />
          <ol className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
            {r.pilot.weeks.map((week, i) => {
              const pct = ((i + 1) / r.pilot.weeks.length) * 100;
              return (
                <li
                  key={week.name}
                  className="flex flex-col gap-3.5 rounded-[20px] border border-[#243042] bg-hub-surface p-[26px]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-plex-mono text-[13px] text-hub-amber">
                      {r.pilot.weekLabel} {i + 1}
                    </span>
                    <span className="font-plex-mono text-xs text-hub-subtle">{Math.round(pct)} %</span>
                  </div>
                  <div aria-hidden="true" className="h-1.5 overflow-hidden rounded-md bg-hub-line">
                    <div className="h-full rounded-md bg-hub-amber" style={{ width: `${pct}%` }} />
                  </div>
                  <h3 className="m-0 font-display text-[22px] font-bold text-white">{week.name}</h3>
                  <p className="m-0 text-[15px] leading-[1.55] text-hub-muted">{week.description}</p>
                </li>
              );
            })}
          </ol>

          <div className="flex flex-wrap items-center gap-8 rounded-[22px] border border-[#243042] bg-hub-surface p-7 sm:p-9">
            <div className="flex flex-[1_1_280px] flex-col gap-2.5">
              <div className="flex items-center gap-3">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4ADE9F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z" />
                  <path d="M8.5 12l2.5 2.5 4.5-5" />
                </svg>
                <h3 className="m-0 font-display text-[28px] font-bold text-white">{r.pilot.security.title}</h3>
              </div>
              <p className="m-0 text-[15px] text-hub-subtle">{r.pilot.security.subtitle}</p>
            </div>
            <ul className="grid flex-[2_1_480px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
              {r.pilot.security.items.map((item) => (
                <li key={item.title} className="border-t border-hub-line-2 pt-3.5 text-[15px] leading-[1.5] text-[#D5DCE6]">
                  <strong className="text-white">{item.title}</strong> {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <HubFaq copy={r.faq} contactHref={formHref} />

      <HubContact id={FORM_ID} copy={r.contact}>
        <HubLeadForm origin="rigi-empresas" submitLabel={r.contact.submit} successMessage={r.contact.success} />
      </HubContact>
    </HubShell>
  );
}
