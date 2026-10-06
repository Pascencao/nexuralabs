# IA aplicada — Etapas A y B: plan de implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Que nexuralabs.agency tenga rutas por idioma (`/` español, `/en` inglés) con SEO completo, y sumar a la home la capa de IA aplicada: hero, problema, Ops/Build/Scale con IA, "IA con criterio", Casos, Sobre mí, Stats y FAQ.

**Architecture:** Dos árboles de rutas con un layout raíz cada uno: `app/(es)/` y `app/(en)/en/`. Ambos usan un `SiteShell` compartido y páginas que son envoltorios finos de componentes comunes. El idioma viene de la URL y se pasa a `LanguageProvider` por prop. Una tabla `ROUTES` es la única fuente de verdad para el toggle, `proxy.ts` (redirección por navegador), la metadata y el sitemap. Las secciones nuevas son componentes cliente que leen del diccionario tipado, igual que las actuales.

**Tech Stack:** Next.js 16.2.4 (App Router, `proxy.ts`, `next/og`), React 19.2, TypeScript 5, Tailwind 3.4, lucide-react 0.469 y `node:test` (Node ≥ 22.18, con soporte nativo de TypeScript) para la lógica pura.

**Spec:** `docs/superpowers/specs/2026-10-06-ia-aplicada-etapas-a-b-design.md`

## Global Constraints

- Rama de trabajo: `feat/ia-aplicada`. **Nunca hacer push a `develop`**: cada push a `develop` despliega a producción (nexuralabs.agency).
- Paleta sin cambios: `ink #16233A`, `ink-dark #0F1B2D`, `muted #5B6472`, `canvas #F5F6F8`, `gold #AD8A52`, `ops #1B4D4A`, `build #8A5A2B`, `scale #463A66`. No agregar colores ni tipografías (solo Inter).
- Copy: textos ES/EN exactos de la spec. No mencionar herramientas ni modelos (GPT, Claude, n8n, etc.). No inventar métricas, testimonios ni logos.
- No poner "IA" ni "Inteligencia Artificial" en el titular del hero.
- Íconos prohibidos: `Brain`, `Bot`, `Cpu`, `CircuitBoard`, `Sparkles` y cualquier robot, cerebro, circuito o partícula.
- Mobile-first, sin scroll horizontal a 375 px, contraste AA, `alt` en las imágenes y foco visible.
- Todo texto nuevo existe en `es.ts` y `en.ts`. `Dictionary` (en `lib/i18n/types.ts`) obliga a que coincidan.
- Placeholders: componente `Placeholder` más un comentario `// TODO(placeholder): ...` en el diccionario.
- Commits con el trailer `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
- Node para correr el proyecto: ≥ 22.18. Funcionan el de sistema (v25) y el de `.claude/launch.json` (v22.22).

## File Structure

| Archivo | Responsabilidad |
|---|---|
| `lib/i18n/config.ts` (mod) | Locales, default y constantes de la cookie de idioma |
| `lib/i18n/routes.ts` (nuevo) | Tabla `ROUTES` y helpers de rutas equivalentes y anclas |
| `lib/i18n/routes.test.ts` (nuevo) | Tests de `routes.ts` |
| `lib/i18n/negotiate.ts` (nuevo) | Parseo de `Accept-Language` y decisión de redirigir |
| `lib/i18n/negotiate.test.ts` (nuevo) | Tests de `negotiate.ts` |
| `lib/i18n/metadata.ts` (nuevo) | `siteViewport`, `baseMetadata(locale)`, `buildMetadata(key, locale)` |
| `lib/og.tsx` (nuevo) | `renderOgImage(locale)`: imagen OG compartida |
| `components/SiteShell.tsx` (nuevo) | `<html>/<body>`, fuente, Header, Footer, JSON-LD, píxel de Meta |
| `components/HomePage.tsx` (nuevo) | Orden de secciones de la home |
| `components/i18n/LanguageProvider.tsx` (mod) | Contexto `{ locale, dict, switchLocale }` |
| `components/Header.tsx` (mod) | Nav con anclas por idioma y toggle |
| `components/json-ld.tsx` (mod) | Organization + ProfessionalService + WebSite según idioma |
| `components/Placeholder.tsx` (nuevo) | Marca visible de placeholder |
| `components/MethodSteps.tsx` (nuevo) | Timeline de 4 pasos (reutilizable en la etapa D) |
| `components/ComparisonTable.tsx` (nuevo) | Tabla de 2 columnas (reutilizable en la etapa D) |
| `components/AiApproach.tsx` (nuevo) | Sección `#ia` |
| `components/CaseCard.tsx` (nuevo) | Card de un caso |
| `components/CaseStudies.tsx` (nuevo) | Sección `#casos` |
| `components/Faq.tsx` (nuevo) | Sección `#faq` y JSON-LD `FAQPage` |
| `app/(es)/layout.tsx`, `app/(es)/page.tsx`, `app/(es)/privacy/page.tsx`, `app/(es)/terms/page.tsx`, `app/(es)/opengraph-image.tsx` (nuevos) | Árbol en español |
| `app/(en)/en/layout.tsx`, `app/(en)/en/page.tsx`, `app/(en)/en/privacy/page.tsx`, `app/(en)/en/terms/page.tsx`, `app/(en)/en/opengraph-image.tsx` (nuevos) | Árbol en inglés |
| `app/global-not-found.tsx` (nuevo) | 404 bilingüe (necesario con varios layouts raíz) |
| `app/layout.tsx`, `app/page.tsx`, `app/privacy/page.tsx`, `app/terms/page.tsx` (borrar) | Reemplazados por los árboles |
| `app/sitemap.ts` (mod) | Sitemap a partir de `ROUTES` |
| `proxy.ts` (nuevo) | Redirección por navegador en la primera visita |
| `next.config.js` (mod) | `experimental.globalNotFound` |
| `package.json` (mod) | Script `test` |
| `tsconfig.json` (mod) | Excluir `**/*.test.ts` |

Nota sobre la spec: decía `app/en/`. Para que ambos árboles sean layouts raíz como indica la documentación de Next ("multiple root layouts" con route groups), se usa `app/(en)/en/`. La URL resultante es la misma, `/en`. El JSON-LD `FAQPage` se emite desde `Faq.tsx`, que ya tiene las preguntas y solo se monta en la home; no hace falta pasárselo a `JsonLd`.

---

### Task 1: Tabla de rutas y negociación de idioma (lógica pura, con tests)

**Files:**
- Modify: `lib/i18n/config.ts`
- Create: `lib/i18n/routes.ts`, `lib/i18n/routes.test.ts`, `lib/i18n/negotiate.ts`, `lib/i18n/negotiate.test.ts`
- Modify: `package.json` (script `test`), `tsconfig.json` (`exclude`), `.gitignore`

**Interfaces:**
- Produces:
  - `LOCALE_COOKIE: "nexuralabs-locale"`, `LOCALE_COOKIE_MAX_AGE: number` (en `config.ts`)
  - `ROUTES: { home; privacy; terms }`, cada uno `{ es: string; en: string }`
  - `type PageKey = keyof typeof ROUTES`
  - `pageKeyFromPath(pathname: string): { key: PageKey; locale: Locale } | null`
  - `alternatePath(pathname: string, target: Locale): string`
  - `homeAnchor(locale: Locale, anchor: string): string`
  - `preferredLocale(acceptLanguage: string | null | undefined): Locale | null`
  - `shouldRedirectToEnglish(input: { isSpanishPage: boolean; cookieLocale: string | undefined; acceptLanguage: string | null }): boolean`

- [ ] **Step 1: Configurar el runner de tests y la limpieza del repo**

En `package.json`, dentro de `"scripts"`, agregar después de `"lint"`:

```json
    "lint": "next lint",
    "test": "node --test \"lib/**/*.test.ts\""
```

En `tsconfig.json`, reemplazar `"exclude": ["node_modules"]` por:

```json
  "exclude": ["node_modules", "**/*.test.ts"]
```

(Los tests importan con extensión `.ts`, lo que requiere Node y no `tsc`. Por eso quedan fuera del chequeo de tipos de Next.)

Reemplazar `.gitignore` completo por:

```
.next
node_modules/
.DS_Store
tsconfig.tsbuildinfo
```

Sacar del índice los archivos que ya estaban versionados:

```bash
git rm --cached -q tsconfig.tsbuildinfo $(git ls-files | grep '\.DS_Store$')
```

- [ ] **Step 2: Agregar las constantes de la cookie en `lib/i18n/config.ts`**

Reemplazar el archivo completo por (se mantiene `LOCALE_STORAGE_KEY` hasta la Task 2):

```ts
export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

/** @deprecated Se elimina en la Task 2 (el idioma pasa a la URL + cookie). */
export const LOCALE_STORAGE_KEY = "nexuralabs-locale";

/** Cookie con la preferencia explícita de idioma (toggle o primera redirección). */
export const LOCALE_COOKIE = "nexuralabs-locale";

export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
```

- [ ] **Step 3: Escribir los tests de rutas (fallan)**

Crear `lib/i18n/routes.test.ts`:

```ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { ROUTES, pageKeyFromPath, alternatePath, homeAnchor } from "./routes.ts";

test("ROUTES define la home, privacidad y términos en ambos idiomas", () => {
  assert.deepEqual(ROUTES.home, { es: "/", en: "/en" });
  assert.deepEqual(ROUTES.privacy, { es: "/privacy", en: "/en/privacy" });
  assert.deepEqual(ROUTES.terms, { es: "/terms", en: "/en/terms" });
});

test("pageKeyFromPath reconoce rutas en español e inglés", () => {
  assert.deepEqual(pageKeyFromPath("/"), { key: "home", locale: "es" });
  assert.deepEqual(pageKeyFromPath("/en"), { key: "home", locale: "en" });
  assert.deepEqual(pageKeyFromPath("/en/terms"), { key: "terms", locale: "en" });
  assert.deepEqual(pageKeyFromPath("/privacy"), { key: "privacy", locale: "es" });
});

test("pageKeyFromPath ignora la barra final", () => {
  assert.deepEqual(pageKeyFromPath("/en/"), { key: "home", locale: "en" });
  assert.deepEqual(pageKeyFromPath("/privacy/"), { key: "privacy", locale: "es" });
});

test("pageKeyFromPath devuelve null para rutas desconocidas", () => {
  assert.equal(pageKeyFromPath("/no-existe"), null);
  assert.equal(pageKeyFromPath("/en/no-existe"), null);
});

test("alternatePath devuelve la página equivalente en el otro idioma", () => {
  assert.equal(alternatePath("/", "en"), "/en");
  assert.equal(alternatePath("/en", "es"), "/");
  assert.equal(alternatePath("/privacy", "en"), "/en/privacy");
  assert.equal(alternatePath("/en/terms", "es"), "/terms");
});

test("alternatePath cae en la home del idioma destino si la ruta no existe", () => {
  assert.equal(alternatePath("/no-existe", "en"), "/en");
  assert.equal(alternatePath("/en/no-existe", "es"), "/");
});

test("homeAnchor arma anclas de la home por idioma", () => {
  assert.equal(homeAnchor("es", "contacto"), "/#contacto");
  assert.equal(homeAnchor("en", "contacto"), "/en#contacto");
});
```

- [ ] **Step 4: Correr los tests y verificar que fallan**

Run: `npm test`
Expected: FAIL con `Cannot find module '.../lib/i18n/routes.ts'` (ERR_MODULE_NOT_FOUND).

- [ ] **Step 5: Implementar `lib/i18n/routes.ts`**

```ts
import type { Locale } from "./config";

/**
 * Única fuente de verdad de las páginas y su URL en cada idioma.
 * Español sin prefijo, inglés bajo /en. Agregar acá las landings nuevas.
 */
export const ROUTES = {
  home: { es: "/", en: "/en" },
  privacy: { es: "/privacy", en: "/en/privacy" },
  terms: { es: "/terms", en: "/en/terms" },
} as const satisfies Record<string, Record<Locale, string>>;

export type PageKey = keyof typeof ROUTES;

const LOCALES_IN_ORDER: readonly Locale[] = ["es", "en"];

function normalize(pathname: string): string {
  if (!pathname) return "/";
  return pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export function pageKeyFromPath(pathname: string): { key: PageKey; locale: Locale } | null {
  const path = normalize(pathname);
  for (const key of Object.keys(ROUTES) as PageKey[]) {
    for (const locale of LOCALES_IN_ORDER) {
      if (ROUTES[key][locale] === path) return { key, locale };
    }
  }
  return null;
}

/** Ruta equivalente en `target`; si `pathname` no está en la tabla, la home de `target`. */
export function alternatePath(pathname: string, target: Locale): string {
  const match = pageKeyFromPath(pathname);
  return match ? ROUTES[match.key][target] : ROUTES.home[target];
}

export function homeAnchor(locale: Locale, anchor: string): string {
  return `${ROUTES.home[locale]}#${anchor}`;
}
```

- [ ] **Step 6: Escribir los tests de negociación (fallan)**

Crear `lib/i18n/negotiate.test.ts`:

```ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { preferredLocale, shouldRedirectToEnglish } from "./negotiate.ts";

test("preferredLocale elige el idioma con mayor q", () => {
  assert.equal(preferredLocale("en-US,en;q=0.9,es;q=0.8"), "en");
  assert.equal(preferredLocale("es-AR,es;q=0.9,en;q=0.8"), "es");
  assert.equal(preferredLocale("en;q=0.5,es;q=0.7"), "es");
});

test("preferredLocale ignora idiomas que no son es/en", () => {
  assert.equal(preferredLocale("pt-BR,pt;q=0.9,en;q=0.8"), "en");
  assert.equal(preferredLocale("fr-FR,de;q=0.8"), null);
});

test("preferredLocale ante empate se queda con el primero", () => {
  assert.equal(preferredLocale("en,es"), "en");
});

test("preferredLocale ignora q=0 y valores vacíos", () => {
  assert.equal(preferredLocale("en;q=0,es;q=0.5"), "es");
  assert.equal(preferredLocale(""), null);
  assert.equal(preferredLocale(null), null);
  assert.equal(preferredLocale(undefined), null);
});

test("shouldRedirectToEnglish: página en español, sin cookie, navegador en inglés", () => {
  assert.equal(
    shouldRedirectToEnglish({ isSpanishPage: true, cookieLocale: undefined, acceptLanguage: "en-US,en;q=0.9" }),
    true,
  );
});

test("shouldRedirectToEnglish: con cookie nunca redirige", () => {
  for (const cookieLocale of ["es", "en"]) {
    assert.equal(
      shouldRedirectToEnglish({ isSpanishPage: true, cookieLocale, acceptLanguage: "en-US" }),
      false,
    );
  }
});

test("shouldRedirectToEnglish: navegador en español o sin Accept-Language no redirige", () => {
  assert.equal(
    shouldRedirectToEnglish({ isSpanishPage: true, cookieLocale: undefined, acceptLanguage: "es-AR,es;q=0.9" }),
    false,
  );
  assert.equal(
    shouldRedirectToEnglish({ isSpanishPage: true, cookieLocale: undefined, acceptLanguage: null }),
    false,
  );
});

test("shouldRedirectToEnglish: páginas que no son en español no redirigen", () => {
  assert.equal(
    shouldRedirectToEnglish({ isSpanishPage: false, cookieLocale: undefined, acceptLanguage: "en-US" }),
    false,
  );
});
```

- [ ] **Step 7: Correr los tests y verificar que fallan**

Run: `npm test`
Expected: los tests de `routes.test.ts` pasan; `negotiate.test.ts` falla con `Cannot find module '.../lib/i18n/negotiate.ts'`.

- [ ] **Step 8: Implementar `lib/i18n/negotiate.ts`**

```ts
import type { Locale } from "./config";

/** Idioma soportado con mayor peso en Accept-Language, o null si no menciona es/en. */
export function preferredLocale(acceptLanguage: string | null | undefined): Locale | null {
  if (!acceptLanguage) return null;

  let best: { locale: Locale; q: number } | null = null;
  for (const part of acceptLanguage.split(",")) {
    const [rawTag, ...params] = part.trim().split(";");
    const base = rawTag.trim().toLowerCase().split("-")[0];
    if (base !== "es" && base !== "en") continue;

    const qParam = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
    const q = qParam ? Number(qParam.slice(2)) : 1;
    if (!Number.isFinite(q) || q <= 0) continue;

    if (!best || q > best.q) best = { locale: base, q };
  }
  return best?.locale ?? null;
}

/**
 * Primera visita a una página en español desde un navegador que prefiere inglés.
 * Si ya hay una preferencia guardada (cookie), se respeta siempre.
 */
export function shouldRedirectToEnglish(input: {
  isSpanishPage: boolean;
  cookieLocale: string | undefined;
  acceptLanguage: string | null;
}): boolean {
  if (!input.isSpanishPage) return false;
  if (input.cookieLocale) return false;
  return preferredLocale(input.acceptLanguage) === "en";
}
```

- [ ] **Step 9: Correr los tests y verificar que pasan**

Run: `npm test`
Expected: `ℹ pass 15`, `ℹ fail 0`. Puede aparecer el warning `Reparsing as ES module because module syntax was detected`; es esperable porque el `package.json` no declara `"type"`.

- [ ] **Step 10: Chequear tipos**

Run: `npx tsc --noEmit`
Expected: sin salida (exit 0).

- [ ] **Step 11: Commit**

```bash
git add .gitignore package.json tsconfig.json lib/i18n/config.ts lib/i18n/routes.ts lib/i18n/routes.test.ts lib/i18n/negotiate.ts lib/i18n/negotiate.test.ts
git commit -m "Add locale routes table and Accept-Language negotiation with tests

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 2: Árboles de rutas `/` y `/en` con layout compartido

**Files:**
- Create: `lib/i18n/metadata.ts`, `components/SiteShell.tsx`, `components/HomePage.tsx`
- Create: `app/(es)/layout.tsx`, `app/(es)/page.tsx`, `app/(es)/privacy/page.tsx`, `app/(es)/terms/page.tsx`
- Create: `app/(en)/en/layout.tsx`, `app/(en)/en/page.tsx`, `app/(en)/en/privacy/page.tsx`, `app/(en)/en/terms/page.tsx`
- Create: `app/global-not-found.tsx`
- Modify: `next.config.js`, `lib/i18n/config.ts`, `components/i18n/LanguageProvider.tsx`, `components/Header.tsx`, `components/json-ld.tsx`, `components/PrivacyPolicy.tsx:158`, `components/TermsOfService.tsx:194`
- Delete: `app/layout.tsx`, `app/page.tsx`, `app/privacy/page.tsx`, `app/terms/page.tsx`

**Interfaces:**
- Consumes: `ROUTES`, `alternatePath`, `homeAnchor`, `LOCALE_COOKIE`, `LOCALE_COOKIE_MAX_AGE` (Task 1)
- Produces:
  - `useLanguage(): { locale: Locale; dict: Dictionary; switchLocale: (target: Locale) => void }` (ya no hay `setLocale`)
  - `<LanguageProvider locale={Locale}>`
  - `<SiteShell locale={Locale}>{children}</SiteShell>`
  - `siteViewport: Viewport`, `baseMetadata(locale: Locale): Metadata`
  - `<JsonLd locale={Locale} />`
  - `components/HomePage.tsx` default export sin props

