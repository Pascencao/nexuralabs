import { getDictionary } from "@/lib/i18n/dictionaries";
import { ogSize, renderOgImage } from "@/lib/og";

const dict = getDictionary("es");

export const size = ogSize;
export const contentType = "image/png";
export const alt = dict.meta.posventaTitle;

export default function Image() {
  return renderOgImage("es", {
    title: dict.landings.posventa.hero.title,
    description: dict.meta.posventaDescription,
  });
}
