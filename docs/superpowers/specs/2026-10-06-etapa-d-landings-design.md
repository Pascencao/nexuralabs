# Etapa D: landings de IA para posventa y rescate de proyectos

**Fecha:** 2026-10-06
**Rama:** `feat/ia-aplicada` (sigue a A, B y C)
**Estado:** borrador para revisión

## Objetivo

Dos landings enfocadas, cada una con un mensaje y un único CTA. El CTA lleva al formulario de contacto al pie de la misma página, con la opción del select ya elegida. Usan los componentes de la home y no tienen el menú completo: solo logo, toggle ES/EN y "Hablemos".

| Página | ES | EN | Opción preseleccionada en el formulario |
|---|---|---|---|
| IA para posventa | `/ia-posventa` | `/en/ai-after-sales` | `ai` (Aplicar IA) |
| Rescate de IA | `/rescate-ia` | `/en/ai-rescue` | `ai-rescue` (Rescatar un proyecto de IA) |

**Decisión sobre el CTA:** el brief pedía "agendar charla", pero el calendario se descartó en la etapa C. El CTA ("Hablemos") baja al formulario de la propia landing.

## Arquitectura

- **`lib/i18n/routes.ts`:** se agregan `iaPosventa: { es: "/ia-posventa", en: "/en/ai-after-sales" }` y `rescateIa: { es: "/rescate-ia", en: "/en/ai-rescue" }`, más la constante `LANDING_KEYS = ["iaPosventa", "rescateIa"]`. Con esto se actualizan solos el toggle de idioma, la redirección del proxy, los `alternates` y el sitemap. Hay tests nuevos en `routes.test.ts`.
- **`lib/i18n/metadata.ts`:** se agregan entradas a `PAGE_TEXT` para las dos landings, y en `app/sitemap.ts` se agregan las entradas de `SETTINGS` (prioridad 0.8, mensual). TypeScript obliga a agregar las dos.
- **Páginas:** `app/(es)/ia-posventa/page.tsx`, `app/(es)/rescate-ia/page.tsx`, `app/(en)/en/ai-after-sales/page.tsx` y `app/(en)/en/ai-rescue/page.tsx`. Cada una es un envoltorio que exporta `buildMetadata(key, locale)` y renderiza `<PosventaLanding />` o `<RescueLanding />`.
- **Imagen OG por landing:** `opengraph-image.tsx` en cada carpeta. Usa `renderOgImage(locale, { title, description })`, que pasa a aceptar textos opcionales. Por defecto sigue mostrando el titular de la home.
- **Header en modo landing:** `Header` detecta la página con `usePathname()` y `pageKeyFromPath()`. Si es una landing, oculta los links de secciones y el menú hamburguesa, y deja logo (va a la home), toggle y "Hablemos". En la landing, "Hablemos" apunta a `#contacto` de la misma página.

### Componentes reutilizables

Son cambios chicos y compatibles con lo existente:

- **`MethodSteps`:** las columnas en desktop salen de `steps.length` (3 → `lg:grid-cols-3`, 4 → `lg:grid-cols-4`). La matemática del conector no depende de la cantidad de pasos. Esto resuelve la nota menor de la etapa B.
- **`Faq`:** acepta props opcionales `kicker`, `title` e `items`. Sin props usa `dict.faq` como hoy. El JSON-LD `FAQPage` sale de los `items` que reciba.
- **`Contact` / `ContactForm`:** aceptan la prop opcional `defaultNeed?: Need`, que preselecciona el select.
- **`CaseCard` y `ChecklistOffer`:** se usan tal cual.

### Componentes nuevos

- **`LandingHero`:** kicker, título, bajada y CTA dorado a `#contacto`. Mismo fondo `ink-dark` que el hero de la home, sin los círculos.
- **`IconList`:** grilla de 2×2 en tablet y 4 en desktop, con nombre y descripción. Es el mismo patrón visual que `ProblemSection`, pero recibe los ítems por props. Se usa para "Dolor" y "Síntomas".
- **`FeatureList`:** lista con check (mismo estilo que los diferenciadores de `ServiceDetails`) y una nota final. Se usa para "Qué construimos".
- **`PosventaLanding`:** `LandingHero` → dolor (`IconList`) → qué construimos (`FeatureList`) → caso (`CaseCard` con `dict.cases.items[0]`) → método (`MethodSteps` con `dict.aiApproach.steps`) → FAQ de 3 preguntas → `ChecklistOffer` → `Contact defaultNeed="ai"`.
- **`RescueLanding`:** `LandingHero` → síntomas (`IconList`) → cómo lo encaramos (`MethodSteps` con 3 pasos) → `ChecklistOffer` → `Contact defaultNeed="ai-rescue"`.

