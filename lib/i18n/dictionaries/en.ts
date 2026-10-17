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
      name: "Name",
      company: "Company",
      companyOrProject: "Company / project",
      role: "Job title",
      email: "Email",
      workEmail: "Work email",
      phone: "Phone",
      phoneWhatsapp: "Phone / WhatsApp",
      sector: "Industry",
      channel: "How would you like us to contact you?",
      systems: "Systems you use",
      goal: "What do you want to solve?",
    },
    sectorPlaceholder: "Choose your industry",
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
      other: "Other",
      unsure: "I'm not sure, I'd like help defining it",
    },
    privacy: { before: "I accept the ", link: "privacy policy", after: "." },
    sending: "Sending…",
    error: "We couldn't send the form. Please try again or email pablo@nexuralabs.agency.",
  },
  landings: {
    illustrative: "Illustrative example",
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
    rigiSuppliers: {
      hero: {
        kicker: "RIGI · Suppliers",
        title: "Would your company pass the 4.0 test?",
        intro:
          "We measure your company's digital maturity across 5 areas in 2 to 3 weeks, and hand you a score and an action plan.",
        cta: "Book your assessment",
      },
      why: {
        kicker: "Why it matters",
        title: "Large projects buy with data",
        intro:
          "Companies investing under Argentina's RIGI regime ask their suppliers for organized, up-to-date information. If that information lives in loose spreadsheets or in one person's head, every tender costs twice as much.",
        items: [
          {
            name: "Data",
            description:
              "Production, delivery and quality indicators you can show the day someone asks for them.",
          },
          {
            name: "Traceability",
            description:
              "Knowing which equipment, batch and person worked on each job, without rebuilding it by hand.",
          },
          {
            name: "Up-to-date paperwork",
            description: "Permits, insurance and staff records current and ready to submit.",
          },
        ],
        // Ver nota de verificación en es.ts.
        note: "A concrete case: to take part in Vicuña's tenders, suppliers have to register on its supplier portal. That's Vicuña's own requirement, not a RIGI one.",
      },
      areas: {
        kicker: "What we assess",
        title: "The 5 areas of the test",
        items: [
          {
            name: "Management and ERP",
            description:
              "How you record sales, purchases, stock and costs, and whether that data lives in a system or in spreadsheets.",
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
            name: "People and paperwork",
            description:
              "Staff records, permits, training and expiry dates for your people and your company.",
          },
          {
            name: "Data and reporting",
            description:
              "Which indicators you track, how often, and how long it takes to put together a report for a client.",
          },
        ],
      },
      deliverables: {
        kicker: "What you get",
        title: "A score, a plan and, if you want, a pilot",
        items: [
          {
            name: "A 0–5 score per area",
            description:
              "Where your company stands in each of the 5 areas, with the evidence behind every number.",
          },
          {
            name: "A prioritized action plan",
            description: "What to fix first, how much effort it takes and in what order.",
          },
          {
            name: "Optional 4–6 week pilot",
            description:
              "On the most urgent item in the plan, so you leave the assessment with something working.",
          },
        ],
        chart: {
          title: "Score by area",
          scaleLabel: "Scale from 0 to 5",
          scores: [3, 2, 1.5, 2.5, 1],
        },
      },
      process: {
        kicker: "How it works",
        title: "2 to 3 weeks, in three steps",
        steps: [
          {
            name: "Discovery",
            description:
              "Interviews with key people and a review of the systems, spreadsheets and documents you use today.",
          },
          {
            name: "Scoring",
            description:
              "We score each area from 0 to 5 against clear criteria and show you what each score is based on.",
          },
          {
            name: "Plan handover",
            description:
              "We walk you through the scores and the prioritized action plan, and decide together where to start.",
          },
        ],
      },
      audience: {
        kicker: "Who it's for",
        title: "Built for suppliers to large projects",
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
        kicker: "Track record",
        title: "Technology already working in industry",
        intro:
          "A real case: an agent that handles technical questions over WhatsApp for a client in the industrial sector.",
      },
      faq: {
        kicker: "FAQ",
        title: "What people usually ask us",
        items: [
          {
            q: "How much does it cost?",
            a: "It depends on the size of the company and how many plants or sites we need to cover. Fixed quote before we start.",
          },
          {
            q: "How long does it take?",
            a: "2 to 3 weeks from discovery to plan handover. If you add the pilot, that's 4 to 6 more weeks.",
          },
          {
            q: "What data do you need?",
            a: "Read access to what you already use (management system, spreadsheets, documents) and a couple of hours with the people who know each area. We work under confidentiality agreements.",
          },
          {
            q: "Does it work for a small business?",
            a: "Yes. The test scales to your size: in a small company discovery is shorter and the plan focuses on a few quick-win improvements.",
          },
        ],
      },
      form: {
        kicker: "Book your assessment",
        title: "Tell us about your company",
        body: "Fill in the form and we'll reach out through the channel you prefer to schedule discovery. Fixed quote before we start.",
        submit: "Book assessment",
        success:
          "Thanks! We got your details. We'll reach out within 48 business hours to schedule your assessment.",
      },
    },
    rigiCompanies: {
      hero: {
        kicker: "RIGI · Companies",
        title: "One dashboard to decide faster.",
        intro:
          "A hub that connects the systems you already use (ERP, fleet, plant, HR, logistics, documents) into a single, read-only view.",
        cta: "Request a 30-day proof of value",
      },
      problem: {
        kicker: "The problem",
        title: "Every area has its own system",
        intro:
          "ERP, fleet, plant, HR, logistics and documents live in different tools. Seeing the full picture means requesting reports and cross-checking spreadsheets.",
        items: [
          {
            name: "Manual reporting",
            description: "Someone spends hours every week pulling data from several systems.",
          },
          {
            name: "Issues spotted late",
            description:
              "A fleet or plant problem shows up in the report once it has already cost money.",
          },
          {
            name: "Decisions on stale data",
            description: "Decisions get made on last month's snapshot instead of what's happening today.",
          },
        ],
      },
      solution: {
        kicker: "The solution",
        title: "A hub that connects what you already have",
        intro:
          "The Nexura Hub reads data from each system, organizes it into a single model and puts it in front of whoever makes the call.",
        sourcesLabel: "Your systems",
        sources: ["ERP", "Fleet and machinery", "Plant", "HR", "Logistics", "Documents"],
        hubName: "Nexura Hub",
        hubCaption: "Read-only · one data model",
        outputsLabel: "What you get",
        outputs: [
          { name: "Real-time console", description: "Your whole operation on one screen." },
          { name: "Alerts", description: "A heads-up as soon as an indicator goes out of range." },
          { name: "AI assistant", description: "Answers questions about your own data." },
        ],
      },
      value: {
        kicker: "Value",
        title: "Time and control",
        blocks: [
          {
            name: "Time",
            title: "Less distance between something happening and someone deciding.",
            description:
              "Data flows into the console on its own and alerts fire as soon as something drifts, without waiting for the month-end report.",
          },
          {
            name: "Control",
            title: "A complete, current view of the operation.",
            description:
              "Every area in one place, measured the same way, so decisions land closer to the mark.",
          },
        ],
      },
      process: {
        kicker: "How it works",
        title: "Connect, unify, decide",
        steps: [
          {
            name: "Connect",
            description: "We plug into your systems in read-only mode. Nothing gets changed.",
          },
          {
            name: "Unify",
            description:
              "We bring the data into a single model, with the same definitions across every area.",
          },
          {
            name: "Decide",
            description: "Console, alerts and an AI assistant on up-to-date data.",
          },
        ],
      },
      console: {
        kicker: "What decision-makers see",
        title: "One screen, the whole operation",
        intro: "Key indicators, alerts and an assistant you can ask in plain language.",
        windowTitle: "Operations console",
        kpis: [
          { label: "Fleet availability", value: "87%" },
          { label: "Open work orders", value: "42" },
          { label: "Construction progress", value: "64%" },
          { label: "Documents expiring (30 days)", value: "9" },
        ],
        alertsTitle: "Alerts",
        alerts: [
          "Truck 14: fuel consumption 22% above average",
          "Plant 2: unplanned stop on the welding line",
          "3 contractor records expire this week",
        ],
        assistantTitle: "Assistant",
        question: "Which equipment had the most downtime this month?",
        answer:
          "Excavator EX-03 (31 h), truck 14 (18 h) and crane G-2 (12 h). Most of it was corrective maintenance.",
      },
      ypf: {
        kicker: "Industry reference",
        title: "YPF and its real-time monitoring center",
        intro:
          "YPF runs a real-time monitoring center (RTIC) in Buenos Aires for its Vaca Muerta wells. It's a YPF project: we cite it as a reference for what a unified view of the operation makes possible.",
        stats: [
          { value: "~35 million", label: "data points per well" },
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
        kicker: "Proof of value",
        title: "30 days to see it working with your data",
        steps: [
          { name: "Week 1", description: "Discovery and connection of the first systems." },
          { name: "Week 2", description: "First console with real data." },
          { name: "Week 3", description: "Alerts and AI assistant." },
          { name: "Week 4", description: "Measurement against the criteria we agreed at the start." },
        ],
        note: "Scope and terms, defined together.",
      },
      security: {
        kicker: "Security and data",
        title: "Your data, under your control",
        items: [
          "Read-only: the hub never writes to or changes anything in your systems.",
          "Least access: only the data needed for the agreed indicators.",
          "Confidentiality agreements before any system is connected.",
        ],
        note: "We decide together which data is used and which isn't.",
      },
      faq: {
        kicker: "FAQ",
        title: "What people usually ask us",
        items: [
          {
            q: "Which systems does it integrate with?",
            a: "The ones you already use: ERP, fleet and machinery telematics, plant systems, HR, logistics and document management. If a system has an API, a database or exports, we can read it. We confirm each case during discovery.",
          },
          {
            q: "What happens to our data?",
            a: "Access is read-only and minimal, under confidentiality agreements. We decide together which data is used and which isn't.",
          },
          {
            q: "How long does it take?",
            a: "The proof of value runs for 30 days. At the end we measure against the agreed criteria and decide together whether and how to continue.",
          },
          {
            q: "How much does it cost?",
            a: "It depends on the number of systems and the scope. Fixed quote before we start.",
          },
        ],
      },
      form: {
        kicker: "Proof of value",
        title: "Request your 30-day proof of value",
        body: "Tell us which systems you use and what you want to solve. We'll get back to you to set up a first call and define the scope.",
        submit: "Request proof of value",
        success:
          "Thanks! We got your request. We'll reach out within 48 business hours to set up a first call.",
      },
    },
  },
  footer: {
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    legalNavAria: "Legal",
    rigiNavAria: "RIGI services",
    rigiSuppliers: "RIGI: supplier assessment",
    rigiCompanies: "RIGI: hub for companies",
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
