"use client";

import { useCallback, useRef, useState } from "react";
import type { Dictionary } from "@/lib/i18n/types";

export default function StreamingMockup({
  copy,
}: {
  copy: Dictionary["mockup"];
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const tiles = copy.tiles;

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setOffset({ x: px * 10, y: py * 10 });
  }, []);

  const onLeave = useCallback(() => setOffset({ x: 0, y: 0 }), []);

  return (
    <div
      ref={wrap}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto w-full max-w-md select-none lg:max-w-none"
    >
      <div
        className="relative transform-gpu overflow-hidden rounded-2xl border border-nexura-border bg-nexura-surface shadow-card will-change-transform"
        style={{
          transform: `perspective(1200px) rotateX(${-4 + offset.y * 0.15}deg) rotateY(${4 + offset.x * 0.15}deg) translate3d(${offset.x}px, ${offset.y}px, 0)`,
          transition: "transform 120ms ease-out",
        }}
      >
        <div className="flex items-center justify-between border-b border-nexura-border px-4 py-3">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-nexura-muted">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-nexura-rose opacity-90 shadow-[0_0_0_3px_rgba(255,77,141,0.25)] motion-safe:animate-pulse"
              aria-hidden
            />
            {copy.liveLabel}
          </div>
          <span className="text-xs text-nexura-muted">{copy.viewers}</span>
        </div>

        <div className="relative aspect-video bg-gradient-to-br from-zinc-900 via-nexura-bg to-zinc-950">
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(124,92,255,0.12),transparent_40%,rgba(44,230,209,0.08))]"
            aria-hidden
          />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-widest text-white/70">
                {copy.featuredLabel}
              </p>
              <p className="mt-1 text-lg font-semibold tracking-tight text-white">
                {copy.featuredTitle}
              </p>
            </div>
            <button
              type="button"
              className="rounded-lg bg-nexura-turquoise px-4 py-2 text-xs font-semibold text-nexura-bg shadow-glow-turquoise transition-transform duration-300 hover:scale-[1.02]"
            >
              {copy.buyNow}
            </button>
          </div>
          <div className="pointer-events-none absolute right-4 top-4 rounded-md border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-white/90 backdrop-blur-sm">
            {copy.monetizationBadge}
          </div>
        </div>

        <div className="border-t border-nexura-border bg-nexura-bg/80 px-3 py-3">
          <p className="mb-2 px-1 text-[11px] font-medium uppercase tracking-widest text-nexura-muted">
            {copy.railTitle}
          </p>
          <div className="overflow-hidden">
            <div className="flex w-max animate-marquee gap-2 pr-2">
              {[...tiles, ...tiles].map((label, i) => (
                <div
                  key={`${label}-${i}`}
                  className="flex h-14 w-24 shrink-0 items-end rounded-lg border border-nexura-border bg-nexura-surface p-2 text-[10px] font-medium text-nexura-muted"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-tr from-nexura-violet/15 via-transparent to-nexura-turquoise/10 blur-2xl"
        aria-hidden
      />
    </div>
  );
}
