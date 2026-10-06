"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import LegalPage from "@/components/LegalPage";
import { PRIVACY } from "@/lib/legal/privacy";

export function PrivacyPolicy() {
  const { dict, locale } = useLanguage();
  return <LegalPage labels={dict.legal.privacy} doc={PRIVACY[locale]} />;
}
