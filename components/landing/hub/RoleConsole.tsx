"use client";

import { useRef, useState } from "react";
import { ArrowIcon } from "@/components/landing/hub/ui";
import type { Dictionary } from "@/lib/i18n/types";

type ConsoleCopy = Dictionary["landings"]["rigiCompanies"]["console"];

/** Consola interactiva: tabs por rol que reemplazan KPIs, alertas y la charla con el asistente. */
export default function RoleConsole({ copy }: { copy: ConsoleCopy }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const role = copy.roles[roleIndex];

  // Flechas izquierda/derecha entre tabs (patrón ARIA de tablist).
  function onTabKeyDown(event: React.KeyboardEvent, index: number) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const delta = event.key === "ArrowRight" ? 1 : -1;
    const next = (index + delta + copy.roles.length) % copy.roles.length;
    setRoleIndex(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex max-w-[680px] flex-col gap-[18px]">
          <p className="font-plex-mono text-[13px] tracking-[0.08em] text-hub-amber">{copy.eyebrow}</p>
          <h2 className="m-0 font-display text-[clamp(34px,4.4vw,56px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-white">
            {copy.title}
          </h2>
        </div>
        <div
          role="tablist"
          aria-label={copy.tabsLabel}
          className="flex flex-wrap gap-1.5 rounded-full border border-[#243042] bg-hub-surface p-1.5"
        >
          {copy.roles.map((r, i) => {
            const on = i === roleIndex;
            return (
              <button
                key={r.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                id={`hub-tab-${r.id}`}
                type="button"
                role="tab"
                aria-selected={on}
                aria-controls="hub-console-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => setRoleIndex(i)}
                onKeyDown={(e) => onTabKeyDown(e, i)}
                className={`min-h-[44px] cursor-pointer rounded-full border-0 px-[18px] py-2.5 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  on ? "bg-hub-amber text-hub-ink" : "bg-transparent text-[#D5DCE6] hover:text-white"
                }`}
              >
                {r.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        id="hub-console-panel"
        role="tabpanel"
        aria-labelledby={`hub-tab-${role.id}`}
        className="overflow-hidden rounded-[22px] border border-hub-line-2 bg-hub-ink-2 shadow-[0_40px_100px_rgba(0,0,0,.45)]"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hub-line px-5 py-3.5">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-hub-line-2" />
              <span className="h-2.5 w-2.5 rounded-full bg-hub-line-2" />
              <span className="h-2.5 w-2.5 rounded-full bg-hub-line-2" />
            </span>
            <span className="font-plex-mono text-[13px] text-hub-muted">
              {copy.windowTitle} · {role.label}
            </span>
          </div>
          <span className="rounded-full border border-hub-line-2 px-2.5 py-[5px] font-plex-mono text-[11px] text-hub-subtle">
            {copy.sampleTag}
          </span>
        </div>

        <div className="flex flex-wrap gap-5 p-5">
          <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-4">
            <dl className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-3">
              {role.kpis.map((kpi) => {
                const color = kpi.ok ? "text-hub-live border-hub-live" : "text-hub-amber border-hub-amber";
                return (
                  <div
                    key={kpi.label}
                    className="flex flex-col gap-2 rounded-[14px] border border-hub-line bg-hub-surface-2 p-[18px]"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <dt className="text-[13px] text-hub-subtle">{kpi.label}</dt>
                      <span
                        className={`whitespace-nowrap rounded-full border px-2 py-[3px] font-plex-mono text-[11px] ${color}`}
                      >
                        {kpi.ok ? copy.inRange : copy.attention}
                      </span>
                    </div>
                    <dd className="font-display text-[40px] font-bold leading-none text-white">{kpi.value}</dd>
                    <div aria-hidden="true" className="h-1 overflow-hidden rounded bg-hub-line">
                      <div
                        className={`h-full ${kpi.ok ? "bg-hub-live" : "bg-hub-amber"}`}
                        style={{ width: `${kpi.pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </dl>

            <div className="flex flex-col gap-1 rounded-[14px] border border-hub-line bg-hub-surface-2 p-[18px]">
              <p className="mb-1.5 mt-0 flex items-center gap-2 text-sm font-semibold text-hub-amber">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3l9 16H3z" />
                  <path d="M12 10v4M12 17h.01" />
                </svg>
                {copy.alertsTitle}
              </p>
              <ul>
                {role.alerts.map((alert) => (
                  <li
                    key={alert.x}
                    className="flex items-baseline gap-3 border-t border-hub-line py-2.5 text-sm text-[#D5DCE6]"
                  >
                    <span className="shrink-0 font-plex-mono text-xs text-hub-subtle">{alert.t}</span>
                    {alert.x}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-3.5 rounded-[14px] border border-hub-line bg-hub-surface-2 p-[18px]">
            <div className="flex items-center gap-2.5">
              <span aria-hidden="true" className="flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-hub-amber">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A0E14" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2" />
                </svg>
              </span>
              <div>
                <p className="m-0 text-sm font-semibold text-white">{copy.assistantTitle}</p>
                <p className="m-0 text-xs text-hub-subtle">{copy.assistantHint}</p>
              </div>
            </div>
            <div className="flex min-h-[220px] flex-1 flex-col justify-end gap-2.5" aria-live="polite">
              <p className="m-0 max-w-[88%] self-end rounded-[14px_14px_4px_14px] bg-hub-amber px-3.5 py-[11px] text-sm leading-[1.45] text-hub-ink">
                {role.question}
              </p>
              <p className="m-0 max-w-[92%] self-start rounded-[14px_14px_14px_4px] bg-[#1E2836] px-3.5 py-[11px] text-sm leading-[1.5] text-hub-text">
                {role.answer}
              </p>
            </div>
            {/* Decorativo: la consola de ejemplo no responde preguntas reales. */}
            <div className="flex items-center gap-2 rounded-xl border border-hub-line-2 bg-hub-ink-2 py-1.5 pl-3.5 pr-1.5">
              <label htmlFor="hub-assistant-input" className="sr-only">
                {copy.inputPlaceholder}
              </label>
              <input
                id="hub-assistant-input"
                type="text"
                disabled
                placeholder={copy.inputPlaceholder}
                className="min-h-[36px] min-w-0 flex-1 border-0 bg-transparent p-0 text-sm text-hub-text placeholder:text-hub-subtle focus:ring-0 disabled:cursor-not-allowed"
              />
              <button
                type="button"
                disabled
                aria-label={copy.sendLabel}
                className="flex h-10 w-10 items-center justify-center rounded-[9px] border-0 bg-hub-amber text-hub-ink disabled:cursor-not-allowed disabled:opacity-60"
              >
                <ArrowIcon size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
