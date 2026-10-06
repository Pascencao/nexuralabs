# Etapa E: medición (GA4 y eventos del píxel) y Lighthouse

**Fecha:** 2026-10-06
**Rama:** `feat/ia-aplicada`
**Estado:** borrador para revisión

## Decisiones

1. **GA4 queda listo pero apagado.** El ID se configura con `NEXT_PUBLIC_GA_ID` en Vercel. Sin la variable, GA4 no se carga y los eventos van solo al píxel de Meta.
2. **Sin banner de consentimiento** por ahora. Se mantiene el comportamiento actual del píxel. Queda pendiente actualizar la Política de privacidad para mencionar GA4 y el píxel.
3. **Se elimina `book_call` / `Schedule`**, porque no hay calendario (se descartó en la etapa C).
4. **Se mantiene el píxel actual** (`1111392737090271`, `PageView`) sin cambios.

## Eventos

| Evento GA4 | Parámetros | Evento estándar del píxel | Cuándo se dispara |
|---|---|---|---|
| `click_hablemos` | `location`: `header`, `hero` o `landing_hero` | `Contact` | Clic en cualquier CTA "Hablemos": header (desktop, móvil y landing), hero de la home y hero de las landings |
| `form_submit` | `need`: valor del select (`processes`, `software`, `ai`, `ai-rescue`, `other`) | `Lead` (con `content_category` = `need`) | Envío exitoso del formulario de contacto |
| `download_checklist` | — | `CompleteRegistration` (con `content_name` = `ai-readiness-checklist`) | Envío exitoso del bloque del checklist |
| `view_case` | `case_id` | `ViewContent` (con `content_ids` = `[case_id]`) | La card de un caso queda al menos 50 % visible; una vez por caso y por carga de página |

Todos los eventos GA4 llevan además `page_locale` (`es` o `en`).

## Arquitectura

- **`lib/analytics/events.ts` (pura, testeada con `node:test`)**
  - Tipo `AnalyticsEvent`: unión discriminada de los 4 eventos.
  - `toGa(event, locale)` devuelve `[name, params]`.
  - `toPixel(event)` devuelve `[standardEvent, params]`.
  - No tiene imports de runtime, igual que el resto de `lib/` que se testea.
- **`lib/analytics/track.ts` (cliente)**
  - `track(event)` llama a `window.gtag?.("event", …)` y a `window.fbq?.("track", …)`.
  - Si alguno no está cargado (sin ID, bloqueador de anuncios, desarrollo), no hace nada y no tira errores.
  - Toma el idioma de `document.documentElement.lang`.
- **`components/Analytics.tsx`**
  - Si existe `NEXT_PUBLIC_GA_ID`, carga `gtag.js` con `next/script` (`strategy="afterInteractive"`) y ejecuta `gtag('config', ID)`.
  - Se monta en `SiteShell`.
- **Conexiones con los componentes:**
  - `Header`, `Hero` y `LandingHero` llaman a `track` en el `onClick` de "Hablemos". `LandingHero` pasa a ser componente cliente.
  - `ContactForm` y `ChecklistOffer` lo llaman con el `onSuccess` que ya expone `useFormSubmit`.
  - `CaseCard` usa un `IntersectionObserver` con umbral 0.5 y lo desconecta después del primer disparo.
- **Documentación:**
  - `.env.example` y el README documentan `NEXT_PUBLIC_GA_ID`.
  - El README incluye la tabla de eventos.

## Lighthouse

**Objetivo:** ≥ 90 en Performance, Accessibility, Best Practices y SEO, en mobile.

- **Páginas a medir:** `/`, `/en`, `/ia-posventa` y `/rescate-ia`.
- **Cómo se mide:** contra el build de producción local (`next start`), con `npx lighthouse` y el preset mobile por defecto.
- **Si algo queda por debajo de 90:** se corrige en esta etapa y se documenta qué se cambió.
- **Guardas para no romper lo existente:**
  - No se tocan la paleta ni el diseño.
  - El píxel y GA4 no se sacan para subir el puntaje.
- **Con y sin ID:** sin `NEXT_PUBLIC_GA_ID` se mide sin GA4. Después se hace una corrida con un ID ficticio para ver el impacto del script.

**Registro:** los resultados quedan en `docs/lighthouse-2026-10-06.md`, con los puntajes por página y categoría y los cambios hechos.

## Verificación

- **`npm test`:** incluye los tests nuevos de `events.ts`: mapeo de cada evento a GA4 y al píxel, y parámetros.
- **`npx tsc --noEmit` y `npm run build`.**
- **Navegador:** se usa `window.fbq` simulado y también `NEXT_PUBLIC_GA_ID` ficticio con `window.gtag` interceptado. Hay que ver que:
  - cada clic en "Hablemos" dispara `click_hablemos` con el `location` correcto;
  - el envío del formulario dispara `form_submit` con su `need`;
  - el checklist dispara `download_checklist`;
  - scrollear hasta el caso dispara `view_case` una sola vez;
  - sin ID no se pide `gtag/js`.
- **Lighthouse:** las 4 páginas con ≥ 90 en las 4 categorías.

## Pendientes del usuario

- Crear la propiedad GA4 y cargar `NEXT_PUBLIC_GA_ID` en Vercel (Production y Preview).
- En Meta Events Manager, revisar que `Lead`, `Contact`, `CompleteRegistration` y `ViewContent` lleguen después del deploy.
- Actualizar la Política de privacidad para mencionar GA4 y el píxel. Es contenido legal y lo tiene que validar el usuario.
