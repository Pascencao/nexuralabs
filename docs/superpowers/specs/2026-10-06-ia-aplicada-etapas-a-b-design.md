# IA aplicada en nexuralabs.agency — Etapas A y B

**Fecha:** 2026-10-06
**Rama:** `feat/ia-aplicada` (desde `develop` @ `ddd06f9`)
**Estado:** diseño aprobado, pendiente de plan de implementación

## Contexto

El sitio corporativo (nexuralabs.agency) se publica desde la rama `develop` del repo `Pascencao/nexuralabs`, mediante el proyecto `nexuralabs` de Vercel. Todo push a `develop` va directo a producción.

Hay que sumar la oferta de IA aplicada sin que el sitio parezca "otra agencia de IA". La IA es una capa dentro de las líneas que ya existen (Ops, Build y Scale), no un servicio aparte ni el titular. El diferencial es el método: primero se entiende el negocio, después viene la tecnología, y todo se mide.

El brief completo tiene 13 puntos y se divide en etapas, cada una con su propio diseño, plan y preview:

| Etapa | Contenido | Este documento |
|---|---|---|
| A | Rutas por idioma y SEO | ✅ |
| B | Contenido de la home | ✅ |
| C | Conversión: formulario, calendario, checklist descargable, envío de email | — |
| D | Landings `/ia-posventa` y `/rescate-ia` | — |
| E | Medición: GA4, eventos del píxel, Lighthouse | — |

## Decisiones tomadas

