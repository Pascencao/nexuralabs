"use client";

import dynamic from "next/dynamic";
import HeroMockupPlaceholder from "@/components/hero-mockup-placeholder";

const StreamingMockup = dynamic(() => import("@/components/streaming-mockup"), {
  ssr: false,
  loading: () => <HeroMockupPlaceholder />,
});

export default function HeroVisualClient() {
  return (
    <div className="relative scroll-reveal scroll-reveal-slow scroll-reveal-delay-1 animate-mockup-float will-change-transform">
      <StreamingMockup />
    </div>
  );
}
