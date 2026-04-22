import LandingSection from "@/components/ui/landing-section";
import { GPU_HOVER } from "@/lib/interaction-classes";
import { scrollRevealClass } from "@/lib/scroll-reveal";
import type { Dictionary } from "@/lib/i18n/types";

export default function SolutionSection({
  copy,
}: {
  copy: Dictionary["solution"];
}) {
  return (
    <LandingSection id="solucion">
      <div className={`mx-auto max-w-3xl text-center ${scrollRevealClass(0)}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexura-violet">
          {copy.kicker}
        </p>
        <h2 className="mt-4 font-inter text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {copy.title}
        </h2>
        <p className="mt-5 text-lg text-nexura-muted">{copy.subtitle}</p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {copy.pillars.map((p, i) => (
          <div
            key={p.title}
            className={`flex h-full flex-col rounded-2xl border border-nexura-border bg-nexura-surface p-8 shadow-card ${GPU_HOVER} ${scrollRevealClass(i + 1)}`}
          >
            <h3 className="text-xl font-semibold text-white">{p.title}</h3>
            <div className="nexura-pillar-lines">
              {p.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </LandingSection>
  );
}
