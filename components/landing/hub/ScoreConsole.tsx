const MAX = 5;
const TICKS = [0, 1, 2, 3, 4, 5];

/** Visual del hero de proveedores: puntaje 0–5 por área en una "consola", con su leyenda de ejemplo. */
export default function ScoreConsole({
  locale,
  windowTitle,
  title,
  tag,
  scaleLabel,
  rows,
}: {
  locale: string;
  windowTitle: string;
  title: string;
  tag: string;
  scaleLabel: string;
  rows: { label: string; score: number }[];
}) {
  const format = (n: number) => n.toLocaleString(locale, { maximumFractionDigits: 1 });

  return (
    <figure className="m-0 min-w-0 flex-[1_1_480px] overflow-hidden rounded-[18px] border border-hub-line-2 bg-hub-ink-2 shadow-[0_30px_80px_rgba(0,0,0,.5),0_0_0_6px_rgba(244,183,64,.06)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hub-line px-4 py-3">
        <span className="font-plex-mono text-xs text-hub-muted">{windowTitle}</span>
        <span className="rounded-full border border-hub-line-2 px-2.5 py-1 font-plex-mono text-[11px] text-hub-subtle">
          {tag}
        </span>
      </div>
      <div className="p-5">
        <p className="m-0 font-display text-xl font-bold text-white">{title}</p>
        <ul className="mt-5 flex flex-col gap-4">
          {rows.map((row) => {
            const pct = (Math.min(Math.max(row.score, 0), MAX) / MAX) * 100;
            const low = row.score < 2;
            return (
              <li key={row.label}>
                <div className="flex items-baseline justify-between gap-4 text-sm">
                  <span className="text-[#D5DCE6]">{row.label}</span>
                  <span className={`font-plex-mono tabular-nums ${low ? "text-hub-amber" : "text-hub-live"}`}>
                    {format(row.score)} / {MAX}
                  </span>
                </div>
                <svg aria-hidden="true" className="mt-2 block h-2 w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <rect x="0" y="0" width="100" height="8" rx="4" fill="#1F2A3A" />
                  {TICKS.slice(1, -1).map((t) => (
                    <line key={t} x1={(t / MAX) * 100} x2={(t / MAX) * 100} y1="0" y2="8" stroke="#2A3647" strokeWidth="0.4" />
                  ))}
                  <rect x="0" y="0" width={pct} height="8" rx="4" fill={low ? "#F4B740" : "#4ADE9F"} />
                </svg>
              </li>
            );
          })}
        </ul>
        <div aria-hidden="true" className="mt-3 flex justify-between font-plex-mono text-[11px] text-hub-subtle">
          {TICKS.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
      <figcaption className="border-t border-hub-line px-4 py-3 font-plex-mono text-[11px] text-hub-subtle">
        {scaleLabel} · {tag}
      </figcaption>
    </figure>
  );
}