- [ ] **Step 1: Habilitar el 404 global en `next.config.js`**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Necesario con varios layouts raíz (app/(es) y app/(en)): no hay un layout
    // común para componer el 404 de rutas inexistentes.
    globalNotFound: true,
  },
};

module.exports = nextConfig;
```

- [ ] **Step 2: Crear `app/global-not-found.tsx`**

```tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Nexura Labs",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="es">
      <body className="flex min-h-screen items-center justify-center bg-canvas font-sans text-ink antialiased">
        <main className="px-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">404</p>
          <h1 className="mt-3 text-3xl font-bold">
            Página no encontrada <span className="text-muted">· Page not found</span>
          </h1>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-canvas transition-colors hover:bg-gold"
            >
              Ir al inicio
            </a>
            <a
              href="/en"
              lang="en"
              className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
            >
              Go to home
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Quitar `LOCALE_STORAGE_KEY` de `lib/i18n/config.ts`**

Borrar estas líneas:

```ts
/** @deprecated Se elimina en la Task 2 (el idioma pasa a la URL + cookie). */
export const LOCALE_STORAGE_KEY = "nexuralabs-locale";

```

- [ ] **Step 4: Reescribir `components/i18n/LanguageProvider.tsx`**

```tsx
"use client";

import { createContext, useContext, useMemo } from "react";
import { LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { alternatePath } from "@/lib/i18n/routes";
import type { Dictionary } from "@/lib/i18n/types";

type LanguageContextValue = {
  locale: Locale;
  dict: Dictionary;
  /** Guarda la preferencia y navega a la página equivalente en `target`, conservando el #ancla. */
  switchLocale: (target: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function rememberLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax`;
}

export function LanguageProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      dict: getDictionary(locale),
      switchLocale: (target) => {
        rememberLocale(target);
        if (target === locale) return;
        const { pathname, hash } = window.location;
        window.location.assign(`${alternatePath(pathname, target)}${hash}`);
      },
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
```

- [ ] **Step 5: Reescribir `components/Header.tsx` (anclas por idioma, `switchLocale`)**

```tsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import type { Locale } from "@/lib/i18n/config";
import { homeAnchor } from "@/lib/i18n/routes";

export default function Header() {
  const { dict, locale, switchLocale } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { anchor: "problema", label: dict.header.links.problem },
    { anchor: "servicios", label: dict.header.links.services },
    { anchor: "sobre-mi", label: dict.header.links.about },
    { anchor: "contacto", label: dict.header.links.contact },
  ].map((link) => ({ href: homeAnchor(locale, link.anchor), label: link.label }));

  const contactHref = homeAnchor(locale, "contacto");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-5 sm:px-8">
        <a href={homeAnchor(locale, "inicio")} className="text-lg font-bold tracking-tight text-ink">
          NEXURA<span className="text-gold">LABS</span>
        </a>

        <nav aria-label={dict.header.navAria} className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageToggle
            locale={locale}
            onSelect={switchLocale}
            aria={dict.header.languageSwitcherAria}
          />
          <a
            href={contactHref}
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-canvas transition-colors hover:bg-gold"
          >
            {dict.header.cta}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
          aria-label={dict.header.navAria}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/5 bg-canvas px-5 pb-6 pt-2 lg:hidden">
          <nav aria-label={dict.header.navAria} className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-ink hover:bg-ink/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between gap-4">
            <LanguageToggle
              locale={locale}
              onSelect={switchLocale}
              aria={dict.header.languageSwitcherAria}
            />
            <a
              href={contactHref}
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full bg-ink px-5 py-2.5 text-center text-sm font-semibold text-canvas"
            >
              {dict.header.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function LanguageToggle({
  locale,
  onSelect,
  aria,
}: {
  locale: Locale;
  onSelect: (l: Locale) => void;
  aria: string;
}) {
  return (
    <div
      role="group"
      aria-label={aria}
      className="flex items-center rounded-full border border-ink/10 p-0.5 text-xs font-semibold"
    >
      {(["es", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => onSelect(l)}
          aria-pressed={locale === l}
          lang={l}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            locale === l ? "bg-ink text-canvas" : "text-muted hover:text-ink"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 6: Hacer que los links "Volver al inicio" de las páginas legales dependan del idioma**

En `components/PrivacyPolicy.tsx`, agregar el import debajo del de `useLanguage`:

```tsx
import { ROUTES } from "@/lib/i18n/routes";
```

y reemplazar `href="/"` (línea 158) por:

```tsx
              href={ROUTES.home[locale]}
```

Hacer lo mismo en `components/TermsOfService.tsx`: el import y `href="/"` en la línea 194. Los dos componentes ya obtienen `locale` de `useLanguage()`.

- [ ] **Step 7: `components/json-ld.tsx` recibe el idioma**

Por ahora es el mismo contenido, pero toma el diccionario del idioma de la página. En la Task 4 se amplía.

```tsx
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { SITE_URL, absoluteUrl } from "@/lib/site";
import { SOCIAL_LINKS } from "@/lib/social";

export default function JsonLd({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  const organizationJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nexuralabs",
    url: SITE_URL,
    logo: absoluteUrl("/favicon.png"),
    sameAs: SOCIAL_LINKS.map((l) => l.href),
    description: dict.jsonLd.organizationDescription,
  };

  const websiteJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nexuralabs",
    url: SITE_URL,
    publisher: { "@type": "Organization", name: "Nexuralabs" },
    inLanguage: dict.jsonLd.websiteLanguage,
  };

  const payload = [organizationJson, websiteJson];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
```

- [ ] **Step 8: Crear `lib/i18n/metadata.ts` (metadata base del sitio)**

```ts
import type { Metadata, Viewport } from "next";
import type { Locale } from "./config";
import { getDictionary } from "./dictionaries";
import { SITE_URL } from "@/lib/site";

export const siteViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F1B2D",
};

/** Metadata común a todas las páginas de un idioma (la usan los layouts). */
export function baseMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.homeTitle,
      template: "%s | Nexura Labs",
    },
    description: dict.meta.homeDescription,
    keywords: dict.meta.homeKeywords,
    authors: [{ name: "Nexura Labs", url: SITE_URL }],
    icons: {
      icon: [{ url: "/favicon.png", type: "image/png" }],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
    manifest: "/manifest.json",
    robots: { index: true, follow: true },
  };
}
```

- [ ] **Step 9: Crear `components/SiteShell.tsx`**

Mueve sin cambios la fuente, el píxel de Meta (`1111392737090271`) y la verificación de Facebook que estaban en `app/layout.tsx`.

```tsx
import "@/app/globals.css";
import { Inter } from "next/font/google";
import JsonLd from "@/components/json-ld";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import type { Locale } from "@/lib/i18n/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html lang={locale}>
      <head>
        <meta
          name="facebook-domain-verification"
          content="v5cm45amulqa7mjolp5odm6njwfaus"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
      </head>
      <body className={`${inter.variable} min-h-screen bg-canvas font-sans text-ink antialiased`}>
        <JsonLd locale={locale} />
        <LanguageProvider locale={locale}>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>

        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1111392737090271');
            fbq('track', 'PageView');
          `,
          }}
        />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1111392737090271&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
```

- [ ] **Step 10: Crear `components/HomePage.tsx`**

Es el mismo orden que el `app/page.tsx` actual:

```tsx
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ServiceLines from "@/components/ServiceLines";
import ServiceDetails from "@/components/ServiceDetails";
import ConnectionDiagram from "@/components/ConnectionDiagram";
import About from "@/components/About";
import Companies from "@/components/Companies";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServiceLines />
      <ServiceDetails />
      <ConnectionDiagram />
      <About />
      <Companies />
      <Stats />
      <Contact />
    </>
  );
}
```

- [ ] **Step 11: Crear el árbol en español**

`app/(es)/layout.tsx`:

```tsx
import type { Metadata, Viewport } from "next";
import SiteShell from "@/components/SiteShell";
import { baseMetadata, siteViewport } from "@/lib/i18n/metadata";

export const metadata: Metadata = baseMetadata("es");
export const viewport: Viewport = siteViewport;

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="es">{children}</SiteShell>;
}
```

`app/(es)/page.tsx`:

```tsx
import HomePage from "@/components/HomePage";

export default function Page() {
  return <HomePage />;
}
```

`app/(es)/privacy/page.tsx`:

```tsx
import { PrivacyPolicy } from "@/components/PrivacyPolicy";

export default function Page() {
  return <PrivacyPolicy />;
}
```

`app/(es)/terms/page.tsx` (`TermsOfService` es un export nombrado, igual que `PrivacyPolicy`):

```tsx
import { TermsOfService } from "@/components/TermsOfService";

export default function Page() {
  return <TermsOfService />;
}
```

- [ ] **Step 12: Crear el árbol en inglés**

`app/(en)/en/layout.tsx`:

```tsx
import type { Metadata, Viewport } from "next";
import SiteShell from "@/components/SiteShell";
import { baseMetadata, siteViewport } from "@/lib/i18n/metadata";

