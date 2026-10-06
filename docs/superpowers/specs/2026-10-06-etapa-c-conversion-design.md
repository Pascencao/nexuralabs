# Etapa C: Conversión (formulario de contacto y checklist descargable)

**Fecha:** 2026-10-06
**Rama:** `feat/ia-aplicada` (sigue a las etapas A y B)
**Estado:** borrador para revisión

## Decisiones tomadas con el usuario

1. **Sin calendario embebido.** Se descarta el bloque de reservas del brief.
2. **El formulario de contacto tiene 4 campos:** nombre, email, "¿Qué querés resolver?" (select) y mensaje opcional.
3. **El checklist lo redacta Claude.** Es contenido editorial en ES y EN, sin métricas ni promesas. El usuario lo revisa antes de publicar, y Claude genera el PDF con la estética del sitio.
4. **El PDF llega por email:** la persona deja su email y su empresa, y recibe el link al PDF. Pablo recibe un aviso con el lead.
5. **Envío de emails con Resend y Route Handlers de Next** (`app/api/*`), en el mismo proyecto de Vercel.

Los resultados del caso de la home se completan cuando el usuario pase los datos reales. Eso queda fuera de esta etapa y no se inventa nada.

## Arquitectura

```
lib/forms/
  options.ts           → valores del select "¿Qué querés resolver?" (ids estables)
  validate.ts          → validateContact(), validateChecklist(): puras, compartidas cliente/servidor
  validate.test.ts
  spam.ts              → isLikelyBot({ honeypot, elapsedMs }): pura
  spam.test.ts
  emails.ts            → contactNotification(), checklistDelivery(), checklistNotification(): puras, devuelven { subject, text, html }
  emails.test.ts
lib/mailer.ts          → sendMail({ to, subject, text, html, replyTo? }) vía Resend; sin API key fuera de producción → console.info y ok
app/api/contact/route.ts    → POST: parsea, spam, valida, notifica a Pablo
app/api/checklist/route.ts  → POST: parsea, spam, valida, envía el PDF a la persona y notifica a Pablo
components/forms/
  useFormSubmit.ts     → hook cliente: estado idle|sending|success|error, timestamp de montaje, POST JSON
  Field.tsx            → label + input/select/textarea + mensaje de error accesible
components/ContactForm.tsx      → formulario de 4 campos (dentro de Contact)
components/ChecklistOffer.tsx   → bloque del checklist en la home (#checklist)
content/checklist.json          → contenido del checklist ES/EN (fuente única)
scripts/build-checklist-pdf.mjs → genera public/downloads/checklist-ia-{es,en}.pdf con pdfkit
public/downloads/checklist-ia-es.pdf, checklist-ia-en.pdf (generados y commiteados)
```

**Dependencias nuevas:** `resend` (runtime, `^6.32.1`) y `pdfkit` (dev, `^0.20.2`). No se agrega nada más.

**Variables de entorno**, documentadas en el README y en `.env.example`:

| Variable | Uso | Default |
|---|---|---|
| `RESEND_API_KEY` | Clave de Resend | obligatoria en producción |
| `MAIL_FROM` | Remitente | `Nexura Labs <pablo@nexuralabs.agency>` |
| `MAIL_TO` | Destino de avisos y leads | `pablo@nexuralabs.agency` |

## Formulario de contacto

### Ubicación y layout

Se ubica en la sección `#contacto` existente, de fondo oscuro. Desde `lg` va en dos columnas:
- **Izquierda:** kicker, título, el texto actual (con los 20 minutos sin costo) y los botones actuales de email y LinkedIn.
- **Derecha:** una card blanca (`rounded-2xl bg-white p-6 sm:p-8 shadow-card`) con el formulario.

En móvil va apilado: primero el texto y después el formulario. La alineación de la columna de texto pasa de centrada a izquierda en `lg`.

### Campos

