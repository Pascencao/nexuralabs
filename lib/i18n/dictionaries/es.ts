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
    rigiHubTitle: "Servicios RIGI para proveedores y empresas | Nexura Labs",
    rigiHubDescription:
      "Diagnóstico de madurez digital 4.0 para proveedores y hub de integración de sistemas para empresas que ejecutan u operan proyectos del RIGI.",
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
  rigiTeaser: {
    kicker: "RIGI",
    title: "Servicios para el ecosistema RIGI",
    body: "Dos servicios pensados para los grandes proyectos del Régimen de Incentivo para Grandes Inversiones: uno para quienes les proveen bienes y servicios, y otro para las empresas que los ejecutan.",
    panelTitle: "servicios / rigi",
    panelTag: "2 SERVICIOS",
    cta: "Ver servicios RIGI",
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
      name: "Nombre y apellido",
      company: "Empresa",
      role: "Cargo",
      email: "Correo electrónico",
      workEmail: "Correo electrónico corporativo",
      phone: "Teléfono",
      phoneWhatsapp: "Teléfono / WhatsApp",
      sector: "Rubro",
      channel: "Medio de contacto preferido",
      systems: "Sistemas en uso",
      goal: "Necesidad a resolver",
    },
    sectorPlaceholder: "Seleccionar rubro",
    sectorOptions: {
      "capital-goods": "Fabricante de bienes de capital",
      metalworking: "Metalmecánica",
      logistics: "Operador logístico",
      engineering: "Empresa de ingeniería",
      construction: "Constructora",
      "specialized-services": "Servicios especializados",
      other: "Otro",
    },
    channelOptions: { whatsapp: "WhatsApp", email: "Correo electrónico", call: "Llamada" },
    systemOptions: {
      erp: "ERP",
      fleet: "Flota y maquinaria",
      plant: "Planta",
      hr: "RR.HH.",
      logistics: "Logística",
      docs: "Documentación",
      unsure: "A definir, con asesoramiento",
    },
    privacy: { before: "Acepto la ", link: "política de privacidad", after: "." },
    errors: {
      required: "Campo obligatorio.",
      email: "Correo electrónico no válido.",
      choice: "Seleccionar una opción.",
      tooLong: "El texto es demasiado extenso.",
      tooShort: "El texto es demasiado breve.",
      phone: "Teléfono no válido.",
      consent: "Es necesario aceptar la política de privacidad.",
    },
    sending: "Enviando…",
    error: "No fue posible enviar el formulario. Reintentar en unos minutos o escribir a pablo@nexuralabs.agency.",
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
    rigiHub: {
      nav: { suppliers: "Proveedores", companies: "Empresas", cta: "Ver soluciones" },
      hero: {
        eyebrow: "RIGI · SOLUCIONES PARA PROVEEDORES Y EMPRESAS",
        titleLines: ["Dos roles en el RIGI."],
        titleHighlight: "Una solución para cada uno.",
        lead: "Los proyectos del Régimen de Incentivo para Grandes Inversiones exigen información confiable en toda la cadena: proveedores con datos y documentación al día, y empresas con visibilidad completa de su operación. Cada perfil cuenta con un servicio específico.",
      },
      chooseLabel: "Soluciones por perfil",
      supplier: {
        tag: "PROVEEDORES",
        title: "Diagnóstico de madurez digital 4.0",
        text: "Para empresas que proveen bienes y servicios a proyectos RIGI. Evaluamos cinco áreas de gestión y entregamos un puntaje por área y un plan de acción priorizado.",
        facts: [
          { value: "5", label: "áreas evaluadas" },
          { value: "2–3", label: "semanas de trabajo" },
        ],
        cta: "Conocer el diagnóstico",
      },
      company: {
        tag: "EMPRESAS DEL RIGI",
        title: "Hub de integración de sistemas",
        text: "Para empresas que ejecutan u operan proyectos RIGI. Integramos ERP, flota, planta, RR.HH., logística y documentación en una consola única, con acceso de solo lectura.",
        facts: [
          { value: "6", label: "sistemas integrados" },
          { value: "30", label: "días de prueba de valor" },
        ],
        cta: "Conocer el hub",
      },
      help: {
        eyebrow: "CRITERIOS DE ELECCIÓN",
        title: "Qué servicio corresponde a cada organización.",
        items: [
          {
            lead: "Proveedores:",
            text: "empresas que proveen, o buscan proveer, bienes o servicios a compañías que invierten en el marco del RIGI.",
          },
          {
            lead: "Empresas del RIGI:",
            text: "compañías que ejecutan u operan un proyecto adherido al régimen y necesitan integrar la información de sus áreas.",
          },
        ],
        contact: {
          before: "Consultas sobre qué servicio aplica: ",
          link: "pablo@nexuralabs.agency",
          after: "",
        },
      },
    },
    rigiSuppliers: {
      nav: {
        links: [
          { anchor: "por-que", label: "Contexto" },
          { anchor: "areas", label: "Áreas" },
          { anchor: "que-recibis", label: "Entregables" },
          { anchor: "como-funciona", label: "Metodología" },
          { anchor: "faq", label: "Preguntas" },
        ],
        cta: "Contacto",
      },
      hero: {
        eyebrow: "RIGI · DIAGNÓSTICO PARA PROVEEDORES",
        titleLines: ["Diagnóstico de madurez"],
        titleHighlight: "digital 4.0.",
        lead: "Evaluamos la madurez digital de la empresa en cinco áreas de gestión, en un plazo de dos a tres semanas, y entregamos un puntaje por área y un plan de acción priorizado.",
        primaryCta: "Solicitar diagnóstico",
        secondaryCta: "Ver las 5 áreas",
        checks: ["Plazo de 2 a 3 semanas", "Puntaje de 0 a 5 por área", "Presupuesto cerrado antes de iniciar"],
        chart: {
          windowTitle: "diagnóstico / madurez 4.0",
          title: "Puntaje por área",
          tag: "Ejemplo ilustrativo",
          scaleLabel: "Escala de 0 a 5",
          scores: [3, 2, 1.5, 2.5, 1],
        },
      },
      offer: [
        { value: "5", label: "áreas evaluadas con criterios definidos" },
        { value: "0–5", label: "puntaje por área, con evidencia documentada" },
        { value: "2–3", label: "semanas desde el relevamiento hasta la entrega" },
        { value: "1", label: "plan de acción priorizado" },
      ],
      why: {
        eyebrow: "CONTEXTO",
        title: "Los grandes proyectos seleccionan proveedores con datos.",
        intro:
          "Las empresas que invierten en el marco del RIGI requieren de sus proveedores información ordenada y actualizada. Cuando esa información depende de planillas aisladas o de personas puntuales, cada licitación demanda el doble de esfuerzo.",
        items: [
          {
            name: "Datos",
            description:
              "Indicadores de producción, entregas y calidad disponibles en el momento en que se solicitan.",
          },
          {
            name: "Trazabilidad",
            description:
              "Registro de qué equipo, qué lote y qué persona intervino en cada trabajo, sin reconstrucción manual.",
          },
          {
            name: "Documentación al día",
            description:
              "Habilitaciones, seguros y legajos del personal vigentes y listos para su presentación.",
          },
        ],
        // Verificado el 2026-10-16: desde diciembre de 2025 Vicuña exige registrarse en su portal
        // de proveedores (administrado por Achilles) para participar de licitaciones.
        // Fuentes: ámbito.com (7/7/2026) y vicuna.com/portal-de-proveedores.
        note: "Un caso concreto: para participar de las licitaciones de Vicuña, los proveedores deben registrarse en su portal de proveedores. Se trata de un requisito de Vicuña, no del RIGI.",
      },
      areas: {
        eyebrow: "ÁREAS EVALUADAS",
        title: "Cinco áreas de gestión.",
        items: [
          {
            name: "Gestión y ERP",
            description:
              "Registro de ventas, compras, stock y costos, y grado de sistematización de esa información.",
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
              "Indicadores relevados, frecuencia de medición y tiempo necesario para elaborar un reporte para un cliente.",
          },
        ],
      },
      deliverables: {
        eyebrow: "ENTREGABLES",
        title: "Puntaje, plan de acción y piloto opcional.",
        items: [
          {
            name: "Puntaje de 0 a 5 por área",
            description:
              "Nivel de madurez de la empresa en cada una de las cinco áreas, con la evidencia que respalda cada valor.",
          },
          {
            name: "Plan de acción priorizado",
            description: "Iniciativas ordenadas por prioridad, con su esfuerzo estimado.",
          },
          {
            name: "Piloto opcional de 4 a 6 semanas",
            description:
              "Implementación sobre la prioridad más urgente del plan, para concluir el diagnóstico con una mejora en funcionamiento.",
          },
        ],
      },
      process: {
        eyebrow: "METODOLOGÍA",
        title: "Tres etapas, de dos a tres semanas.",
        stepLabel: "ETAPA",
        steps: [
          {
            name: "Relevamiento",
            description:
              "Entrevistas con referentes de cada área y revisión de los sistemas, planillas y documentos en uso.",
          },
          {
            name: "Medición",
            description:
              "Asignación de un puntaje de 0 a 5 por área según criterios definidos, con el fundamento de cada valor.",
          },
          {
            name: "Entrega del plan",
            description:
              "Presentación de los resultados y del plan de acción priorizado, y definición conjunta de los próximos pasos.",
          },
        ],
      },
      audience: {
        eyebrow: "ALCANCE",
        title: "Orientado a proveedores de grandes proyectos.",
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
        title: "Tecnología en funcionamiento en la industria.",
        intro:
          "Caso real: un agente que atiende consultas técnicas por WhatsApp para un cliente del sector industrial.",
        problemLabel: "Problema",
        solutionLabel: "Solución",
      },
      faq: {
        eyebrow: "PREGUNTAS FRECUENTES",
        title: "Consultas habituales.",
        more: { before: "Para otras consultas, ", link: "utilizar el formulario de contacto", after: "." },
        items: [
          {
            q: "¿Cuál es el costo?",
            a: "Depende del tamaño de la empresa y de la cantidad de plantas o sedes a relevar. El presupuesto se cierra antes de iniciar.",
          },
          {
            q: "¿Cuánto dura?",
            a: "Entre dos y tres semanas desde el relevamiento hasta la entrega del plan. El piloto opcional suma de cuatro a seis semanas.",
          },
          {
            q: "¿Qué información se requiere?",
            a: "Acceso de lectura a los sistemas, planillas y documentos en uso, y algunas horas de los referentes de cada área. Trabajamos bajo acuerdos de confidencialidad.",
          },
          {
            q: "¿Es aplicable a una pyme?",
            a: "Sí. El alcance se ajusta al tamaño de la empresa: en organizaciones pequeñas el relevamiento es más breve y el plan se concentra en pocas mejoras de impacto rápido.",
          },
        ],
      },
      contact: {
        eyebrow: "SOLICITAR DIAGNÓSTICO",
        title: "Un diagnóstico claro antes de la próxima licitación.",
        body: "Con los datos del formulario coordinamos el relevamiento por el medio de contacto indicado. Presupuesto cerrado antes de iniciar.",
        steps: [
          "Contacto por el medio indicado",
          "Coordinación del relevamiento con el equipo",
          "Entrega del puntaje y del plan de acción en 2 a 3 semanas",
        ],
        submit: "Solicitar diagnóstico",
        success:
          "Gracias. Recibimos la solicitud y nos comunicaremos dentro de las 48 horas hábiles para coordinar el diagnóstico.",
      },
    },
    rigiCompanies: {
      nav: {
        links: [
          { anchor: "antes-despues", label: "Contexto" },
          { anchor: "producto", label: "Consola" },
          { anchor: "caso", label: "Caso" },
          { anchor: "piloto", label: "Prueba de valor" },
          { anchor: "faq", label: "Preguntas" },
        ],
        cta: "Contacto",
      },
      hero: {
        eyebrow: "RIGI · HUB DE INTEGRACIÓN · SOLO LECTURA",
        titleLines: ["Seis sistemas.", "Una sola vista."],
        titleHighlight: "Decisiones con datos actuales.",
        lead: "Integramos ERP, flota, planta, RR.HH., logística y documentación en una consola en tiempo real, con alertas y un asistente con IA que responde consultas sobre los datos de la operación. Sin modificar los sistemas existentes.",
        primaryCta: "Solicitar prueba de valor",
        secondaryCta: "Ver la consola",
        checks: ["Acceso de solo lectura", "Sin migraciones", "Acuerdo de confidencialidad"],
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
            "Excavadora EX-07 y Camión 14. La mayor parte corresponde a mantenimiento correctivo. El detalle por causa está disponible.",
        },
      },
      offer: [
        { value: "6", label: "áreas integradas en una vista" },
        { value: "1", label: "modelo de datos con criterios comunes" },
        { value: "30", label: "días de prueba con datos reales" },
        { value: "0", label: "cambios en los sistemas existentes" },
      ],
      beforeAfter: {
        eyebrow: "CONTEXTO",
        title: "Cuando el dato llega tarde, la decisión también.",
        intro:
          "Cada área opera con su propio sistema. Obtener una visión completa requiere solicitar reportes y consolidar planillas. A continuación, una misma mañana de gestión en ambos escenarios.",
        today: {
          title: "Situación actual",
          tag: "DECISIÓN EN DÍAS",
          moments: [
            { t: "Lun 08:00", x: "Se solicitan por correo los reportes de flota, planta y RR.HH." },
            { t: "Lun 15:00", x: "Llegan tres planillas, cada una con criterios distintos." },
            { t: "Mar 11:00", x: "Se consolidan manualmente y surgen diferencias." },
            { t: "Jue 09:00", x: "La decisión se toma con datos de la semana anterior." },
          ],
        },
        withHub: {
          title: "Con el Hub Nexura",
          tag: "DECISIÓN EN MINUTOS",
          moments: [
            {
              t: "Lun 08:00",
              x: "La consola muestra todas las áreas, actualizadas y con criterios comunes.",
            },
            { t: "Lun 08:03", x: "Una alerta señala el desvío en Planta 2." },
            { t: "Lun 08:06", x: "El asistente identifica la causa y presenta el detalle." },
            { t: "Lun 08:15", x: "La decisión se toma con información del día." },
          ],
        },
        caption: "Escenario ilustrativo de una mañana de gestión.",
        pains: [
          {
            name: "Reportes manuales",
            description: "Horas semanales dedicadas a consolidar datos de distintos sistemas.",
          },
          {
            name: "Desvíos detectados tarde",
            description:
              "Un problema en la flota o en la planta aparece en el reporte cuando ya generó costos.",
          },
          {
            name: "Decisiones con datos desactualizados",
            description: "Las decisiones se basan en el mes anterior y no en la situación actual.",
          },
        ],
      },
      how: {
        eyebrow: "METODOLOGÍA",
        title: "Integrar. Unificar. Decidir.",
        steps: [
          {
            name: "Integración",
            description: "Conexión con los sistemas existentes en modo solo lectura, sin modificaciones.",
          },
          {
            name: "Unificación",
            description:
              "Consolidación de los datos en un modelo único, con definiciones comunes para todas las áreas.",
          },
          {
            name: "Decisión",
            description:
              "Consola, alertas y asistente con IA sobre datos actualizados, con consultas en lenguaje natural.",
          },
        ],
      },
      console: {
        eyebrow: "LA CONSOLA",
        title: "Cada rol accede a lo que necesita, sobre la misma información.",
        tabsLabel: "Vista por rol",
        windowTitle: "Consola de operación",
        sampleTag: "DATOS DE EJEMPLO",
        alertsTitle: "Alertas activas",
        assistantTitle: "Asistente",
        assistantHint: "Consultas en lenguaje natural",
        inputPlaceholder: "Consulta en lenguaje natural…",
        sendLabel: "Enviar consulta",
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
              "Excavadora EX-07 y Camión 14 concentran la mayor parte, casi todo por mantenimiento correctivo. El detalle por causa está disponible.",
          },
          {
            id: "operaciones",
            label: "Operaciones",
            kpis: [
              { value: "128", label: "Despachos del día", ok: true, pct: 76 },
              { value: "93 %", label: "Entregas a tiempo", ok: true, pct: 93 },
              { value: "6", label: "SKUs en stock crítico", ok: false, pct: 24 },
              { value: "97 %", label: "Turnos cubiertos", ok: true, pct: 97 },
            ],
            alerts: [
              { t: "09:10", x: "Ruta Norte: dos entregas con riesgo de demora." },
              { t: "08:30", x: "Depósito central: 6 SKUs por debajo del stock mínimo." },
              { t: "Hoy", x: "Turno noche de Planta 1 con una vacante sin cubrir." },
            ],
            question: "¿Qué pedidos del día tienen riesgo de demora?",
            answer:
              "Dos entregas de la Ruta Norte: el camión salió 40 minutos después de lo planificado. Se recomienda notificar a los clientes.",
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
            question: "¿Qué equipo conviene revisar primero esta semana?",
            answer:
              "La EX-07: acumula tres correctivos este mes en el mismo sistema. Incluirla en el próximo preventivo evita una parada mayor.",
          },
        ],
      },
      ypf: {
        eyebrow: "ANTECEDENTE EN LA INDUSTRIA",
        title: "YPF opera con un centro de monitoreo en tiempo real.",
        intro:
          "YPF opera desde Buenos Aires un centro de monitoreo en tiempo real (RTIC) para sus pozos de Vaca Muerta. No se trata de un proyecto de Nexura: se cita como referencia de lo que permite una visión unificada de la operación.",
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
        title: "30 días, con datos reales y resultados medibles.",
        intro:
          "Antes de cualquier compromiso, el hub funciona sobre la operación real de la empresa. Alcance y condiciones se definen en conjunto.",
        weekLabel: "SEMANA",
        weeks: [
          {
            name: "Integración",
            description: "Relevamiento y conexión de los primeros sistemas, en modo solo lectura.",
          },
          { name: "Primera consola", description: "El equipo accede a sus indicadores con datos reales." },
          {
            name: "Alertas e IA",
            description:
              "Incorporación de alertas sobre desvíos y del asistente para consultas en lenguaje natural.",
          },
          {
            name: "Medición",
            description: "Revisión del impacto junto al equipo y definición de los próximos pasos.",
          },
        ],
        security: {
          title: "Los datos, bajo control de la empresa",
          subtitle: "El uso de los datos se define en conjunto.",
          items: [
            { title: "Solo lectura.", text: "El hub no escribe ni modifica información en los sistemas." },
            {
              title: "Acceso por rol.",
              text: "Cada persona accede solo a los indicadores que le corresponden.",
            },
            {
              title: "Confidencialidad.",
              text: "El acuerdo se firma antes de conectar cualquier sistema.",
            },
          ],
        },
      },
      faq: {
        eyebrow: "PREGUNTAS FRECUENTES",
        title: "Consultas habituales.",
        more: { before: "Para otras consultas, ", link: "utilizar el formulario de contacto", after: "." },
        items: [
          {
            q: "¿Con qué sistemas se integra?",
            a: "Con los sistemas en uso: ERP, gestión de flota y maquinaria, sistemas de planta, RR.HH., logística y gestión documental. La conexión es siempre de solo lectura.",
          },
          {
            q: "¿Qué ocurre con los datos?",
            a: "No se modifica información en los sistemas de la empresa. El uso de los datos, la visibilidad de cada indicador y el acuerdo de confidencialidad se definen antes de la conexión.",
          },
          {
            q: "¿Cuánto tiempo lleva?",
            a: "La prueba de valor dura 30 días. En la segunda semana, el equipo ya cuenta con su primera consola con datos reales.",
          },
          {
            q: "¿Cuál es el costo?",
            a: "Depende de la cantidad de sistemas y áreas a integrar. El alcance y las condiciones de la prueba se definen en la primera reunión.",
          },
        ],
      },
      contact: {
        eyebrow: "CONTACTO",
        title: "Información de toda la operación, sin esperar el cierre de mes.",
        body: "Con la información sobre los sistemas en uso y la necesidad a resolver, coordinamos una primera reunión para definir el alcance de la prueba.",
        steps: [
          "Reunión inicial de 30 minutos para conocer la operación",
          "Propuesta de alcance para la prueba de valor",
          "Primera consola con datos reales en la semana 2",
        ],
        submit: "Solicitar prueba de valor",
        success:
          "Gracias. Recibimos la solicitud y nos comunicaremos para coordinar la primera reunión.",
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
    rigiHub: "Servicios RIGI",
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
