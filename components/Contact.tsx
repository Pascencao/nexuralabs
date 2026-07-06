"use client";

import { Mail, Linkedin } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export default function Contact() {
  const { dict } = useLanguage();

  return (
    <section id="contacto" className="bg-ink-dark py-20 sm:py-28">
      <div className="mx-auto max-w-site px-5 text-center sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold">
          {dict.contact.kicker}
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{dict.contact.title}</h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/70">{dict.contact.body}</p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:pablo@nexuralabs.agency"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink-dark transition-transform hover:scale-[1.02]"
          >
            <Mail size={18} />
            {dict.contact.emailLabel}
          </a>
          <a
            href="https://www.linkedin.com/company/nexuralabs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40"
          >
            <Linkedin size={18} />
            {dict.contact.linkedinLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
