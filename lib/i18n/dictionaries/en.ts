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
      role: "Job title",
      email: "Email",
      workEmail: "Work email",
      phone: "Phone",
      phoneWhatsapp: "Phone / WhatsApp",
      sector: "Industry",
      channel: "How would you like us to contact you?",
      systems: "Which systems do you use?",
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
      unsure: "I'm not sure, I'd like help defining it",
    },
    privacy: { before: "I accept the ", link: "privacy policy", after: "." },
    sending: "Sending…",
    error: "We couldn't send the form. Please try again or email pablo@nexuralabs.agency.",
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
    rigiSuppliers: {
      nav: {
        links: [
          { anchor: "por-que", label: "Why" },
          { anchor: "areas", label: "The 5 areas" },
          { anchor: "que-recibis", label: "What you get" },
          { anchor: "como-funciona", label: "How it works" },
          { anchor: "faq", label: "FAQ" },
        ],
        cta: "Let's talk",
      },
      hero: {
        eyebrow: "RIGI · SUPPLIER ASSESSMENT",
        titleLines: ["Would your company pass"],
        titleHighlight: "the 4.0 test?",
        lead: "We measure your company's digital maturity across 5 areas in 2 to 3 weeks, and hand you a score and an action plan.",
        primaryCta: "Book your assessment",
        secondaryCta: "See the 5 areas",
        checks: ["2 to 3 weeks", "A 0–5 score per area", "Fixed quote before we start"],
        chart: {
          windowTitle: "assessment / 4.0 maturity",
          title: "Score by area",
          tag: "Illustrative example",
          scaleLabel: "Scale from 0 to 5",
          scores: [3, 2, 1.5, 2.5, 1],
        },
      },
      offer: [
        { value: "5", label: "areas assessed against clear criteria" },
        { value: "0–5", label: "score per area, with its evidence" },
        { value: "2–3", label: "weeks from discovery to handover" },
        { value: "1", label: "prioritized action plan" },
      ],
      why: {
        eyebrow: "WHY IT MATTERS",
        title: "Large projects buy with data.",
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
        eyebrow: "WHAT WE ASSESS",
        title: "The 5 areas of the test.",
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
        eyebrow: "WHAT YOU GET",
        title: "A score, a plan and, if you want, a pilot.",
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
      },
      process: {
        eyebrow: "HOW IT WORKS",
        title: "2 to 3 weeks, in three steps.",
        stepLabel: "STEP",
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
        eyebrow: "WHO IT'S FOR",
        title: "Built for suppliers to large projects.",
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
        title: "Technology already working in industry.",
        intro:
          "A real case: an agent that handles technical questions over WhatsApp for a client in the industrial sector.",
        problemLabel: "The problem",
        solutionLabel: "What we built",
      },
      faq: {
        eyebrow: "FAQ",
        title: "What people usually ask us.",
        more: { before: "Another question? ", link: "Write to us", after: " and we'll get back to you." },
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
      contact: {
        eyebrow: "BOOK YOUR ASSESSMENT",
        title: "Know where you stand before the next tender.",
        body: "Fill in the form and we'll reach out through the channel you prefer to schedule discovery. Fixed quote before we start.",
        steps: [
          "We reach out through the channel you chose",
          "We schedule discovery with your team",
          "In 2 to 3 weeks, your score and your action plan",
        ],
        submit: "Book my assessment",
        success:
          "Thanks! We got your details. We'll reach out within 48 business hours to schedule your assessment.",
      },
    },
    rigiCompanies: {
      nav: {
        links: [
          { anchor: "antes-despues", label: "Why" },
          { anchor: "producto", label: "Product" },
          { anchor: "caso", label: "Case" },
          { anchor: "piloto", label: "30-day trial" },
          { anchor: "faq", label: "FAQ" },
        ],
        cta: "Let's talk",
      },
      hero: {
        eyebrow: "HUB FOR COMPANIES · READ-ONLY",
        titleLines: ["Six systems.", "One screen."],
        titleHighlight: "Zero manual reports.",
        lead: "We connect your ERP, fleet, plant, HR, logistics and documents into a single live console — with alerts and an AI assistant you can ask like a colleague. Without touching your systems.",
        primaryCta: "Request your 30-day trial",
        secondaryCta: "See the console",
        checks: ["Doesn't change your data", "No migrations", "Signed confidentiality"],
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
            "Excavator EX-07 and Truck 14. Most of it was corrective maintenance. Want me to put together the details?",
        },
      },
      offer: [
        { value: "6", label: "areas connected in one view" },
        { value: "1", label: "data model, the same criteria for everyone" },
        { value: "30", label: "days to see it with your real data" },
        { value: "0", label: "changes to your current systems" },
      ],
      beforeAfter: {
        eyebrow: "THE PROBLEM",
        title: "By the time the data arrives, the decision is already late.",
        intro:
          "Every area has its own system. Seeing the full picture means requesting reports and cross-checking spreadsheets. Look at the same morning, twice.",
        today: {
          title: "Today",
          tag: "DECISION IN DAYS",
          moments: [
            { t: "Mon 08:00", x: "You email for the fleet, plant and HR reports." },
            { t: "Mon 15:00", x: "Three spreadsheets arrive, each with its own criteria." },
            { t: "Tue 11:00", x: "Someone cross-checks them by hand and discrepancies show up." },
            { t: "Thu 09:00", x: "You decide on last week's data." },
          ],
        },
        withHub: {
          title: "With the Nexura Hub",
          tag: "DECISION IN MINUTES",
          moments: [
            { t: "Mon 08:00", x: "You open the console: every area, up to date and measured the same way." },
            { t: "Mon 08:03", x: "An alert flags the deviation at Plant 2." },
            { t: "Mon 08:06", x: "You ask the assistant for the cause and it answers with the details." },
            { t: "Mon 08:15", x: "You decide, based on what's happening today." },
          ],
        },
        caption: "Illustrative scenario of a management morning.",
        pains: [
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
            description: "Decisions get made on what happened last month, not on what's happening today.",
          },
        ],
      },
      how: {
        eyebrow: "HOW IT WORKS",
        title: "Connect. Unify. Decide.",
        steps: [
          {
            name: "We connect",
            description: "We plug into your systems in read-only mode. Nothing gets changed.",
          },
          {
            name: "We unify",
            description:
              "We bring the data into a single model, with the same definitions across every area.",
          },
          {
            name: "You decide",
            description:
              "Console, alerts and an AI assistant on up-to-date data. Ask in plain language.",
          },
        ],
      },
      console: {
        eyebrow: "THE CONSOLE",
        title: "Everyone sees what they need. Everyone sees the same thing.",
        tabsLabel: "View by role",
        windowTitle: "Operations console",
        sampleTag: "SAMPLE DATA",
        alertsTitle: "Active alerts",
        assistantTitle: "Assistant",
        assistantHint: "Ask it in plain language",
        inputPlaceholder: "Type a question…",
        sendLabel: "Send question",
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
              "Excavator EX-07 and Truck 14 account for most of it, nearly all corrective maintenance. Want to see the breakdown by cause?",
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
            question: "Which of today's orders are at risk of arriving late?",
            answer:
              "Two North Route deliveries: the truck left 40 minutes behind schedule. I suggest letting those customers know now.",
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
            question: "Which equipment should I check first this week?",
            answer:
              "EX-07: it has had three corrective jobs this month on the same system. Checking it at the next preventive service avoids a bigger stop.",
          },
        ],
      },
      ypf: {
        eyebrow: "INDUSTRY REFERENCE",
        title: "YPF already runs a real-time monitoring center.",
        intro:
          "YPF runs a real-time monitoring center (RTIC) in Buenos Aires for its Vaca Muerta wells. It's not a Nexura project: we cite it as a reference for what a unified view of the operation makes possible.",
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
        title: "30 days. Your data. Results you can measure.",
        intro:
          "Before any commitment, you see it running on your real operation. We define scope and terms together.",
        weekLabel: "WEEK",
        weeks: [
          {
            name: "We connect",
            description: "Discovery and connection of the first systems, in read-only mode.",
          },
          { name: "First console", description: "Your team already sees its indicators with real data." },
          {
            name: "Alerts and AI",
            description: "We add deviation alerts and the assistant to ask in plain language.",
          },
          {
            name: "We measure",
            description: "We review the impact with your team and define the next steps.",
          },
        ],
        security: {
          title: "Your data, under your control",
          subtitle: "We decide together which data is used and how.",
          items: [
            { title: "Read-only.", text: "The hub never writes to or changes anything in your systems." },
            { title: "Role-based access.", text: "Each person sees only the indicators that apply to them." },
            { title: "Confidentiality.", text: "We sign the agreement before connecting any system." },
          ],
        },
      },
      faq: {
        eyebrow: "FAQ",
        title: "What people usually ask us.",
        more: { before: "Another question? ", link: "Write to us", after: " and we'll answer the same day." },
        items: [
          {
            q: "Which systems does it integrate with?",
            a: "The ones you already use: ERP, fleet and machinery management, plant systems, HR, logistics and document management. We always connect in read-only mode.",
          },
          {
            q: "What happens to our data?",
            a: "We don't change anything in your systems. We decide together which data is used and who sees each indicator, and we sign a confidentiality agreement before connecting.",
          },
          {
            q: "How long does it take?",
            a: "The proof of value runs for 30 days. By the second week your team already sees its first console with real data.",
          },
          {
            q: "How much does it cost?",
            a: "It depends on how many systems and areas get connected. We define the trial's scope and terms together on the first call.",
          },
        ],
      },
      contact: {
        eyebrow: "START HERE",
        title: "Stop waiting for the month-end report.",
        body: "Tell us which systems you use and what you want to solve. We'll get back to you to set up a first call and define the trial's scope.",
        steps: [
          "A 30-minute call to understand your operation",
          "A scope proposal for the proof of value",
          "By week 2, your first console with real data",
        ],
        submit: "I want my 30-day trial",
        success: "Thanks! We got your request. We'll reach out to set up a first call.",
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
