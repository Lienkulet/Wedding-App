import { cn } from "@/lib/cn";
import styles from "./container.module.css";

export function Container({ children, className }) {
  return <div className={cn(styles.container, className)}>{children}</div>;
}
