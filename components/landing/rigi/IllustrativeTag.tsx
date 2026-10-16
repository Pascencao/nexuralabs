/** Leyenda "Ejemplo ilustrativo": obligatoria en todo gráfico o pantalla de ejemplo. */
export default function IllustrativeTag({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`inline-block rounded-full border border-dashed px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
        tone === "dark" ? "border-gold text-gold" : "border-ink/30 text-ink"
      }`}
    >
      {children}
    </span>
  );
}
