import { cn } from "@/lib/cn";

export function Card({ children, className, reveal = false, delayMs = 0 }) {
  const style = delayMs ? { "--reveal-delay": `${delayMs}ms` } : undefined;

  return (
    <article className={cn("ui-card", className)} data-reveal={reveal ? "" : undefined} style={style}>
      {children}
    </article>
  );
}
