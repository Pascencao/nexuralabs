"use client";

import { Check, Settings2, Hammer, Rocket } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import type { Dictionary } from "@/lib/i18n/types";

type Detail = Dictionary["serviceDetail"]["ops"];

function LineLabel({
  icon: Icon,
  colorClass,
  name,
}: {
  icon: typeof Settings2;
  colorClass: string;
  name: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${colorClass}`}>
        <Icon size={18} />
      </div>
      <span className="text-lg font-bold text-ink">{name}</span>
    </div>
  );
}

function Differentiators({ items, colorClass }: { items: string[]; colorClass: string }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${colorClass}`}
          >
            <Check size={12} strokeWidth={3} />
          </span>
          <span className="text-sm text-muted">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function OpsDetail({ detail }: { detail: Detail }) {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
      <div>
        <LineLabel icon={Settings2} colorClass="bg-ops" name={detail.name} />
        <p className="mt-6 text-xl italic text-ink/80">&ldquo;{detail.problem}&rdquo;</p>
        <p className="mt-6 text-base text-muted">{detail.whatWeDo}</p>
      </div>
      <div className="rounded-2xl bg-white p-8 shadow-card">
        <Differentiators items={detail.differentiators} colorClass="bg-ops" />
      </div>
    </div>
  );
}

function ScaleDetail({ detail }: { detail: Detail }) {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
      <div className="order-2 rounded-2xl bg-white p-8 shadow-card lg:order-1">
        <Differentiators items={detail.differentiators} colorClass="bg-scale" />
      </div>
      <div className="order-1 lg:order-2">
        <LineLabel icon={Rocket} colorClass="bg-scale" name={detail.name} />
        <p className="mt-6 text-xl italic text-ink/80">&ldquo;{detail.problem}&rdquo;</p>
        <p className="mt-6 text-base text-muted">{detail.whatWeDo}</p>
      </div>
    </div>
  );
}

function BuildDetail({ detail }: { detail: Detail }) {
  return (
    <div>
      <div className="rounded-2xl bg-white p-8 shadow-card sm:p-10">
        <LineLabel icon={Hammer} colorClass="bg-build" name={detail.name} />
        <p className="mt-6 text-xl italic text-ink/80">&ldquo;{detail.problem}&rdquo;</p>
        <p className="mt-6 max-w-3xl text-base text-muted">{detail.whatWeDo}</p>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {detail.differentiators.map((item) => (
          <div key={item} className="rounded-2xl bg-white p-6 shadow-card">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-build text-white">
              <Check size={14} strokeWidth={3} />
            </span>
            <p className="mt-4 text-sm text-muted">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServiceDetails() {
  const { dict } = useLanguage();
  const { ops, build, scale } = dict.serviceDetail;

  return (
    <div className="bg-canvas pt-20 pb-20 sm:pt-28 sm:pb-28">
      <div className="mx-auto max-w-site space-y-20 px-5 sm:space-y-24 sm:px-8">
        <OpsDetail detail={ops} />
        <BuildDetail detail={build} />
        <ScaleDetail detail={scale} />
      </div>
    </div>
  );
}