| Campo | Tipo | Regla |
|---|---|---|
| Nombre / Name | `input text`, `autocomplete="name"` | obligatorio, 2–100 caracteres después de quitar espacios |
| Email | `input email`, `autocomplete="email"` | obligatorio, formato `^[^\s@]+@[^\s@]+\.[^\s@]{2,}$`, ≤ 254 |
| ¿Qué querés resolver? / What do you want to solve? | `select` | obligatorio; valores `processes`, `software`, `ai`, `ai-rescue`, `other` |
| Mensaje / Message (opcional) | `textarea`, 4 filas | ≤ 2000 caracteres |
| `website` (honeypot) | `input text` oculto (`sr-only`, `tabIndex=-1`, `autocomplete="off"`, `aria-hidden`) | debe venir vacío |

Opciones del select:

| ES | EN |
|---|---|
| Ordenar procesos | Fix processes |
| Construir software | Build software |
| Aplicar IA | Apply AI |
| Rescatar un proyecto de IA | Rescue an AI project |
| Otro | Something else |

El primer `<option>` está vacío y deshabilitado: ES "Elegí una opción", EN "Choose one".

### Validación y estados

- **Validación en el cliente:** se ejecuta al enviar y también al salir de cada campo si ya tiene un error. Los errores aparecen debajo del campo, con `aria-invalid` y `aria-describedby`. Al primer error, el foco va al campo inválido.
- **Mensajes de error:**

| Error | ES | EN |
|---|---|---|
| Campo obligatorio | Completá este campo. | Please fill in this field. |
| Email inválido | Revisá el email. | Please check your email. |
| Select | Elegí una opción. | Please choose one. |
| Texto demasiado largo | Es demasiado largo. | That's too long. |

- **Estados:**

| Estado | ES | EN | Comportamiento |
|---|---|---|---|
| Enviando | "Enviando…" | "Sending…" | botón deshabilitado y `aria-busy` |
| Éxito | "¡Gracias! Te respondo en menos de 48 horas hábiles." | "Thanks! I'll get back to you within 2 business days." | reemplaza al formulario, `role="status"` |
| Error | "No pudimos enviar el mensaje. Probá de nuevo o escribime a pablo@nexuralabs.agency." | "We couldn't send your message. Try again or email me at pablo@nexuralabs.agency." | `role="alert"`; el formulario mantiene los datos |

- **Botón:** ES "Enviar" / EN "Send", con la clase del CTA dorado actual.

### Email a Pablo

- **Asunto:** `Nuevo contacto web: {Nombre} ({opción en español})`.
- **Cuerpo de texto:** nombre, email, opción, mensaje, idioma de la página y fecha ISO.
- **HTML:** el mismo contenido en una tabla simple.
- **`replyTo`:** el email de la persona, para responder directo.

## Checklist descargable

### Bloque en la home

`ChecklistOffer` va entre `CaseStudies` y `About`, con `id="checklist"`, sobre fondo `canvas`. Dentro hay una card con dos columnas desde `md`:
- **Izquierda:** `Kicker` ("Recurso gratis" / "Free resource"), el título y una bajada.
- **Derecha:** los campos Email y Empresa, el honeypot y el botón.

| | ES | EN |
|---|---|---|
| Título | Checklist: ¿tu operación está lista para IA? | Checklist: Is your operation ready for AI? |
| Bajada | Doce preguntas para revisar antes de invertir en IA. Te lo mandamos por email en PDF. | Twelve questions to go through before investing in AI. We'll email you the PDF. |
| Campos | Email · Empresa | Email · Company |
| Botón | Enviame el checklist | Send me the checklist |
| Éxito | Listo. Te lo enviamos a {email}. Si no lo ves en unos minutos, revisá spam. | Done. We've sent it to {email}. If you don't see it in a few minutes, check your spam folder. |
| Error | No pudimos enviarlo. Probá de nuevo en un rato. | We couldn't send it. Please try again shortly. |