Íconos de lucide: `Repeat`, `UserRound`, `BookOpen`, `PackageX`, `Ban`, `CircleHelp`, `TrendingUp`, `UserX`. Ninguno es de robots, cerebros, circuitos ni partículas.

### Cambio en la home

El CTA "¿Tenés un piloto de IA trabado? Lo revisamos →" de `AiApproach` pasa a apuntar a `ROUTES.rescateIa[locale]`. Se saca el comentario de la etapa D.

## Copy

Va en el diccionario, en `landings.posventa`, `landings.rescue` y `meta.*`, en ES y EN. El copy no menciona herramientas ni modelos y no tiene métricas. WhatsApp, CRM y email son canales, igual que en la home.

### Metadata

| | Title | Description |
|---|---|---|
| Posventa ES | Agente de IA para soporte técnico y posventa \| Nexura Labs | Un agente que consulta tus manuales, guía el diagnóstico y sugiere el repuesto correcto por WhatsApp, con una persona cuando hace falta. |
| Posventa EN | AI Agent for Technical Support & After-Sales \| Nexura Labs | An agent that searches your manuals, guides the diagnosis and suggests the right spare part over WhatsApp, with a person in the loop when needed. |
| Rescate ES | Rescate de proyectos de IA trabados \| Nexura Labs | Tu piloto de IA no llegó a producción. Auditamos lo técnico y lo de negocio en 2 semanas, armamos un plan de corrección y lo ponemos a funcionar con métricas. |
| Rescate EN | Rescue for Stalled AI Projects \| Nexura Labs | Your AI pilot never reached production. We audit the tech and the business case in 2 weeks, build a fix plan and get it running with metrics. |

### `/ia-posventa`

**Hero**

| | ES | EN |
|---|---|---|
| Kicker | IA para posventa | AI for after-sales |
| Título (brief) | Tu soporte técnico, disponible siempre y con el conocimiento de tu mejor técnico | Technical support that's always on, with the knowledge of your best technician |
| Bajada | Para fabricantes y distribuidores con soporte técnico, servicio posventa y venta de repuestos. | For manufacturers and distributors with technical support, after-sales service and spare parts sales. |
| CTA | Hablemos | Let's talk |

**Dolor:** kicker ES "El problema" / EN "The problem". Título ES "Lo que pasa hoy en tu posventa" / EN "What's happening in your after-sales today".

| ES | EN |
|---|---|
| **Consultas repetidas.** El equipo responde una y otra vez las mismas preguntas, y las urgentes esperan en la fila. | **Repeat questions.** Your team answers the same questions over and over, and the urgent ones wait in line. |
| **Conocimiento en pocas cabezas.** Lo que sabe tu mejor técnico no está escrito en ningún lado. Si no está, nadie resuelve. | **Knowledge in a few heads.** What your best technician knows isn't written down anywhere. When they're out, nobody can solve it. |
| **Manuales que nadie lee.** La respuesta está en un manual extenso, pero encontrarla lleva más que llamar por teléfono. | **Manuals nobody reads.** The answer is in a long manual, but finding it takes longer than picking up the phone. |
| **Repuestos mal pedidos.** Un diagnóstico incompleto termina en el repuesto equivocado, un envío de más y un cliente que espera. | **Wrong parts ordered.** An incomplete diagnosis ends with the wrong part, an extra shipment and a customer who keeps waiting. |

**Qué construimos:** kicker ES "Qué construimos" / EN "What we build". Título ES "Un agente que trabaja como tu mejor técnico" / EN "An agent that works like your best technician".

| ES | EN |
|---|---|
| Consulta los manuales y la documentación del fabricante para responder con la fuente correcta. | Searches the manufacturer's manuals and documentation to answer from the right source. |
| Guía el diagnóstico paso a paso, con las preguntas que haría un técnico. | Guides the diagnosis step by step, asking the questions a technician would. |
| Sugiere el repuesto correcto antes de que se haga el pedido. | Suggests the right spare part before the order is placed. |
| Deriva a una persona cuando el caso lo requiere, con todo el contexto de la conversación. | Hands off to a person when the case calls for it, with the full conversation context. |

Nota final: ES "Funciona por WhatsApp y se conecta con las herramientas que ya usás." / EN "It runs on WhatsApp and connects to the tools you already use."

**Caso:** reutiliza `dict.cases` (kicker, título y el caso de la home). Hereda los placeholders hasta que estén los datos reales.

**Método:** kicker ES "Método" / EN "Method". Título ES "Cuatro pasos, siempre medidos" / EN "Four steps, always measured". Usa los pasos de `dict.aiApproach.steps`.

**Preguntas frecuentes (3):** kicker y título de `dict.faq`.

