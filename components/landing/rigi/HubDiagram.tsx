/** Flecha del diagrama: hacia abajo en móvil, hacia la derecha desde lg. */
function Arrow() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center py-2 lg:px-2 lg:py-0">
      <svg viewBox="0 0 24 24" className="h-8 w-8 rotate-90 text-gold lg:rotate-0" fill="none">
        <path d="M3 12h16m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/** Sistemas → Hub Nexura → consola, alertas y asistente. */
export default function HubDiagram({
  sourcesLabel,
  sources,
  hubName,
  hubCaption,
  outputsLabel,
  outputs,
}: {
  sourcesLabel: string;
  sources: string[];
  hubName: string;
  hubCaption: string;
  outputsLabel: string;
  outputs: { name: string; description: string }[];
}) {
  return (
    <div className="grid items-center gap-2 lg:grid-cols-[1fr_auto_minmax(0,0.8fr)_auto_1fr]">
      <div className="rounded-2xl bg-canvas p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted">{sourcesLabel}</p>
        <ul className="mt-4 grid grid-cols-2 gap-2">
          {sources.map((source) => (
            <li
              key={source}
              className="rounded-lg border border-ink/10 bg-white px-3 py-2 text-sm font-medium text-ink"
            >
              {source}
            </li>
          ))}
        </ul>
      </div>

      <Arrow />

      <div className="rounded-2xl bg-ink-dark p-6 text-center">
        <p className="text-xl font-bold text-white">
          {hubName}
        </p>
        <p className="mt-2 text-sm text-white/70">{hubCaption}</p>
      </div>

      <Arrow />

      <div className="rounded-2xl bg-canvas p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted">{outputsLabel}</p>
        <ul className="mt-4 space-y-3">
          {outputs.map((output) => (
            <li key={output.name} className="rounded-lg border border-ink/10 bg-white px-4 py-3">
              <p className="text-sm font-semibold text-ink">{output.name}</p>
              <p className="mt-0.5 text-sm text-muted">{output.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
