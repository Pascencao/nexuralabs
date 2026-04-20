import type { ReactNode } from "react";

type LandingSectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  bordered?: boolean;
};

export default function LandingSection({
  id,
  children,
  className = "",
  innerClassName = "",
  bordered = true,
}: LandingSectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 ${bordered ? "border-t border-nexura-border/80" : ""} ${className}`}
    >
      <div
        className={`mx-auto max-w-site px-5 sm:px-8 py-20 md:py-[80px] ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
