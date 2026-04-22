import Image from "next/image";
import LandingSection from "@/components/ui/landing-section";
import { GPU_HOVER } from "@/lib/interaction-classes";
import { scrollRevealClass } from "@/lib/scroll-reveal";
import type { Dictionary } from "@/lib/i18n/types";

const caseAssets = [
  {
    logo: "/images/TNT_Logo.svg",
    logoOnDark: true,
    width: 200,
    height: 56,
  },
  {
    logo: "/images/DGO-logo.png",
    logoOnDark: false,
    width: 220,
    height: 64,
  },
  {
    logo: "/images/Warner_Bros.svg",
    logoOnDark: true,
    width: 120,
    height: 126,
  },
] as const;

const CASE_LOGO_SIZES = "(max-width: 767px) min(92vw, 240px), 240px";

export default function CaseStudiesSection({
  copy,
}: {
  copy: Dictionary["cases"];
}) {
  return (
    <LandingSection id="casos">
      <div className={`mx-auto max-w-3xl text-center ${scrollRevealClass(0)}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexura-muted">
          {copy.kicker}
        </p>
        <h2 className="mt-4 font-inter text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {copy.title}
        </h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {caseAssets.map((c, i) => {
          const item = copy.items[i];
          return (
            <article
              key={c.logo}
              className={`group rounded-2xl border border-nexura-border bg-nexura-surface p-8 text-center shadow-card ${GPU_HOVER} ${scrollRevealClass(i + 1)}`}
            >
              <div className="mb-6 flex min-h-[4.75rem] items-center justify-center px-2">
                <Image
                  src={c.logo}
                  alt={item.alt}
                  width={c.width}
                  height={c.height}
                  sizes={CASE_LOGO_SIZES}
                  className={`max-h-16 w-auto max-w-[min(100%,240px)] object-contain object-center ${
                    c.logoOnDark
                      ? "brightness-0 invert opacity-[0.92] transition-opacity duration-300 group-hover:opacity-100"
                      : "drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
                  }`}
                />
              </div>
              <p className="text-sm leading-relaxed text-nexura-muted">{item.text}</p>
            </article>
          );
        })}
      </div>
    </LandingSection>
  );
}
