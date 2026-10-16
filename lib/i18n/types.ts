import type {
  ContactChannel,
  FieldError,
  Need,
  SupplierSector,
  SystemOption,
} from "@/lib/forms/validate";

export type Dictionary = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    homeKeywords: string[];
    privacyTitle: string;
    privacyDescription: string;
    termsTitle: string;
    termsDescription: string;
    posventaTitle: string;
    posventaDescription: string;
    rescueTitle: string;
    rescueDescription: string;
    rigiSuppliersTitle: string;
    rigiSuppliersDescription: string;
    rigiCompaniesTitle: string;
    rigiCompaniesDescription: string;
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
      ai: string;
      cases: string;
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
  faq: {
    kicker: string;
    title: string;
    items: { q: string; a: string }[];
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    emailLabel: string;
    linkedinLabel: string;
    form: {
      fields: { name: string; email: string; need: string; message: string };
      optional: string;
      needPlaceholder: string;
      needOptions: Record<Need, string>;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  formErrors: Record<FieldError, string>;
  checklist: {
    kicker: string;
    title: string;
    intro: string;
    fields: { email: string; company: string };
    submit: string;
    sending: string;
    /** Contiene el token {email}. */
    success: string;
    error: string;
  };
  /** Etiquetas comunes de los formularios de las landings RIGI. */
  rigiForm: {
    fields: {
      name: string;
      company: string;
      companyOrProject: string;
      role: string;
      email: string;
      workEmail: string;
      phone: string;
      phoneWhatsapp: string;
      sector: string;
      channel: string;
      systems: string;
      goal: string;
    };
    sectorPlaceholder: string;
    sectorOptions: Record<SupplierSector, string>;
    channelOptions: Record<ContactChannel, string>;
    systemOptions: Record<SystemOption, string>;
    privacy: { before: string; link: string; after: string };
    sending: string;
    error: string;
  };
  landings: {
    /** Leyenda obligatoria en todo gráfico o pantalla de ejemplo. */
    illustrative: string;
    posventa: {
      hero: LandingHeroCopy;
      pain: { kicker: string; title: string; items: { name: string; description: string }[] };
      build: { kicker: string; title: string; items: string[]; note: string };
      method: { kicker: string; title: string };
      faq: { q: string; a: string }[];
    };
    rescue: {
      hero: LandingHeroCopy;
      symptoms: { kicker: string; title: string; items: { name: string; description: string }[] };
      approach: { kicker: string; title: string; steps: { name: string; description: string }[] };
    };
    rigiSuppliers: {
      hero: LandingHeroCopy;
      why: { kicker: string; title: string; intro: string; items: NamedItem[]; note: string };
      areas: { kicker: string; title: string; items: NamedItem[] };
      deliverables: {
        kicker: string;
        title: string;
        items: NamedItem[];
        chart: {
          title: string;
          scaleLabel: string;
          /** Un puntaje (0–5) por área, en el mismo orden que `areas.items`. */
          scores: number[];
        };
      };
      process: SectionWithSteps;
      audience: { kicker: string; title: string; items: string[] };
      precedent: { kicker: string; title: string; intro: string };
      faq: FaqCopy;
      form: RigiFormCopy;
    };
    rigiCompanies: {
      hero: LandingHeroCopy;
      problem: { kicker: string; title: string; intro: string; items: NamedItem[] };
      solution: {
        kicker: string;
        title: string;
        intro: string;
        sourcesLabel: string;
        sources: string[];
        hubName: string;
        hubCaption: string;
        outputsLabel: string;
        outputs: NamedItem[];
      };
      value: { kicker: string; title: string; blocks: { name: string; title: string; description: string }[] };
      process: SectionWithSteps;
      console: {
        kicker: string;
        title: string;
        intro: string;
        windowTitle: string;
        kpis: { label: string; value: string }[];
        alertsTitle: string;
        alerts: string[];
        assistantTitle: string;
        question: string;
        answer: string;
      };
      ypf: {
        kicker: string;
        title: string;
        intro: string;
        stats: { value: string; label: string }[];
        footnote: string;
        sourcesLabel: string;
        sources: { name: string; url: string }[];
      };
      pilot: SectionWithSteps & { note: string };
      security: { kicker: string; title: string; items: string[]; note: string };
      faq: FaqCopy;
      form: RigiFormCopy;
    };
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
    legalNavAria: string;
    rigiNavAria: string;
    rigiSuppliers: string;
    rigiCompanies: string;
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

export type LandingHeroCopy = { kicker: string; title: string; intro: string; cta: string };

export type NamedItem = { name: string; description: string };

export type SectionWithSteps = { kicker: string; title: string; steps: NamedItem[] };

export type FaqCopy = { kicker: string; title: string; items: { q: string; a: string }[] };

export type RigiFormCopy = {
  kicker: string;
  title: string;
  body: string;
  submit: string;
  success: string;
};
