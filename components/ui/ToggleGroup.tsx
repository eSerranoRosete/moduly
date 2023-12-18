import React, { forwardRef } from "react";
import * as RadixToggleGroup from "@radix-ui/react-toggle-group";
import { AlignCenter, AlignLeft, AlignRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Controller } from "react-hook-form";

const toggleGroupItemClasses =
  "data-[state=on]:bg-indigo-9 p-1 text-slate-12 flex items-center justify-center bg-slate-4 w-fit text-base leading-4 first:rounded-l last:rounded-r focus:z-10 focus:outline-none";

interface ToggleGroupProps extends RadixToggleGroup.ToggleGroupImplSingleProps {
  className?: string;
  label?: string;
  helperText?: string;
  defaultValue?: string;
}

export const ToggleGroup = ({
  className,
  label,
  helperText,
  ...rest
}: ToggleGroupProps) => (
  <div className={cn("relative flex gap-4 justify-between", className)}>
    {(label || helperText) && (
      <div>
        {label && (
          <label className="block text-xs font-semibold mb-1">{label}</label>
        )}
        {helperText && (
          <p className="block text-xs text-slate-10">{helperText}</p>
        )}
      </div>
    )}

    <RadixToggleGroup.Root
      className="inline-flex w-fit rounded-md space-x-1"
      type="single"
      {...rest}
    >
      <ToggleGroupItem value="left" aria-label="left aligned">
        <AlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="center aligned">
        <AlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="right aligned">
        <AlignRight />
      </ToggleGroupItem>
    </RadixToggleGroup.Root>
  </div>
);

interface ToggleGroupItemProps extends RadixToggleGroup.ToggleProps {
  value: string;
}

export const ToggleGroupItem = ({
  className,
  children,
  ...rest
}: ToggleGroupItemProps) => {
  return (
    <RadixToggleGroup.Item
      className={cn(toggleGroupItemClasses, className)}
      {...rest}
    >
      {children}
    </RadixToggleGroup.Item>
  );
};
