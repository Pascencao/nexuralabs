"use client";

import Image from "next/image";
import { Award, Building2, Users, MapPin } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const icons = [Award, Building2, Users, MapPin];

export default function About() {
  const { dict } = useLanguage();

  return (
    <section id="sobre-mi" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-site items-start gap-12 px-5 sm:px-8 lg:grid-cols-[280px_1fr] lg:gap-16">
        <div className="flex flex-col items-center lg:items-start">
          <div className="relative h-48 w-48 overflow-hidden rounded-full bg-ink">
            <Image
              src="/images/pablo.jpg"
              alt={dict.about.photoAlt}
              fill
              sizes="192px"
              className="object-cover"
              priority
            />
          </div>
          <p className="mt-6 text-center text-lg font-bold text-ink lg:text-left">
            {dict.about.name}
          </p>
          <p className="mt-1 text-center text-sm text-muted lg:text-left">{dict.about.role}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            {dict.about.kicker}
          </p>
          <ul className="mt-6 space-y-6">
            {dict.about.points.map((point, i) => {
              const Icon = icons[i];
              return (
                <li key={point} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink/5 text-ink">
                    <Icon size={18} />
                  </span>
                  <span className="pt-2 text-base text-muted">{point}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
