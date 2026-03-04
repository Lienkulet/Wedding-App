import { cn } from "@/lib/cn";

export function Section({ children, className, reveal = false }) {
  return (
    <section className={cn("section-shell", className)} data-reveal={reveal ? "" : undefined}>
      {children}
    </section>
  );
}