1. **Estética:** se mantiene la actual: fondo claro (`canvas`), texto `ink`, acento `gold` y los bloques oscuros `ink-dark` que ya existen. El brief describe un sitio oscuro con teal y violeta, pero también pide no cambiar la paleta, y prevalece esto último. Para lo nuevo de IA se usan como acento el teal `ops` (#1B4D4A) y el violeta `scale` (#463A66), que ya están en `tailwind.config.js`. No se agregan colores ni tipografías.
2. **Idioma en la URL:** español en `/` y en inglés en `/en`, con slugs traducidos (en la etapa D, `/ia-posventa` ↔ `/en/ai-after-sales`).
3. **Estructura de rutas:** dos árboles, `app/(es)/` y `app/en/`, cada uno con su layout raíz y su `<html lang>`. Las páginas son envoltorios finos de componentes compartidos.
4. **Redirección por navegador:** sí, solo en la primera visita y solo si no hay una preferencia guardada (ver A.4).
5. **Placeholders:** se ven en pantalla, están marcados en el código con `// TODO` y bloquean el merge a `develop` (ver B.6).

---

## Etapa A — Rutas por idioma y SEO

### A.1 Estructura de archivos

```
app/
  (es)/
    layout.tsx          → <SiteShell locale="es">, <html lang="es">
    page.tsx            → <HomePage /> + generateMetadata("home", "es")
    privacy/page.tsx
    terms/page.tsx
    opengraph-image.tsx
  en/
    layout.tsx          → <SiteShell locale="en">, <html lang="en">
    page.tsx
    privacy/page.tsx
    terms/page.tsx
    opengraph-image.tsx
  globals.css
  robots.ts
  sitemap.ts
components/
  SiteShell.tsx         → fuente Inter, Header, Footer, JsonLd, píxel de Meta,
                          meta de verificación de Facebook, LanguageProvider
  HomePage.tsx          → composición de secciones de la home (hoy en app/page.tsx)
lib/i18n/
  routes.ts             → tabla de rutas equivalentes
  metadata.ts           → helper buildMetadata(pageKey, locale)
middleware.ts
```

Se eliminan `app/layout.tsx`, `app/page.tsx`, `app/privacy/page.tsx` y `app/terms/page.tsx`, porque su contenido pasa a `SiteShell`, `HomePage` y los envoltorios. Next.js admite varios layouts raíz con route groups. Pasar de uno a otro, es decir cambiar de idioma, recarga la página completa, y eso es aceptable.

`SiteShell` mantiene sin cambios el ID del píxel de Meta (`1111392737090271`) y la meta `facebook-domain-verification`.

### A.2 Tabla de rutas (`lib/i18n/routes.ts`)

```ts
export const ROUTES = {
  home:    { es: "/",        en: "/en" },
  privacy: { es: "/privacy", en: "/en/privacy" },
  terms:   { es: "/terms",   en: "/en/terms" },
} as const;
export type PageKey = keyof typeof ROUTES;

export function alternatePath(pathname: string, target: Locale): string | null;
export function pageKeyFromPath(pathname: string): { key: PageKey; locale: Locale } | null;
```

Es la única fuente de verdad para el toggle, el middleware, el sitemap y los `alternates`. En la etapa D se agregan acá `iaPosventa` y `rescateIa`.

### A.3 `LanguageProvider` y toggle

- `LanguageProvider` recibe `locale` por prop desde `SiteShell`. Ya no lee ni escribe `localStorage`, y tampoco cambia `document.documentElement.lang`, porque el layout lo pone en el servidor.
- `useLanguage()` sigue devolviendo `{ locale, dict }`. Los componentes de sección no cambian por esto.
- `setLocale` se reemplaza por `switchLocale(target)`, que:
  1. escribe la cookie `nexuralabs-locale=<target>` (`path=/`, `max-age` de 1 año, `SameSite=Lax`);
  2. calcula `alternatePath(window.location.pathname, target)`; si la ruta no está en la tabla, usa la home del idioma destino;
  3. conserva `window.location.hash` y navega con `window.location.assign(...)`.
- `LOCALE_STORAGE_KEY` se reemplaza por `LOCALE_COOKIE = "nexuralabs-locale"`.

### A.4 Redirección por navegador (`middleware.ts`)

- **Matcher:** todo excepto `/_next`, `/api`, archivos con extensión (`.*\..*`) y `/en/*`.
- **Lógica:**
  1. Si `pageKeyFromPath(pathname)` no es una página en español, deja pasar la request.
  2. Si existe la cookie `nexuralabs-locale`, deja pasar. La preferencia guardada manda, sea `es` o `en`; con `en` tampoco redirige: quien la eligió y después abre un link en español lo ve en español.
  3. Si no hay cookie y `Accept-Language` pone `en` con mayor peso (q) que `es`, responde con un 307 a `ROUTES[key].en`, conserva el query string y fija la cookie `en`.
  4. En cualquier otro caso deja pasar sin fijar la cookie.
- Los buscadores no mandan `Accept-Language`, así que ven la versión en español sin redirección.

### A.5 Metadata por página (`lib/i18n/metadata.ts`)

`buildMetadata(key: PageKey, locale: Locale): Metadata` devuelve:
- `title`, que es absoluto en la home y usa la plantilla `%s | Nexura Labs` en el resto, y `description`, ambos del diccionario.
- `alternates.canonical` con `ROUTES[key][locale]`.
- `alternates.languages` con `{ es, en, "x-default": es }`.
- `openGraph` con `locale` (`es_AR` / `en_US`), `alternateLocale`, `url`, `siteName: "Nexura Labs"`, title y description.
- `twitter` con `card: "summary_large_image"`.

Textos de la home (punto 12 del brief):

| | Title | Description |
|---|---|---|
| ES | Nexura Labs: operaciones, software e IA aplicada para pymes | Ordenamos tu operación, construimos la tecnología que falta y aplicamos IA donde rinde. |
| EN | Nexura Labs: Operations, Software & Applied AI for Growing Companies | We fix operations, build the technology you're missing, and apply AI where it pays off. |

En privacidad y términos se mantienen los textos actuales del diccionario y se agregan los `alternates`.

### A.6 Sitemap, robots y JSON-LD

- `sitemap.ts` recorre `ROUTES` y genera una entrada por URL y por idioma, con `alternates.languages`.
- `robots.ts` no cambia, salvo que hoy apunte a otro sitemap.
- `JsonLd` recibe el `locale` y emite:
  - `Organization`: la actual, con descripción en el idioma de la página;
  - `ProfessionalService`: nombre, url, descripción, `areaServed` ("Latin America", "United States") y `founder` Pablo Ascencao. No lleva dirección ni teléfono porque no se publican;
  - `WebSite` con `inLanguage` correcto.
  - `FAQPage` se agrega en la etapa B.

### A.7 Imágenes Open Graph

`app/(es)/opengraph-image.tsx` y `app/en/opengraph-image.tsx` usan `next/og` `ImageResponse` en 1200×630: fondo `ink-dark`, "NEXURA LABS" con "LABS" en `gold`, y el title de la home en el idioma correspondiente. No llevan fotos ni ilustraciones. Las páginas legales heredan la imagen de su árbol.

### A.8 Limpieza

- Sacar del índice `tsconfig.tsbuildinfo` y todos los `.DS_Store`, y agregarlos a `.gitignore`.
- `next-env.d.ts` no se toca: lo regenera Next.

---

## Etapa B — Contenido de la home

### B.1 Orden de secciones (`components/HomePage.tsx`)

1. `Hero` (`#inicio`)
2. `ProblemSection` (`#problema`)
3. `ServiceLines` (`#servicios`)
4. `ServiceDetails`
5. `ConnectionDiagram` (`#conexion`)
6. **`AiApproach` (`#ia`)**, nueva
7. **`CaseStudies` (`#casos`)**, nueva
8. *(etapa C: bloque del checklist)*
9. `About` (`#sobre-mi`)
10. `Companies`
11. `Stats`
12. **`Faq` (`#faq`)**, nueva
13. `Contact` (`#contacto`)

### B.2 Header

- Links en este orden: problema `#problema`, cómo trabajamos `#servicios`, IA `#ia`, casos `#casos`, sobre mí `#sobre-mi`, contacto `#contacto`.
- Los `href` se arman con `ROUTES.home[locale]`: `/#problema` en español y `/en#problema` en inglés. El logo y el CTA siguen la misma regla.
- La barra completa se muestra desde `xl` (≥1280 px). Por debajo se usa el menú hamburguesa, que hoy aparece hasta `lg`.

| | ES | EN |
|---|---|---|
| Links | El problema · Cómo trabajamos · IA con criterio · Casos · Sobre mí · Contacto | The problem · How we work · AI, done right · Work · About · Contact |
| CTA | Hablemos | Let's talk |

### B.3 Cambios en secciones existentes

**Hero**
- Se mantienen el badge y el titular. En inglés el titular pasa de "Growing without breaking." a **"Grow without breaking."**, como pide el brief.
- `hero.body` se reemplaza por:
  - ES: "Ordenamos tu operación, construimos la tecnología que te falta y ponemos la IA a trabajar donde realmente rinde. Sin humo, con números."
  - EN: "We fix how your operation runs, build the technology you're missing, and put AI to work where it actually pays off. No hype, just results you can measure."
- El CTA principal "Hablemos" sigue apuntando a `#contacto`.
- Se agrega un link de texto secundario a `#ia`: ES "Ver cómo aplicamos IA →" / EN "See how we use AI →". Va en blanco con opacidad 80 %, subrayado al pasar el mouse y con foco visible.

**ProblemSection**
- Se agrega un cuarto ítem:
  - ES — **IA**: "Todos hablan de IA. Pocos la tienen funcionando. Probaste un piloto que no pasó de la demo, o directamente no sabés por dónde empezar ni si te conviene."
  - EN — **AI**: "Everyone's talking about AI. Few have it actually working. Maybe you ran a pilot that never left the demo stage, or you're not sure where to start, or whether it's worth it."
- La grilla pasa de `sm:grid-cols-3` a `sm:grid-cols-2 lg:grid-cols-4`.
- Íconos de lucide: los tres actuales, más `ScanSearch` para IA. No se usan `Brain`, `Bot`, `Cpu`, `CircuitBoard` ni `Sparkles`.

**ServiceDetails**
- Cada detalle de Ops, Build y Scale suma el campo `ai: string` en el diccionario.
- Al final de cada bloque se renderiza `<AiLayer text=... />`: un recuadro `rounded-2xl bg-white p-6 shadow-card` con un borde izquierdo de 4 px `border-ops` y el badge "Con IA" / "With AI" (`bg-ops/10 text-ops text-xs font-semibold uppercase rounded-full`).
- Textos:
  - **Ops + IA** — ES: "Mapeamos tus procesos y detectamos dónde la IA tiene retorno real, dónde alcanza con automatizar y dónde no conviene tocar nada. Salís con un caso de negocio por iniciativa." / EN: "We map your processes and pinpoint where AI has real ROI, where simple automation is enough, and where you shouldn't touch a thing. You leave with a business case for every initiative."
  - **Build + IA** — ES: "Agentes que entran en tu operación (WhatsApp, CRM, ERP, email) con supervisión humana donde hace falta, métricas de calidad y control de costos desde el día uno. En producción, no en una demo." / EN: "AI agents built into your real workflows (WhatsApp, CRM, ERP, email), with human review where it matters, quality metrics and cost control from day one. In production, not in a demo."
  - **Scale + IA** — ES: "Liderazgo técnico de IA mensual: mantenemos, medimos y mejoramos lo que está en producción, definimos reglas de uso y acompañamos la adopción de tu equipo." / EN: "Fractional AI leadership: we maintain, measure and improve what's running, set usage guidelines, and help your team actually adopt it."

**About**
- Se agrega un quinto punto con el ícono `Layers`:
  - ES: "Además de liderar equipos, diseño y construyo sistemas de IA en producción: agentes, búsqueda sobre documentación interna (RAG) e integraciones con las herramientas que la empresa ya usa."
  - EN: "Beyond leading teams, I design and build production AI systems: agents, search over internal documentation (RAG), and integrations with the tools a company already uses."

**Stats**
- El ítem "100% / del trabajo cobrado por resultado, no por hora" se reemplaza por un ítem sin número. En lugar de `value` se muestra un ícono `CircleCheck` grande (48 px, `text-ink`), y el label es ES "Presupuesto claro antes de empezar" / EN "Clear budget before we start".
- En el tipo, el ítem pasa a ser `{ value?: string; icon?: "check"; label: string }`.
- "El diagnóstico siempre va primero" (`1°`) se mantiene.

### B.4 Sección nueva: IA con criterio (`components/AiApproach.tsx`)

- `id="ia"`, fondo `canvas`, mismo patrón de kicker, título y bajada que el resto.
- Título: ES "IA con criterio" / EN "AI, done right".
- Bajada:
  - ES: "La mayoría de los proyectos de IA fallan por lo mismo: se automatiza un proceso que nadie entendió y nadie mide si funcionó. Nosotros empezamos al revés."
  - EN: "Most AI projects fail for the same reason: they automate a process nobody understood, and nobody measures whether it worked. We start the other way around."

**`components/MethodSteps.tsx`** (reutilizable en la etapa D)
- `<ol>` con 4 pasos. Cada uno lleva un número en un círculo `bg-scale text-white`, el nombre y una descripción.
- En móvil va vertical, con una línea que une los números. Desde `lg` va horizontal en 4 columnas, con la línea horizontal.

| # | ES | EN |
|---|---|---|
| 1 | **Diagnóstico** — Entendemos el proceso y los datos antes de proponer nada. | **Diagnose** — We understand the process and the data before proposing anything. |
| 2 | **Caso de negocio** — Costo, ahorro esperado y riesgo. Si no cierra, te lo decimos. | **Business case** — Cost, expected savings and risk. If the numbers don't work, we'll tell you. |
| 3 | **Producción** — Lo construimos dentro de tu operación, con supervisión humana donde importa. | **Production** — We build it into your operation, with human oversight where it matters. |
| 4 | **Medición** — Métricas de calidad, uso y costo. Lo que no se mide, se ajusta o se apaga. | **Measure** — Quality, usage and cost metrics. What isn't working gets fixed or switched off. |

**`components/ComparisonTable.tsx`** (reutilizable en la etapa D)
- `<table>` semántica con `<caption class="sr-only">`, `<th scope="col">` y `<th scope="row">` en la primera columna.
- Columna 1: fondo blanco y texto `muted`. Columna 2: fondo `ops` y texto blanco.
- Se mantienen las 2 columnas también a 375 px; el texto se parte en varias líneas.

| ES: Lo que suele pasar | ES: Cómo lo hacemos | EN: What usually happens | EN: How we do it |
|---|---|---|---|
| Se arranca por la herramienta | Se arranca por el proceso y el negocio | Starts with the tool | Starts with the process and the business |
| Demo impresionante que no llega a producción | Diseñado para producción desde el día uno | Impressive demo that never ships | Built for production from day one |
| Nadie sabe si está funcionando | Métricas de calidad, uso y costo | Nobody knows if it's working | Quality, usage and cost metrics |
| Costos que crecen sin control | Presupuesto y consumo monitoreados | Costs that grow unchecked | Budget and usage monitored |
| "IA para todo" | IA solo donde rinde; si no conviene, lo decimos | "AI for everything" | AI only where it pays off; if it doesn't, we'll say so |

**CTA al pie:** ES "¿Tenés un piloto de IA trabado? Lo revisamos →" / EN "Got a stalled AI pilot? Let's take a look →". En esta etapa apunta a `#contacto`; en la etapa D pasa a `ROUTES.rescateIa[locale]`.

### B.5 Sección nueva: Casos (`components/CaseStudies.tsx` + `components/CaseCard.tsx`)

- `id="casos"`, fondo `white`.
- Kicker: ES "Casos" / EN "Work". Título: ES "Lo que ya está funcionando" / EN "What's already running".
- `dict.cases.items: CaseStudy[]` con esta forma:

```ts
type CaseStudy = {
  id: string;            // "posventa-whatsapp"
  tag: string;           // "Build + IA · Posventa / soporte técnico"
  title: string;
  problem: string;
  solution: string;
  client: string;        // "Cliente del sector"
  clientPlaceholder?: string;
  results: { value: string; label: string; placeholder?: boolean }[];  // 1–3
};
```

- Grilla: con un solo caso, la card ocupa todo el ancho. Con dos o más, `lg:grid-cols-2`.
- `CaseCard`: arriba la etiqueta (`bg-build/10 text-build`, porque es Build), luego el título `text-2xl font-bold`, y dos columnas desde `md`, "Problema"/"The problem" y "Solución"/"The solution". Abajo van los cuadros de resultado (`text-4xl font-bold`, como en Stats) y la línea del cliente en `text-sm text-muted`.
- Contenido del caso:
  - Etiqueta: ES "Build + IA · Posventa / soporte técnico" / EN "Build + AI · After-sales / technical support"
  - Título: ES "Un agente que diagnostica fallas y sugiere repuestos por WhatsApp" / EN "An AI agent that diagnoses failures and suggests spare parts over WhatsApp"
  - Problema: ES "El conocimiento técnico estaba en manuales extensos y en la cabeza de pocas personas. Cada consulta de un cliente dependía de que alguien del equipo estuviera disponible." / EN "Technical knowledge lived in long manuals and in the heads of a few people. Every customer question depended on someone from the team being available."
  - Solución: ES "Un agente por WhatsApp que consulta los manuales del fabricante, guía el diagnóstico paso a paso y sugiere el repuesto correcto, derivando a una persona cuando hace falta." / EN "A WhatsApp agent that searches the manufacturer's manuals, guides the diagnosis step by step and suggests the right part, handing off to a person when needed."
  - Resultados: 2 cuadros, ambos placeholder:
    - `[PLACEHOLDER: % de consultas resueltas sin intervención]`
    - `[PLACEHOLDER: tiempo de respuesta]`
  - Cliente: ES "Cliente del sector [PLACEHOLDER: rubro]" / EN "Client in the [PLACEHOLDER: industry] sector".

### B.6 Placeholders (`components/Placeholder.tsx`)

- `<Placeholder>texto</Placeholder>` se renderiza como `[PLACEHOLDER: texto]` dentro de un `<mark>` con borde punteado `gold`, fondo `gold/10` y texto `ink`.
- Cada uso lleva al lado un `// TODO(placeholder): ...` en el código.
- **Regla de merge:** antes de mergear a `develop` hay que correr `git grep -n "TODO(placeholder)"` y el resultado tiene que estar vacío. Se documenta en el README.

### B.7 Sección nueva: Preguntas frecuentes (`components/Faq.tsx`)

- `id="faq"`, fondo `canvas`. Kicker: ES "Preguntas frecuentes" / EN "FAQ". Título: ES "Lo que suelen preguntarnos" / EN "What people usually ask".
- Cada pregunta es un `<details>` con su `<summary>`. El `summary` tiene ícono `ChevronDown` que rota con `group-open:rotate-180`, `focus-visible:ring-2 ring-gold` y `list-style: none`. Todas arrancan cerradas.
- El contenido sale de `dict.faq.items: { q: string; a: string }[]`, la misma fuente que usa el JSON-LD `FAQPage`. `JsonLd` lo agrega cuando la página es la home.

| ES | EN |
|---|---|
| **¿Cuánto cuesta?** Depende del alcance. La primera charla es sin cargo; después hacemos un diagnóstico y te damos un presupuesto cerrado antes de arrancar. | **How much does it cost?** It depends on scope. The first call is free; then we run a diagnosis and give you a clear quote before any work starts. |
| **¿Qué pasa con mis datos?** Trabajamos con acceso mínimo, acuerdos de confidencialidad y proveedores que no entrenan modelos con tu información. Definimos juntos qué datos se usan y cuáles no. | **What happens to my data?** We work with minimum access, NDAs, and providers that don't train models on your data. We decide together which data gets used and which doesn't. |
| **¿Y si la IA no me conviene?** Te lo decimos. Muchas veces el problema se resuelve ordenando el proceso o con una automatización simple, y eso también es parte del trabajo. | **What if AI isn't right for us?** We'll tell you. Often the problem is solved by fixing the process or with simple automation, and that's part of the job too. |
| **¿Trabajan con empresas fuera de Argentina?** Sí. Trabajamos de forma remota con empresas de Latinoamérica y Estados Unidos. | **Do you work outside Argentina?** Yes. We work remotely with companies across Latin America and the US. |
| **¿Cuánto tarda en verse un resultado?** El diagnóstico lleva semanas, no meses. Priorizamos una primera iniciativa que muestre resultados rápido antes de escalar. | **How soon will we see results?** Diagnosis takes weeks, not months. We prioritize a first initiative that shows results quickly before scaling. |

### B.8 Diccionario y tipos

- Todo texto nuevo va en `lib/i18n/dictionaries/es.ts` y `en.ts`.
- `lib/i18n/types.ts` define las claves nuevas: `header.links.ai`, `header.links.cases`, `hero.secondaryCta`, `serviceDetail.*.ai`, `serviceDetail.aiBadge`, `aiApproach`, `cases`, `faq` y los ítems de `stats` con `icon`. Como los dos diccionarios están tipados con `Dictionary`, si falta una clave en un idioma no compila.
- `meta.homeTitle` y `meta.homeDescription` se actualizan con los textos de A.5.

---

## Restricciones del brief que aplican a A y B

- No poner "IA" ni "Inteligencia Artificial" en el titular del hero.
- No usar íconos de robots, cerebros, circuitos ni partículas.
- No mencionar herramientas ni modelos específicos en el copy.
- No agregar Ciberseguridad ni Streaming como servicios.
- No inventar testimonios, logos de clientes, porcentajes ni métricas.
- No cambiar la paleta ni la tipografía.
- Mobile-first, sin scroll horizontal, contraste AA, `alt` en las imágenes y foco visible.

## Fuera de alcance (etapas siguientes)

- **C:** formulario de contacto, embed del calendario, checklist descargable, envío de email.
- **D:** `/ia-posventa`, `/rescate-ia` y sus versiones en inglés, y el cambio de destino del CTA de "IA con criterio".
- **E:** GA4, eventos (`click_hablemos`, `book_call`, `form_submit`, `download_checklist`, `view_case`), eventos estándar del píxel y Lighthouse ≥ 90.

## Verificación

El proyecto no tiene framework de tests, y no se agrega uno en estas etapas. La verificación es:

1. `npm run build` y `npx tsc --noEmit` sin errores.
2. En el navegador, con `npm run dev`:
   - `/` y `/en` renderizan con `<html lang>` correcto y con todas las secciones en su idioma.
   - El toggle lleva de `/#casos` a `/en#casos` y vuelve, y deja la cookie fijada.
   - Redirección, probada con `curl -I -H "Accept-Language: en-US,en;q=0.9" /`: sin cookie da 307 a `/en`; con la cookie `nexuralabs-locale=es` da 200.
   - El `<head>` de `/` y de `/en` tiene canonical, hreflang es/en/x-default, OG con `locale` y el JSON-LD con Organization, ProfessionalService y FAQPage.
   - `/sitemap.xml` lista las 6 URLs con alternates.
   - A 375, 768 y 1280 px no hay scroll horizontal; la grilla de Problema queda en 1, 2 y 4 columnas; los pasos del método quedan vertical en móvil y horizontal en desktop.
   - Con teclado: foco visible en el nav, el toggle, el link del hero y el acordeón; el acordeón se abre con Enter y con Espacio.
3. `git grep -niE "gpt|claude|openai|n8n|gemini|llama" -- components lib` sin resultados en el copy.
4. Preview de Vercel de la rama, revisada en un celular real antes de mergear.
