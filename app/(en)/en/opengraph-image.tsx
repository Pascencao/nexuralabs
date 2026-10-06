import { getDictionary } from "@/lib/i18n/dictionaries";
import { ogSize, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = getDictionary("en").meta.homeTitle;

export default function Image() {
  return renderOgImage("en");
}
