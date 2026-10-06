import { getDictionary } from "@/lib/i18n/dictionaries";
import { ogSize, renderOgImage } from "@/lib/og";

const dict = getDictionary("es");

export const size = ogSize;
export const contentType = "image/png";
export const alt = dict.meta.rescueTitle;

export default function Image() {
  return renderOgImage("es", {
    title: dict.landings.rescue.hero.title,
    description: dict.meta.rescueDescription,
  });
}
