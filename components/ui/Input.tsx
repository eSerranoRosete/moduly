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
          "bg-dark-900 text-sm w-full pt-6 px-3 font-medium placeholder-dark-300 text-dark-100 border-transparent rounded-md focus:border-dark-600 focus:outline-none focus:ring-0",
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
