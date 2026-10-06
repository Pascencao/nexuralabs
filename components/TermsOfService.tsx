"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import LegalPage from "@/components/LegalPage";
import { TERMS } from "@/lib/legal/terms";

export function TermsOfService() {
  const { dict, locale } = useLanguage();
  return <LegalPage labels={dict.legal.terms} doc={TERMS[locale]} />;
}
