import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import React, { ButtonHTMLAttributes } from "react";

type ButtonVariants = "default" | "flat";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  variant?: ButtonVariants;
  isLoading?: boolean;
}

export const Button = ({
  icon,
  variant,
  isLoading,
  className,
  ...props
}: ButtonProps) => {
  const Icon = icon;

  return (
    <button
      disabled={isLoading}
      className={cn(
        "gap-2 py-1.5 px-4 antialiased text-sm font-semibold bg-blue-700 hover:bg-blue-600 rounded-md flex items-center justify-center disabled:opacity-50 disabled:cursor-default",
        icon &&
          !props.children &&
          "w-10 h-10 flex items-center justify-center p-1.5",
        variant === "flat" &&
          "bg-slate-2 hover:bg-slate-3 text-slate-11 font-normal",
        className
      )}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 animate-spin" />}

      {icon && !isLoading && Icon}

      {props.children}
    </button>
  );
};
