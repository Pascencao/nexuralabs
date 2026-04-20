import Link from "next/link";
import Logo from "./logo";

const links = [
  { href: "https://www.linkedin.com/company/nexuralabs/", label: "LinkedIn" },
  { href: "https://www.instagram.com/nexuralabs/", label: "Instagram" },
  { href: "https://www.facebook.com/profile.php?id=61571246217894", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="border-t border-nexura-border/80 bg-nexura-bg">
      <div className="mx-auto max-w-site px-5 py-12 sm:px-8 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
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
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-nexura-muted">
              Seguinos
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {links.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="link-nexura">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-nexura-border/60 pt-8 text-center text-xs text-nexura-muted">
          © {new Date().getFullYear()} Nexura Labs. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
