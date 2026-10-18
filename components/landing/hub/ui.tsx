/** Primitivas del sistema visual del handoff "Landing Hub Nexura" (tokens en .hub-theme). */

export type Tone = "dark" | "light" | "amber";

export function Container({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`mx-auto max-w-[1240px] px-6 ${className}`.trim()}>{children}</div>;
}

const SECTION_BG = {
  ink: "bg-hub-ink text-hub-text",
  grid: "hub-grid bg-hub-ink text-hub-text",
  paper: "bg-hub-paper text-hub-ink",
  amber: "bg-hub-amber text-hub-ink",
} as const;

export function Section({
  id,
  bg,
  className = "",
  children,
}: {
  id?: string;
  bg: keyof typeof SECTION_BG;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`${SECTION_BG[bg]} ${className}`.trim()}>
      <Container className="py-20 sm:py-28">{children}</Container>
    </section>
  );
}

const EYEBROW_TONE: Record<Tone, string> = {
  dark: "text-hub-amber",
  light: "text-hub-amber-ink",
  amber: "text-[#3D2A00]",
};

export function Eyebrow({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  return (
    <p className={`font-plex-mono text-[13px] tracking-[0.08em] ${EYEBROW_TONE[tone]}`}>{children}</p>
  );
}

export function H2({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  return (
    <h2
      className={`m-0 font-display text-[clamp(34px,4.4vw,56px)] font-extrabold leading-[1.02] tracking-[-0.025em] ${
        tone === "dark" ? "text-white" : ""
      }`}
    >
      {children}
    </h2>
  );
}

const INTRO_TONE: Record<Tone, string> = {
  dark: "text-hub-muted",
  light: "text-hub-paper-muted",
  amber: "text-[#2E2410]",
};

/** Encabezado de sección: eyebrow + h2 a la izquierda y, si hay, bajada a la derecha. */
export function SectionHead({
  tone,
  eyebrow,
  title,
  intro,
}: {
  tone: Tone;
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div className="flex max-w-[720px] flex-col gap-[18px]">
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        <H2 tone={tone}>{title}</H2>
      </div>
      {intro && (
        <p className={`m-0 max-w-[400px] text-[17px] leading-[1.55] ${INTRO_TONE[tone]}`}>{intro}</p>
      )}
    </div>
  );
}

export function ArrowIcon({ className = "", size = 18 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

export function LiveDot({ size = 8 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="hub-live inline-block shrink-0 rounded-full bg-hub-live"
      style={{ width: size, height: size }}
    />
  );
}

/** Franja de cifras debajo del hero. */
export function OfferStrip({ items }: { items: { value: string; label: string }[] }) {
  return (
    <Container className="pb-[72px]">
      <dl className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] overflow-hidden rounded-[18px] border border-hub-line bg-hub-ink-2">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col-reverse border-b border-hub-line px-7 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
          >
            <dt className="mt-1.5 text-sm text-hub-muted">{item.label}</dt>
            <dd className="font-display text-[44px] font-extrabold leading-none text-hub-amber">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </Container>
  );
}

/** Texto del hero (columna izquierda): eyebrow en vivo, h1, bajada, CTAs y checks. */
export function HeroText({
  eyebrow,
  titleLines,
  titleHighlight,
  lead,
  primaryCta,
  primaryHref,
  onPrimaryClick,
  secondaryCta,
  secondaryHref,
  checks,
}: {
  eyebrow: string;
  titleLines: string[];
  titleHighlight: string;
  lead: string;
  primaryCta: string;
  primaryHref: string;
  onPrimaryClick?: () => void;
  secondaryCta: string;
  secondaryHref: string;
  checks: string[];
}) {
  return (
    <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-7">
      <p className="inline-flex items-center gap-2.5 self-start rounded-full border border-hub-line-2 py-[7px] pl-2.5 pr-3.5 font-plex-mono text-xs tracking-[0.04em] text-hub-muted">
        <LiveDot />
        {eyebrow}
      </p>
      <h1 className="m-0 font-display text-[clamp(42px,6vw,76px)] font-extrabold leading-[0.98] tracking-[-0.03em] text-white">
        {titleLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
        <span className="block text-hub-amber">{titleHighlight}</span>
      </h1>
      <p className="m-0 max-w-[540px] text-[19px] leading-[1.55] text-hub-muted">{lead}</p>
      <div className="flex flex-wrap gap-3">
        <a
          href={primaryHref}
          onClick={onPrimaryClick}
          className="inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-hub-amber px-[26px] py-4 text-base font-semibold text-hub-ink no-underline transition-colors hover:bg-[#FFD27A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hub-ink"
        >
          {primaryCta}
          <ArrowIcon />
        </a>
        <a
          href={secondaryHref}
          className="inline-flex min-h-[52px] items-center rounded-full border border-[#3A475A] px-6 py-4 text-base font-medium text-hub-text no-underline transition-colors hover:border-hub-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hub-amber"
        >
          {secondaryCta}
        </a>
      </div>
      <ul className="flex flex-wrap gap-5 text-sm text-hub-subtle">
        {checks.map((check) => (
          <li key={check} className="inline-flex items-center gap-2">
            <CheckIcon className="text-hub-live" />
            {check}
          </li>
        ))}
      </ul>
    </div>
  );
}