| ES | EN |
|---|---|
| **¿Necesito tener los manuales digitalizados?** No hace falta que estén ordenados. Partimos de lo que tengas (PDF, fichas técnicas, listas de repuestos) y en el diagnóstico vemos qué falta. | **Do my manuals need to be digitized?** They don't need to be organized. We start from what you have (PDFs, spec sheets, parts lists) and the diagnosis shows what's missing. |
| **¿Qué pasa cuando el agente no sabe la respuesta?** Lo dice y deriva la consulta a una persona de tu equipo, con el historial de la conversación para que nadie empiece de cero. | **What happens when the agent doesn't know the answer?** It says so and hands the question to someone on your team, with the conversation history so nobody starts from scratch. |
| **¿Funciona solo con WhatsApp?** WhatsApp es el canal más común, pero el mismo agente puede atender email o el sitio web, y conectarse con tu CRM. | **Does it only work on WhatsApp?** WhatsApp is the most common channel, but the same agent can handle email or your website, and connect to your CRM. |

### `/rescate-ia`

**Hero**

| | ES | EN |
|---|---|---|
| Kicker | Rescate de proyectos de IA | AI project rescue |
| Título (brief) | Tu proyecto de IA no pasó del piloto. Lo hacemos funcionar. | Your AI project never made it past the pilot. We'll get it working. |
| Bajada | Ya invertiste tiempo y plata en un piloto. Antes de tirarlo o seguir sumando parches, miremos qué está fallando y qué hace falta para que funcione. | You've already put time and money into a pilot. Before scrapping it or piling on more patches, let's look at what's failing and what it takes to make it work. |
| CTA | Hablemos | Let's talk |

**Síntomas:** kicker ES "Síntomas" / EN "Symptoms". Título ES "¿Te suena alguno?" / EN "Sound familiar?".

| ES | EN |
|---|---|
| **No llega a producción.** Funcionó en la demo, pero nunca quedó integrado a la operación real. | **It never reaches production.** It worked in the demo but never got wired into the real operation. |
| **Respuestas poco confiables.** A veces acierta y a veces inventa, y nadie sabe cuándo confiar. | **Unreliable answers.** Sometimes it's right and sometimes it makes things up, and nobody knows when to trust it. |
| **Costos que se disparan.** La factura mensual crece y no está claro qué la mueve ni qué devuelve. | **Costs out of control.** The monthly bill keeps growing and it's unclear what drives it or what it returns. |
| **Nadie lo usa.** El equipo volvió a hacerlo como antes porque la herramienta no encaja en su trabajo. | **Nobody uses it.** The team went back to the old way because the tool doesn't fit how they work. |

**Cómo lo encaramos (3 pasos):** kicker ES "Cómo lo encaramos" / EN "How we approach it". Título ES "De piloto trabado a producción, en tres pasos" / EN "From stalled pilot to production in three steps".

| ES | EN |
|---|---|
| **Auditoría (2 semanas).** Revisamos lo técnico y lo de negocio: datos, arquitectura, calidad de respuestas, costos y adopción. | **Audit (2 weeks).** We review both the tech and the business side: data, architecture, answer quality, costs and adoption. |
| **Plan de corrección.** Qué se arregla, qué se rehace y qué se apaga, con costo y prioridad. Si no conviene seguir, te lo decimos. | **Fix plan.** What gets fixed, what gets rebuilt and what gets switched off, with cost and priority. If it isn't worth continuing, we'll tell you. |
| **Puesta en producción.** Lo dejamos funcionando dentro de tu operación, con métricas de calidad, uso y costo. | **Production rollout.** We get it running inside your operation, with quality, usage and cost metrics. |

## Verificación

- **`npm test`:** incluye los tests nuevos de `routes` (rutas de las landings, `alternatePath` y `LANDING_KEYS`). También corren `npx tsc --noEmit` y `npm run build`, y las 4 rutas nuevas tienen que aparecer en el build.
- **curl:**
  - `/ia-posventa` con `Accept-Language: en` → 307 a `/en/ai-after-sales`.
  - Cada landing tiene title, canonical, hreflang y `og:image` propios.
  - El sitemap lista 10 URLs.
  - La landing de posventa tiene el JSON-LD `FAQPage` con 3 preguntas.
- **Navegador (ES/EN, 375 y 1280 px):**
  - El header muestra solo logo, toggle y "Hablemos".
  - "Hablemos" baja al formulario y el select viene preseleccionado.
  - El toggle cambia a la landing equivalente en el otro idioma.
  - Sin scroll horizontal.
  - El CTA de la home lleva a `/rescate-ia`.

## Fuera de alcance

- Eventos de medición, que van en la etapa E.
- Links desde la home a `/ia-posventa`, porque el brief no los pide. Se pueden sumar después, por ejemplo desde la card del caso.
