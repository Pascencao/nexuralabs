import { getDictionary } from "@/lib/i18n/dictionaries";
import { ogSize, renderOgImage } from "@/lib/og";

const dict = getDictionary("en");

export const size = ogSize;
export const contentType = "image/png";
export const alt = dict.meta.posventaTitle;

export default function Image() {
  return renderOgImage("en", {
    title: dict.landings.posventa.hero.title,
    description: dict.meta.posventaDescription,
  });
}
