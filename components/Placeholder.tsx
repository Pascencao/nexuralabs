/** Marca bien visible para datos pendientes. No mergear a develop mientras quede alguno. */
export default function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <mark className="rounded border border-dashed border-gold bg-gold/10 px-1.5 py-0.5 font-semibold text-ink">
      [PLACEHOLDER: {children}]
    </mark>
  );
}
