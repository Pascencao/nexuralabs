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
    posventaTitle: "AI Agent for Technical Support & After-Sales | Nexura Labs",
    posventaDescription:
      "An agent that searches your manuals, guides the diagnosis and suggests the right spare part over WhatsApp, with a person in the loop when needed.",
    rescueTitle: "Rescue for Stalled AI Projects | Nexura Labs",
    rescueDescription:
      "Your AI pilot never reached production. We audit the tech and the business case in 2 weeks, build a fix plan and get it running with metrics.",

    rigiHubTitle: "RIGI Services for Suppliers and Companies | Nexura Labs",
    rigiHubDescription:
      "A 4.0 digital maturity assessment for suppliers and a systems integration hub for companies that build or operate RIGI projects.",
    rigiSuppliersTitle: "Digital Maturity 4.0 Assessment for RIGI Suppliers | Nexura Labs",
    rigiSuppliersDescription:
      "We measure your company's digital maturity across 5 areas in 2 to 3 weeks and hand you a 0–5 score and a prioritized action plan.",
    rigiCompaniesTitle: "Systems Integration Hub for RIGI Companies | Nexura Labs",
    rigiCompaniesDescription:
      "We connect ERP, fleet, plant, HR, logistics and documents into a single read-only view. 30-day proof of value.",
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
        client: "Client in the industrial sector",
        results: [
          { value: "~1,000", label: "questions resolved without a person stepping in" },
          { value: "~15 min", label: "response time" },
        ],
      },
    ],
  },
  about: {
    kicker: "About me",
    name: "Pablo Ascencao",
    role: "Technology and digital transformation consultant",
    points: [
      "I have 14 years of experience in technology, engineering team leadership and digital transformation.",
      "At Globant I went from Web UI Developer to Tech Manager, leading teams of over 40 engineers.",
      "I've also worked with startups and scale-ups at different stages of growth.",
      "I'm based in Rosario, Argentina, and work remotely with clients across Latin America and the US.",
      "Beyond leading teams, I design and build production AI systems: agents, search over internal documentation (RAG), and integrations with the tools a company already uses.",
    ],
    photoAlt: "Photo of Pablo Ascencao",
  },
  companies: {
    kicker: "Track record",
    title: "Companies I've worked at or with",
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
      { value: "40+", label: "people in the teams I led" },
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
  rigiTeaser: {
    kicker: "RIGI · SUPPLIERS AND COMPANIES",
    title: "Services for the RIGI ecosystem",
    body: "Two services built for large projects under Argentina's Large Investment Incentive Regime: one for the companies that supply them, and one for the companies that build and run them.",
    panelTitle: "services / rigi",
    panelTag: "2 SERVICES",
    cta: "See RIGI services",
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
        "rigi-supplier": "I\'m a RIGI supplier",
        "rigi-company": "I represent a RIGI company",
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
    phone: "Please check the phone number.",
    consent: "Please accept the privacy policy to continue.",
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
  rigiForm: {
    fields: {
      name: "Full name",
      company: "Company",
      role: "Job title",
      email: "Email address",
      workEmail: "Business email address",
      phone: "Phone",
      phoneWhatsapp: "Phone / WhatsApp",
      sector: "Industry",
      channel: "Preferred contact method",
      systems: "Systems in use",
      goal: "Business need",
    },
    sectorPlaceholder: "Select industry",
    sectorOptions: {
      "capital-goods": "Capital goods manufacturer",
      metalworking: "Metalworking",
      logistics: "Logistics operator",
      engineering: "Engineering firm",
      construction: "Construction company",
      "specialized-services": "Specialized services",
      other: "Other",
    },
    channelOptions: { whatsapp: "WhatsApp", email: "Email", call: "Phone call" },
    systemOptions: {
      erp: "ERP",
      fleet: "Fleet and machinery",
      plant: "Plant",
      hr: "HR",
      logistics: "Logistics",
      docs: "Documents",
      unsure: "To be defined, with advice",
    },
    privacy: { before: "I accept the ", link: "privacy policy", after: "." },
    errors: {
      required: "This field is required.",
      email: "Invalid email address.",
      choice: "Please select an option.",
      tooLong: "The text is too long.",
      tooShort: "The text is too short.",
      phone: "Invalid phone number.",
      consent: "Acceptance of the privacy policy is required.",
    },
    sending: "Sending…",
    error: "The form could not be sent. Please try again in a few minutes or write to pablo@nexuralabs.agency.",
  },
  landings: {
    posventa: {
      hero: {
        kicker: "AI for after-sales",
        title: "Technical support that's always on, with the knowledge of your best technician",
        intro:
          "For manufacturers and distributors with technical support, after-sales service and spare parts sales.",
        cta: "Let's talk",
      },
      pain: {
        kicker: "The problem",
        title: "What's happening in your after-sales today",
        items: [
          {
            name: "Repeat questions",
            description:
              "Your team answers the same questions over and over, and the urgent ones wait in line.",
          },
          {
            name: "Knowledge in a few heads",
            description:
              "What your best technician knows isn't written down anywhere. When they're out, nobody can solve it.",
          },
          {
            name: "Manuals nobody reads",
            description:
              "The answer is in a long manual, but finding it takes longer than picking up the phone.",
          },
          {
            name: "Wrong parts ordered",
            description:
              "An incomplete diagnosis ends with the wrong part, an extra shipment and a customer who keeps waiting.",
          },
        ],
      },
      build: {
        kicker: "What we build",
        title: "An agent that works like your best technician",
        items: [
          "Searches the manufacturer's manuals and documentation to answer from the right source.",
          "Guides the diagnosis step by step, asking the questions a technician would.",
          "Suggests the right spare part before the order is placed.",
          "Hands off to a person when the case calls for it, with the full conversation context.",
        ],
        note: "It runs on WhatsApp and connects to the tools you already use.",
      },
      method: { kicker: "Method", title: "Four steps, always measured" },
      faq: [
        {
          q: "Do my manuals need to be digitized?",
          a: "They don't need to be organized. We start from what you have (PDFs, spec sheets, parts lists) and the diagnosis shows what's missing.",
        },
        {
          q: "What happens when the agent doesn't know the answer?",
          a: "It says so and hands the question to someone on your team, with the conversation history so nobody starts from scratch.",
        },
        {
          q: "Does it only work on WhatsApp?",
          a: "WhatsApp is the most common channel, but the same agent can handle email or your website, and connect to your CRM.",
        },
      ],
    },
    rescue: {
      hero: {
        kicker: "AI project rescue",
        title: "Your AI project never made it past the pilot. We'll get it working.",
        intro:
          "You've already put time and money into a pilot. Before scrapping it or piling on more patches, let's look at what's failing and what it takes to make it work.",
        cta: "Let's talk",
      },
      symptoms: {
        kicker: "Symptoms",
        title: "Sound familiar?",
        items: [
          {
            name: "It never reaches production",
            description: "It worked in the demo but never got wired into the real operation.",
          },
          {
            name: "Unreliable answers",
            description:
              "Sometimes it's right and sometimes it makes things up, and nobody knows when to trust it.",
          },
          {
            name: "Costs out of control",
            description:
              "The monthly bill keeps growing and it's unclear what drives it or what it returns.",
          },
          {
            name: "Nobody uses it",
            description: "The team went back to the old way because the tool doesn't fit how they work.",
          },
        ],
      },
      approach: {
        kicker: "How we approach it",
        title: "From stalled pilot to production in three steps",
        steps: [
          {
            name: "Audit (2 weeks)",
            description:
              "We review both the tech and the business side: data, architecture, answer quality, costs and adoption.",
          },
          {
            name: "Fix plan",
            description:
              "What gets fixed, what gets rebuilt and what gets switched off, with cost and priority. If it isn't worth continuing, we'll tell you.",
          },
          {
            name: "Production rollout",
            description:
              "We get it running inside your operation, with quality, usage and cost metrics.",
          },
        ],
      },
    },
    rigiHub: {
      nav: { suppliers: "Suppliers", companies: "Companies", cta: "View solutions" },
      hero: {
        eyebrow: "RIGI · SOLUTIONS FOR SUPPLIERS AND COMPANIES",
        titleLines: ["Two roles in the RIGI."],
        titleHighlight: "One solution for each.",
        lead: "Projects under Argentina's Large Investment Incentive Regime (RIGI) require reliable information across the whole chain: suppliers with up-to-date data and documentation, and companies with full visibility of their operations. Each profile has a dedicated service.",
      },
      chooseLabel: "Solutions by profile",
      supplier: {
        tag: "SUPPLIERS",
        title: "4.0 Digital Maturity Assessment",
        text: "For companies that supply goods and services to RIGI projects. We assess five management areas and deliver a score per area and a prioritized action plan.",
        facts: [
          { value: "5", label: "areas assessed" },
          { value: "2–3", label: "weeks of work" },
        ],
        cta: "Explore the assessment",
      },
      company: {
        tag: "RIGI COMPANIES",
        title: "Systems Integration Hub",
        text: "For companies that build or operate RIGI projects. We integrate ERP, fleet, plant, HR, logistics and documents into a single, read-only console.",
        facts: [
          { value: "6", label: "integrated systems" },
          { value: "30", label: "days of proof of value" },
        ],
        cta: "Explore the hub",
      },
      help: {
        eyebrow: "HOW TO CHOOSE",
        title: "Which service applies to each organization.",
        items: [
          {
            lead: "Suppliers:",
            text: "companies that supply, or aim to supply, goods or services to companies investing under the RIGI regime.",
          },
          {
            lead: "RIGI companies:",
            text: "companies that build or operate a project under the regime and need to integrate information across their areas.",
          },
        ],
        contact: {
          before: "Questions about which service applies: ",
          link: "pablo@nexuralabs.agency",
          after: "",
        },
      },
    },
    rigiSuppliers: {
      nav: {
        links: [
          { anchor: "por-que", label: "Context" },
          { anchor: "areas", label: "Areas" },
          { anchor: "que-recibis", label: "Deliverables" },
          { anchor: "como-funciona", label: "Methodology" },
          { anchor: "faq", label: "FAQ" },
        ],
        cta: "Contact",
      },
      hero: {
        eyebrow: "RIGI · SUPPLIER ASSESSMENT",
        titleLines: ["4.0 Digital Maturity"],
        titleHighlight: "Assessment.",
        lead: "We assess the company's digital maturity across five management areas within two to three weeks, and deliver a score per area and a prioritized action plan.",
        primaryCta: "Request an assessment",
        secondaryCta: "See the 5 areas",
        checks: ["2 to 3 week timeline", "0–5 score per area", "Fixed quote before starting"],
        chart: {
          windowTitle: "assessment / 4.0 maturity",
          title: "Score by area",
          tag: "Illustrative example",
          scaleLabel: "Scale from 0 to 5",
          scores: [3, 2, 1.5, 2.5, 1],
        },
      },
      offer: [
        { value: "5", label: "areas assessed against defined criteria" },
        { value: "0–5", label: "score per area, with documented evidence" },
        { value: "2–3", label: "weeks from discovery to handover" },
        { value: "1", label: "prioritized action plan" },
      ],
      why: {
        eyebrow: "CONTEXT",
        title: "Large projects select suppliers with data.",
        intro:
          "Companies investing under Argentina's RIGI regime require organized, up-to-date information from their suppliers. When that information depends on isolated spreadsheets or specific individuals, every tender takes twice the effort.",
        items: [
          {
            name: "Data",
            description:
              "Production, delivery and quality indicators available at the moment they are requested.",
          },
          {
            name: "Traceability",
            description:
              "A record of which equipment, batch and person worked on each job, with no manual reconstruction.",
          },
          {
            name: "Up-to-date documentation",
            description: "Permits, insurance and staff records current and ready for submission.",
          },
        ],
        // Ver nota de verificación en es.ts.
        note: "A concrete case: to take part in Vicuña's tenders, suppliers must register on its supplier portal. This is Vicuña's own requirement, not a RIGI one.",
      },
      areas: {
        eyebrow: "AREAS ASSESSED",
        title: "Five management areas.",
        items: [
          {
            name: "Management and ERP",
            description:
              "Recording of sales, purchases, stock and costs, and the degree to which that information is systematized.",
          },
          {
            name: "Production and plant",
            description: "Planning, work orders, quality control and equipment maintenance.",
          },
          {
            name: "Fleet and logistics",
            description: "Vehicle and machinery tracking, deliveries, consumption and maintenance.",
          },
          {
            name: "People and documentation",
            description:
              "Staff records, permits, training and expiry dates for personnel and the company.",
          },
          {
            name: "Data and reporting",
            description:
              "Indicators tracked, measurement frequency and the time required to prepare a report for a client.",
          },
        ],
      },
      deliverables: {
        eyebrow: "DELIVERABLES",
        title: "Score, action plan and optional pilot.",
        items: [
          {
            name: "A 0–5 score per area",
            description:
              "The company's maturity level in each of the five areas, with the evidence behind every value.",
          },
          {
            name: "Prioritized action plan",
            description: "Initiatives ranked by priority, with their estimated effort.",
          },
          {
            name: "Optional 4–6 week pilot",
            description:
              "Implementation of the most urgent priority in the plan, so the assessment concludes with an improvement in operation.",
          },
        ],
      },
      process: {
        eyebrow: "METHODOLOGY",
        title: "Three stages over two to three weeks.",
        stepLabel: "STAGE",
        steps: [
          {
            name: "Discovery",
            description:
              "Interviews with key people in each area and a review of the systems, spreadsheets and documents in use.",
          },
          {
            name: "Scoring",
            description:
              "A 0–5 score assigned to each area against defined criteria, with the rationale for each value.",
          },
          {
            name: "Plan handover",
            description:
              "Presentation of the results and the prioritized action plan, and joint definition of next steps.",
          },
        ],
      },
      audience: {
        eyebrow: "SCOPE",
        title: "Designed for suppliers to large projects.",
        items: [
          "Capital goods manufacturers",
          "Metalworking companies",
          "Logistics operators",
          "Engineering firms",
          "Construction companies",
          "Specialized service providers",
        ],
      },
      precedent: {
        eyebrow: "TRACK RECORD",
        title: "Technology in operation in industry.",
        intro:
          "A real case: an agent that handles technical questions over WhatsApp for a client in the industrial sector.",
        problemLabel: "Problem",
        solutionLabel: "Solution",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Frequently asked questions.",
        more: { before: "For other questions, please ", link: "use the contact form", after: "." },
        items: [
          {
            q: "What does it cost?",
            a: "It depends on the size of the company and the number of plants or sites to be covered. The quote is fixed before starting.",
          },
          {
            q: "How long does it take?",
            a: "Two to three weeks from discovery to plan handover. The optional pilot adds four to six weeks.",
          },
          {
            q: "What information is required?",
            a: "Read access to the systems, spreadsheets and documents in use, and a few hours with the key people in each area. We work under confidentiality agreements.",
          },
          {
            q: "Is it suitable for a small business?",
            a: "Yes. The scope adapts to the size of the company: in smaller organizations discovery is shorter and the plan focuses on a few quick-impact improvements.",
          },
        ],
      },
      contact: {
        eyebrow: "REQUEST AN ASSESSMENT",
        title: "A clear assessment before the next tender.",
        body: "With the details from the form, we schedule discovery through the preferred contact method. Fixed quote before starting.",
        steps: [
          "Contact through the preferred method",
          "Discovery scheduled with the team",
          "Score and action plan delivered in 2 to 3 weeks",
        ],
        submit: "Request an assessment",
        success:
          "Thank you. We have received the request and will be in touch within 48 business hours to schedule the assessment.",
      },
    },
    rigiCompanies: {
      nav: {
        links: [
          { anchor: "antes-despues", label: "Context" },
          { anchor: "producto", label: "Console" },
          { anchor: "caso", label: "Case" },
          { anchor: "piloto", label: "Proof of value" },
          { anchor: "faq", label: "FAQ" },
        ],
        cta: "Contact",
      },
      hero: {
        eyebrow: "RIGI · INTEGRATION HUB · READ-ONLY",
        titleLines: ["Six systems.", "A single view."],
        titleHighlight: "Decisions on current data.",
        lead: "We integrate ERP, fleet, plant, HR, logistics and documents into a real-time console, with alerts and an AI assistant that answers questions about operational data. No changes to existing systems.",
        primaryCta: "Request a proof of value",
        secondaryCta: "See the console",
        checks: ["Read-only access", "No migrations", "Confidentiality agreement"],
        systems: ["ERP", "Fleet", "Plant", "HR", "Logistics", "Documents"],
        console: {
          title: "console / operations",
          live: "LIVE",
          kpis: [
            { value: "87%", label: "Fleet availability" },
            { value: "42", label: "Open work orders" },
            { value: "64%", label: "Construction progress" },
            { value: "9", label: "Docs expiring", warn: true },
          ],
          question: "Which equipment had the most downtime this month?",
          answer:
            "Excavator EX-07 and Truck 14. Most of it was corrective maintenance. A breakdown by cause is available.",
        },
      },
      offer: [
        { value: "6", label: "areas integrated in one view" },
        { value: "1", label: "data model with shared criteria" },
        { value: "30", label: "days of trial with real data" },
        { value: "0", label: "changes to existing systems" },
      ],
      beforeAfter: {
        eyebrow: "CONTEXT",
        title: "When data arrives late, so does the decision.",
        intro:
          "Each area runs on its own system. Getting a complete view requires requesting reports and consolidating spreadsheets. Below, the same management morning in both scenarios.",
        today: {
          title: "Current situation",
          tag: "DECISION IN DAYS",
          moments: [
            { t: "Mon 08:00", x: "Fleet, plant and HR reports are requested by email." },
            { t: "Mon 15:00", x: "Three spreadsheets arrive, each with different criteria." },
            { t: "Tue 11:00", x: "They are consolidated manually and discrepancies appear." },
            { t: "Thu 09:00", x: "The decision is made on the previous week's data." },
          ],
        },
        withHub: {
          title: "With the Nexura Hub",
          tag: "DECISION IN MINUTES",
          moments: [
            { t: "Mon 08:00", x: "The console shows every area, up to date and under shared criteria." },
            { t: "Mon 08:03", x: "An alert flags the deviation at Plant 2." },
            { t: "Mon 08:06", x: "The assistant identifies the cause and presents the details." },
            { t: "Mon 08:15", x: "The decision is made on same-day information." },
          ],
        },
        caption: "Illustrative scenario of a management morning.",
        pains: [
          {
            name: "Manual reporting",
            description: "Hours every week spent consolidating data from different systems.",
          },
          {
            name: "Deviations detected late",
            description:
              "A fleet or plant problem shows up in the report once it has already generated costs.",
          },
          {
            name: "Decisions on outdated data",
            description: "Decisions are based on the previous month rather than the current situation.",
          },
        ],
      },
      how: {
        eyebrow: "METHODOLOGY",
        title: "Integrate. Unify. Decide.",
        steps: [
          {
            name: "Integration",
            description: "Connection to existing systems in read-only mode, with no changes.",
          },
          {
            name: "Unification",
            description:
              "Consolidation of data into a single model, with shared definitions across every area.",
          },
          {
            name: "Decision",
            description:
              "Console, alerts and an AI assistant on up-to-date data, with natural-language queries.",
          },
        ],
      },
      console: {
        eyebrow: "THE CONSOLE",
        title: "Each role accesses what it needs, on the same information.",
        tabsLabel: "View by role",
        windowTitle: "Operations console",
        sampleTag: "SAMPLE DATA",
        alertsTitle: "Active alerts",
        assistantTitle: "Assistant",
        assistantHint: "Natural-language queries",
        inputPlaceholder: "Natural-language query…",
        sendLabel: "Send query",
        inRange: "In range",
        attention: "Attention",
        roles: [
          {
            id: "direccion",
            label: "Management",
            kpis: [
              { value: "87%", label: "Fleet availability", ok: true, pct: 87 },
              { value: "64%", label: "Construction progress", ok: true, pct: 64 },
              { value: "42", label: "Open work orders", ok: false, pct: 58 },
              { value: "9", label: "Docs expiring", ok: false, pct: 30 },
            ],
            alerts: [
              { t: "08:02", x: "Truck 14: fuel consumption above forecast." },
              { t: "07:45", x: "Plant 2: unplanned stop on the packaging line." },
              { t: "Today", x: "3 contractor records expire this week." },
            ],
            question: "Which equipment had the most downtime this month?",
            answer:
              "Excavator EX-07 and Truck 14 account for most of it, nearly all corrective maintenance. A breakdown by cause is available.",
          },
          {
            id: "operaciones",
            label: "Operations",
            kpis: [
              { value: "128", label: "Shipments today", ok: true, pct: 76 },
              { value: "93%", label: "On-time deliveries", ok: true, pct: 93 },
              { value: "6", label: "SKUs at critical stock", ok: false, pct: 24 },
              { value: "97%", label: "Shifts covered", ok: true, pct: 97 },
            ],
            alerts: [
              { t: "09:10", x: "North Route: two deliveries at risk of delay." },
              { t: "08:30", x: "Central warehouse: 6 SKUs below minimum stock." },
              { t: "Today", x: "Plant 1 night shift has one unfilled position." },
            ],
            question: "Which of today's orders are at risk of delay?",
            answer:
              "Two North Route deliveries: the truck left 40 minutes behind schedule. Notifying those customers is recommended.",
          },
          {
            id: "mantenimiento",
            label: "Maintenance",
            kpis: [
              { value: "78%", label: "Preventive maintenance on schedule", ok: false, pct: 78 },
              { value: "42", label: "Open work orders", ok: false, pct: 58 },
              { value: "11", label: "Parts on hold", ok: false, pct: 40 },
              { value: "87%", label: "Availability", ok: true, pct: 87 },
            ],
            alerts: [
              { t: "07:45", x: "Packaging machine L2: unplanned stop, work order created." },
              { t: "Yesterday", x: "EX-07: third corrective job this month on the hydraulic system." },
              { t: "Today", x: "5 overdue preventive jobs on the light fleet." },
            ],
            question: "Which equipment should be checked first this week?",
            answer:
              "EX-07: it has had three corrective jobs this month on the same system. Including it in the next preventive service avoids a larger stop.",
          },
        ],
      },
      ypf: {
        eyebrow: "INDUSTRY REFERENCE",
        title: "YPF operates a real-time monitoring center.",
        intro:
          "YPF runs a real-time monitoring center (RTIC) in Buenos Aires for its Vaca Muerta wells. This is not a Nexura project: it is cited as a reference for what a unified view of the operation makes possible.",
        stats: [
          { value: "~35 M", label: "data points per well" },
          { value: "15–30%", label: "target reduction in cycle times" },
          { value: "−25%", label: "in well construction time (Toyota Well program)" },
          { value: "−71%", label: "in well start-up time (Toyota Well program)" },
        ],
        footnote:
          "YPF's results combine the monitoring center with other operational initiatives. The 25% and 71% reductions come from the Toyota Well program, in which the monitoring center took part as a component.",
        sourcesLabel: "Sources (in Spanish)",
        sources: [
          {
            name: "Forbes Argentina",
            url: "https://www.forbesargentina.com/money/forbes-cerebro-tecnologico-ypf-utiliza-ia-reducir-sus-tiempos-30-n64324",
          },
          {
            name: "La Nación",
            url: "https://www.lanacion.com.ar/economia/vaca-muerta-desde-puerto-madero-asi-funciona-el-nuevo-centro-de-control-de-ypf-para-gestionar-sus-nid13122024/",
          },
          {
            name: "EconoJournal",
            url: "https://econojournal.com.ar/oilgas/ypf-redujo-los-tiempos-de-construccion-de-pozos-en-vaca-muerta/",
          },
        ],
      },
      pilot: {
        eyebrow: "PROOF OF VALUE",
        title: "30 days, with real data and measurable results.",
        intro:
          "Before any commitment, the hub runs on the company's real operation. Scope and terms are defined jointly.",
        weekLabel: "WEEK",
        weeks: [
          {
            name: "Integration",
            description: "Discovery and connection of the first systems, in read-only mode.",
          },
          { name: "First console", description: "The team accesses its indicators with real data." },
          {
            name: "Alerts and AI",
            description: "Deviation alerts and the assistant for natural-language queries are added.",
          },
          {
            name: "Measurement",
            description: "Review of the impact with the team and definition of next steps.",
          },
        ],
        security: {
          title: "Data under the company's control",
          subtitle: "Data use is defined jointly.",
          items: [
            { title: "Read-only.", text: "The hub never writes to or changes information in the systems." },
            { title: "Role-based access.", text: "Each person accesses only the indicators that apply to them." },
            { title: "Confidentiality.", text: "The agreement is signed before any system is connected." },
          ],
        },
      },
      faq: {
        eyebrow: "FAQ",
        title: "Frequently asked questions.",
        more: { before: "For other questions, please ", link: "use the contact form", after: "." },
        items: [
          {
            q: "Which systems does it integrate with?",
            a: "With the systems in use: ERP, fleet and machinery management, plant systems, HR, logistics and document management. The connection is always read-only.",
          },
          {
            q: "What happens to the data?",
            a: "No information is changed in the company's systems. Data use, the visibility of each indicator and the confidentiality agreement are defined before connecting.",
          },
          {
            q: "How long does it take?",
            a: "The proof of value runs for 30 days. By the second week, the team already has its first console with real data.",
          },
          {
            q: "What does it cost?",
            a: "It depends on the number of systems and areas to be integrated. Trial scope and terms are defined at the first meeting.",
          },
        ],
      },
      contact: {
        eyebrow: "CONTACT",
        title: "Information across the operation, without waiting for month-end.",
        body: "With information on the systems in use and the need to be addressed, we schedule a first meeting to define the scope of the trial.",
        steps: [
          "30-minute initial meeting to understand the operation",
          "Scope proposal for the proof of value",
          "First console with real data in week 2",
        ],
        submit: "Request a proof of value",
        success: "Thank you. We have received the request and will be in touch to schedule the first meeting.",
      },
    },
    hub: {
      menuLabel: "Menu",
      footerTagline: "Hub for companies · Custom software from Rosario, Argentina",
    },
  },
  footer: {
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    legalNavAria: "Legal",
    rigiNavAria: "RIGI services",
    rigiHub: "RIGI services",
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
