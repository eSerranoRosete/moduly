import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  endContent?: React.ReactNode;
}

export const Input = ({ label, endContent, ...props }: InputProps) => {
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
          "bg-zinc-900 text-sm w-full pt-6 px-3 font-medium placeholder-zinc-500 text-zinc-400 border-transparent rounded-md focus:border-zinc-600 focus:outline-none focus:ring-0",
          props.className
        )}
      />

      {endContent && (
        <div className="absolute bottom-2 right-2">{endContent}</div>
      )}
    </div>
  );
};
