import type { Dictionary } from "../types";

const es: Dictionary = {
  meta: {
    homeTitle: "Nexura Labs: operaciones, software e IA aplicada para pymes",
    homeDescription:
      "Ordenamos tu operación, construimos la tecnología que falta y aplicamos IA donde rinde.",
    homeKeywords: [
      "consultoría tecnológica",
      "transformación digital",
      "desarrollo de software a medida",
      "consultoría de procesos",
      "crecimiento empresarial",
      "Latinoamérica",
    ],
    privacyTitle: "Política de privacidad | Nexura Labs",
    privacyDescription: "Política de privacidad de Nexura Labs.",
    termsTitle: "Términos de servicio | Nexura Labs",
    termsDescription: "Términos de servicio de Nexura Labs.",
    posventaTitle: "Agente de IA para soporte técnico y posventa | Nexura Labs",
    posventaDescription:
      "Un agente que consulta tus manuales, guía el diagnóstico y sugiere el repuesto correcto por WhatsApp, con una persona cuando hace falta.",
    rescueTitle: "Rescate de proyectos de IA trabados | Nexura Labs",
    rescueDescription:
      "Tu piloto de IA no llegó a producción. Auditamos lo técnico y lo de negocio en 2 semanas, armamos un plan de corrección y lo ponemos a funcionar con métricas.",
    rigiSuppliersTitle: "Diagnóstico de madurez digital 4.0 para proveedores del RIGI | Nexura Labs",
    rigiSuppliersDescription:
      "Medimos la madurez digital de tu empresa en 5 áreas, en 2 a 3 semanas, y te entregamos un puntaje de 0 a 5 y un plan de acción priorizado.",
    rigiCompaniesTitle: "Hub de integración de sistemas para empresas del RIGI | Nexura Labs",
    rigiCompaniesDescription:
      "Conectamos ERP, flota, planta, RR.HH., logística y documentación en una sola vista, en modo solo lectura. Prueba de valor de 30 días.",
  },
  jsonLd: {
    organizationDescription:
      "Consultoría de tecnología y crecimiento para startups y pymes de Latinoamérica: procesos, software a medida y escalamiento.",
    websiteLanguage: "es-AR",
  },
  header: {
    navAria: "Navegación principal",
    links: {
      problem: "El problema",
      services: "Cómo trabajamos",
      ai: "IA con criterio",
      cases: "Casos",
      about: "Sobre mí",
      contact: "Contacto",
    },
    cta: "Hablemos",
    languageSwitcherAria: "Cambiar idioma",
  },
  hero: {
    badge: "Consultoría en tecnología y crecimiento",
    titleLead: "Crecer sin",
    titleHighlight: "explotar.",
    body: "Ordenamos tu operación, construimos la tecnología que te falta y ponemos la IA a trabajar donde realmente rinde. Sin humo, con números.",
    primaryCta: "Hablemos",
    secondaryCta: "Ver cómo aplicamos IA →",
  },
  problem: {
    kicker: "El problema",
    title: "Crecer rompe cosas.",
    items: [
      {
        name: "Procesos",
        description:
          "Los que armaste al principio ya no alcanzan para el volumen ni la complejidad de hoy.",
      },
      {
        name: "Software",
        description:
          "Ninguna herramienta genérica resuelve lo específico de tu operación.",
      },
      {
        name: "Estructura",
        description:
          "El equipo y la forma de organizarse no aguantan el ritmo que pide el negocio.",
      },
      {
        name: "IA",
        description:
          "Todos hablan de IA. Pocos la tienen funcionando. Probaste un piloto que no pasó de la demo, o directamente no sabés por dónde empezar ni si te conviene.",
      },
    ],
  },
  services: {
    kicker: "Cómo trabajamos",
    title: "Tres líneas, un mismo objetivo",
    lines: [
      {
        name: "Ops",
        description:
          "Diagnóstico y rediseño de procesos, selección e implementación de herramientas, capacitación al equipo.",
      },
      {
        name: "Build",
        description:
          "Desarrollo de software a medida, para cuando el problema ya no lo resuelve una herramienta que existe.",
      },
      {
        name: "Scale",
        description:
          "La capa estratégica para crecer con orden, o para poner en caja una estructura que ya creció de más.",
      },
    ],
    connectionNote:
      "No son compartimentos estancos: Ops resuelve lo urgente y también funciona sola, Scale casi siempre se apoya en un diagnóstico de Ops, y Build aparece cuando cualquiera de las dos necesita algo que no existe todavía.",
  },
  serviceDetail: {
    aiBadge: "Con IA",
    ops: {
      name: "Ops",
      problem:
        "Sabés que algo no funciona bien, pero no tenés tiempo ni método para pararte a mirarlo.",
      whatWeDo:
        "Diagnosticamos cómo se hacen las cosas hoy, encontramos dónde se pierde tiempo o dinero y rediseñamos el proceso antes de elegir cualquier herramienta. Después seleccionamos o implementamos el software que corresponde y capacitamos al equipo para que lo sostenga solo.",
      differentiators: [
        "Empezamos por el proceso: la herramienta viene después.",
        "Funciona como proyecto puntual o como base de un trabajo más grande de Scale.",
        "El equipo queda capacitado para operar sin depender de un consultor permanente.",
      ],
      ai: "Mapeamos tus procesos y detectamos dónde la IA tiene retorno real, dónde alcanza con automatizar y dónde no conviene tocar nada. Salís con un caso de negocio por iniciativa.",
    },
    build: {
      name: "Build",
      problem:
        "Necesitás una plataforma o un sistema y no tenés del todo claro qué pedirle a quien te lo construya.",
      whatWeDo:
        "Antes de escribir una línea de código, revisamos qué necesita resolver el negocio. El pedido inicial suele cambiar bastante una vez que entendemos el proceso real detrás. Diseñamos y desarrollamos el software a medida, integrado con lo que ya usa la empresa.",
      differentiators: [
        "Postura consultiva: primero preguntamos qué hace falta, después programamos.",
        "Aparece como continuación de un trabajo de Ops o Scale, o como pedido directo del cliente.",
        "Se integra con las herramientas que ya usa el equipo, sin islas de datos nuevas.",
      ],
      ai: "Agentes que entran en tu operación (WhatsApp, CRM, ERP, email) con supervisión humana donde hace falta, métricas de calidad y control de costos desde el día uno. En producción, no en una demo.",
    },
    scale: {
      name: "Scale",
      problem:
        "El negocio creció, pero la estructura que armaste para diez personas cruje con cincuenta.",
      whatWeDo:
        "Trabajamos la capa estratégica de crecimiento: qué hay que cambiar en la organización, los procesos y la tecnología para escalar sin que todo se vuelva caótico. Muchas veces alcanza con destrabar uno o dos procesos clave, identificados en un diagnóstico de Ops.",
      differentiators: [
        "Mirada de conjunto: organización, procesos y tecnología en la misma conversación.",
        "Se apoya en un diagnóstico concreto, no en un plan genérico de crecimiento.",
        "Pensado para decisiones de mediano plazo, con foco en que la operación aguante.",
      ],
      ai: "Liderazgo técnico de IA mensual: mantenemos, medimos y mejoramos lo que está en producción, definimos reglas de uso y acompañamos la adopción de tu equipo.",
    },
  },
  connection: {
    kicker: "Cómo se conectan",
    title: "Tres líneas, un mismo trabajo",
    body: "Ops es la puerta de entrada táctica y funciona perfecto sola. Scale es la capa estratégica y casi siempre se nutre de un diagnóstico de Ops. Build aparece como derivación de cualquiera de las dos, o porque el cliente llega directo pidiendo una plataforma.",
    labels: { ops: "Ops", build: "Build", scale: "Scale" },
  },
  aiApproach: {
    kicker: "IA aplicada",
    title: "IA con criterio",
    intro:
      "La mayoría de los proyectos de IA fallan por lo mismo: se automatiza un proceso que nadie entendió y nadie mide si funcionó. Nosotros empezamos al revés.",
    methodLabel: "Método en 4 pasos",
    steps: [
      {
        name: "Diagnóstico",
        description: "Entendemos el proceso y los datos antes de proponer nada.",
      },
      {
        name: "Caso de negocio",
        description: "Costo, ahorro esperado y riesgo. Si no cierra, te lo decimos.",
      },
      {
        name: "Producción",
        description:
          "Lo construimos dentro de tu operación, con supervisión humana donde importa.",
      },
      {
        name: "Medición",
        description:
          "Métricas de calidad, uso y costo. Lo que no se mide, se ajusta o se apaga.",
      },
    ],
    comparison: {
      caption: "Comparación entre lo que suele pasar en proyectos de IA y cómo lo hacemos",
      headers: ["Lo que suele pasar", "Cómo lo hacemos"],
      rows: [
        ["Se arranca por la herramienta", "Se arranca por el proceso y el negocio"],
        [
          "Demo impresionante que no llega a producción",
          "Diseñado para producción desde el día uno",
        ],
        ["Nadie sabe si está funcionando", "Métricas de calidad, uso y costo"],
        ["Costos que crecen sin control", "Presupuesto y consumo monitoreados"],
        ["“IA para todo”", "IA solo donde rinde; si no conviene, lo decimos"],
      ],
    },
    cta: "¿Tenés un piloto de IA trabado? Lo revisamos →",
  },
  cases: {
    kicker: "Casos",
    title: "Lo que ya está funcionando",
    problemLabel: "Problema",
    solutionLabel: "Solución",
    resultsLabel: "Resultados",
    items: [
      {
        id: "posventa-whatsapp",
        tag: "Build + IA · Posventa / soporte técnico",
        title: "Un agente que diagnostica fallas y sugiere repuestos por WhatsApp",
        problem:
          "El conocimiento técnico estaba en manuales extensos y en la cabeza de pocas personas. Cada consulta de un cliente dependía de que alguien del equipo estuviera disponible.",
        solution:
          "Un agente por WhatsApp que consulta los manuales del fabricante, guía el diagnóstico paso a paso y sugiere el repuesto correcto, derivando a una persona cuando hace falta.",
        client: "Cliente del sector industrial",
        results: [
          { value: "~1.000", label: "consultas resueltas sin que intervenga una persona" },
          { value: "~15 min", label: "tiempo de respuesta" },
        ],
      },
    ],
  },
  about: {
    kicker: "Sobre mí",
    name: "Pablo Ascencao",
    role: "Consultor en tecnología y transformación digital",
    points: [
      "Tengo 14 años de experiencia en tecnología, liderazgo de equipos de ingeniería y transformación digital.",
      "En Globant pasé de Web UI Developer a Tech Manager, liderando equipos de más de 40 ingenieros.",
      "También trabajé en startups y scale-ups, en distintas etapas de crecimiento.",
      "Vivo en Rosario, Argentina, y trabajo de forma remota con clientes de Latinoamérica y Estados Unidos.",
      "Además de liderar equipos, diseño y construyo sistemas de IA en producción: agentes, búsqueda sobre documentación interna (RAG) e integraciones con las herramientas que la empresa ya usa.",
    ],
    photoAlt: "Foto de Pablo Ascencao",
  },
  companies: {
    kicker: "Experiencia",
    title: "Empresas donde trabajé o con las que colaboré",
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
    moreLabel: "+ más",
  },
  stats: {
    kicker: "Por qué Nexura Labs",
    title: "Antes que nada, un diagnóstico.",
    items: [
      { value: "14", label: "años liderando equipos de tecnología" },
      { value: "40+", label: "personas en los equipos que lideré" },
      { icon: "check", label: "Presupuesto claro antes de empezar" },
      { value: "1°", label: "paso siempre: un diagnóstico, antes de proponer nada" },
    ],
  },
  faq: {
    kicker: "Preguntas frecuentes",
    title: "Lo que suelen preguntarnos",
    items: [
      {
        q: "¿Cuánto cuesta?",
        a: "Depende del alcance. La primera charla es sin cargo; después hacemos un diagnóstico y te damos un presupuesto cerrado antes de arrancar.",
      },
      {
        q: "¿Qué pasa con mis datos?",
        a: "Trabajamos con acceso mínimo, acuerdos de confidencialidad y proveedores que no entrenan modelos con tu información. Definimos juntos qué datos se usan y cuáles no.",
      },
      {
        q: "¿Y si la IA no me conviene?",
        a: "Te lo decimos. Muchas veces el problema se resuelve ordenando el proceso o con una automatización simple, y eso también es parte del trabajo.",
      },
      {
        q: "¿Trabajan con empresas fuera de Argentina?",
        a: "Sí. Trabajamos de forma remota con empresas de Latinoamérica y Estados Unidos.",
      },
      {
        q: "¿Cuánto tarda en verse un resultado?",
        a: "El diagnóstico lleva semanas, no meses. Priorizamos una primera iniciativa que muestre resultados rápido antes de escalar.",
      },
    ],
  },
  contact: {
    kicker: "Contacto",
    title: "Hablemos",
    body: "Escribime y coordinamos veinte minutos sin costo para hablar de tu situación puntual: qué está rompiendo con el crecimiento, o qué necesitás construir para el próximo paso.",
    emailLabel: "pablo@nexuralabs.agency",
    linkedinLabel: "LinkedIn de Nexura Labs",
    form: {
      fields: {
        name: "Nombre",
        email: "Email",
        need: "¿Qué querés resolver?",
        message: "Mensaje",
      },
      optional: "(opcional)",
      needPlaceholder: "Elegí una opción",
      needOptions: {
        processes: "Ordenar procesos",
        software: "Construir software",
        ai: "Aplicar IA",
        "ai-rescue": "Rescatar un proyecto de IA",
        "rigi-supplier": "Soy proveedor del RIGI",
        "rigi-company": "Represento una empresa del RIGI",
        other: "Otro",
      },
      submit: "Enviar",
      sending: "Enviando…",
      success: "¡Gracias! Te respondo en menos de 48 horas hábiles.",
      error: "No pudimos enviar el mensaje. Probá de nuevo o escribime a pablo@nexuralabs.agency.",
    },
  },
  formErrors: {
    required: "Completá este campo.",
    email: "Revisá el email.",
    choice: "Elegí una opción.",
    tooLong: "Es demasiado largo.",
    tooShort: "Es demasiado corto.",
    phone: "Revisá el teléfono.",
    consent: "Para enviar, aceptá la política de privacidad.",
  },
  checklist: {
    kicker: "Recurso gratis",
    title: "Checklist: ¿tu operación está lista para IA?",
    intro: "Doce preguntas para revisar antes de invertir en IA. Te lo mandamos por email en PDF.",
    fields: { email: "Email", company: "Empresa" },
    submit: "Enviame el checklist",
    sending: "Enviando…",
    success: "Listo. Te lo enviamos a {email}. Si no lo ves en unos minutos, revisá spam.",
    error: "No pudimos enviarlo. Probá de nuevo en un rato.",
  },
  rigiForm: {
    fields: {
      name: "Nombre",
      company: "Empresa",
      role: "Cargo",
      email: "Email",
      workEmail: "Email de trabajo",
      phone: "Teléfono",
      phoneWhatsapp: "Teléfono / WhatsApp",
      sector: "Rubro",
      channel: "¿Cómo preferís que te contactemos?",
      systems: "¿Qué sistemas usan?",
      goal: "¿Qué querés resolver?",
    },
    sectorPlaceholder: "Elegí tu rubro",
    sectorOptions: {
      "capital-goods": "Fabricante de bienes de capital",
      metalworking: "Metalmecánica",
      logistics: "Operador logístico",
      engineering: "Empresa de ingeniería",
      construction: "Constructora",
      "specialized-services": "Servicios especializados",
      other: "Otro",
    },
    channelOptions: { whatsapp: "WhatsApp", email: "Email", call: "Llamada" },
    systemOptions: {
      erp: "ERP",
      fleet: "Flota y maquinaria",
      plant: "Planta",
      hr: "RR.HH.",
      logistics: "Logística",
      docs: "Documentación",
      unsure: "No sé, quiero que me ayuden a definirlo",
    },
    privacy: { before: "Acepto la ", link: "política de privacidad", after: "." },
    sending: "Enviando…",
    error: "No pudimos enviar el formulario. Probá de nuevo o escribime a pablo@nexuralabs.agency.",
  },
  landings: {
    posventa: {
      hero: {
        kicker: "IA para posventa",
        title: "Tu soporte técnico, disponible siempre y con el conocimiento de tu mejor técnico",
        intro:
          "Para fabricantes y distribuidores con soporte técnico, servicio posventa y venta de repuestos.",
        cta: "Hablemos",
      },
      pain: {
        kicker: "El problema",
        title: "Lo que pasa hoy en tu posventa",
        items: [
          {
            name: "Consultas repetidas",
            description:
              "El equipo responde una y otra vez las mismas preguntas, y las urgentes esperan en la fila.",
          },
          {
            name: "Conocimiento en pocas cabezas",
            description:
              "Lo que sabe tu mejor técnico no está escrito en ningún lado. Si no está, nadie resuelve.",
          },
          {
            name: "Manuales que nadie lee",
            description:
              "La respuesta está en un manual extenso, pero encontrarla lleva más que llamar por teléfono.",
          },
          {
            name: "Repuestos mal pedidos",
            description:
              "Un diagnóstico incompleto termina en el repuesto equivocado, un envío de más y un cliente que espera.",
          },
        ],
      },
      build: {
        kicker: "Qué construimos",
        title: "Un agente que trabaja como tu mejor técnico",
        items: [
          "Consulta los manuales y la documentación del fabricante para responder con la fuente correcta.",
          "Guía el diagnóstico paso a paso, con las preguntas que haría un técnico.",
          "Sugiere el repuesto correcto antes de que se haga el pedido.",
          "Deriva a una persona cuando el caso lo requiere, con todo el contexto de la conversación.",
        ],
        note: "Funciona por WhatsApp y se conecta con las herramientas que ya usás.",
      },
      method: { kicker: "Método", title: "Cuatro pasos, siempre medidos" },
      faq: [
        {
          q: "¿Necesito tener los manuales digitalizados?",
          a: "No hace falta que estén ordenados. Partimos de lo que tengas (PDF, fichas técnicas, listas de repuestos) y en el diagnóstico vemos qué falta.",
        },
        {
          q: "¿Qué pasa cuando el agente no sabe la respuesta?",
          a: "Lo dice y deriva la consulta a una persona de tu equipo, con el historial de la conversación para que nadie empiece de cero.",
        },
        {
          q: "¿Funciona solo con WhatsApp?",
          a: "WhatsApp es el canal más común, pero el mismo agente puede atender email o el sitio web, y conectarse con tu CRM.",
        },
      ],
    },
    rescue: {
      hero: {
        kicker: "Rescate de proyectos de IA",
        title: "Tu proyecto de IA no pasó del piloto. Lo hacemos funcionar.",
        intro:
          "Ya invertiste tiempo y plata en un piloto. Antes de tirarlo o seguir sumando parches, miremos qué está fallando y qué hace falta para que funcione.",
        cta: "Hablemos",
      },
      symptoms: {
        kicker: "Síntomas",
        title: "¿Te suena alguno?",
        items: [
          {
            name: "No llega a producción",
            description: "Funcionó en la demo, pero nunca quedó integrado a la operación real.",
          },
          {
            name: "Respuestas poco confiables",
            description: "A veces acierta y a veces inventa, y nadie sabe cuándo confiar.",
          },
          {
            name: "Costos que se disparan",
            description: "La factura mensual crece y no está claro qué la mueve ni qué devuelve.",
          },
          {
            name: "Nadie lo usa",
            description:
              "El equipo volvió a hacerlo como antes porque la herramienta no encaja en su trabajo.",
          },
        ],
      },
      approach: {
        kicker: "Cómo lo encaramos",
        title: "De piloto trabado a producción, en tres pasos",
        steps: [
          {
            name: "Auditoría (2 semanas)",
            description:
              "Revisamos lo técnico y lo de negocio: datos, arquitectura, calidad de respuestas, costos y adopción.",
          },
          {
            name: "Plan de corrección",
            description:
              "Qué se arregla, qué se rehace y qué se apaga, con costo y prioridad. Si no conviene seguir, te lo decimos.",
          },
          {
            name: "Puesta en producción",
            description:
              "Lo dejamos funcionando dentro de tu operación, con métricas de calidad, uso y costo.",
          },
        ],
      },
    },
    rigiSuppliers: {
      nav: {
        links: [
          { anchor: "por-que", label: "Por qué" },
          { anchor: "areas", label: "Las 5 áreas" },
          { anchor: "que-recibis", label: "Qué recibís" },
          { anchor: "como-funciona", label: "Cómo funciona" },
          { anchor: "faq", label: "Preguntas" },
        ],
        cta: "Hablemos",
      },
      hero: {
        eyebrow: "RIGI · DIAGNÓSTICO PARA PROVEEDORES",
        titleLines: ["¿Tu empresa aprueba"],
        titleHighlight: "el examen 4.0?",
        lead: "Medimos la madurez digital de tu empresa en 5 áreas, en 2 a 3 semanas, y te entregamos un puntaje y un plan de acción.",
        primaryCta: "Reservá tu diagnóstico",
        secondaryCta: "Ver las 5 áreas",
        checks: ["De 2 a 3 semanas", "Puntaje de 0 a 5 por área", "Presupuesto cerrado antes de empezar"],
        chart: {
          windowTitle: "diagnóstico / madurez 4.0",
          title: "Puntaje por área",
          tag: "Ejemplo ilustrativo",
          scaleLabel: "Escala de 0 a 5",
          scores: [3, 2, 1.5, 2.5, 1],
        },
      },
      offer: [
        { value: "5", label: "áreas evaluadas con criterios claros" },
        { value: "0–5", label: "puntaje por área, con su evidencia" },
        { value: "2–3", label: "semanas del relevamiento a la entrega" },
        { value: "1", label: "plan de acción priorizado" },
      ],
      why: {
        eyebrow: "POR QUÉ IMPORTA",
        title: "Los grandes proyectos compran con datos.",
        intro:
          "Las empresas que invierten en el marco del RIGI piden a sus proveedores información ordenada y al día. Si esa información vive en planillas sueltas o en la cabeza de una persona, cada licitación cuesta el doble.",
        items: [
          {
            name: "Datos",
            description:
              "Indicadores de producción, entregas y calidad que puedas mostrar el día que te los pidan.",
          },
          {
            name: "Trazabilidad",
            description:
              "Saber qué equipo, qué lote y qué persona intervino en cada trabajo, sin reconstruirlo a mano.",
          },
          {
            name: "Documentación al día",
            description:
              "Habilitaciones, seguros y legajos del personal vigentes y listos para presentar.",
          },
        ],
        // Verificado el 2026-10-16: desde diciembre de 2025 Vicuña exige registrarse en su portal
        // de proveedores (administrado por Achilles) para participar de licitaciones.
        // Fuentes: ámbito.com (7/7/2026) y vicuna.com/portal-de-proveedores.
        note: "Un caso concreto: para participar de las licitaciones de Vicuña, sus proveedores tienen que registrarse en su portal de proveedores. Es un requisito de Vicuña, no del RIGI.",
      },
      areas: {
        eyebrow: "QUÉ EVALUAMOS",
        title: "Las 5 áreas del examen.",
        items: [
          {
            name: "Gestión y ERP",
            description:
              "Cómo registrás ventas, compras, stock y costos, y si esos datos están en un sistema o en planillas.",
          },
          {
            name: "Producción y planta",
            description:
              "Planificación, órdenes de trabajo, control de calidad y mantenimiento de equipos.",
          },
          {
            name: "Flota y logística",
            description:
              "Seguimiento de vehículos y maquinaria, entregas, consumos y mantenimiento.",
          },
          {
            name: "Personal y documentación",
            description:
              "Legajos, habilitaciones, capacitaciones y vencimientos del personal y de la empresa.",
          },
          {
            name: "Datos y reportes",
            description:
              "Qué indicadores medís, cada cuánto, y cuánto tardás en armar un reporte para un cliente.",
          },
        ],
      },
      deliverables: {
        eyebrow: "QUÉ RECIBÍS",
        title: "Un puntaje, un plan y, si querés, un piloto.",
        items: [
          {
            name: "Puntaje de 0 a 5 por área",
            description:
              "Dónde está parada tu empresa en cada una de las 5 áreas, con la evidencia que respalda cada número.",
          },
          {
            name: "Plan de acción priorizado",
            description: "Qué resolver primero, con qué esfuerzo y en qué orden.",
          },
          {
            name: "Piloto opcional de 4 a 6 semanas",
            description:
              "Sobre lo más urgente del plan, para salir del diagnóstico con algo funcionando.",
          },
        ],
      },
      process: {
        eyebrow: "CÓMO FUNCIONA",
        title: "De 2 a 3 semanas, en tres pasos.",
        stepLabel: "PASO",
        steps: [
          {
            name: "Relevamiento",
            description:
              "Entrevistas con las personas clave y revisión de los sistemas, planillas y documentos que usan hoy.",
          },
          {
            name: "Medición",
            description:
              "Puntuamos cada área de 0 a 5 con criterios claros y te mostramos en qué se basa cada puntaje.",
          },
          {
            name: "Entrega del plan",
            description:
              "Te presentamos el puntaje y el plan de acción priorizado, y vemos juntos por dónde empezar.",
          },
        ],
      },
      audience: {
        eyebrow: "PARA QUIÉN",
        title: "Pensado para proveedores de grandes proyectos.",
        items: [
          "Fabricantes de bienes de capital",
          "Metalmecánicas",
          "Operadores logísticos",
          "Empresas de ingeniería",
          "Constructoras",
          "Proveedores de servicios especializados",
        ],
      },
      precedent: {
        eyebrow: "ANTECEDENTE",
        title: "Tecnología que ya funciona en la industria.",
        intro:
          "Un caso real: un agente que atiende consultas técnicas por WhatsApp para un cliente del sector industrial.",
        problemLabel: "El problema",
        solutionLabel: "Lo que hicimos",
      },
      faq: {
        eyebrow: "PREGUNTAS FRECUENTES",
        title: "Lo que suelen preguntarnos.",
        more: { before: "¿Otra duda? ", link: "Escribinos", after: " y te respondemos." },
        items: [
          {
            q: "¿Cuánto cuesta?",
            a: "Depende del tamaño de la empresa y de cuántas plantas o sedes haya que relevar. Presupuesto cerrado antes de empezar.",
          },
          {
            q: "¿Cuánto tarda?",
            a: "Entre 2 y 3 semanas desde el relevamiento hasta la entrega del plan. Si sumás el piloto, son de 4 a 6 semanas más.",
          },
          {
            q: "¿Qué datos necesitan?",
            a: "Acceso de lectura a lo que ya usan (sistema de gestión, planillas, documentos) y un par de horas de las personas que conocen cada área. Trabajamos con acuerdos de confidencialidad.",
          },
          {
            q: "¿Sirve para una pyme chica?",
            a: "Sí. El examen se adapta al tamaño: en una empresa chica el relevamiento es más corto y el plan apunta a pocas mejoras de impacto rápido.",
          },
        ],
      },
      contact: {
        eyebrow: "RESERVÁ TU DIAGNÓSTICO",
        title: "Sabé dónde estás parado antes de la próxima licitación.",
        body: "Completá el formulario y te contactamos por el medio que prefieras para coordinar el relevamiento. Presupuesto cerrado antes de empezar.",
        steps: [
          "Te contactamos por el medio que elegiste",
          "Coordinamos el relevamiento con tu equipo",
          "En 2 a 3 semanas, tu puntaje y tu plan de acción",
        ],
        submit: "Reservar mi diagnóstico",
        success:
          "¡Gracias! Recibimos tus datos. Te contactamos en menos de 48 horas hábiles para coordinar el diagnóstico.",
      },
    },
    rigiCompanies: {
      nav: {
        links: [
          { anchor: "antes-despues", label: "Por qué" },
          { anchor: "producto", label: "Producto" },
          { anchor: "caso", label: "Caso" },
          { anchor: "piloto", label: "Prueba de 30 días" },
          { anchor: "faq", label: "Preguntas" },
        ],
        cta: "Hablemos",
      },
      hero: {
        eyebrow: "HUB PARA EMPRESAS · SOLO LECTURA",
        titleLines: ["Seis sistemas.", "Una pantalla."],
        titleHighlight: "Cero reportes a mano.",
        lead: "Conectamos el ERP, la flota, la planta, RR.HH., logística y documentación en una sola consola en vivo — con alertas y un asistente con IA al que le preguntás como a un colega. Sin tocar tus sistemas.",
        primaryCta: "Pedí tu prueba de 30 días",
        secondaryCta: "Ver la consola",
        checks: ["No modifica tus datos", "Sin migraciones", "Confidencialidad firmada"],
        systems: ["ERP", "Flota", "Planta", "RR.HH.", "Logística", "Documentos"],
        console: {
          title: "consola / operación",
          live: "EN VIVO",
          kpis: [
            { value: "87 %", label: "Disponibilidad de flota" },
            { value: "42", label: "Órdenes abiertas" },
            { value: "64 %", label: "Avance de obra" },
            { value: "9", label: "Docs. por vencer", warn: true },
          ],
          question: "¿Qué equipos tuvieron más horas de parada este mes?",
          answer:
            "Excavadora EX-07 y Camión 14. La mayor parte fue mantenimiento correctivo. ¿Te armo el detalle?",
        },
      },
      offer: [
        { value: "6", label: "áreas conectadas en una vista" },
        { value: "1", label: "modelo de datos, mismos criterios para todos" },
        { value: "30", label: "días para verlo con tus datos reales" },
        { value: "0", label: "cambios en tus sistemas actuales" },
      ],
      beforeAfter: {
        eyebrow: "EL PROBLEMA",
        title: "Cuando el dato llega, la decisión ya llegó tarde.",
        intro:
          "Cada área tiene su sistema. Para ver el cuadro completo hay que pedir reportes y cruzar planillas. Mirá la misma mañana, dos veces.",
        today: {
          title: "Hoy",
          tag: "DECISIÓN EN DÍAS",
          moments: [
            { t: "Lun 08:00", x: "Pedís por mail los reportes de flota, planta y RR.HH." },
            { t: "Lun 15:00", x: "Llegan tres planillas, cada una con su propio criterio." },
            { t: "Mar 11:00", x: "Alguien las cruza a mano y aparecen diferencias." },
            { t: "Jue 09:00", x: "Decidís con datos de la semana pasada." },
          ],
        },
        withHub: {
          title: "Con el Hub Nexura",
          tag: "DECISIÓN EN MINUTOS",
          moments: [
            {
              t: "Lun 08:00",
              x: "Abrís la consola: todas las áreas, actualizadas y con los mismos criterios.",
            },
            { t: "Lun 08:03", x: "Una alerta te marca el desvío en Planta 2." },
            { t: "Lun 08:06", x: "Le preguntás al asistente la causa y te responde con el detalle." },
            { t: "Lun 08:15", x: "Decidís, con lo que está pasando hoy." },
          ],
        },
        caption: "Escenario ilustrativo de una mañana de gestión.",
        pains: [
          {
            name: "Reportes manuales",
            description: "Alguien pasa horas cada semana juntando datos de varios sistemas.",
          },
          {
            name: "Desvíos que se ven tarde",
            description:
              "Un problema en la flota o en la planta aparece en el reporte cuando ya costó plata.",
          },
          {
            name: "Decisiones con datos viejos",
            description: "Se decide con lo que pasó el mes pasado, no con lo que está pasando hoy.",
          },
        ],
      },
      how: {
        eyebrow: "CÓMO FUNCIONA",
        title: "Conectar. Unificar. Decidir.",
        steps: [
          {
            name: "Conectamos",
            description: "Nos integramos con tus sistemas en modo solo lectura. No se modifica nada.",
          },
          {
            name: "Unificamos",
            description:
              "Llevamos los datos a un único modelo, con las mismas definiciones para todas las áreas.",
          },
          {
            name: "Decidís",
            description:
              "Consola, alertas y un asistente con IA sobre datos actualizados. Preguntás en lenguaje natural.",
          },
        ],
      },
      console: {
        eyebrow: "LA CONSOLA",
        title: "Cada uno ve lo que necesita. Todos ven lo mismo.",
        tabsLabel: "Vista por rol",
        windowTitle: "Consola de operación",
        sampleTag: "DATOS DE EJEMPLO",
        alertsTitle: "Alertas activas",
        assistantTitle: "Asistente",
        assistantHint: "Preguntale en lenguaje natural",
        inputPlaceholder: "Escribí una pregunta…",
        sendLabel: "Enviar pregunta",
        inRange: "En rango",
        attention: "Atención",
        roles: [
          {
            id: "direccion",
            label: "Dirección",
            kpis: [
              { value: "87 %", label: "Disponibilidad de flota", ok: true, pct: 87 },
              { value: "64 %", label: "Avance de obra", ok: true, pct: 64 },
              { value: "42", label: "Órdenes abiertas", ok: false, pct: 58 },
              { value: "9", label: "Docs. por vencer", ok: false, pct: 30 },
            ],
            alerts: [
              { t: "08:02", x: "Camión 14: consumo de combustible por encima de lo previsto." },
              { t: "07:45", x: "Planta 2: parada no programada en la línea de envasado." },
              { t: "Hoy", x: "3 legajos de contratistas vencen esta semana." },
            ],
            question: "¿Qué equipos tuvieron más horas de parada este mes?",
            answer:
              "Excavadora EX-07 y Camión 14 concentran la mayor parte, casi todo por mantenimiento correctivo. ¿Querés ver el detalle por causa?",
          },
          {
            id: "operaciones",
            label: "Operaciones",
            kpis: [
              { value: "128", label: "Despachos de hoy", ok: true, pct: 76 },
              { value: "93 %", label: "Entregas a tiempo", ok: true, pct: 93 },
              { value: "6", label: "SKUs en stock crítico", ok: false, pct: 24 },
              { value: "97 %", label: "Turnos cubiertos", ok: true, pct: 97 },
            ],
            alerts: [
              { t: "09:10", x: "Ruta Norte: dos entregas con riesgo de demora." },
              { t: "08:30", x: "Depósito central: 6 SKUs por debajo del stock mínimo." },
              { t: "Hoy", x: "Turno noche de Planta 1 con una vacante sin cubrir." },
            ],
            question: "¿Qué pedidos de hoy están en riesgo de llegar tarde?",
            answer:
              "Dos entregas de la Ruta Norte: el camión salió 40 minutos después de lo planificado. Sugiero avisar a los clientes ahora.",
          },
          {
            id: "mantenimiento",
            label: "Mantenimiento",
            kpis: [
              { value: "78 %", label: "Preventivos al día", ok: false, pct: 78 },
              { value: "42", label: "Órdenes abiertas", ok: false, pct: 58 },
              { value: "11", label: "Repuestos en espera", ok: false, pct: 40 },
              { value: "87 %", label: "Disponibilidad", ok: true, pct: 87 },
            ],
            alerts: [
              { t: "07:45", x: "Envasadora L2: parada no programada, orden creada." },
              { t: "Ayer", x: "EX-07: tercer correctivo del mes en el sistema hidráulico." },
              { t: "Hoy", x: "5 preventivos vencidos en la flota liviana." },
            ],
            question: "¿Qué equipo me conviene revisar primero esta semana?",
            answer:
              "La EX-07: acumula tres correctivos este mes en el mismo sistema. Revisarla en el próximo preventivo evita una parada mayor.",
          },
        ],
      },
      ypf: {
        eyebrow: "ANTECEDENTE EN LA INDUSTRIA",
        title: "YPF ya opera con un centro de monitoreo en tiempo real.",
        intro:
          "YPF opera desde Buenos Aires un centro de monitoreo en tiempo real (RTIC) para sus pozos de Vaca Muerta. No es un proyecto de Nexura: lo citamos como referencia de lo que permite una vista unificada de la operación.",
        stats: [
          { value: "~35 M", label: "datos por pozo" },
          { value: "15–30 %", label: "meta de reducción de los tiempos de ciclo" },
          { value: "−25 %", label: "en el tiempo de construcción de pozos (programa Toyota Well)" },
          { value: "−71 %", label: "en el tiempo de puesta en marcha de pozos (programa Toyota Well)" },
        ],
        footnote:
          "Los resultados de YPF combinan el centro de monitoreo con otras iniciativas operativas. Las reducciones del 25 % y del 71 % corresponden al programa Toyota Well, en el que el centro de monitoreo participó como componente.",
        sourcesLabel: "Fuentes",
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
        eyebrow: "PRUEBA DE VALOR",
        title: "30 días. Tus datos. Resultados que podés medir.",
        intro:
          "Antes de cualquier compromiso, lo ves funcionando sobre tu operación real. Alcance y condiciones los definimos juntos.",
        weekLabel: "SEMANA",
        weeks: [
          {
            name: "Conectamos",
            description: "Relevamiento y conexión de los primeros sistemas, en modo solo lectura.",
          },
          { name: "Primera consola", description: "Tu equipo ya ve sus indicadores con datos reales." },
          {
            name: "Alertas e IA",
            description:
              "Sumamos alertas sobre desvíos y el asistente para preguntar en lenguaje natural.",
          },
          {
            name: "Medimos",
            description: "Revisamos el impacto con tu equipo y definimos los próximos pasos.",
          },
        ],
        security: {
          title: "Tus datos, bajo tu control",
          subtitle: "Definimos juntos qué datos se usan y cómo.",
          items: [
            { title: "Solo lectura.", text: "El hub no escribe ni modifica nada en tus sistemas." },
            {
              title: "Acceso por rol.",
              text: "Cada persona ve solo los indicadores que le corresponden.",
            },
            {
              title: "Confidencialidad.",
              text: "Firmamos el acuerdo antes de conectar cualquier sistema.",
            },
          ],
        },
      },
      faq: {
        eyebrow: "PREGUNTAS FRECUENTES",
        title: "Lo que suelen preguntarnos.",
        more: { before: "¿Otra duda? ", link: "Escribinos", after: " y te respondemos en el día." },
        items: [
          {
            q: "¿Con qué sistemas se integra?",
            a: "Con los que ya usás: ERP, gestión de flota y maquinaria, sistemas de planta, RR.HH., logística y gestión documental. Nos conectamos siempre en modo solo lectura.",
          },
          {
            q: "¿Qué pasa con los datos?",
            a: "No modificamos nada en tus sistemas. Definimos juntos qué datos se usan, quién ve cada indicador y firmamos un acuerdo de confidencialidad antes de conectar.",
          },
          {
            q: "¿Cuánto tarda?",
            a: "La prueba de valor dura 30 días. En la segunda semana tu equipo ya ve su primera consola con datos reales.",
          },
          {
            q: "¿Cuánto cuesta?",
            a: "Depende de cuántos sistemas y áreas se conecten. Definimos alcance y condiciones de la prueba juntos, en la primera charla.",
          },
        ],
      },
      contact: {
        eyebrow: "EMPEZÁ ACÁ",
        title: "Dejá de esperar el reporte de fin de mes.",
        body: "Contanos qué sistemas usan y qué querés resolver. Te respondemos para coordinar una primera charla y definir el alcance de la prueba.",
        steps: [
          "Charla de 30 minutos para entender tu operación",
          "Propuesta de alcance para la prueba de valor",
          "En la semana 2, tu primera consola con datos reales",
        ],
        submit: "Quiero mi prueba de 30 días",
        success:
          "¡Gracias! Recibimos tu pedido. Te contactamos para coordinar la primera charla.",
      },
    },
    hub: {
      menuLabel: "Menú",
      footerTagline: "Hub para empresas · Software a medida desde Rosario, Argentina",
    },
  },
  footer: {
    rights: "Todos los derechos reservados.",
    privacy: "Política de privacidad",
    terms: "Términos de servicio",
    legalNavAria: "Legales",
    rigiNavAria: "Servicios RIGI",
    rigiSuppliers: "RIGI: diagnóstico para proveedores",
    rigiCompanies: "RIGI: hub para empresas",
  },
  legal: {
    privacy: {
      title: "Política de privacidad",
      backHome: "Volver al inicio",
      lastUpdated: "Última actualización",
    },
    terms: {
      title: "Términos de servicio",
      backHome: "Volver al inicio",
      lastUpdated: "Última actualización",
    },
  },
};

export default es;
