"use client";

import { useEffect, useRef } from "react";
import { track } from "@/lib/analytics/track";

/** Dispara `view_landing` (ViewContent en el píxel) una vez por carga de la landing. */
export default function TrackLandingView({ landing }: { landing: string }) {
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;
    track({ name: "view_landing", landing });
  }, [landing]);

  return null;
}
