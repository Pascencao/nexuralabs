import { getDictionary } from "@/lib/i18n/dictionaries";
import { ogSize, renderOgImage } from "@/lib/og";

const dict = getDictionary("en");

export const size = ogSize;
export const contentType = "image/png";
export const alt = dict.meta.rigiHubTitle;

export default function Image() {
  const hero = dict.landings.rigiHub.hero;
  return renderOgImage("en", {
    title: [...hero.titleLines, hero.titleHighlight].join(" "),
    description: dict.meta.rigiHubDescription,
  });
}
