import LandingSection from "@/components/ui/landing-section";
import { GPU_HOVER } from "@/lib/interaction-classes";
import { scrollRevealClass } from "@/lib/scroll-reveal";
import type { Dictionary } from "@/lib/i18n/types";

export default function ProblemSection({
  copy,
}: {
  copy: Dictionary["problem"];
}) {
  return (
    <LandingSection id="problema">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className={`lg:col-span-5 ${scrollRevealClass(0)}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexura-violet">
            {copy.kicker}
          </p>
          <h2 className="mt-4 font-inter text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-nexura-muted">
            {copy.subtitle}
          </p>
        </div>
        <ul className="grid gap-4 lg:col-span-7">
          {copy.bullets.map((item, i) => (
            <li
              key={item}
              className={`rounded-2xl border border-nexura-border bg-nexura-surface p-6 shadow-card ${GPU_HOVER} ${scrollRevealClass(i + 1)}`}
            >
              <span className="text-sm font-medium text-white">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </LandingSection>
  );
}
