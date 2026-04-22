import Link from "next/link";
import Logo from "@/components/ui/logo";

const links = [
  { href: "#problema", label: "Problema" },
  { href: "#solucion", label: "Solución" },
  { href: "#diferencial", label: "Monetización" },
  { href: "#casos", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-nexura-border/70 bg-nexura-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-5 py-3 sm:gap-6 sm:px-8 sm:py-4">
        <Link
          href="/"
          className="flex min-h-[44px] min-w-0 items-center gap-3 py-1"
        >
          <Logo size={44} priority />
          <span className="font-inter text-sm font-semibold tracking-[0.14em] text-white">
            NEXURA LABS
          </span>
        </Link>
        <nav
          className="hidden min-[450px]:flex min-[450px]:items-center min-[450px]:gap-6 lg:gap-8"
          aria-label="Principal"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-nexura inline-flex min-h-[44px] items-center text-sm leading-snug"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="https://calendar.app.google/xsCKdDtbHWRrH7tHA"
          className="btn inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center bg-nexura-violet px-4 py-2.5 text-xs text-white shadow-card transition-transform duration-300 ease-out hover:scale-[1.02] sm:text-sm"
        >
          Agendar reunión
        </Link>
      </div>
    </header>
  );
}
