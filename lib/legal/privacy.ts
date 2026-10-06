import type { Locale } from "@/lib/i18n/config";

/** Un bloque es un párrafo (string) o una lista (string[]). */
export type LegalBlock = string | string[];
export type LegalSection = { title: string; blocks: LegalBlock[] };
export type LegalDocument = { updatedOn: string; intro: string; sections: LegalSection[] };

const CONTACT_EMAIL = "pablo@nexuralabs.agency";

/**
 * Política de privacidad. Describe lo que el sitio hace hoy: formularios (Resend),
 * hosting (Vercel), Google Analytics 4, píxel de Meta y la cookie de idioma.
 * Si cambia algo de eso, actualizar el texto y `updatedOn`.
 */
export const PRIVACY: Record<Locale, LegalDocument> = {
  es: {
    updatedOn: "2026-10-06",
    intro:
      "Esta política explica qué datos personales recolecta el sitio nexuralabs.agency, para qué se usan, con quién se comparten y cómo podés ejercer tus derechos.",
    sections: [
      {
        title: "1. Responsable",
        blocks: [
          `El responsable de los datos es Nexura Labs, consultora de tecnología a cargo de Pablo Ascencao, con base en Rosario, Argentina. Para cualquier consulta sobre privacidad podés escribir a ${CONTACT_EMAIL}.`,
        ],
      },
      {
        title: "2. Qué datos recolectamos",
        blocks: [
          [
            "Formulario de contacto: nombre, email, el tema que querés resolver y el mensaje, si lo escribís.",
            "Checklist descargable: email y empresa.",
            "Si nos escribís por email o LinkedIn: los datos que incluyas en el mensaje.",
            "Datos de navegación, a través de Google Analytics 4 y el píxel de Meta: páginas visitadas, tipo de dispositivo y navegador, ubicación aproximada y algunas interacciones (por ejemplo, clics en «Hablemos» o envíos de formularios).",
          ],
          "No pedimos ni recolectamos datos sensibles.",
        ],
      },
      {
        title: "3. Para qué los usamos",
        blocks: [
          [
            "Responder tus consultas y, si corresponde, coordinar una charla.",
            "Enviarte el checklist que pediste.",
            "Entender cómo se usa el sitio y medir la efectividad de nuestros anuncios.",
            "Cumplir obligaciones legales.",
          ],
          "Solo te escribimos en relación con lo que nos pediste.",
        ],
      },
      {
        title: "4. Con quién se comparten",
        blocks: [
          "No vendemos ni alquilamos tus datos. Los compartimos solo con los proveedores que necesitamos para operar el sitio, que los procesan en nuestro nombre:",
          [
            "Vercel: alojamiento del sitio.",
            "Resend: envío de los emails de los formularios.",
            "Google (Google Analytics 4): medición de uso del sitio.",
            "Meta (píxel de Meta): medición de uso del sitio y de anuncios.",
          ],
          "También podemos compartirlos si una autoridad competente lo exige por ley.",
        ],
      },
      {
        title: "5. Cookies y tecnologías similares",
        blocks: [
          [
            "«nexuralabs-locale» (propia): recuerda el idioma que elegiste. Dura un año.",
            "Cookies de Google Analytics (por ejemplo, «_ga»): distinguen visitas para medir el uso del sitio.",
            "Cookies del píxel de Meta (por ejemplo, «_fbp»): miden visitas y la efectividad de anuncios.",
          ],
          "Podés bloquear o borrar las cookies desde la configuración de tu navegador; el sitio sigue funcionando.",
        ],
      },
      {
        title: "6. Transferencias internacionales",
        blocks: [
          "Algunos proveedores procesan datos fuera de Argentina, por ejemplo en Estados Unidos. Trabajamos con proveedores que aplican medidas de protección acordes a las normas vigentes.",
        ],
      },
      {
        title: "7. Cuánto tiempo los conservamos",
        blocks: [
          "Conservamos los datos de contacto el tiempo necesario para responder tu consulta y, si iniciamos una relación comercial, mientras dure y por el plazo que exija la ley. Podés pedirnos que los borremos en cualquier momento.",
        ],
      },
      {
        title: "8. Tus derechos",
        blocks: [
          `Podés acceder a tus datos, pedir que los rectifiquemos, actualicemos o suprimamos, y oponerte a su uso, escribiendo a ${CONTACT_EMAIL}. Respondemos dentro de los plazos de la Ley 25.326 de Protección de Datos Personales.`,
          "La AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales.",
        ],
      },
      {
        title: "9. Seguridad",
        blocks: [
          "Aplicamos medidas técnicas y organizativas razonables para proteger tus datos, como acceso restringido y conexiones cifradas. Ningún sistema es completamente seguro, pero trabajamos para minimizar los riesgos.",
        ],
      },
      {
        title: "10. Menores de edad",
        blocks: ["El sitio está dirigido a empresas y no a menores de 18 años. No recolectamos datos de menores de forma intencional."],
      },
      {
        title: "11. Cambios en esta política",
        blocks: ["Si actualizamos esta política, publicamos la nueva versión en esta página con su fecha de actualización."],
      },
    ],
  },
  en: {
    updatedOn: "2026-10-06",
    intro:
      "This policy explains what personal data the nexuralabs.agency website collects, what it's used for, who it's shared with, and how you can exercise your rights.",
    sections: [
      {
        title: "1. Data controller",
        blocks: [
          `The data controller is Nexura Labs, a technology consultancy run by Pablo Ascencao, based in Rosario, Argentina. For any privacy question, write to ${CONTACT_EMAIL}.`,
        ],
      },
      {
        title: "2. What data we collect",
        blocks: [
          [
            "Contact form: name, email, the topic you want to solve and your message, if you write one.",
            "Downloadable checklist: email and company.",
            "If you write to us by email or LinkedIn: whatever data you include in your message.",
            "Browsing data, through Google Analytics 4 and the Meta pixel: pages visited, device and browser type, approximate location and some interactions (for example, clicks on “Let's talk” or form submissions).",
          ],
          "We don't ask for or collect sensitive data.",
        ],
      },
      {
        title: "3. What we use it for",
        blocks: [
          [
            "Answering your questions and, when it makes sense, setting up a call.",
            "Sending you the checklist you requested.",
            "Understanding how the site is used and measuring how well our ads perform.",
            "Complying with legal obligations.",
          ],
          "We only contact you about what you asked for.",
        ],
      },
      {
        title: "4. Who we share it with",
        blocks: [
          "We don't sell or rent your data. We only share it with the providers we need to run the site, who process it on our behalf:",
          [
            "Vercel: website hosting.",
            "Resend: sending the form emails.",
            "Google (Google Analytics 4): website usage measurement.",
            "Meta (Meta pixel): website usage and ad measurement.",
          ],
          "We may also share it when a competent authority requires it by law.",
        ],
      },
      {
        title: "5. Cookies and similar technologies",
        blocks: [
          [
            "“nexuralabs-locale” (first-party): remembers the language you chose. It lasts one year.",
            "Google Analytics cookies (for example, “_ga”): tell visits apart to measure site usage.",
            "Meta pixel cookies (for example, “_fbp”): measure visits and ad performance.",
          ],
          "You can block or delete cookies from your browser settings; the site keeps working.",
        ],
      },
      {
        title: "6. International transfers",
        blocks: [
          "Some providers process data outside Argentina, for example in the United States. We work with providers that apply protection measures in line with applicable rules.",
        ],
      },
      {
        title: "7. How long we keep it",
        blocks: [
          "We keep contact data for as long as needed to answer your question and, if we start working together, for the duration of that relationship and any period required by law. You can ask us to delete it at any time.",
        ],
      },
      {
        title: "8. Your rights",
        blocks: [
          `You can access your data, ask us to correct, update or delete it, and object to its use by writing to ${CONTACT_EMAIL}. We respond within the deadlines set by Argentina's Personal Data Protection Law No. 25,326.`,
          "Argentina's Agency for Access to Public Information (Agencia de Acceso a la Información Pública), as the supervisory authority under Law No. 25,326, is empowered to handle complaints and claims from anyone whose rights are affected by a breach of personal data protection rules.",
        ],
      },
      {
        title: "9. Security",
        blocks: [
          "We apply reasonable technical and organizational measures to protect your data, such as restricted access and encrypted connections. No system is completely secure, but we work to minimize the risks.",
        ],
      },
      {
        title: "10. Minors",
        blocks: ["The site is aimed at businesses, not at people under 18. We don't knowingly collect data from minors."],
      },
      {
        title: "11. Changes to this policy",
        blocks: ["If we update this policy, we'll publish the new version on this page with its update date."],
      },
    ],
  },
};
