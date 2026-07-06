"use client";

import { Settings2, Hammer, Rocket } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const config = [
  { icon: Settings2, colorClass: "bg-ops" },
  { icon: Hammer, colorClass: "bg-build" },
  { icon: Rocket, colorClass: "bg-scale" },
];

export default function ServiceLines() {
  const { dict } = useLanguage();

  return (
    <section id="servicios" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold">
          {dict.services.kicker}
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-bold text-ink sm:text-4xl">
          {dict.services.title}
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {dict.services.lines.map((line, i) => {
            const { icon: Icon, colorClass } = config[i];
            return (
              <div
                key={line.name}
                className="rounded-2xl bg-canvas p-8 shadow-card transition-shadow hover:shadow-card-hover"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${colorClass}`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-ink">{line.name}</h3>
                <p className="mt-2 text-base text-muted">{line.description}</p>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-base text-muted">
          {dict.services.connectionNote}
        </p>
      </div>
    </section>
  );
}
