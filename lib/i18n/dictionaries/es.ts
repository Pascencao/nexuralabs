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
        client: "Cliente del sector {sector}",
        // TODO(placeholder): rubro real del cliente (anonimizado).
        clientPlaceholder: "rubro",
        results: [
          // TODO(placeholder): métrica real; % de consultas resueltas sin intervención.
          {
            value: "% de consultas resueltas sin intervención",
            label: "de las consultas, resueltas sin que intervenga una persona",
            placeholder: true,
          },
          // TODO(placeholder): métrica real; tiempo de respuesta.
          {
            value: "tiempo de respuesta",
            label: "tiempo promedio de respuesta",
            placeholder: true,
          },
        ],
      },
    ],
  },
  about: {
    kicker: "Sobre mí",
    name: "Pablo Ascencao",
    role: "Consultor en tecnología y transformación digital",
    points: [
      "14 años de experiencia en tecnología, liderazgo de equipos de ingeniería y transformación digital.",
      "En Globant pasó de Web UI Developer a Tech Manager, liderando equipos de más de 40 ingenieros.",
      "Experiencia adicional en startups y scale-ups, en distintas etapas de crecimiento.",
      "Basado en Rosario, Argentina. Trabaja de forma remota con clientes en toda Latinoamérica.",
      "Además de liderar equipos, diseño y construyo sistemas de IA en producción: agentes, búsqueda sobre documentación interna (RAG) e integraciones con las herramientas que la empresa ya usa.",
    ],
    photoAlt: "Foto de Pablo Ascencao",
  },
  companies: {
    kicker: "Experiencia",
    title: "Empresas donde trabajó o con las que colaboró",
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
      { value: "40+", label: "personas en los equipos que lideró" },
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
  },
  footer: {
    rights: "Todos los derechos reservados.",
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
