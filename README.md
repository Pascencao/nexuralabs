# Nexuralabs

Landing page de una sola página para Nexuralabs, la consultoría de tecnología y crecimiento de Pablo Ascencao. Construida con Next.js (App Router) y TailwindCSS, bilingüe (ES/EN) con selector de idioma client-side.

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
│   ├── layout.tsx        # Layout raíz: fuentes, metadata, Header/Footer, LanguageProvider
│   ├── page.tsx          # Página única: ensambla todas las secciones
│   ├── globals.css       # Tailwind + estilos base
│   ├── privacy/page.tsx  # Política de privacidad
│   └── terms/page.tsx    # Términos de servicio
├── components/
│   ├── i18n/LanguageProvider.tsx  # Contexto ES/EN (localStorage, sin routing)
│   ├── Header.tsx, Footer.tsx
│   ├── Hero.tsx, ProblemSection.tsx, ServiceLines.tsx, ServiceDetails.tsx
│   ├── ConnectionDiagram.tsx, VennCircles.tsx
│   ├── About.tsx, Companies.tsx, Stats.tsx, Contact.tsx
│   └── PrivacyPolicy.tsx, TermsOfService.tsx, json-ld.tsx
├── lib/i18n/
│   ├── config.ts          # locales, default, storage key
│   ├── types.ts           # tipo Dictionary
│   └── dictionaries/es.ts, en.ts
└── public/                # Archivos estáticos
```

## Idioma

El sitio es una sola página (sin rutas `/es` o `/en`). El selector ES/EN del header cambia el idioma en el cliente vía contexto de React y persiste la preferencia en `localStorage`. El contenido para SEO (metadata, JSON-LD) se renderiza en español por default.

## Instalación

```bash
npm install
npm run dev     # desarrollo
npm run build   # build de producción
npm start        # servir build de producción
```