**Validación de Empresa:** obligatoria, 2–120 caracteres. El email sigue la misma regla que en el formulario de contacto.

### Emails

1. **A la persona,** en el idioma de la página:
   - Asunto ES "Tu checklist: ¿tu operación está lista para IA?" / EN "Your checklist: Is your operation ready for AI?".
   - Cuerpo: un saludo, una línea sobre el contenido y un link absoluto al PDF de su idioma (`https://www.nexuralabs.agency/downloads/checklist-ia-es.pdf` o `-en.pdf`, armado con `absoluteUrl`).
   - Cierre: la invitación a la charla de 20 minutos respondiendo el mail.
   - `replyTo`: `MAIL_TO`.
2. **A Pablo:** asunto "Nuevo lead checklist: {Empresa}"; cuerpo con email, empresa, idioma y fecha.

Si falla el email a la persona, la API responde con error. Si falla solo el aviso a Pablo, se registra con `console.error` y la persona igual ve el éxito.

### Contenido (`content/checklist.json`)

Hay 12 preguntas en 5 grupos. Se responden con sí o no.

| Grupo | ES | EN |
|---|---|---|
| Proceso / Process | ¿Podés describir el proceso que querés mejorar, paso a paso y de punta a punta? | Can you describe the process you want to improve, step by step, end to end? |
| | ¿Sabés cuánto tiempo o dinero consume hoy, aunque sea aproximado? | Do you know roughly how much time or money it takes today? |
| | ¿El proceso se hace igual cada vez, o depende de quién lo haga? | Is it done the same way every time, or does it depend on who's doing it? |
| Datos / Data | ¿La información que usa ese proceso está escrita en algún lado (sistemas, documentos, manuales) y no solo en la cabeza de alguien? | Is the information it relies on written down somewhere (systems, documents, manuals), not just in someone's head? |
| | ¿Podés acceder a esos datos sin pedir favores ni copiar a mano? | Can you get to that data without asking for favors or copying it by hand? |
| | ¿Sabés qué datos son sensibles y quién puede verlos? | Do you know which data is sensitive and who's allowed to see it? |
| Equipo / Team | ¿Hay una persona responsable del proceso que pueda decir si una solución realmente funciona? | Is there someone who owns the process and can tell whether a solution actually works? |
| | ¿El equipo que lo va a usar participa desde el principio? | Is the team that will use it involved from the start? |
| Negocio / Business | ¿Tenés claro qué cambiaría si el proceso funcionara mejor (tiempos de respuesta, errores, ventas)? | Are you clear on what would change if the process worked better (response times, errors, sales)? |
| | ¿Definiste cómo vas a medir si funcionó? | Have you decided how you'll measure whether it worked? |
| | ¿Tenés presupuesto para operar la solución todos los meses, no solo para construirla? | Do you have a monthly budget to run the solution, not just to build it? |
| Riesgo / Risk | ¿Sabés qué pasa si la IA se equivoca, y quién revisa los casos dudosos? | Do you know what happens when the AI gets it wrong, and who reviews the unclear cases? |

- **Intro:** ES "Si respondés «no» a varias, probablemente el primer paso no sea la IA sino ordenar el proceso. Eso también es avanzar." / EN "If you answer “no” to several, the first step probably isn't AI but getting the process in order. That counts as progress too."
- **Cierre:** ES "¿Más de tres «no»? Empecemos por un diagnóstico. Escribime: pablo@nexuralabs.agency · nexuralabs.agency" / EN "More than three “no”s? Let's start with a diagnosis. Write to me: pablo@nexuralabs.agency · nexuralabs.agency".

### PDF

`scripts/build-checklist-pdf.mjs` (con `npm run build:checklist`) lee `content/checklist.json` y genera los dos PDF en A4 con pdfkit:
- **Encabezado:** una franja `ink-dark` con "NEXURA" en blanco y "LABS" en `gold`.
- **Cuerpo:** el título, la intro, y cada grupo con su nombre en `ink` y las preguntas con una casilla vacía.
- **Pie:** el cierre y la URL.

