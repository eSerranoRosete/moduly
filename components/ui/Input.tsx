import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  endContent?: React.ReactNode;
  errorMessage?: string;
  variant?: "default" | "classic";
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      endContent,
      errorMessage,
      variant = "default",
      helperText,
      ...props
    }: InputProps,
    ref
  ) => {
    return (
      <div className={cn("relative", variant === "classic" && "flex flex-col")}>
        {label && (
          <label
            className={cn(
              "absolute top-2 left-3 text-xs font-bold",
              variant === "classic" && "static block mb-1"
            )}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          {...props}
          className={cn(
            "bg-slate-4 text-sm w-full pt-6 px-3 font-medium placeholder-slate-10 text-slate-11 border-transparent rounded-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-9",
            variant === "classic" && "pt-2",
            props.className
          )}
        />

        {endContent && (
          <div className="absolute bottom-2 right-2">{endContent}</div>
        )}
        {errorMessage && (
          <span className="text-xs text-rose-500 pl-2">{errorMessage}</span>
        )}
        {helperText && (
          <p className={"mt-1 text-xs text-slate-10"}>{helperText}</p>
        )}
      </div>
    );
  }
);
