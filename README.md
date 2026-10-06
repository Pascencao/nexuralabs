# Nexura Labs

Sitio de Nexura Labs, la consultoría de tecnología y crecimiento de Pablo Ascencao. Construida con Next.js (App Router) y TailwindCSS, bilingüe (ES en `/`, EN en `/en`).

## Tecnologías

- **Next.js** (App Router) + TypeScript
- **TailwindCSS**
- **Lucide React** para iconografía
- **Inter** como tipografía

## Paleta de colores

- Fondo: `#F5F6F8` (canvas) / blanco
- Texto principal: `#16233A` (ink), fondos oscuros `#0F1B2D` (ink-dark)
- Texto secundario: `#5B6472` (muted)
- Acento: `#AD8A52` (gold)
- Color por línea de servicio: Ops `#1B4D4A`, Build `#8A5A2B`, Scale `#463A66`

## Estructura del proyecto

```
├── app/
│   ├── (es)/                 # Árbol en español (layout raíz con <html lang="es">)
│   │   ├── page.tsx          # Home → components/HomePage
│   │   ├── privacy/, terms/
│   │   └── opengraph-image.tsx
│   ├── (en)/en/              # Árbol en inglés, mismas páginas bajo /en
│   ├── global-not-found.tsx  # 404 bilingüe
│   ├── sitemap.ts, robots.ts
│   └── globals.css
├── proxy.ts                  # Redirección a /en en la primera visita con navegador en inglés
├── components/
│   ├── SiteShell.tsx         # <html>, fuente, Header/Footer, JSON-LD, píxel de Meta
│   ├── HomePage.tsx          # Orden de secciones de la home
│   ├── i18n/LanguageProvider.tsx  # { locale, dict, switchLocale }
│   └── …secciones
└── lib/i18n/
    ├── routes.ts             # ROUTES: única fuente de verdad de URLs por idioma
    ├── negotiate.ts          # Accept-Language → idioma preferido
    ├── metadata.ts           # baseMetadata / buildMetadata (canonical, hreflang, OG)
    ├── types.ts              # Dictionary (obliga a que es.ts y en.ts tengan las mismas claves)
    └── dictionaries/es.ts, en.ts
```

## Idioma

- Español en `/`, inglés en `/en`. Cada página nueva se agrega en `lib/i18n/routes.ts` y en los dos árboles de `app/`; además, `PAGE_TEXT` en `lib/i18n/metadata.ts` y `SETTINGS` en `app/sitemap.ts` (el compilador avisa si falta).
- El toggle ES/EN guarda la elección en la cookie `nexuralabs-locale` y navega a la página equivalente.
- La primera visita a una página en español con el navegador en inglés redirige a `/en` (`proxy.ts`). Si ya hay cookie, se respeta.

## Placeholders

Los datos pendientes se muestran con `<Placeholder>` y llevan `// TODO(placeholder)` en el diccionario.
**Antes de mergear a `develop` (que publica en producción), esto tiene que dar vacío:**

```bash
git grep -n "TODO(placeholder)"
```

## Tests

```bash
npm test   # lógica pura de rutas e idioma (node:test, sin dependencias)
```

## Instalación

```bash
npm install
npm run dev     # desarrollo
npm run build   # build de producción
npm start        # servir build de producción
```

## Formularios y emails

- `/api/contact` (formulario de contacto) y `/api/checklist` (checklist descargable) envían emails con [Resend](https://resend.com).
- Variables de entorno (ver `.env.example`): `RESEND_API_KEY` (obligatoria en producción), `MAIL_FROM`, `MAIL_TO`.
- En desarrollo, sin `RESEND_API_KEY`, los emails se imprimen en la consola del servidor en vez de enviarse.
- Anti-spam: campo honeypot `website` y rechazo de envíos en menos de 2 segundos (`lib/forms/spam.ts`).

## Checklist en PDF

El contenido vive en `content/checklist.json` (ES/EN). Después de editarlo:

```bash
npm run build:checklist   # regenera public/downloads/checklist-ia-{es,en}.pdf
```

## Medición

- **Píxel de Meta** (`1111392737090271`): siempre activo, en `components/SiteShell.tsx`.
- **GA4**: se activa al configurar `NEXT_PUBLIC_GA_ID` en Vercel (`components/Analytics.tsx`). Sin la variable no se carga.
- Los eventos se envían con `track()` (`lib/analytics/track.ts`); el mapeo vive en `lib/analytics/events.ts` (con tests).

| Evento GA4 | Parámetros | Píxel (estándar) | Cuándo |
|---|---|---|---|
| `click_hablemos` | `location` (`header`, `hero`, `landing_hero`) | `Contact` | Clic en cualquier "Hablemos" |
| `form_submit` | `need` | `Lead` | Envío exitoso del formulario de contacto |
| `download_checklist` | — | `CompleteRegistration` | Envío exitoso del checklist |
| `view_case` | `case_id` | `ViewContent` | Card de un caso visible al 50 % (una vez por carga) |

Todos los eventos GA4 llevan `page_locale`.
