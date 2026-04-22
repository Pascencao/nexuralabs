import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/social";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="border-t border-nexura-border/80 bg-nexura-bg">
      <div className="mx-auto flex max-w-site flex-col gap-10 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between md:py-16">
        <div className="flex max-w-sm flex-col gap-4">
          <Link href="/" className="flex w-fit items-center gap-3">
            <Logo />
            <span className="text-sm font-semibold tracking-[0.14em] text-white">
              NEXURA LABS
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-nexura-muted">
            Construí tu propia plataforma de streaming y monetizá tu audiencia de forma
            directa. Control sobre tu audiencia, ingresos recurrentes y monetización
            directa.
          </p>
        </div>
        <nav aria-label="Redes sociales">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-nexura-muted">
            Seguinos
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="link-nexura"
                rel="noopener noreferrer"
                target="_blank"
              >
                {s.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
      <p className="mx-auto max-w-site border-t border-nexura-border/60 px-5 py-8 text-center text-xs text-nexura-muted sm:px-8">
        © {new Date().getFullYear()} Nexura Labs. Todos los derechos reservados.
      </p>
    </footer>
  );
}
