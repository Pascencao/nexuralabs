/** Etiqueta de sección. En fondos claros el texto va en ink (AA) y el dorado queda como acento. */
export default function Kicker({
  children,
  tone = "light",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-wide ${
        tone === "dark" ? "text-gold" : "text-ink"
      } ${className}`.trim()}
    >
      <span aria-hidden="true" className="h-0.5 w-6 shrink-0 rounded-full bg-gold" />
      {children}
    </p>
  );
}
