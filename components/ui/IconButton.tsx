import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Button, ButtonSizes, ButtonVariants } from "./button";
import { cn } from "@/lib/utils";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  size?: ButtonSizes;
}

export const IconButton = ({
  size = "md",
  className,
  children,
  ...props
}: IconButtonProps) => {
  return (
    <Button
      {...props}
      className={cn(
        size === "sm" && "w-8 h-8 flex items-center justify-center p-1",
        size === "md" && "w-10 h-10 flex items-center justify-center p-1.5",
        size === "lg" && "w-12 h-12 flex items-center justify-center p-2",
        className
      )}
    >
      {children}
    </Button>
  );
};
