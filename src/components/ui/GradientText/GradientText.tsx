import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface GradientTextProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}


export function GradientText({ children, as: Tag = "span", className }: GradientTextProps) {
  return <Tag className={cn("gradient-text", className)}>{children}</Tag>;
}
