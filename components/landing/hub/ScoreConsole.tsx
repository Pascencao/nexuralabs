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
                {/* Barra en HTML (no SVG escalado) para que los extremos queden redondos a cualquier ancho. */}
                <div aria-hidden="true" className="relative mt-2 h-2.5 w-full overflow-hidden rounded-full bg-hub-line">
                  {TICKS.slice(1, -1).map((t) => (
                    <span
                      key={t}
                      className="absolute inset-y-0 w-px bg-hub-line-2"
                      style={{ left: `${(t / MAX) * 100}%` }}
                    />
                  ))}
                  <div
                    className={`relative h-full rounded-full ${low ? "bg-hub-amber" : "bg-hub-live"}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
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
