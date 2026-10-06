/** Label + control + error accesible. El control recibe `id`, `aria-invalid` y `aria-describedby` desde afuera. */
export function FieldShell({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-ink">
        {label}
        {hint && <span className="ml-1 font-normal text-muted">{hint}</span>}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-build">
          {error}
        </p>
      )}
    </div>
  );
}

export function inputClass(invalid: boolean): string {
  return [
    "block w-full rounded-lg bg-white px-3.5 py-2.5 text-base text-ink",
    "placeholder:text-muted focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/20",
    invalid ? "border-2 border-build" : "border border-ink/20",
  ].join(" ");
}
