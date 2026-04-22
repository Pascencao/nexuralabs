import ButtonPrimary from "@/components/ui/buttonPrimary";
import ButtonSecondary from "@/components/ui/buttonSecondary";
import HeroVisualClient from "@/components/hero-visual-client";
import type { Dictionary } from "@/lib/i18n/types";

const MEETING_URL = "https://calendar.app.google/xsCKdDtbHWRrH7tHA";

export default function HeroStreaming({ dict }: { dict: Dictionary }) {
  const { hero, mockup } = dict;

  return (
    <section className="relative mx-auto max-w-site px-5 pb-16 pt-28 sm:px-8 md:pb-24 md:pt-32">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="scroll-reveal">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-nexura-border bg-nexura-surface/80 px-4 py-1.5 pl-3 text-xs font-medium uppercase tracking-[0.18em] text-nexura-muted before:mr-1.5 before:inline-block before:text-nexura-turquoise before:content-['●']">
            {hero.badge}
          </p>
          <h1 className="font-inter text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]">
            {hero.titleLead}{" "}
            <span className="text-nexura-turquoise">{hero.titleHighlight}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-nexura-muted">
            {hero.body}{" "}
            <span className="text-white/90">{hero.bodyEmphasis1}</span> con{" "}
            <span className="text-white/90">{hero.bodyEmphasis2}</span> e{" "}
            <span className="text-white/90">{hero.bodyEmphasis3}</span>.
          </p>
          <p className="mt-4 text-sm text-nexura-muted">{hero.experienceLine}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ButtonPrimary text={hero.primaryCta} href={MEETING_URL} icon />
            <ButtonSecondary text={hero.secondaryCta} href="#proceso" />
          </div>
        </div>

        <HeroVisualClient mockup={mockup} />
      </div>
    </section>
  );
}
