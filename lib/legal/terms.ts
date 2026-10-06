import type { Locale } from "@/lib/i18n/config";
import type { LegalDocument } from "@/lib/legal/privacy";

const CONTACT_EMAIL = "pablo@nexuralabs.agency";

/**
 * Términos de uso del sitio. Los servicios de consultoría se rigen por la propuesta
 * o el acuerdo que se firme en cada caso, no por este texto.
 * Si se cambia algo, actualizar también `updatedOn`.
 */
export const TERMS: Record<Locale, LegalDocument> = {
  es: {
    updatedOn: "2026-10-06",
    intro:
      "Estos términos regulan el uso del sitio nexuralabs.agency. Al navegarlo o usar sus formularios, aceptás estas condiciones.",
    sections: [
      {
        title: "1. Quiénes somos",
        blocks: [
          `Nexura Labs es una consultora de tecnología y operaciones a cargo de Pablo Ascencao, con base en Rosario, Argentina. Contacto: ${CONTACT_EMAIL}.`,
        ],
      },
      {
        title: "2. Para qué sirve este sitio",
        blocks: [
          "El sitio presenta nuestros servicios y permite contactarnos o pedir recursos gratuitos, como el checklist. Su contenido es informativo y no constituye una oferta vinculante.",
          "Cada servicio de consultoría o desarrollo se rige por la propuesta, el presupuesto o el acuerdo que firmemos con el cliente. Si hay diferencias entre ese documento y estos términos, prevalece lo firmado.",
        ],
      },
      {
        title: "3. Información del sitio",
        blocks: [
          "La información publicada es general y no reemplaza un diagnóstico de tu caso particular. Los casos que describimos muestran trabajos realizados y no garantizan resultados iguales en otros contextos.",
          "Hacemos lo posible para que el contenido sea correcto y esté actualizado, pero puede contener errores u omisiones.",
        ],
      },
      {
        title: "4. Formularios",
        blocks: [
          "Al usar el formulario de contacto o pedir el checklist, te comprometés a dar datos verdaderos y propios. Tratamos esos datos según nuestra Política de privacidad.",
        ],
      },
      {
        title: "5. Uso permitido",
        blocks: [
          "No está permitido usar el sitio para:",
          [
            "Enviar spam, contenido ilegal o mensajes en nombre de otra persona.",
            "Intentar acceder sin autorización a sistemas, cuentas o datos.",
            "Afectar el funcionamiento del sitio, por ejemplo con ataques o envíos automatizados masivos.",
          ],
        ],
      },
      {
        title: "6. Propiedad intelectual",
        blocks: [
          "Los textos, el diseño, la marca, el logo y los recursos descargables del sitio pertenecen a Nexura Labs. Podés usar el checklist dentro de tu empresa; para reproducir o distribuir el contenido con otros fines, pedinos autorización.",
        ],
      },
      {
        title: "7. Sitios de terceros",
        blocks: [
          "El sitio incluye enlaces a servicios de terceros, como LinkedIn. No controlamos esos sitios ni somos responsables por su contenido o sus políticas.",
        ],
      },
      {
        title: "8. Responsabilidad",
        blocks: [
          "El sitio se ofrece tal como está. En la medida en que la ley lo permita, Nexura Labs no es responsable por daños derivados del uso del sitio o de la imposibilidad de usarlo. Esto no limita los derechos que la ley no permite excluir, como los que reconoce la normativa de defensa del consumidor.",
        ],
      },
      {
        title: "9. Cambios",
        blocks: [
          "Podemos actualizar estos términos. La versión vigente es la publicada en esta página, con su fecha de actualización.",
        ],
      },
      {
        title: "10. Ley aplicable",
        blocks: [
          "Estos términos se rigen por las leyes de la República Argentina. Cualquier controversia se someterá a los tribunales ordinarios de la ciudad de Rosario, provincia de Santa Fe, sin perjuicio de los derechos que la normativa de defensa del consumidor otorgue a quien corresponda.",
        ],
      },
      {
        title: "11. Contacto",
        blocks: [`Para consultas sobre estos términos, escribinos a ${CONTACT_EMAIL}.`],
      },
    ],
  },
  en: {
    updatedOn: "2026-10-06",
    intro:
      "These terms govern the use of the nexuralabs.agency website. By browsing it or using its forms, you accept these conditions.",
    sections: [
      {
        title: "1. Who we are",
        blocks: [
          `Nexura Labs is a technology and operations consultancy run by Pablo Ascencao, based in Rosario, Argentina. Contact: ${CONTACT_EMAIL}.`,
        ],
      },
      {
        title: "2. What this site is for",
        blocks: [
          "The site presents our services and lets you contact us or request free resources, such as the checklist. Its content is informational and is not a binding offer.",
          "Each consulting or development engagement is governed by the proposal, quote or agreement we sign with the client. If that document and these terms differ, the signed document prevails.",
        ],
      },
      {
        title: "3. Information on the site",
        blocks: [
          "The information published is general and doesn't replace a diagnosis of your specific situation. The cases we describe show work we've done and don't guarantee the same results in other contexts.",
          "We do our best to keep the content accurate and up to date, but it may contain errors or omissions.",
        ],
      },
      {
        title: "4. Forms",
        blocks: [
          "When you use the contact form or request the checklist, you agree to provide true information about yourself. We handle that data according to our Privacy Policy.",
        ],
      },
      {
        title: "5. Acceptable use",
        blocks: [
          "You may not use the site to:",
          [
            "Send spam, illegal content or messages on someone else's behalf.",
            "Try to gain unauthorized access to systems, accounts or data.",
            "Disrupt the site, for example through attacks or mass automated submissions.",
          ],
        ],
      },
      {
        title: "6. Intellectual property",
        blocks: [
          "The site's text, design, brand, logo and downloadable resources belong to Nexura Labs. You may use the checklist within your company; to reproduce or distribute the content for other purposes, ask us for permission.",
        ],
      },
      {
        title: "7. Third-party sites",
        blocks: [
          "The site links to third-party services, such as LinkedIn. We don't control those sites and aren't responsible for their content or policies.",
        ],
      },
      {
        title: "8. Liability",
        blocks: [
          "The site is provided as is. To the extent permitted by law, Nexura Labs isn't liable for damages arising from the use of, or inability to use, the site. This doesn't limit any rights that the law doesn't allow to be excluded, such as those granted by consumer protection rules.",
        ],
      },
      {
        title: "9. Changes",
        blocks: ["We may update these terms. The version in force is the one published on this page, with its update date."],
      },
      {
        title: "10. Governing law",
        blocks: [
          "These terms are governed by the laws of the Argentine Republic. Any dispute will be submitted to the ordinary courts of the city of Rosario, Santa Fe province, without prejudice to any rights that consumer protection rules grant to whoever is entitled to them.",
        ],
      },
      {
        title: "11. Contact",
        blocks: [`For questions about these terms, write to ${CONTACT_EMAIL}.`],
      },
    ],
  },
};
