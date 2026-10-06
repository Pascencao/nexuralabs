import { ImageResponse } from "next/og";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export const ogSize = { width: 1200, height: 630 };

/** Imagen OG de marca. Sin `copy` muestra el titular de la home; con `copy`, el título y la bajada dados. */
export function renderOgImage(
  locale: Locale,
  copy?: { title: string; description: string },
): ImageResponse {
  const dict = getDictionary(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0F1B2D",
          color: "#FFFFFF",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, fontWeight: 700, letterSpacing: "-0.01em" }}>
          NEXURA<span style={{ color: "#AD8A52" }}>LABS</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {copy ? (
            <div style={{ display: "flex", fontSize: 56, fontWeight: 700, lineHeight: 1.1, maxWidth: 1040 }}>
              {copy.title}
            </div>
          ) : (
            <div style={{ display: "flex", fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
              {dict.hero.titleLead}&nbsp;<span style={{ color: "#AD8A52" }}>{dict.hero.titleHighlight}</span>
            </div>
          )}
          <div style={{ display: "flex", fontSize: 30, lineHeight: 1.35, color: "rgba(255,255,255,0.72)", maxWidth: 980 }}>
            {copy?.description ?? dict.meta.homeDescription}
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
