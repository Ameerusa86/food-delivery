import * as React from "react";
import { cn } from "@/lib/utils";

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "spinner" | "dots";
}

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-12 w-12",
};

function Loader({
  className,
  size = "md",
  variant = "default",
  ...props
}: LoaderProps) {
  if (variant === "spinner") {
    return (
      <div
        className={cn(
          "inline-block animate-spin rounded-full border-4 border-muted border-t-primary",
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }

  if (variant === "dots") {
    return (
      <div className={cn("flex items-center gap-1", className)} {...props}>
        <div
          className="h-2 w-2 rounded-full bg-primary animate-bounce"
          style={{ animationDelay: "0ms" }}
        />
        <div
          className="h-2 w-2 rounded-full bg-primary animate-bounce"
          style={{ animationDelay: "150ms" }}
        />
        <div
          className="h-2 w-2 rounded-full bg-primary animate-bounce"
          style={{ animationDelay: "300ms" }}
        />
      </div>
    );
  }

  // Default variant - Smooth pulse
  return (
    <div
      className={cn("flex items-center justify-center", className)}
      {...props}
    >
      <div className={cn("relative", sizeClasses[size])}>
        <div className="absolute inset-0 rounded-full bg-primary animate-pulse" />
        <div className="absolute inset-1 rounded-full bg-background" />
      </div>
    </div>
  );
}

export { Loader };
