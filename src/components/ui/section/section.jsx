import { cn } from "@/lib/cn";
import styles from "./section.module.css";

export function Section({ children, className, reveal = false }) {
  return (
    <section className={cn(styles.section, className)} data-reveal={reveal ? "" : undefined}>
      {children}
    </section>
  );
}
