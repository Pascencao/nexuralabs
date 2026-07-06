"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import VennCircles from "@/components/VennCircles";

export default function ConnectionDiagram() {
  const { dict } = useLanguage();

  return (
    <section id="conexion" className="bg-ink-dark py-20 sm:py-28">
      <div className="mx-auto grid max-w-site items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            {dict.connection.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            {dict.connection.title}
          </h2>
          <p className="mt-6 text-base text-white/70">{dict.connection.body}</p>
        </div>
        <VennCircles className="mx-auto h-auto w-full max-w-md" labels={dict.connection.labels} />
      </div>
    </section>
  );
}
