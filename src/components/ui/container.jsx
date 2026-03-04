import { cn } from "@/lib/cn";

export function Container({ children, className }) {
  return <div className={cn("layout-container", className)}>{children}</div>;
}
