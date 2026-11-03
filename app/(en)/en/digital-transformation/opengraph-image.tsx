import { getDictionary } from "@/lib/i18n/dictionaries";
import { ogSize, renderOgImage } from "@/lib/og";

const dict = getDictionary("en");

export const size = ogSize;
export const contentType = "image/png";
export const alt = dict.meta.digitalTransformationTitle;

export default function Image() {
  return renderOgImage("en", {
    title: [...dict.landings.digitalTransformation.hero.titleLines, dict.landings.digitalTransformation.hero.titleHighlight].join(" "),
    description: dict.meta.digitalTransformationDescription,
  });
}
