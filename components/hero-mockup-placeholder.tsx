/** Reserva espacio del mockup para evitar CLS mientras carga el chunk cliente. */
export default function HeroMockupPlaceholder() {
  return (
    <div
      className="relative mx-auto w-full max-w-lg select-none rounded-2xl border border-nexura-border bg-nexura-surface/80 shadow-card lg:max-w-none"
      style={{ minHeight: "clamp(280px, 52vw, 420px)" }}
      aria-hidden
    >
      <div className="absolute inset-0 animate-pulse rounded-2xl bg-gradient-to-br from-nexura-border/40 via-transparent to-nexura-violet/10" />
    </div>
  );
}
