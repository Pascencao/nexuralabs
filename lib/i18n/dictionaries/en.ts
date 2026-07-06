import type { Dictionary } from "../types";

const en: Dictionary = {
  meta: {
    homeTitle: "Nexuralabs | Technology and growth consulting",
    homeDescription:
      "We help growth stage startups and Latin American companies bring order to their processes, build the technology they need and scale without breaking the operation.",
    homeKeywords: [
      "technology consulting",
      "digital transformation",
      "custom software development",
      "process consulting",
      "business growth",
      "Latin America",
    ],
    privacyTitle: "Privacy Policy | Nexuralabs",
    privacyDescription: "Nexuralabs privacy policy.",
    termsTitle: "Terms of Service | Nexuralabs",
    termsDescription: "Nexuralabs terms of service.",
  },
  jsonLd: {
    organizationDescription:
      "Technology and growth consulting for startups and companies across Latin America: processes, custom software and scaling.",
    websiteLanguage: "en-US",
  },
  header: {
    navAria: "Main navigation",
    links: {
      problem: "The problem",
      services: "How we work",
      about: "About",
      contact: "Contact",
    },
    cta: "Let's talk",
    languageSwitcherAria: "Switch language",
  },
  hero: {
    badge: "Technology and growth consulting",
    titleLead: "Growing without",
    titleHighlight: "breaking.",
    body: "Pablo Ascencao helps growth stage startups and established Latin American companies bring order to the operation, build the technology a generic tool can no longer handle, and prepare the structure to scale without burning out the team.",
    primaryCta: "Let's talk",
  },
  problem: {
    kicker: "The problem",
    title: "Growth breaks things.",
    items: [
      {
        name: "Processes",
        description:
          "The ones you set up early on can no longer handle today's volume or complexity.",
      },
      {
        name: "Software",
        description: "No generic tool solves what is specific to your operation.",
      },
      {
        name: "Structure",
        description:
          "The team and the way it's organized can't keep up with the pace the business demands.",
      },
    ],
  },
  services: {
    kicker: "How we work",
    title: "Three lines, one goal",
    lines: [
      {
        name: "Ops",
        description:
          "Diagnosis and redesign of processes, tool selection and implementation, team training.",
      },
      {
        name: "Build",
        description:
          "Custom software development, for when the problem is no longer solved by an existing tool.",
      },
      {
        name: "Scale",
        description:
          "The strategic layer to grow with order, or to rein in a structure that has already outgrown itself.",
      },
    ],
    connectionNote:
      "They are not separate boxes: Ops solves what's urgent and also works on its own, Scale almost always builds on an Ops diagnosis, and Build shows up whenever either one needs something that doesn't exist yet.",
  },
  serviceDetail: {
    ops: {
      name: "Ops",
      problem:
        "You know something isn't working well, but you don't have the time or the method to stop and look at it.",
      whatWeDo:
        "We start by diagnosing how things get done today, find where time or money leaks out, and redesign the process before touching a single tool. Then we select or implement the right software and train the team to run it on its own.",
      differentiators: [
        "We start with the process: the tool comes after.",
        "Works as a standalone project or as the foundation of a bigger Scale engagement.",
        "The team ends up trained to operate without depending on a permanent consultant.",
      ],
    },
    build: {
      name: "Build",
      problem:
        "You need a platform or a system and you're not entirely sure what to ask whoever builds it for you.",
      whatWeDo:
        "Before writing a line of code, we review what the business actually needs to solve. The original request usually changes quite a bit once we understand the real process behind it. We design and develop custom software, integrated with what the company already uses.",
      differentiators: [
        "Consultative approach: we ask what's needed first, then we build.",
        "Shows up as a continuation of an Ops or Scale engagement, or as a direct client request.",
        "Integrates with the tools the team already uses, no new data silos.",
      ],
    },
    scale: {
      name: "Scale",
      problem:
        "The business grew, but the structure you built for ten people creaks under fifty.",
      whatWeDo:
        "We work the strategic layer of growth: what needs to change in the organization, processes and technology to scale without everything turning chaotic. Often it just takes unblocking one or two key processes, identified through an Ops diagnosis.",
      differentiators: [
        "A full view: organization, processes and technology in the same conversation.",
        "Built on a concrete diagnosis, not a generic growth plan.",
        "Aimed at medium term decisions, focused on making sure the operation can take the weight.",
      ],
    },
  },
  connection: {
    kicker: "How they connect",
    title: "Three lines, one job",
    body: "Ops is the tactical entry point and works perfectly on its own. Scale is the strategic layer and almost always feeds off an Ops diagnosis. Build shows up as a derivation of either one, or because the client comes in directly asking for a platform.",
    labels: { ops: "Ops", build: "Build", scale: "Scale" },
  },
  about: {
    kicker: "About me",
    name: "Pablo Ascencao",
    role: "Technology and digital transformation consultant",
    points: [
      "14 years of experience in technology, engineering team leadership and digital transformation.",
      "At Globant he went from Web UI Developer to Tech Manager, leading teams of over 40 engineers.",
      "Additional experience across startups and scale-ups, at different growth stages.",
      "Based in Rosario, Argentina. Works remotely with clients across Latin America.",
    ],
    photoAlt: "Photo of Pablo Ascencao",
  },
  companies: {
    kicker: "Track record",
    title: "Companies he has worked at or with",
    names: [
      "Globant",
      "TNT",
      "AT&T",
      "Uniqlo",
      "State Farm",
      "Turner International",
      "Warner Bros.",
      "American Century Investments",
      "iManage",
      "XPO Logistics",
      "Dell",
    ],
    moreLabel: "+ more",
  },
  stats: {
    kicker: "Why Nexuralabs",
    title: "A diagnosis before anything else.",
    items: [
      { value: "14", label: "years leading technology teams" },
      { value: "40+", label: "people in the teams he led" },
      { value: "100%", label: "of the work billed on results, not hours" },
      { value: "1st", label: "step is always a diagnosis, before proposing anything" },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Let's talk",
    body: "Write to me and we'll set up twenty free minutes to talk about your specific situation: what growth is breaking, or what you need to build for the next step.",
    emailLabel: "pablo@nexuralabs.agency",
    linkedinLabel: "Nexuralabs on LinkedIn",
  },
  footer: {
    rights: "All rights reserved.",
  },
  legal: {
    privacy: {
      title: "Privacy Policy",
      backHome: "Back to home",
      lastUpdated: "Last updated",
    },
    terms: {
      title: "Terms of Service",
      backHome: "Back to home",
      lastUpdated: "Last updated",
    },
  },
};

export default en;
