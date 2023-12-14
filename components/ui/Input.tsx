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
}

export const Input = ({
  label,
  endContent,
  errorMessage,
  ...props
}: InputProps) => {
  return (
    <div className="relative">
      {label && (
        <label className="absolute top-2 left-3 text-xs font-bold">
          {label}
        </label>
      )}
      <input
        {...props}
        className={cn(
          "bg-slate-3 text-sm w-full pt-6 px-3 font-medium placeholder-slate-10 text-slate-11 border-transparent rounded-md focus:border-slate-6 focus:outline-none focus:ring-0",
          props.className
        )}
      />

      {endContent && (
        <div className="absolute bottom-2 right-2">{endContent}</div>
      )}
      {errorMessage && (
        <span className="text-xs text-rose-500 pl-2">{errorMessage}</span>
      )}
    </div>
  );
};
