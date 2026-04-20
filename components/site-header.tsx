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
      <div className="mx-auto flex max-w-site items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Logo size={44} priority />
          <span className="font-inter text-sm font-semibold tracking-[0.14em] text-white">
            NEXURA LABS
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="link-nexura text-sm">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="https://calendar.app.google/xsCKdDtbHWRrH7tHA"
          className="btn shrink-0 bg-nexura-violet px-4 py-2.5 text-xs text-white shadow-card transition duration-300 hover:scale-[1.02] hover:shadow-glow sm:text-sm"
        >
          Agendar reunión
        </Link>
      </div>
    </header>
  );
}
