import { cn } from "@/lib/utils";
import { GradientText } from "@/components/ui/GradientText";

export interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  size?: "lg" | "md";
  className?: string;
}


export function SectionHeading({
  title,
  description,
  align = "center",
  size = "lg",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >

      <GradientText
        as="h2"
        className={cn(
          "font-semibold",
          size === "lg" ? "text-h2" : "text-[32px] leading-tight sm:text-[40px]"
        )}
      >
        {title}
      </GradientText>
      {description && (
        <p
          className={cn(
            "text-body-lg text-neutral-text/80",
            align === "center" ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
