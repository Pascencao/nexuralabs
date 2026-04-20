import type { ReactNode } from "react";

const styles: Record<string, string> = {
  h2: "pb-6 font-inter text-3xl font-semibold tracking-tight text-white md:text-4xl",
  p: "pb-8 text-lg leading-relaxed text-nexura-muted",
};

export default function Typography({
  children,
  type,
}: {
  children: ReactNode;
  type: string;
}) {
  if (type === "h2") {
    return <h2 className={styles.h2}>{children}</h2>;
  }
  if (type === "p") {
    return <p className={styles.p}>{children}</p>;
  }
  return null;
}
