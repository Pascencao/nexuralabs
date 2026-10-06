"use client";

import { Mail, Linkedin } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import Kicker from "@/components/Kicker";
import ContactForm from "@/components/ContactForm";
import type { Need } from "@/lib/forms/validate";

export default function Contact({ defaultNeed }: { defaultNeed?: Need } = {}) {
  const { dict } = useLanguage();

  return (
    <section id="contacto" className="bg-ink-dark py-20 sm:py-28">
      <div className="mx-auto grid max-w-site grid-cols-1 items-start gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <Kicker tone="dark" className="justify-center lg:justify-start">
            {dict.contact.kicker}
          </Kicker>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{dict.contact.title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/70 lg:mx-0">{dict.contact.body}</p>

          <div className="mt-10 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="mailto:pablo@nexuralabs.agency"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40"
            >
              <Mail size={18} aria-hidden="true" />
              {dict.contact.emailLabel}
            </a>
            <a
              href="https://www.linkedin.com/company/nexuralabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40"
            >
              <Linkedin size={18} aria-hidden="true" />
              {dict.contact.linkedinLabel}
            </a>
          </div>
        </div>

        <ContactForm defaultNeed={defaultNeed} />
      </div>
    </section>
  );
}