export const metadata: Metadata = baseMetadata("en");
export const viewport: Viewport = siteViewport;

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
```

`app/(en)/en/page.tsx`, `app/(en)/en/privacy/page.tsx` y `app/(en)/en/terms/page.tsx`: mismo contenido que sus equivalentes del Step 11.

- [ ] **Step 13: Borrar las rutas viejas**

```bash
git rm -q app/layout.tsx app/page.tsx app/privacy/page.tsx app/terms/page.tsx
```

- [ ] **Step 14: Build y chequeo de tipos**

Run: `npx tsc --noEmit && npm run build`
Expected: tsc sin salida. El build termina con `✓ Compiled successfully` y en la tabla de rutas aparecen `/`, `/en`, `/en/privacy`, `/en/terms`, `/privacy`, `/terms`, `/robots.txt` y `/sitemap.xml`. Si aparece un error de "missing root layout", revisar que no haya quedado ningún archivo en `app/` fuera de los route groups, salvo `globals.css`, `global-not-found.tsx`, `robots.ts` y `sitemap.ts`.

- [ ] **Step 15: Verificar en el navegador**

Levantar con `npm run dev`; puede ser la configuración `nexuralabs-dev` de `.claude/launch.json`. Verificar:
- `http://localhost:3000/` en español, con `<html lang="es">`.
- `http://localhost:3000/en` en inglés, con `<html lang="en">`.
- En `/#servicios`, al hacer clic en "EN" se navega a `/en#servicios`, y `document.cookie` contiene `nexuralabs-locale=en`.
- En `/en/privacy`, "Back to home" lleva a `/en`.
- `http://localhost:3000/no-existe` muestra el 404 bilingüe.

- [ ] **Step 16: Commit**

```bash
git add -A app components lib next.config.js
git commit -m "Move language to the URL: Spanish at / and English at /en

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 3: Redirección por navegador en la primera visita (`proxy.ts`)

**Files:**
- Create: `proxy.ts`

**Interfaces:**
- Consumes: `pageKeyFromPath`, `ROUTES` (Task 1), `shouldRedirectToEnglish` (Task 1), `LOCALE_COOKIE`, `LOCALE_COOKIE_MAX_AGE` (Task 1)

- [ ] **Step 1: Crear `proxy.ts` en la raíz del proyecto**

En Next 16, `middleware.ts` pasó a llamarse `proxy.ts` y exporta `proxy`.

```ts
import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE } from "@/lib/i18n/config";
import { shouldRedirectToEnglish } from "@/lib/i18n/negotiate";
import { ROUTES, pageKeyFromPath } from "@/lib/i18n/routes";

/**
 * Primera visita a una página en español con el navegador en inglés → versión en inglés.
 * La cookie de idioma (toggle o esta misma redirección) desactiva la redirección.
 */
export function proxy(request: NextRequest) {
  const match = pageKeyFromPath(request.nextUrl.pathname);

  const redirect = shouldRedirectToEnglish({
    isSpanishPage: match?.locale === "es",
    cookieLocale: request.cookies.get(LOCALE_COOKIE)?.value,
    acceptLanguage: request.headers.get("accept-language"),
  });
  if (!match || !redirect) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = ROUTES[match.key].en;

  const response = NextResponse.redirect(url, 307);
  response.cookies.set(LOCALE_COOKIE, "en", {
    path: "/",
    maxAge: LOCALE_COOKIE_MAX_AGE,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|api|.*\\..*).*)"],
};
```

- [ ] **Step 2: Build y servidor de producción local**

Run: `npm run build && (npx next start -p 3100 > /tmp/nexura-start.log 2>&1 &) && sleep 3`
Expected: el build termina con `ƒ Proxy (Middleware)` en el resumen, y el servidor queda escuchando en el 3100.

- [ ] **Step 3: Verificar la redirección con curl**

```bash
curl -sI -H "Accept-Language: en-US,en;q=0.9" http://localhost:3100/ | grep -iE "^(HTTP|location|set-cookie)"
```
Expected: `HTTP/1.1 307`, `location: /en` (o la URL absoluta terminada en `/en`) y `set-cookie: nexuralabs-locale=en; Path=/; ...`.

```bash
curl -sI -H "Accept-Language: en-US" -H "Cookie: nexuralabs-locale=es" http://localhost:3100/ | head -1
curl -sI -H "Accept-Language: es-AR,es;q=0.9" http://localhost:3100/privacy | head -1
curl -sI http://localhost:3100/ | head -1
curl -sI -H "Accept-Language: en-US" http://localhost:3100/en | head -1
curl -sI -H "Accept-Language: en-US" "http://localhost:3100/privacy?utm_source=x" | grep -i "^location"
```
Expected: `HTTP/1.1 200 OK` en las cuatro primeras y `location: .../en/privacy?utm_source=x` en la última.

- [ ] **Step 4: Apagar el servidor**

Run: `pkill -f "next start -p 3100"`

- [ ] **Step 5: Commit**

```bash
git add proxy.ts
git commit -m "Redirect first-time English browsers to /en

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 4: SEO por página: metadata, hreflang, sitemap, JSON-LD e imágenes OG

**Files:**
- Modify: `lib/i18n/metadata.ts` (agregar `buildMetadata`), `lib/i18n/dictionaries/es.ts` y `en.ts` (bloque `meta`), `components/json-ld.tsx`, `app/sitemap.ts`
- Modify: los 6 `page.tsx` de `app/(es)` y `app/(en)/en`
- Create: `lib/og.tsx`, `app/(es)/opengraph-image.tsx`, `app/(en)/en/opengraph-image.tsx`

**Interfaces:**
- Consumes: `ROUTES`, `PageKey` (Task 1), `baseMetadata` (Task 2)
- Produces: `buildMetadata(key: PageKey, locale: Locale): Metadata`, `renderOgImage(locale: Locale): ImageResponse`, `ogSize`

- [ ] **Step 1: Actualizar el bloque `meta` de `lib/i18n/dictionaries/es.ts`**

Reemplazar desde `homeTitle` hasta `homeDescription`, y los títulos legales, por:

```ts
    homeTitle: "Nexura Labs: operaciones, software e IA aplicada para pymes",
    homeDescription:
      "Ordenamos tu operación, construimos la tecnología que falta y aplicamos IA donde rinde.",
```

```ts
    privacyTitle: "Política de privacidad | Nexura Labs",
    privacyDescription: "Política de privacidad de Nexura Labs.",
    termsTitle: "Términos de servicio | Nexura Labs",
    termsDescription: "Términos de servicio de Nexura Labs.",
```

- [ ] **Step 2: Actualizar el bloque `meta` de `lib/i18n/dictionaries/en.ts`**

```ts
    homeTitle: "Nexura Labs: Operations, Software & Applied AI for Growing Companies",
    homeDescription:
      "We fix operations, build the technology you're missing, and apply AI where it pays off.",
```

```ts
    privacyTitle: "Privacy Policy | Nexura Labs",
    privacyDescription: "Nexura Labs privacy policy.",
    termsTitle: "Terms of Service | Nexura Labs",
    termsDescription: "Nexura Labs terms of service.",
```

- [ ] **Step 3: Agregar `buildMetadata` al final de `lib/i18n/metadata.ts`**

Sumar los imports arriba del archivo:

```ts
import { ROUTES, type PageKey } from "./routes";
import type { Dictionary } from "./types";
```

Y al final:

```ts
const OG_LOCALE: Record<Locale, string> = { es: "es_AR", en: "en_US" };

const PAGE_TEXT: Record<PageKey, (d: Dictionary) => { title: string; description: string }> = {
  home: (d) => ({ title: d.meta.homeTitle, description: d.meta.homeDescription }),
  privacy: (d) => ({ title: d.meta.privacyTitle, description: d.meta.privacyDescription }),
  terms: (d) => ({ title: d.meta.termsTitle, description: d.meta.termsDescription }),
};

/** Metadata de una página: título, canonical, hreflang (es/en/x-default), Open Graph y Twitter. */
export function buildMetadata(key: PageKey, locale: Locale): Metadata {
  const { title, description } = PAGE_TEXT[key](getDictionary(locale));
  const other: Locale = locale === "es" ? "en" : "es";
  const path = ROUTES[key][locale];

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: path,
      languages: {
        es: ROUTES[key].es,
        en: ROUTES[key].en,
        "x-default": ROUTES[key].es,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Nexura Labs",
      locale: OG_LOCALE[locale],
      alternateLocale: OG_LOCALE[other],
      url: path,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
```

- [ ] **Step 4: Exportar la metadata en cada página**

`app/(es)/page.tsx`:

```tsx
import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { buildMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildMetadata("home", "es");

export default function Page() {
  return <HomePage />;
}
```

`app/(en)/en/page.tsx`: igual, con `buildMetadata("home", "en")`.

`app/(es)/privacy/page.tsx`:

```tsx
import type { Metadata } from "next";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import { buildMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildMetadata("privacy", "es");

export default function Page() {
  return <PrivacyPolicy />;
}
```

`app/(en)/en/privacy/page.tsx`: igual, con `buildMetadata("privacy", "en")`.

`app/(es)/terms/page.tsx`:

```tsx
import type { Metadata } from "next";
import { TermsOfService } from "@/components/TermsOfService";
import { buildMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildMetadata("terms", "es");

export default function Page() {
  return <TermsOfService />;
}
```

`app/(en)/en/terms/page.tsx`: igual, con `buildMetadata("terms", "en")`.

- [ ] **Step 5: Reescribir `app/sitemap.ts`**

