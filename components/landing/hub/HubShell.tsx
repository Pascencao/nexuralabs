import HubNav from "@/components/landing/hub/HubNav";
import HubFooter from "@/components/landing/hub/HubFooter";
import { hubFontVars } from "@/components/landing/hub/fonts";

/** Marco de las landings RIGI: tokens y tipografías del handoff, nav y footer propios. */
export default function HubShell({
  links,
  cta,
  ctaHref,
  children,
}: {
  links: { anchor: string; label: string }[];
  cta: string;
  ctaHref: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${hubFontVars} hub-theme min-h-screen bg-hub-ink font-plex text-hub-text`}>
      <HubNav links={links} cta={cta} ctaHref={ctaHref} />
      {children}
      <HubFooter />
    </div>
  );
}
