import type { Dictionary } from "../types";

const en: Dictionary = {
  meta: {
    homeTitle: "Nexura Labs: Operations, Software & Applied AI for Growing Companies",
    homeDescription:
      "We fix operations, build the technology you're missing, and apply AI where it pays off.",
    homeKeywords: [
      "technology consulting",
      "digital transformation",
      "custom software development",
      "process consulting",
      "business growth",
      "Latin America",
    ],
    privacyTitle: "Privacy Policy | Nexura Labs",
    privacyDescription: "Nexura Labs privacy policy.",
    termsTitle: "Terms of Service | Nexura Labs",
    termsDescription: "Nexura Labs terms of service.",
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
      ai: "AI, done right",
      cases: "Work",
      about: "About",
      contact: "Contact",
    },
    cta: "Let's talk",
    languageSwitcherAria: "Switch language",
  },
  hero: {
    badge: "Technology and growth consulting",
    titleLead: "Grow without",
    titleHighlight: "breaking.",
    body: "We fix how your operation runs, build the technology you're missing, and put AI to work where it actually pays off. No hype, just results you can measure.",
    primaryCta: "Let's talk",
    secondaryCta: "See how we use AI →",
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
      {
        name: "AI",
        description:
          "Everyone's talking about AI. Few have it actually working. Maybe you ran a pilot that never left the demo stage, or you're not sure where to start, or whether it's worth it.",
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
    aiBadge: "With AI",
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
      ai: "We map your processes and pinpoint where AI has real ROI, where simple automation is enough, and where you shouldn't touch a thing. You leave with a business case for every initiative.",
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
      ai: "AI agents built into your real workflows (WhatsApp, CRM, ERP, email), with human review where it matters, quality metrics and cost control from day one. In production, not in a demo.",
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
      ai: "Fractional AI leadership: we maintain, measure and improve what's running, set usage guidelines, and help your team actually adopt it.",
    },
  },
  connection: {
    kicker: "How they connect",
    title: "Three lines, one job",
    body: "Ops is the tactical entry point and works perfectly on its own. Scale is the strategic layer and almost always feeds off an Ops diagnosis. Build shows up as a derivation of either one, or because the client comes in directly asking for a platform.",
    labels: { ops: "Ops", build: "Build", scale: "Scale" },
  },
  aiApproach: {
    kicker: "Applied AI",
    title: "AI, done right",
    intro:
      "Most AI projects fail for the same reason: they automate a process nobody understood, and nobody measures whether it worked. We start the other way around.",
    methodLabel: "Four-step method",
    steps: [
      {
        name: "Diagnose",
        description: "We understand the process and the data before proposing anything.",
      },
      {
        name: "Business case",
        description: "Cost, expected savings and risk. If the numbers don't work, we'll tell you.",
      },
      {
        name: "Production",
        description:
          "We build it into your operation, with human oversight where it matters.",
      },
      {
        name: "Measure",
        description:
          "Quality, usage and cost metrics. What isn't working gets fixed or switched off.",
      },
    ],
    comparison: {
      caption: "Comparison between what usually happens in AI projects and how we do it",
      headers: ["What usually happens", "How we do it"],
      rows: [
        ["Starts with the tool", "Starts with the process and the business"],
        ["Impressive demo that never ships", "Built for production from day one"],
        ["Nobody knows if it's working", "Quality, usage and cost metrics"],
        ["Costs that grow unchecked", "Budget and usage monitored"],
        ["“AI for everything”", "AI only where it pays off; if it doesn't, we'll say so"],
      ],
    },
    cta: "Got a stalled AI pilot? Let's take a look →",
  },
  cases: {
    kicker: "Work",
    title: "What's already running",
    problemLabel: "The problem",
    solutionLabel: "The solution",
    resultsLabel: "Results",
    items: [
      {
        id: "posventa-whatsapp",
        tag: "Build + AI · After-sales / technical support",
        title: "An AI agent that diagnoses failures and suggests spare parts over WhatsApp",
        problem:
          "Technical knowledge lived in long manuals and in the heads of a few people. Every customer question depended on someone from the team being available.",
        solution:
          "A WhatsApp agent that searches the manufacturer's manuals, guides the diagnosis step by step and suggests the right part, handing off to a person when needed.",
        client: "Client in the {sector} sector",
        // TODO(placeholder): client's real industry (anonymized).
        clientPlaceholder: "industry",
        results: [
          // TODO(placeholder): real metric; % of questions resolved without a person.
          {
            value: "% of questions resolved without a person",
            label: "of questions resolved without a person stepping in",
            placeholder: true,
          },
          // TODO(placeholder): real metric; response time.
          {
            value: "response time",
            label: "average response time",
            placeholder: true,
          },
        ],
      },
    ],
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
      "Beyond leading teams, I design and build production AI systems: agents, search over internal documentation (RAG), and integrations with the tools a company already uses.",
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
    kicker: "Why Nexura Labs",
    title: "A diagnosis before anything else.",
    items: [
      { value: "14", label: "years leading technology teams" },
      { value: "40+", label: "people in the teams he led" },
      { icon: "check", label: "Clear budget before we start" },
      { value: "1st", label: "step is always a diagnosis, before proposing anything" },
    ],
  },
  faq: {
    kicker: "FAQ",
    title: "What people usually ask",
    items: [
      {
        q: "How much does it cost?",
        a: "It depends on scope. The first call is free; then we run a diagnosis and give you a clear quote before any work starts.",
      },
      {
        q: "What happens to my data?",
        a: "We work with minimum access, NDAs, and providers that don't train models on your data. We decide together which data gets used and which doesn't.",
      },
      {
        q: "What if AI isn't right for us?",
        a: "We'll tell you. Often the problem is solved by fixing the process or with simple automation, and that's part of the job too.",
      },
      {
        q: "Do you work outside Argentina?",
        a: "Yes. We work remotely with companies across Latin America and the US.",
      },
      {
        q: "How soon will we see results?",
        a: "Diagnosis takes weeks, not months. We prioritize a first initiative that shows results quickly before scaling.",
      },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Let's talk",
    body: "Write to me and we'll set up twenty free minutes to talk about your specific situation: what growth is breaking, or what you need to build for the next step.",
    emailLabel: "pablo@nexuralabs.agency",
    linkedinLabel: "Nexura Labs on LinkedIn",
    form: {
      fields: {
        name: "Name",
        email: "Email",
        need: "What do you want to solve?",
        message: "Message",
      },
      optional: "(optional)",
      needPlaceholder: "Choose one",
      needOptions: {
        processes: "Fix processes",
        software: "Build software",
        ai: "Apply AI",
        "ai-rescue": "Rescue an AI project",
        other: "Something else",
      },
      submit: "Send",
      sending: "Sending…",
      success: "Thanks! I'll get back to you within 2 business days.",
      error: "We couldn't send your message. Try again or email me at pablo@nexuralabs.agency.",
    },
  },
  formErrors: {
    required: "Please fill in this field.",
    email: "Please check your email.",
    choice: "Please choose one.",
    tooLong: "That's too long.",
    tooShort: "That's too short.",
  },
  checklist: {
    kicker: "Free resource",
    title: "Checklist: Is your operation ready for AI?",
    intro: "Twelve questions to go through before investing in AI. We'll email you the PDF.",
    fields: { email: "Email", company: "Company" },
    submit: "Send me the checklist",
    sending: "Sending…",
    success: "Done. We've sent it to {email}. If you don't see it in a few minutes, check your spam folder.",
    error: "We couldn't send it. Please try again shortly.",
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
