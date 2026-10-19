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
    rigiHubTitle: string;
    rigiHubDescription: string;
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
    /** Página de entrada /rigi: el visitante elige si es proveedor o empresa. */
    rigiHub: {
      nav: { suppliers: string; companies: string; cta: string };
      hero: { eyebrow: string; titleLines: string[]; titleHighlight: string; lead: string };
      chooseLabel: string;
      supplier: HubChoice;
      company: HubChoice;
      help: {
        eyebrow: string;
        title: string;
        items: { lead: string; text: string }[];
        contact: { before: string; link: string; after: string };
      };
    };
    rigiSuppliers: {
      nav: HubNavCopy;
      hero: HubHeroCopy & {
        chart: {
          windowTitle: string;
          title: string;
          /** Leyenda obligatoria: "Ejemplo ilustrativo". */
          tag: string;
          scaleLabel: string;
          /** Un puntaje (0–5) por área, en el mismo orden que `areas.items`. */
          scores: number[];
        };
      };
      offer: HubStat[];
      why: HubSectionHead & { items: NamedItem[]; note: string };
      areas: HubSectionHead & { items: NamedItem[] };
      deliverables: HubSectionHead & { items: NamedItem[] };
      process: HubSectionHead & { stepLabel: string; steps: NamedItem[] };
      audience: HubSectionHead & { items: string[] };
      /** El caso sale de `cases.items[0]` (el mismo de la home). */
      precedent: HubSectionHead & { problemLabel: string; solutionLabel: string };
      faq: HubFaqCopy;
      contact: HubContactCopy;
    };
    rigiCompanies: {
      nav: HubNavCopy;
      hero: HubHeroCopy & {
        systems: string[];
        console: {
          title: string;
          live: string;
          kpis: { value: string; label: string; warn?: boolean }[];
          question: string;
          answer: string;
        };
      };
      offer: HubStat[];
      beforeAfter: HubSectionHead & {
        today: HubTimeline;
        withHub: HubTimeline;
        caption: string;
        pains: NamedItem[];
      };
      how: HubSectionHead & { steps: NamedItem[] };
      console: HubSectionHead & {
        tabsLabel: string;
        windowTitle: string;
        sampleTag: string;
        alertsTitle: string;
        assistantTitle: string;
        assistantHint: string;
        inputPlaceholder: string;
        sendLabel: string;
        inRange: string;
        attention: string;
        roles: {
          id: string;
          label: string;
          kpis: { value: string; label: string; ok: boolean; pct: number }[];
          alerts: { t: string; x: string }[];
          question: string;
          answer: string;
        }[];
      };
      ypf: HubSectionHead & {
        stats: HubStat[];
        footnote: string;
        sourcesLabel: string;
        sources: { name: string; url: string }[];
      };
      pilot: HubSectionHead & {
        weekLabel: string;
        weeks: NamedItem[];
        security: { title: string; subtitle: string; items: { title: string; text: string }[] };
      };
      faq: HubFaqCopy;
      contact: HubContactCopy;
    };
    /** Textos comunes del nav y el footer de las landings RIGI. */
    hub: { menuLabel: string; footerTagline: string };
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
    legalNavAria: string;
    rigiNavAria: string;
    rigiHub: string;
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

export type HubNavCopy = { links: { anchor: string; label: string }[]; cta: string };

export type HubHeroCopy = {
  eyebrow: string;
  /** Líneas del h1; la última (`titleHighlight`) va en ámbar. */
  titleLines: string[];
  titleHighlight: string;
  lead: string;
  primaryCta: string;
  secondaryCta: string;
  checks: string[];
};

export type HubStat = { value: string; label: string };

export type HubChoice = { tag: string; title: string; text: string; facts: HubStat[]; cta: string };

export type HubSectionHead = { eyebrow: string; title: string; intro?: string };

export type HubTimeline = { title: string; tag: string; moments: { t: string; x: string }[] };

export type HubFaqCopy = HubSectionHead & {
  more: { before: string; link: string; after: string };
  items: { q: string; a: string }[];
};

export type HubContactCopy = {
  eyebrow: string;
  title: string;
  body: string;
  steps: string[];
  submit: string;
  success: string;
};
