interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-nexura-muted">
      {children}
    </span>
  );
}
