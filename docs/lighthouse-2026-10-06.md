# Lighthouse: 2026-10-06 (etapas A–E)

**Condiciones de la medición:**
- Lighthouse 13.5.0, preset mobile por defecto (red y CPU simuladas) y Chrome headless.
- Build de producción local (`next start`), sin `NEXT_PUBLIC_GA_ID` salvo donde se indica.
- Cookie `nexuralabs-locale=es`, para que el proxy no redirija.

| Página | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| `/` | 90 · 97 · 96 (3 corridas) | 97 | 100 | 100 |
| `/en` | 92 | 97 | 100 | 100 |
| `/ia-posventa` | 98 | 97 | 100 | 100 |
| `/rescate-ia` | 98 | 96 | 100 | 100 |
| `/` con GA4 (`G-TEST12345`) | 99 · 99 | 97 | 100 | 100 |

Las cuatro páginas dan **≥ 90 en las cuatro categorías**. En la home, Performance varía entre corridas (90–97). El LCP es el párrafo del hero, y el JS sin usar viene sobre todo de `fbevents.js` del píxel de Meta (~45 KiB).

## Observaciones

- **Accesibilidad (96–97):** la única falla es el contraste de "LABS" en el logo, dorado sobre el header claro (2.43:1). WCAG exime a los logotipos del requisito de contraste, y cambiarlo es una decisión de marca, así que no se tocó.
- **Corrida con GA4:** se hizo con un ID ficticio. Google responde, pero sin una propiedad real el script carga menos que en producción. Conviene repetir la medición sobre producción cuando esté el ID real.
- **No se hicieron cambios de rendimiento en esta etapa:** las cuatro páginas ya superaban el objetivo.

## Cómo repetirla

```bash
npm run build && npx next start -p 3100
npx lighthouse http://localhost:3100/ --extra-headers='{"Cookie":"nexuralabs-locale=es"}' --view
```
