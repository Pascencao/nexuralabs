"use client";

import dynamic from "next/dynamic";
import type { Dictionary } from "@/lib/i18n/types";
import HeroMockupPlaceholder from "@/components/hero-mockup-placeholder";

const StreamingMockup = dynamic(() => import("@/components/streaming-mockup"), {
  ssr: false,
  loading: () => <HeroMockupPlaceholder />,
});

export default function HeroVisualClient({
  mockup,
}: {
  mockup: Dictionary["mockup"];
}) {
  return (
    <div className="relative scroll-reveal scroll-reveal-slow scroll-reveal-delay-1 animate-mockup-float will-change-transform">
      <StreamingMockup copy={mockup} />
    </div>
  );
}
