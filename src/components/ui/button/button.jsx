import { cn } from "@/lib/cn";
import styles from "./button.module.css";

export function Button({ children, className, variant = "primary", ...props }) {
  const classes = cn(styles.button, variant === "muted" && styles.muted, className);

  if ("href" in props && props.href) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}
