const DELAYS = [
  "",
  "scroll-reveal-delay-1",
  "scroll-reveal-delay-2",
  "scroll-reveal-delay-3",
  "scroll-reveal-delay-4",
  "scroll-reveal-delay-5",
] as const;

/** Fade + slide al entrar en viewport (CSS view timeline). `step` 0 = sin delay extra. */
export function scrollRevealClass(step = 0): string {
  const extra = DELAYS[Math.min(Math.max(step, 0), 5)] ?? "";
  return extra ? `scroll-reveal ${extra}` : "scroll-reveal";
}
