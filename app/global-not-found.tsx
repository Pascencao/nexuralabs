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
          <p className="text-sm font-semibold uppercase tracking-wide text-ink">404</p>
          <h1 className="mt-3 text-3xl font-bold">
            Página no encontrada <span lang="en" className="text-muted">· Page not found</span>
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
