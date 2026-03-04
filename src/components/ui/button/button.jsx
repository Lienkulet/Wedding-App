import { cn } from "@/lib/cn";
import Link from "next/link";
import styles from "./button.module.css";

export function Button({ children, className, variant = "primary", ...props }) {
  const classes = cn(styles.button, variant === "muted" && styles.muted, className);

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link className={classes} href={href} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}