Usa las fuentes estándar Helvetica y Helvetica-Bold (WinAnsi cubre los acentos del español). Los PDF quedan commiteados en `public/downloads/`. Si cambia el contenido, se regeneran con el script.

## Seguridad y anti-spam

- **Honeypot `website`:** si viene con contenido, la API responde `200 { ok: true }` sin enviar nada, para no darle pistas al bot.
- **Tiempo mínimo:** el cliente manda `elapsedMs`, el tiempo desde que se montó el formulario. Si es menor a 2000 ms, se trata igual que el honeypot.
- **Tamaño del body:** se rechazan los bodies de más de 10 KB (413) y el JSON inválido (400).
- **Respuestas:**
  - Validación fallida: `400 { ok: false, errors: { campo: código } }`. Los códigos son `required`, `email`, `choice` y `tooLong`, y el cliente los mapea a sus mensajes.
  - Fallo de envío: `502 { ok: false }`.
  - Configuración faltante en producción: `500 { ok: false }`.
- **Escapado:** los datos del usuario se escapan en el HTML de los emails, con `& < > " '`.
- **Sin rate limit por IP** en esta etapa, porque requiere almacenamiento. Se revisa si aparece spam.
- **Privacidad:** la Política de privacidad ya menciona los datos de contacto, y no se agregan cookies.

## Copy nuevo en el diccionario

- `contact.form`: labels, placeholder del select, opciones, botón, estados y errores.
- `checklist`: kicker, título, bajada, labels, botón y estados.

Todo va en `es.ts` y `en.ts` bajo el tipo `Dictionary`. Los textos de los emails a la persona viven en `lib/forms/emails.ts`, indexados por `Locale`. No van en el diccionario porque se usan solo en el servidor.

## Verificación

1. `npm test`: tests nuevos para `validate`, `spam` y `emails` (escapado, asunto, link al PDF según el idioma), más los 18 existentes.
2. `npx tsc --noEmit` y `npm run build`.
3. **Local sin `RESEND_API_KEY`:** enviar los dos formularios en `/` y `/en` desde el navegador. La consola del servidor muestra los emails, y la UI recorre "enviando" y "éxito".
4. **Errores:**
   - Enviar vacío muestra los errores, y el foco va al primer campo.
   - Un email inválido muestra su mensaje.
   - Con DevTools se fuerza un 502 y se ve el estado de error con los datos conservados.
5. **Con curl:**
   - Honeypot lleno: 200 sin email en el log.
   - `elapsedMs` igual a 500: 200 sin email.
   - JSON inválido: 400.
   - Body de 20 KB: 413.
6. **Producción, con la clave real:** verificar el dominio en Resend, enviar una prueba desde el preview y ver que llega a `pablo@nexuralabs.agency`.
7. **Navegador a 375 y 1280 px:** sin scroll horizontal, layout correcto y foco visible en todos los campos.

## Acciones que hace el usuario

Requieren su cuenta y no las puede hacer Claude:
- Crear la cuenta de Resend y la API key.
- Verificar el dominio `nexuralabs.agency` en Resend. Los registros DNS se agregan en Vercel DNS; Claude puede hacerlo con el CLI si el usuario lo aprueba.
- Cargar `RESEND_API_KEY` en Vercel para Production y Preview.
- Revisar y aprobar el texto del checklist antes del merge.

## Fuera de alcance

- Calendario de reservas, descartado.
- Eventos GA4 y del píxel (`form_submit`, `download_checklist`): van en la etapa E. Igual, `useFormSubmit` expone un callback `onSuccess` para conectarlos después.
- Bloque del checklist en las landings: va en la etapa D, que reutiliza `ChecklistOffer`.
- Rate limiting y CAPTCHA.