```ts
import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { ROUTES, type PageKey } from "@/lib/i18n/routes";
import { absoluteUrl } from "@/lib/site";

const SETTINGS: Record<
  PageKey,
  { priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }
> = {
  home: { priority: 1, changeFrequency: "weekly" },
  privacy: { priority: 0.4, changeFrequency: "yearly" },
  terms: { priority: 0.4, changeFrequency: "yearly" },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return (Object.keys(ROUTES) as PageKey[]).flatMap((key) =>
    locales.map((locale) => ({
      url: absoluteUrl(ROUTES[key][locale]),
      lastModified: now,
      ...SETTINGS[key],
      alternates: {
        languages: {
          es: absoluteUrl(ROUTES[key].es),
          en: absoluteUrl(ROUTES[key].en),
        },
      },
    })),
  );
}
```

- [ ] **Step 6: Reescribir `components/json-ld.tsx` (Organization + ProfessionalService + WebSite)**

```tsx
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { ROUTES } from "@/lib/i18n/routes";
import { SITE_URL, absoluteUrl } from "@/lib/site";
import { SOCIAL_LINKS } from "@/lib/social";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export default function JsonLd({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const homeUrl = absoluteUrl(ROUTES.home[locale]);

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Nexura Labs",
    url: SITE_URL,
    logo: absoluteUrl("/favicon.png"),
    sameAs: SOCIAL_LINKS.map((l) => l.href),
    description: dict.jsonLd.organizationDescription,
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Nexura Labs",
    url: homeUrl,
    image: absoluteUrl("/favicon.png"),
    description: dict.meta.homeDescription,
    areaServed: [
      { "@type": "Place", name: "Latin America" },
      { "@type": "Country", name: "United States" },
    ],
    founder: { "@type": "Person", name: "Pablo Ascencao" },
    parentOrganization: { "@id": ORGANIZATION_ID },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nexura Labs",
    url: homeUrl,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: dict.jsonLd.websiteLanguage,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([organization, professionalService, website]) }}
    />
  );
}
```

- [ ] **Step 7: Crear `lib/og.tsx`**

Es la imagen OG compartida: fondo `ink-dark`, sin fotos ni ilustraciones.

```tsx
import { ImageResponse } from "next/og";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export const ogSize = { width: 1200, height: 630 };

export function renderOgImage(locale: Locale): ImageResponse {
  const dict = getDictionary(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0F1B2D",
          color: "#FFFFFF",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, fontWeight: 700, letterSpacing: "-0.01em" }}>
          NEXURA<span style={{ color: "#AD8A52" }}>LABS</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
            {dict.hero.titleLead}&nbsp;<span style={{ color: "#AD8A52" }}>{dict.hero.titleHighlight}</span>
          </div>
          <div style={{ display: "flex", fontSize: 30, lineHeight: 1.35, color: "rgba(255,255,255,0.72)", maxWidth: 980 }}>
            {dict.meta.homeDescription}
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
```

- [ ] **Step 8: Crear las imágenes OG por árbol**

`app/(es)/opengraph-image.tsx`:

```tsx
import { getDictionary } from "@/lib/i18n/dictionaries";
import { ogSize, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = getDictionary("es").meta.homeTitle;

export default function Image() {
  return renderOgImage("es");
}
```

`app/(en)/en/opengraph-image.tsx`: igual, con `"en"` en los dos lugares.

- [ ] **Step 9: Build**

Run: `npx tsc --noEmit && npm run build`
Expected: sin errores. Las rutas de la tabla incluyen `/opengraph-image` y `/en/opengraph-image`.

- [ ] **Step 10: Verificar el `<head>`, el sitemap y la imagen OG**

```bash
(npx next start -p 3100 > /tmp/nexura-start.log 2>&1 &) && sleep 3
curl -s -H "Cookie: nexuralabs-locale=es" http://localhost:3100/ | grep -oE '<title>[^<]*</title>|<link rel="(canonical|alternate)"[^>]*>|<meta property="og:(locale|image|title)"[^>]*>'
curl -s http://localhost:3100/en | grep -oE '<title>[^<]*</title>|<link rel="(canonical|alternate)"[^>]*>|<html lang="[a-z]+"'
curl -s http://localhost:3100/en | grep -o '"@type":"[A-Za-z]*"' | sort -u
curl -s http://localhost:3100/sitemap.xml | grep -c "<loc>"
curl -s -o /dev/null -w "%{http_code} %{content_type}\n" http://localhost:3100/en/opengraph-image
pkill -f "next start -p 3100"
```
Expected:
- `/` tiene el title "Nexura Labs: operaciones, software e IA aplicada para pymes", canonical `https://www.nexuralabs.agency` (puede llevar `/` final), alternates `hrefLang="es"`, `"en"` y `"x-default"`, `og:locale` `es_AR` y un `og:image`.
- `/en` tiene el title en inglés, canonical `.../en` y `<html lang="en">`.
- Los tipos de JSON-LD incluyen `Organization`, `ProfessionalService`, `WebSite`, `Place`, `Country` y `Person`.
- El sitemap tiene `6` entradas `<loc>`.
- La imagen OG responde `200 image/png`.

Abrir `http://localhost:3100/en/opengraph-image` en el navegador y comprobar que el texto entra sin cortarse.

- [ ] **Step 11: Commit**

```bash
git add -A app components lib
git commit -m "Add per-page metadata, hreflang, sitemap alternates, JSON-LD and OG images

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 5: Hero y Problema

**Files:**
- Modify: `lib/i18n/types.ts` (`hero`), `lib/i18n/dictionaries/es.ts` y `en.ts` (`hero`, `problem.items`), `components/Hero.tsx`, `components/ProblemSection.tsx`

**Interfaces:**
- Produces: `dict.hero.secondaryCta: string`, y `dict.problem.items` con 4 elementos.

- [ ] **Step 1: Tipo**

En `lib/i18n/types.ts`, dentro de `hero`, agregar después de `primaryCta: string;`:

```ts
    secondaryCta: string;
```

- [ ] **Step 2: Copy en español (`es.ts`)**

Reemplazar `hero.body` y agregar `secondaryCta`:

```ts
    body: "Ordenamos tu operación, construimos la tecnología que te falta y ponemos la IA a trabajar donde realmente rinde. Sin humo, con números.",
    primaryCta: "Hablemos",
    secondaryCta: "Ver cómo aplicamos IA →",
```

Agregar al final de `problem.items`, después de "Estructura":

```ts
      {
        name: "IA",
        description:
          "Todos hablan de IA. Pocos la tienen funcionando. Probaste un piloto que no pasó de la demo, o directamente no sabés por dónde empezar ni si te conviene.",
      },
```

- [ ] **Step 3: Copy en inglés (`en.ts`)**

En `hero`:

```ts
    titleLead: "Grow without",
    titleHighlight: "breaking.",
    body: "We fix how your operation runs, build the technology you're missing, and put AI to work where it actually pays off. No hype, just results you can measure.",
    primaryCta: "Let's talk",
    secondaryCta: "See how we use AI →",
```

Al final de `problem.items`:

```ts
      {
        name: "AI",
        description:
          "Everyone's talking about AI. Few have it actually working. Maybe you ran a pilot that never left the demo stage, or you're not sure where to start, or whether it's worth it.",
      },
```

- [ ] **Step 4: `components/Hero.tsx`: link secundario**

Reemplazar el bloque `<div className="mt-10">…</div>` por:

```tsx
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
            <a
              href="#contacto"
              className="inline-flex items-center rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink-dark transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink-dark"
            >
              {dict.hero.primaryCta}
            </a>
            <a
              href="#ia"
              className="rounded text-sm font-semibold text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink-dark"
            >
              {dict.hero.secondaryCta}
            </a>
          </div>
```

- [ ] **Step 5: `components/ProblemSection.tsx`: cuarta card y grilla**

Reemplazar la línea del import de íconos y la constante `icons`:

```tsx
import { Workflow, Code2, Building2, ScanSearch } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const icons = [Workflow, Code2, Building2, ScanSearch];
```

Reemplazar la clase de la grilla `mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8` por:

```tsx
        <div className="mt-14 grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
```

Y en el ícono agregar `aria-hidden="true"`: `<Icon size={22} aria-hidden="true" />`.

- [ ] **Step 6: Tipos y verificación visual**

Run: `npx tsc --noEmit`
Expected: sin salida.

Con `npm run dev` abierto en `/` y en `/en`, verificar:
- El subtítulo nuevo, el link "Ver cómo aplicamos IA →" / "See how we use AI →" y el titular en inglés "Grow without breaking.".
- La grilla de Problema queda en 1 columna a 375 px, 2×2 a 768 px y 4 columnas a 1280 px.
- Con Tab, el foco se ve en los dos CTAs del hero.

El link a `#ia` todavía no lleva a ningún lado; la sección se agrega en la Task 7.

- [ ] **Step 7: Commit**

```bash
git add lib/i18n components/Hero.tsx components/ProblemSection.tsx
git commit -m "Update hero subtitle, add AI link and fourth problem card

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 6: Bloques "Con IA" en Ops, Build y Scale

**Files:**
- Modify: `lib/i18n/types.ts` (`serviceDetail`), `es.ts`, `en.ts`, `components/ServiceDetails.tsx`

**Interfaces:**
- Produces: `dict.serviceDetail.aiBadge: string` y `dict.serviceDetail.{ops,build,scale}.ai: string`.

- [ ] **Step 1: Tipo**

En `lib/i18n/types.ts`, reemplazar el bloque `serviceDetail` completo por:

```ts
  serviceDetail: {
    aiBadge: string;
    ops: ServiceDetail;
    build: ServiceDetail;
    scale: ServiceDetail;
  };
