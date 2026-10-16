import IllustrativeTag from "@/components/landing/rigi/IllustrativeTag";

const MAX = 5;
const TICKS = [0, 1, 2, 3, 4, 5];

/**
 * Barras horizontales con escala 0–5, en SVG inline. Cada barra es su propio SVG
 * para que las etiquetas sean texto HTML legible en cualquier ancho.
 */
export default function ScoreChart({
  locale,
  title,
  scaleLabel,
  illustrative,
  rows,
}: {
  locale: string;
  title: string;
  scaleLabel: string;
  illustrative: string;
  rows: { label: string; score: number }[];
}) {
  const format = (n: number) => n.toLocaleString(locale, { maximumFractionDigits: 1 });

  return (
    <figure className="rounded-2xl bg-white p-6 shadow-card sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-lg font-bold text-ink">{title}</p>
        <IllustrativeTag>{illustrative}</IllustrativeTag>
      </div>

      <ul className="mt-6 space-y-5">
        {rows.map((row) => {
          const pct = (Math.min(Math.max(row.score, 0), MAX) / MAX) * 100;
          return (
            <li key={row.label}>
              <div className="flex items-baseline justify-between gap-4 text-sm">
                <span className="font-medium text-ink">{row.label}</span>
                <span className="font-semibold tabular-nums text-ink">
                  {format(row.score)} / {MAX}
                </span>
              </div>
              <svg
                aria-hidden="true"
                className="mt-2 block h-3 w-full"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <rect x="0" y="0" width="100" height="12" rx="6" className="fill-canvas" />
                {TICKS.slice(1, -1).map((t) => (
                  <line
                    key={t}
                    x1={(t / MAX) * 100}
                    x2={(t / MAX) * 100}
                    y1="0"
                    y2="12"
                    className="stroke-ink/15"
                    strokeWidth="0.4"
                  />
                ))}
                <rect x="0" y="0" width={pct} height="12" rx="6" className="fill-gold" />
              </svg>
            </li>
          );
        })}
      </ul>

      <svg aria-hidden="true" className="mt-3 block h-4 w-full overflow-visible" viewBox="0 0 100 4" preserveAspectRatio="none">
        {TICKS.map((t) => (
          <line key={t} x1={(t / MAX) * 100} x2={(t / MAX) * 100} y1="0" y2="4" className="stroke-muted" strokeWidth="0.4" />
        ))}
      </svg>
      <div aria-hidden="true" className="flex justify-between text-xs tabular-nums text-muted">
        {TICKS.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      <figcaption className="mt-4 text-sm text-muted">
        {scaleLabel} · {illustrative}
      </figcaption>
    </figure>
  );
}
