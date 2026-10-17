import { LiveDot } from "@/components/landing/hub/ui";

type ConsoleCopy = {
  title: string;
  live: string;
  kpis: { value: string; label: string; warn?: boolean }[];
  question: string;
  answer: string;
};

const LINE_YS = [22, 74, 126, 178, 230, 282];

/** Visual del hero: los 6 sistemas convergen (líneas animadas) en una mini consola. */
export default function SystemsToConsole({ systems, copy }: { systems: string[]; copy: ConsoleCopy }) {
  return (
    <div className="flex min-w-0 flex-[1_1_560px] flex-col items-center gap-4 min-[720px]:flex-row min-[720px]:gap-0">
      <ul className="flex w-full flex-row flex-wrap gap-2.5 min-[720px]:w-[132px] min-[720px]:shrink-0 min-[720px]:flex-col">
        {systems.map((system) => (
          <li
            key={system}
            className="flex items-center gap-2 whitespace-nowrap rounded-[10px] border border-[#243042] bg-hub-surface px-3 py-2.5 text-[13px] text-[#D5DCE6]"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-hub-amber" />
            {system}
          </li>
        ))}
      </ul>

      <svg
        aria-hidden="true"
        width="72"
        height="300"
        viewBox="0 0 72 300"
        preserveAspectRatio="none"
        className="hidden shrink-0 min-[720px]:block"
      >
        {LINE_YS.map((y) => (
          <path
            key={y}
            className="hub-flow"
            d={`M0 ${y} C40 ${y} 36 150 72 150`}
            fill="none"
            stroke="#F4B740"
            strokeWidth="1.5"
          />
        ))}
      </svg>

      <div className="w-full min-w-0 flex-auto overflow-hidden rounded-[18px] border border-hub-line-2 bg-hub-ink-2 shadow-[0_30px_80px_rgba(0,0,0,.5),0_0_0_6px_rgba(244,183,64,.06)]">
        <div className="flex items-center justify-between border-b border-hub-line px-4 py-3">
          <span className="font-plex-mono text-xs text-hub-muted">{copy.title}</span>
          <span className="inline-flex items-center gap-1.5 font-plex-mono text-[11px] text-hub-live">
            <LiveDot size={7} />
            {copy.live}
          </span>
        </div>
        <dl className="grid grid-cols-2 gap-2.5 p-4">
          {copy.kpis.map((kpi) => (
            <div
              key={kpi.label}
              className={`flex flex-col-reverse rounded-xl p-3.5 ${
                kpi.warn ? "border border-[#5C4518] bg-[#2A2112]" : "bg-hub-surface-2"
              }`}
            >
              <dt className={`text-xs ${kpi.warn ? "text-[#E3C78E]" : "text-hub-subtle"}`}>{kpi.label}</dt>
              <dd className={`font-display text-[30px] font-bold ${kpi.warn ? "text-hub-amber" : "text-white"}`}>
                {kpi.value}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mx-4 mb-4 flex flex-col gap-2.5 rounded-xl bg-hub-surface-2 p-3.5">
          <p className="m-0 max-w-[85%] self-end rounded-[12px_12px_4px_12px] bg-hub-amber px-3 py-[9px] text-[13px] text-hub-ink">
            {copy.question}
          </p>
          <p className="m-0 max-w-[90%] self-start rounded-[12px_12px_12px_4px] bg-[#1E2836] px-3 py-[9px] text-[13px] leading-[1.45] text-hub-text">
            {copy.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
