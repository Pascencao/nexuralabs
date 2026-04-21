"use client";

import dynamic from "next/dynamic";

export default dynamic(() => import("@/components/ui/calendar"), {
  ssr: false,
  loading: () => (
    <section
      className="border-t border-nexura-border bg-nexura-surface/30"
      aria-busy="true"
      aria-label="Cargando calendario"
    >
      <div className="mx-auto max-w-site px-5 py-12 sm:px-8 md:py-16">
        <div className="mx-auto mb-8 h-8 max-w-md animate-pulse rounded bg-nexura-border/60" />
        <div className="min-h-[600px] w-full animate-pulse rounded-2xl border border-nexura-border bg-nexura-bg/50" />
      </div>
    </section>
  ),
});
