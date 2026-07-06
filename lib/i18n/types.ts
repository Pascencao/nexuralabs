export type Dictionary = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    homeKeywords: string[];
    privacyTitle: string;
    privacyDescription: string;
    termsTitle: string;
    termsDescription: string;
  };
  jsonLd: {
    organizationDescription: string;
    websiteLanguage: string;
  };
  header: {
    navAria: string;
    links: {
      problem: string;
      services: string;
      about: string;
      contact: string;
    };
    cta: string;
    languageSwitcherAria: string;
  };
  hero: {
    badge: string;
    titleLead: string;
    titleHighlight: string;
    body: string;
    primaryCta: string;
  };
  problem: {
    kicker: string;
    title: string;
    items: { name: string; description: string }[];
  };
  services: {
    kicker: string;
    title: string;
    lines: { name: string; description: string }[];
    connectionNote: string;
  };
  serviceDetail: {
    ops: {
      name: string;
      problem: string;
      whatWeDo: string;
      differentiators: string[];
    };
    build: {
      name: string;
      problem: string;
      whatWeDo: string;
      differentiators: string[];
    };
    scale: {
      name: string;
      problem: string;
      whatWeDo: string;
      differentiators: string[];
    };
  };
  connection: {
    kicker: string;
    title: string;
    body: string;
    labels: { ops: string; build: string; scale: string };
  };
  about: {
    kicker: string;
    name: string;
    role: string;
    points: string[];
    photoAlt: string;
  };
  companies: {
    kicker: string;
    title: string;
    names: string[];
    moreLabel: string;
  };
  stats: {
    kicker: string;
    title: string;
    items: { value: string; label: string }[];
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    emailLabel: string;
    linkedinLabel: string;
  };
  footer: {
    rights: string;
  };
  legal: {
    privacy: { title: string; backHome: string; lastUpdated: string };
    terms: { title: string; backHome: string; lastUpdated: string };
  };
};
