import LandingSection from "@/components/ui/landing-section";
import { GPU_HOVER } from "@/lib/interaction-classes";
import { scrollRevealClass } from "@/lib/scroll-reveal";
import type { Dictionary } from "@/lib/i18n/types";

export default function MonetizationSection({
  copy,
}: {
  copy: Dictionary["monetization"];
}) {
  return (
    <LandingSection id="diferencial">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className={scrollRevealClass(0)}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexura-rose">
            {copy.kicker}
          </p>
          <h2 className="mt-4 font-inter text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg text-nexura-muted">{copy.subtitle}</p>
        </div>
        <ul className="space-y-4">
          {copy.bullets.map((b, i) => (
            <li
              key={b}
              className={`rounded-2xl border border-nexura-border bg-nexura-bg/60 p-5 shadow-card backdrop-blur-sm ${GPU_HOVER} ${scrollRevealClass(i + 1)}`}
            >
              <p className="text-[15px] font-medium text-white">{b}</p>
            </li>
          ))}
        </ul>
      </div>
    </LandingSection>
  );
}