```

y agregar al final del archivo:

```ts
export type ServiceDetail = {
  name: string;
  problem: string;
  whatWeDo: string;
  differentiators: string[];
  ai: string;
};
```

- [ ] **Step 2: Copy en español (`es.ts`)**

Agregar `aiBadge` como primera clave de `serviceDetail`:

```ts
  serviceDetail: {
    aiBadge: "Con IA",
```

Agregar `ai` como última clave de cada línea, después de `differentiators`:

```ts
      ai: "Mapeamos tus procesos y detectamos dónde la IA tiene retorno real, dónde alcanza con automatizar y dónde no conviene tocar nada. Salís con un caso de negocio por iniciativa.",
```
(en `ops`)

```ts
      ai: "Agentes que entran en tu operación (WhatsApp, CRM, ERP, email) con supervisión humana donde hace falta, métricas de calidad y control de costos desde el día uno. En producción, no en una demo.",
```
(en `build`)

```ts
      ai: "Liderazgo técnico de IA mensual: mantenemos, medimos y mejoramos lo que está en producción, definimos reglas de uso y acompañamos la adopción de tu equipo.",
```
(en `scale`)

- [ ] **Step 3: Copy en inglés (`en.ts`)**

```ts
  serviceDetail: {
    aiBadge: "With AI",
```

```ts
      ai: "We map your processes and pinpoint where AI has real ROI, where simple automation is enough, and where you shouldn't touch a thing. You leave with a business case for every initiative.",
```
(en `ops`)

```ts
      ai: "AI agents built into your real workflows (WhatsApp, CRM, ERP, email), with human review where it matters, quality metrics and cost control from day one. In production, not in a demo.",
```
(en `build`)

```ts
      ai: "Fractional AI leadership: we maintain, measure and improve what's running, set usage guidelines, and help your team actually adopt it.",
```
(en `scale`)

- [ ] **Step 4: `components/ServiceDetails.tsx`**

Reemplazar las líneas de imports y tipos:

```tsx
import { Check, Settings2, Hammer, Rocket } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import type { ServiceDetail } from "@/lib/i18n/types";

type Detail = ServiceDetail;
```

Agregar este componente antes de `export default function ServiceDetails()`:

```tsx
function AiLayer({ badge, text }: { badge: string; text: string }) {
  return (
    <div className="mt-8 rounded-2xl border-l-4 border-ops bg-white p-6 shadow-card sm:p-8">
      <span className="inline-block rounded-full bg-ops/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ops">
        {badge}
      </span>
      <p className="mt-4 max-w-3xl text-base text-ink/80">{text}</p>
    </div>
  );
}
```

Reemplazar el componente `ServiceDetails` por:

```tsx
export default function ServiceDetails() {
  const { dict } = useLanguage();
  const { aiBadge, ops, build, scale } = dict.serviceDetail;

  return (
    <div className="bg-canvas pt-20 pb-20 sm:pt-28 sm:pb-28">
      <div className="mx-auto max-w-site space-y-20 px-5 sm:space-y-24 sm:px-8">
        <div>
          <OpsDetail detail={ops} />
          <AiLayer badge={aiBadge} text={ops.ai} />
        </div>
        <div>
          <BuildDetail detail={build} />
          <AiLayer badge={aiBadge} text={build.ai} />
        </div>
        <div>
          <ScaleDetail detail={scale} />
          <AiLayer badge={aiBadge} text={scale.ai} />
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 5: Tipos y verificación visual**

Run: `npx tsc --noEmit`
Expected: sin salida.

En `/` y `/en`, cada línea tiene al final el recuadro con badge teal "Con IA" / "With AI" y el texto correspondiente. Las citas y los textos actuales no cambian.

- [ ] **Step 6: Commit**

```bash
git add lib/i18n components/ServiceDetails.tsx
git commit -m "Add 'With AI' layer to Ops, Build and Scale

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 7: Sección "IA con criterio" (método y tabla comparativa)

**Files:**
- Create: `components/MethodSteps.tsx`, `components/ComparisonTable.tsx`, `components/AiApproach.tsx`
- Modify: `lib/i18n/types.ts`, `es.ts`, `en.ts`, `components/HomePage.tsx`

**Interfaces:**
- Produces (reutilizables en la etapa D):
  - `<MethodSteps label: string; steps: { name: string; description: string }[] />`
  - `<ComparisonTable caption: string; headers: [string, string]; rows: [string, string][] />`
  - `dict.aiApproach` (forma abajo)

- [ ] **Step 1: Tipo**

En `lib/i18n/types.ts`, agregar después del bloque `connection`:

```ts
  aiApproach: {
    kicker: string;
    title: string;
    intro: string;
    methodLabel: string;
    steps: { name: string; description: string }[];
    comparison: {
      caption: string;
      headers: [string, string];
      rows: [string, string][];
    };
    cta: string;
  };
```

- [ ] **Step 2: Copy en español (`es.ts`)**, después de `connection`

```ts
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
```

- [ ] **Step 3: Copy en inglés (`en.ts`)**, después de `connection`

```ts
  aiApproach: {
    kicker: "Applied AI",
    title: "AI, done right",
    intro:
      "Most AI projects fail for the same reason: they automate a process nobody understood, and nobody measures whether it worked. We start the other way around.",
    methodLabel: "Four-step method",
    steps: [
      {
        name: "Diagnose",
        description: "We understand the process and the data before proposing anything.",
      },
      {
        name: "Business case",
        description: "Cost, expected savings and risk. If the numbers don't work, we'll tell you.",
      },
      {
        name: "Production",
        description:
          "We build it into your operation, with human oversight where it matters.",
      },
      {
        name: "Measure",
        description:
          "Quality, usage and cost metrics. What isn't working gets fixed or switched off.",
      },
    ],
    comparison: {
      caption: "Comparison between what usually happens in AI projects and how we do it",
      headers: ["What usually happens", "How we do it"],
      rows: [
        ["Starts with the tool", "Starts with the process and the business"],
        ["Impressive demo that never ships", "Built for production from day one"],
        ["Nobody knows if it's working", "Quality, usage and cost metrics"],
        ["Costs that grow unchecked", "Budget and usage monitored"],
        ["“AI for everything”", "AI only where it pays off; if it doesn't, we'll say so"],
      ],
    },
    cta: "Got a stalled AI pilot? Let's take a look →",
  },
```

- [ ] **Step 4: Crear `components/MethodSteps.tsx`**

```tsx
type Step = { name: string; description: string };

/** Timeline numerada: vertical en móvil, horizontal (4 columnas) desde lg. */
export default function MethodSteps({ label, steps }: { label: string; steps: Step[] }) {
  return (
    <ol aria-label={label} className="grid gap-8 lg:grid-cols-4 lg:gap-6">
      {steps.map((step, i) => (
        <li key={step.name} className="relative flex gap-5 lg:flex-col lg:gap-0">
          {i < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute left-5 top-10 h-[calc(100%-0.5rem)] w-px bg-scale/30 lg:left-10 lg:top-5 lg:h-px lg:w-[calc(100%-1rem)]"
            />
          )}
          <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-scale text-sm font-bold text-white">
            {i + 1}
          </span>
          <div className="lg:mt-5">
            <h3 className="text-lg font-bold text-ink">{step.name}</h3>
            <p className="mt-2 text-base text-muted">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
```

- [ ] **Step 5: Crear `components/ComparisonTable.tsx`**

```tsx
/** Tabla de 2 columnas; la segunda va resaltada en teal (ops). */
export default function ComparisonTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: [string, string];
  rows: [string, string][];
}) {
  return (
    <div className="overflow-hidden rounded-2xl shadow-card">
      <table className="w-full table-fixed border-collapse text-left text-sm sm:text-base">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            <th scope="col" className="bg-white px-4 py-4 font-semibold text-ink sm:px-6">
              {headers[0]}
            </th>
            <th scope="col" className="bg-ops px-4 py-4 font-semibold text-white sm:px-6">
              {headers[1]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([before, after]) => (
            <tr key={before}>
              <th
                scope="row"
                className="border-t border-ink/10 bg-white px-4 py-4 align-top font-normal text-muted sm:px-6"
              >
                {before}
              </th>
              <td className="border-t border-white/15 bg-ops px-4 py-4 align-top font-medium text-white sm:px-6">
                {after}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

- [ ] **Step 6: Crear `components/AiApproach.tsx`**

```tsx
"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import MethodSteps from "@/components/MethodSteps";
import ComparisonTable from "@/components/ComparisonTable";

export default function AiApproach() {
  const { dict } = useLanguage();
  const ai = dict.aiApproach;

  return (
    <section id="ia" className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold">{ai.kicker}</p>
        <h2 className="mt-3 max-w-xl text-3xl font-bold text-ink sm:text-4xl">{ai.title}</h2>
        <p className="mt-6 max-w-2xl text-lg text-muted">{ai.intro}</p>

        <div className="mt-14">
          <MethodSteps label={ai.methodLabel} steps={ai.steps} />
        </div>

        <div className="mt-16">
          <ComparisonTable
            caption={ai.comparison.caption}
            headers={ai.comparison.headers}
            rows={ai.comparison.rows}
          />
        </div>

        <div className="mt-10">
          {/* Etapa D: apuntar a ROUTES.rescateIa[locale] cuando exista /rescate-ia. */}
          <a
            href="#contacto"
            className="rounded text-base font-semibold text-ops underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            {ai.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 7: Agregar la sección a `components/HomePage.tsx`**

Agregar el import `import AiApproach from "@/components/AiApproach";` y montarla después de `<ConnectionDiagram />`:

```tsx
      <ConnectionDiagram />
      <AiApproach />
      <About />
```

- [ ] **Step 8: Tipos y verificación visual**

Run: `npx tsc --noEmit`
Expected: sin salida.

En `/` y `/en`, verificar:
- El link del hero "Ver cómo aplicamos IA →" scrollea a esta sección.
- Los 4 pasos quedan numerados, verticales a 375 px y con una línea que los une, y horizontales a 1280 px.
- La tabla tiene 2 columnas sin scroll horizontal a 375 px, con la segunda en teal.
- El CTA lleva a `#contacto`.
- Con un lector de pantalla, o mirando el árbol de accesibilidad con `read_page`, la tabla tiene caption y los headers de fila y columna.

- [ ] **Step 9: Commit**

```bash
git add lib/i18n components/MethodSteps.tsx components/ComparisonTable.tsx components/AiApproach.tsx components/HomePage.tsx
git commit -m "Add 'AI, done right' section with method steps and comparison table

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 8: Sección Casos y componente Placeholder

**Files:**
- Create: `components/Placeholder.tsx`, `components/CaseCard.tsx`, `components/CaseStudies.tsx`
- Modify: `lib/i18n/types.ts`, `es.ts`, `en.ts`, `components/HomePage.tsx`

**Interfaces:**
- Produces:
  - `<Placeholder>{texto}</Placeholder>`, que renderiza `[PLACEHOLDER: texto]`
  - `type CaseStudy`, `type CaseResult` (en `types.ts`)
  - `<CaseCard item: CaseStudy; labels: { problem: string; solution: string; results: string } />` (se reutiliza en la etapa D)

- [ ] **Step 1: Tipos**

En `lib/i18n/types.ts`, agregar después de `aiApproach`:

```ts
  cases: {
    kicker: string;
    title: string;
    problemLabel: string;
    solutionLabel: string;
    resultsLabel: string;
    items: CaseStudy[];
  };
```

y al final del archivo:

```ts
export type CaseResult = {
  value: string;
  label: string;
  /** true: `value` es el texto del placeholder, todavía sin dato real. */
  placeholder?: boolean;
};

export type CaseStudy = {
  id: string;
  tag: string;
  title: string;
  problem: string;
  solution: string;
  /** Puede incluir el token {sector}, que se reemplaza por `clientPlaceholder`. */
  client: string;
  clientPlaceholder?: string;
  results: CaseResult[];
};
```

- [ ] **Step 2: Copy en español (`es.ts`)**, después de `aiApproach`

```ts
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
```

- [ ] **Step 3: Copy en inglés (`en.ts`)**, después de `aiApproach`

```ts
  cases: {
    kicker: "Work",
    title: "What's already running",
    problemLabel: "The problem",
    solutionLabel: "The solution",
    resultsLabel: "Results",
    items: [
      {
        id: "posventa-whatsapp",
        tag: "Build + AI · After-sales / technical support",
        title: "An AI agent that diagnoses failures and suggests spare parts over WhatsApp",
        problem:
          "Technical knowledge lived in long manuals and in the heads of a few people. Every customer question depended on someone from the team being available.",
        solution:
          "A WhatsApp agent that searches the manufacturer's manuals, guides the diagnosis step by step and suggests the right part, handing off to a person when needed.",
        client: "Client in the {sector} sector",
        // TODO(placeholder): client's real industry (anonymized).
        clientPlaceholder: "industry",
        results: [
          // TODO(placeholder): real metric; % of questions resolved without a person.
          {
            value: "% of questions resolved without a person",
            label: "of questions resolved without a person stepping in",
            placeholder: true,
          },
          // TODO(placeholder): real metric; response time.
          {
            value: "response time",
            label: "average response time",
            placeholder: true,
          },
        ],
      },
    ],
  },
```

- [ ] **Step 4: Crear `components/Placeholder.tsx`**

```tsx
/** Marca bien visible para datos pendientes. No mergear a develop mientras quede alguno. */
export default function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <mark className="rounded border border-dashed border-gold bg-gold/10 px-1.5 py-0.5 font-semibold text-ink">
      [PLACEHOLDER: {children}]
    </mark>
  );
}
```

- [ ] **Step 5: Crear `components/CaseCard.tsx`**

```tsx
import Placeholder from "@/components/Placeholder";
import type { CaseStudy } from "@/lib/i18n/types";

export default function CaseCard({
  item,
  labels,
}: {
  item: CaseStudy;
  labels: { problem: string; solution: string; results: string };
}) {
  const [clientBefore, clientAfter = ""] = item.client.split("{sector}");

  return (
    <article className="rounded-2xl bg-canvas p-8 shadow-card sm:p-10">
      <span className="inline-block rounded-full bg-build/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-build">
        {item.tag}
      </span>
      <h3 className="mt-5 max-w-3xl text-2xl font-bold text-ink">{item.title}</h3>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted">
            {labels.problem}
          </h4>
          <p className="mt-3 text-base text-ink/80">{item.problem}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted">
            {labels.solution}
          </h4>
          <p className="mt-3 text-base text-ink/80">{item.solution}</p>
        </div>
      </div>

      <div className="mt-10 border-t border-ink/10 pt-8">
        <h4 className="sr-only">{labels.results}</h4>
        <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {item.results.map((result) => (
            <div key={result.label} className="flex flex-col-reverse">
              <dt className="mt-2 text-sm text-muted">{result.label}</dt>
              <dd>
                {result.placeholder ? (
                  <Placeholder>{result.value}</Placeholder>
                ) : (
                  <span className="text-4xl font-bold text-ink">{result.value}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <p className="mt-8 text-sm text-muted">
        {clientBefore}
        {item.clientPlaceholder && <Placeholder>{item.clientPlaceholder}</Placeholder>}
        {clientAfter}
      </p>
    </article>
  );
}
```

- [ ] **Step 6: Crear `components/CaseStudies.tsx`**

```tsx
"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import CaseCard from "@/components/CaseCard";

export default function CaseStudies() {
  const { dict } = useLanguage();
  const cases = dict.cases;
  const labels = {
    problem: cases.problemLabel,
    solution: cases.solutionLabel,
    results: cases.resultsLabel,
  };

  return (
    <section id="casos" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold">{cases.kicker}</p>
        <h2 className="mt-3 max-w-xl text-3xl font-bold text-ink sm:text-4xl">{cases.title}</h2>

        <div className={`mt-14 grid gap-6 ${cases.items.length > 1 ? "lg:grid-cols-2" : ""}`}>
          {cases.items.map((item) => (
            <CaseCard key={item.id} item={item} labels={labels} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 7: Agregar la sección a `components/HomePage.tsx`**

Import `import CaseStudies from "@/components/CaseStudies";` y montarla después de `<AiApproach />`:

```tsx
      <AiApproach />
      <CaseStudies />
      <About />
```

- [ ] **Step 8: Tipos y verificación visual**

Run: `npx tsc --noEmit && git grep -n "TODO(placeholder)"`
Expected: tsc sin salida. El grep lista 6 líneas, 3 en `es.ts` y 3 en `en.ts`.

En `/` y `/en`, verificar:
- La card del caso ocupa todo el ancho, con el tag en marrón (`build`), el título, y problema y solución en 2 columnas desde 768 px.
- Hay 2 cuadros con `[PLACEHOLDER: …]` y borde punteado dorado.
- La línea del cliente se lee "Cliente del sector [PLACEHOLDER: rubro]" / "Client in the [PLACEHOLDER: industry] sector".

- [ ] **Step 9: Commit**

```bash
git add lib/i18n components/Placeholder.tsx components/CaseCard.tsx components/CaseStudies.tsx components/HomePage.tsx
git commit -m "Add case studies section with visible placeholders

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 9: Sobre mí (bio de IA) y Stats (presupuesto claro)

**Files:**
- Modify: `lib/i18n/types.ts` (`stats.items`), `es.ts`, `en.ts`, `components/About.tsx`, `components/Stats.tsx`

**Interfaces:**
- Produces: `dict.stats.items: { value?: string; icon?: "check"; label: string }[]` y `dict.about.points` con 5 elementos.

- [ ] **Step 1: Tipo**

En `lib/i18n/types.ts`, dentro de `stats`, reemplazar:

```ts
    items: { value: string; label: string }[];
```

por:

```ts
    /** `icon: "check"` reemplaza al número grande cuando no hay una cifra real. */
    items: { value?: string; icon?: "check"; label: string }[];
```

- [ ] **Step 2: Copy en español (`es.ts`)**

Agregar al final de `about.points`:

```ts
      "Además de liderar equipos, diseño y construyo sistemas de IA en producción: agentes, búsqueda sobre documentación interna (RAG) e integraciones con las herramientas que la empresa ya usa.",
```

En `stats.items`, reemplazar `{ value: "100%", label: "del trabajo cobrado por resultado, no por hora" },` por:

```ts
      { icon: "check", label: "Presupuesto claro antes de empezar" },
```

- [ ] **Step 3: Copy en inglés (`en.ts`)**

Al final de `about.points`:

```ts
      "Beyond leading teams, I design and build production AI systems: agents, search over internal documentation (RAG), and integrations with the tools a company already uses.",
```

En `stats.items`, reemplazar `{ value: "100%", label: "of the work billed on results, not hours" },` por:

```ts
      { icon: "check", label: "Clear budget before we start" },
```

- [ ] **Step 4: `components/About.tsx`: ícono para el quinto punto**

Reemplazar las dos primeras líneas de imports de íconos y la constante:

```tsx
import { Award, Building2, Users, MapPin, Layers } from "lucide-react";
```

```tsx
const icons = [Award, Building2, Users, MapPin, Layers];
```

- [ ] **Step 5: `components/Stats.tsx`: ítem con ícono**

Agregar el import:

```tsx
import { CircleCheck } from "lucide-react";
```

Reemplazar el `map` de items por:

```tsx
          {dict.stats.items.map((item) => (
            <div key={item.label}>
              {item.icon === "check" ? (
                <div className="flex h-[3.25rem] items-center">
                  <CircleCheck aria-hidden="true" size={48} strokeWidth={2.25} className="text-ink" />
                </div>
              ) : (
                <p className="text-5xl font-bold text-ink">{item.value}</p>
              )}
              <p className="mt-2 text-sm text-muted">{item.label}</p>
            </div>
          ))}
```

- [ ] **Step 6: Tipos y verificación visual**

Run: `npx tsc --noEmit && git grep -n "100%" lib/i18n`
Expected: tsc sin salida y grep sin resultados.

En `/` y `/en`, verificar:
- "Sobre mí" muestra 5 puntos, con el nuevo al final e ícono de capas.
- En Stats, el tercer ítem tiene un check grande alineado con los números de los otros y el texto "Presupuesto claro antes de empezar" / "Clear budget before we start".

- [ ] **Step 7: Commit**

```bash
git add lib/i18n components/About.tsx components/Stats.tsx
git commit -m "Add AI systems bio point and replace results-based pricing stat

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 10: Preguntas frecuentes con JSON-LD FAQPage

**Files:**
- Create: `components/Faq.tsx`
- Modify: `lib/i18n/types.ts`, `es.ts`, `en.ts`, `components/HomePage.tsx`

**Interfaces:**
- Produces: `dict.faq: { kicker: string; title: string; items: { q: string; a: string }[] }`

- [ ] **Step 1: Tipo**

En `lib/i18n/types.ts`, agregar después de `stats`:

```ts
  faq: {
    kicker: string;
    title: string;
    items: { q: string; a: string }[];
  };
```

- [ ] **Step 2: Copy en español (`es.ts`)**, después de `stats`

```ts
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
```

- [ ] **Step 3: Copy en inglés (`en.ts`)**, después de `stats`

```ts
  faq: {
    kicker: "FAQ",
    title: "What people usually ask",
    items: [
      {
        q: "How much does it cost?",
        a: "It depends on scope. The first call is free; then we run a diagnosis and give you a clear quote before any work starts.",
      },
      {
        q: "What happens to my data?",
        a: "We work with minimum access, NDAs, and providers that don't train models on your data. We decide together which data gets used and which doesn't.",
      },
      {
        q: "What if AI isn't right for us?",
        a: "We'll tell you. Often the problem is solved by fixing the process or with simple automation, and that's part of the job too.",
      },
      {
        q: "Do you work outside Argentina?",
        a: "Yes. We work remotely with companies across Latin America and the US.",
      },
      {
        q: "How soon will we see results?",
        a: "Diagnosis takes weeks, not months. We prioritize a first initiative that shows results quickly before scaling.",
      },
    ],
  },
```

- [ ] **Step 4: Crear `components/Faq.tsx`**

```tsx
"use client";

import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export default function Faq() {
  const { dict } = useLanguage();
  const faq = dict.faq;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section id="faq" className="bg-canvas py-20 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold">{faq.kicker}</p>
        <h2 className="mt-3 max-w-xl text-3xl font-bold text-ink sm:text-4xl">{faq.title}</h2>

        <div className="mt-12 max-w-3xl divide-y divide-ink/10 rounded-2xl bg-white shadow-card">
          {faq.items.map((item) => (
            <details key={item.q} className="group px-6 sm:px-8">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg py-5 text-left text-base font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown
                  aria-hidden="true"
                  size={20}
                  className="shrink-0 text-muted transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="pb-6 text-base text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Agregar la sección a `components/HomePage.tsx`**

Import `import Faq from "@/components/Faq";` y montarla entre `<Stats />` y `<Contact />`:

```tsx
      <Stats />
      <Faq />
      <Contact />
```

- [ ] **Step 6: Tipos y verificación**

Run: `npx tsc --noEmit`
Expected: sin salida.

En `/` y `/en`, verificar:
- Las 5 preguntas arrancan cerradas.
- Con Tab llega el foco a cada pregunta, con anillo dorado, y Enter o Espacio la abre y la cierra. El chevron rota.
- En el HTML de `/` (`curl -s localhost:3000/ | grep -c '"FAQPage"'`) aparece `1`.

- [ ] **Step 7: Commit**

```bash
git add lib/i18n components/Faq.tsx components/HomePage.tsx
git commit -m "Add FAQ accordion with FAQPage structured data

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 11: Navegación con las secciones nuevas

**Files:**
- Modify: `lib/i18n/types.ts` (`header.links`), `es.ts`, `en.ts`, `components/Header.tsx`

**Interfaces:**
- Consumes: `homeAnchor` (Task 1), y las secciones `#ia` (Task 7) y `#casos` (Task 8)
- Produces: `dict.header.links.ai`, `dict.header.links.cases`

- [ ] **Step 1: Tipo**

En `lib/i18n/types.ts`, reemplazar `header.links` por:

```ts
    links: {
      problem: string;
      services: string;
      ai: string;
      cases: string;
      about: string;
      contact: string;
    };
```

- [ ] **Step 2: Copy**

En `es.ts`, `header.links`:

```ts
    links: {
      problem: "El problema",
      services: "Cómo trabajamos",
      ai: "IA con criterio",
      cases: "Casos",
      about: "Sobre mí",
      contact: "Contacto",
    },
```

En `en.ts`, `header.links`:

```ts
    links: {
      problem: "The problem",
      services: "How we work",
      ai: "AI, done right",
      cases: "Work",
      about: "About",
      contact: "Contact",
    },
```

- [ ] **Step 3: `components/Header.tsx`: 6 links y nav completa desde `xl`**

Reemplazar el array `links`:

```tsx
  const links = [
    { anchor: "problema", label: dict.header.links.problem },
    { anchor: "servicios", label: dict.header.links.services },
    { anchor: "ia", label: dict.header.links.ai },
    { anchor: "casos", label: dict.header.links.cases },
    { anchor: "sobre-mi", label: dict.header.links.about },
    { anchor: "contacto", label: dict.header.links.contact },
  ].map((link) => ({ href: homeAnchor(locale, link.anchor), label: link.label }));
```

Cambiar los breakpoints de `lg` a `xl` en las 4 clases del Header:
- `<nav ... className="hidden items-center gap-8 lg:flex">` → `className="hidden items-center gap-7 xl:flex"`
- `<div className="hidden items-center gap-4 lg:flex">` → `className="hidden items-center gap-4 xl:flex"`
- botón hamburguesa `... text-ink lg:hidden` → `... text-ink xl:hidden`
- panel móvil `border-t border-ink/5 bg-canvas px-5 pb-6 pt-2 lg:hidden` → `... xl:hidden`

Run: `grep -n "lg:" components/Header.tsx`
Expected: sin resultados.

- [ ] **Step 4: Verificación**

Run: `npx tsc --noEmit`
Expected: sin salida.

En `/` y `/en`, verificar:
- A 1280 px los 6 links, el toggle y "Hablemos" entran en una línea sin solaparse.
- A 1024 px y 375 px aparece el menú hamburguesa con los 6 links.
- Cada link scrollea a su sección, incluidas `#ia` y `#casos`.
- En `/en/privacy`, "Work" lleva a `/en#casos`.

- [ ] **Step 5: Commit**

```bash
git add lib/i18n components/Header.tsx
git commit -m "Add AI and case studies links to the navigation

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 12: README, verificación completa y preview

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Actualizar `README.md`**

Reemplazar las secciones "Estructura del proyecto" e "Idioma" por:

````markdown
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

- Español en `/`, inglés en `/en`. Cada página nueva se agrega en `lib/i18n/routes.ts` y en los dos árboles de `app/`.
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
````

- [ ] **Step 2: Correr todos los chequeos automáticos**

```bash
npm test && npx tsc --noEmit && npm run build
```
Expected: `ℹ fail 0`, tsc sin salida y build `✓ Compiled successfully`.

```bash
git grep -niE "\b(gpt|chatgpt|claude|openai|anthropic|n8n|gemini|llama|copilot)\b" -- lib/i18n components
```
Expected: sin resultados.

```bash
git grep -nE "\b(Brain|Bot|Cpu|CircuitBoard|Sparkles)\b" -- components
```
Expected: sin resultados.

- [ ] **Step 3: Recorrido completo en el navegador**

Con `npm run dev`, para `/` y `/en`, a 375, 768 y 1280 px:
- Sin scroll horizontal. Para comprobarlo, `document.documentElement.scrollWidth <= window.innerWidth` tiene que dar `true` en cada ancho.
- El orden de secciones es Hero → Problema → Cómo trabajamos (con "Con IA") → Cómo se conectan → IA con criterio → Casos → Sobre mí → Empresas → Stats → FAQ → Contacto.
- El toggle conserva el ancla en ambos sentidos.
- Navegación completa con Tab: el foco se ve en todos los links, botones y preguntas.
- El titular del hero no contiene "IA" ni "AI".

- [ ] **Step 4: Commit**

```bash
git add README.md
git commit -m "Document locale routing, placeholders rule and tests

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

- [ ] **Step 5: Preview en Vercel (pedir confirmación al usuario antes del push)**

Recién con el OK del usuario:

```bash
git push -u origin feat/ia-aplicada
```

Vercel genera un deploy de preview de la rama, sin tocar producción. Obtener la URL con:

```bash
vercel ls nexuralabs 2>&1 | sed -n '4,6p'
```

Compartir la URL con el usuario para que la revise en un celular real. **No mergear a `develop`** mientras `git grep -n "TODO(placeholder)"` devuelva resultados.
