import type { Dictionary } from "../types";

const es: Dictionary = {
  meta: {
    homeTitle: "Nexuralabs | Consultoría en tecnología y crecimiento",
    homeDescription:
      "Ayudamos a startups en crecimiento y pymes de Latinoamérica a ordenar procesos, construir la tecnología que hace falta y escalar sin que la operación se rompa.",
    homeKeywords: [
      "consultoría tecnológica",
      "transformación digital",
      "desarrollo de software a medida",
      "consultoría de procesos",
      "crecimiento empresarial",
      "Latinoamérica",
    ],
    privacyTitle: "Política de privacidad | Nexuralabs",
    privacyDescription: "Política de privacidad de Nexuralabs.",
    termsTitle: "Términos de servicio | Nexuralabs",
    termsDescription: "Términos de servicio de Nexuralabs.",
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
    body: "Pablo Ascencao ayuda a startups en crecimiento y pymes de Latinoamérica a poner orden en la operación, construir la tecnología que hace falta cuando una herramienta genérica ya no alcanza, y preparar la estructura para escalar sin que el equipo se queme en el intento.",
    primaryCta: "Hablemos",
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
    },
  },
  connection: {
    kicker: "Cómo se conectan",
    title: "Tres líneas, un mismo trabajo",
    body: "Ops es la puerta de entrada táctica y funciona perfecto sola. Scale es la capa estratégica y casi siempre se nutre de un diagnóstico de Ops. Build aparece como derivación de cualquiera de las dos, o porque el cliente llega directo pidiendo una plataforma.",
    labels: { ops: "Ops", build: "Build", scale: "Scale" },
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
    kicker: "Por qué Nexuralabs",
    title: "Antes que nada, un diagnóstico.",
    items: [
      { value: "14", label: "años liderando equipos de tecnología" },
      { value: "40+", label: "personas en los equipos que lideró" },
      { value: "100%", label: "del trabajo cobrado por resultado, no por hora" },
      { value: "1°", label: "paso siempre: un diagnóstico, antes de proponer nada" },
    ],
  },
  contact: {
    kicker: "Contacto",
    title: "Hablemos",
    body: "Escribime y coordinamos veinte minutos sin costo para hablar de tu situación puntual: qué está rompiendo con el crecimiento, o qué necesitás construir para el próximo paso.",
    emailLabel: "pablo@nexuralabs.agency",
    linkedinLabel: "LinkedIn de Nexuralabs",
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
