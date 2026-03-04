import { cn } from "@/lib/cn";
import Link from "next/link";
import styles from "./button.module.css";

const BUTTON_VARIANTS = new Set(["primary", "secondary"]);

export function Button({ children, className = "", ...props }) {
  const classTokens = typeof className === "string" ? className.split(/\s+/).filter(Boolean) : [];
  const variantToken = classTokens.find((token) => BUTTON_VARIANTS.has(token)) ?? "primary";
  const passthroughClasses = classTokens.filter((token) => !BUTTON_VARIANTS.has(token)).join(" ");
  const classes = cn(styles[variantToken], passthroughClasses);

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
