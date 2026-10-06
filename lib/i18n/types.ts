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
    secondaryCta: string;
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
    aiBadge: string;
    ops: ServiceDetail;
    build: ServiceDetail;
    scale: ServiceDetail;
  };
  connection: {
    kicker: string;
    title: string;
    body: string;
    labels: { ops: string; build: string; scale: string };
  };
  aiApproach: {
    kicker: string;
    title: string;
    intro: string;
    methodLabel: string;
    steps: { name: string; description: string }[];
    comparison: {
      caption: string;
      headers: [string, string];
      rows: [string, string][];
    };
    cta: string;
  };
  cases: {
    kicker: string;
    title: string;
    problemLabel: string;
    solutionLabel: string;
    resultsLabel: string;
    items: CaseStudy[];
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
    /** `icon: "check"` reemplaza al número grande cuando no hay una cifra real. */
    items: { value?: string; icon?: "check"; label: string }[];
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

export type ServiceDetail = {
  name: string;
  problem: string;
  whatWeDo: string;
  differentiators: string[];
  ai: string;
};

export type CaseResult = {
  value: string;
  label: string;
  /** true: `value` es el texto del placeholder, todavía sin dato real. */
  placeholder?: boolean;
};

export type CaseStudy = {
  id: string;
  tag: string;
  title: string;
  problem: string;
  solution: string;
  /** Puede incluir el token {sector}, que se reemplaza por `clientPlaceholder`. */
  client: string;
  clientPlaceholder?: string;
  results: CaseResult[];
};
