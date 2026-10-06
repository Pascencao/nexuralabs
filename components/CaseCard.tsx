"use client";

import { useEffect, useRef } from "react";
import Placeholder from "@/components/Placeholder";
import type { CaseStudy } from "@/lib/i18n/types";
import { track } from "@/lib/analytics/track";

export default function CaseCard({
  item,
  labels,
}: {
  item: CaseStudy;
  labels: { problem: string; solution: string; results: string };
}) {
  const [clientBefore, clientAfter = ""] = item.client.split("{sector}");
  const ref = useRef<HTMLElement>(null);

  // view_case: una vez por carga de página, cuando la card queda al menos 50 % visible.
  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          track({ name: "view_case", caseId: item.id });
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [item.id]);

  return (
    <article ref={ref} className="rounded-2xl bg-canvas p-8 shadow-card sm:p-10">
      <span className="inline-block rounded-full bg-build/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-build">
        {item.tag}
      </span>
      <h3 className="mt-5 max-w-3xl text-2xl font-bold text-ink">{item.title}</h3>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted">
            {labels.problem}
          </h4>
          <p className="mt-3 text-base text-ink/80">{item.problem}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted">
            {labels.solution}
          </h4>
          <p className="mt-3 text-base text-ink/80">{item.solution}</p>
        </div>
      </div>

      <div className="mt-10 border-t border-ink/10 pt-8">
        <h4 className="sr-only">{labels.results}</h4>
        <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {item.results.map((result) => (
            <div key={result.label} className="flex flex-col-reverse">
              <dt className="mt-2 text-sm text-muted">{result.label}</dt>
              <dd>
                {result.placeholder ? (
                  <Placeholder>{result.value}</Placeholder>
                ) : (
                  <span className="text-4xl font-bold text-ink">{result.value}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <p className="mt-8 text-sm text-muted">
        {clientBefore}
        {item.clientPlaceholder && <Placeholder>{item.clientPlaceholder}</Placeholder>}
        {clientAfter}
      </p>
    </article>
  );
}
