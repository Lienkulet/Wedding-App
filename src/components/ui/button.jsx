import { cn } from "@/lib/cn";

export function Button({ children, className, variant = "primary", ...props }) {
  const classes = cn("ui-button", variant === "muted" && "ui-button-muted", className);

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
