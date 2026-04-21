import type { ReactNode } from "react";

type LandingSectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
};

export default function LandingSection({
  id,
  children,
  className = "",
  bordered = true,
}: LandingSectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 ${bordered ? "border-t border-nexura-border/80" : ""} mx-auto max-w-site px-5 py-20 sm:px-8 md:py-[80px] ${className}`}
    >
      {children}
    </section>
  );
}
