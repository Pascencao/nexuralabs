export type Dictionary = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    homeKeywords: string[];
    privacyTitle: string;
    privacyDescription: string;
    privacyKeywords: string[];
    termsTitle: string;
    termsDescription: string;
    termsKeywords: string[];
  };
  jsonLd: {
    organizationDescription: string;
    websiteLanguage: string;
  };
  header: {
    navAria: string;
    links: {
      problem: string;
      solution: string;
      monetization: string;
      experience: string;
      contact: string;
    };
    schedule: string;
    languageSwitcherAria: string;
  };
  hero: {
    badge: string;
    titleLead: string;
    titleHighlight: string;
    body: string;
    bodyEmphasis1: string;
    bodyEmphasis2: string;
    bodyEmphasis3: string;
    experienceLine: string;
    primaryCta: string;
    secondaryCta: string;
  };
  mockup: {
    tiles: string[];
    liveLabel: string;
    viewers: string;
    featuredLabel: string;
    featuredTitle: string;
    buyNow: string;
    monetizationBadge: string;
    railTitle: string;
  };
  problem: {
    kicker: string;
    title: string;
    subtitle: string;
    bullets: string[];
  };
  opportunity: {
    kicker: string;
    title: string;
    subtitle: string;
    items: string[];
  };
  solution: {
    kicker: string;
    title: string;
    subtitle: string;
    pillars: { title: string; lines: string[] }[];
  };
  monetization: {
    kicker: string;
    title: string;
    subtitle: string;
    bullets: string[];
  };
  cases: {
    kicker: string;
    title: string;
    items: { alt: string; text: string }[];
  };
  process: {
    kicker: string;
    title: string;
    steps: string[];
  };
  cta: {
    tag: string;
    title: string;
    description: string;
    button: string;
  };
  calendar: {
    loadingAria: string;
    title: string;
    subtitle: string;
    iframeTitle: string;
  };
  footer: {
    blurb: string;
    socialHeading: string;
    socialNavAria: string;
    rights: string;
  };
  legal: {
    privacy: { title: string; backHome: string; lastUpdated: string };
    terms: { title: string; backHome: string; lastUpdated: string };
  };
};
