import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import React, { ButtonHTMLAttributes, forwardRef } from "react";

export type ButtonVariants = "default" | "flat" | "danger" | "ghost";
export type ButtonSizes = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ElementType;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  isLoading?: boolean;

  classOverride?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      icon: Icon,
      variant,
      isLoading,
      className,
      size = "md",
      ...props
    }: ButtonProps,
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={isLoading}
        className={cn(
          "gap-2 py-1.5 px-4 antialiased text-sm font-semibold transition-colors bg-indigo-9 hover:bg-indigo-10 text-slate-100 rounded-md flex items-center justify-center disabled:opacity-50 disabled:cursor-default",
          //variants
          variant === "flat" && "bg-slate-3 hover:bg-slate-4 text-slate-12",
          variant === "danger" && "bg-red-9 hover:bg-slate-6 text-slate-12",
          variant === "ghost" &&
            "bg-transparent hover:bg-slate-4 text-slate-12",
          //sizes
          size === "sm" && "py-1 px-2 text-xs",
          size === "md" && "py-1.5 px-4 text-sm",
          size === "lg" && "py-2 px-6 text-base",

          //class override
          className
        )}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 animate-spin" />}

        {Icon && !isLoading && <Icon className="w-4" />}

        {props.children}
      </button>
    );
  }
);
