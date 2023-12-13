import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes } from "react";

type ButtonVariants = "default" | "flat";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  variant?: ButtonVariants;
}

export const Button = ({ icon, variant, className, ...props }: ButtonProps) => {
  const Icon = icon;

  return (
    <button
      className={cn(
        "gap-2 py-2 px-4 text-sm font-semibold bg-blue-700 hover:bg-blue-600 rounded-md",
        icon &&
          !props.children &&
          "w-10 h-10 flex items-center justify-center p-2",
        variant === "flat" && "bg-zinc-900 hover:bg-zinc-800 text-zinc-300",
        className
      )}
      {...props}
    >
      {icon && Icon}
      {props.children}
    </button>
  );
};
