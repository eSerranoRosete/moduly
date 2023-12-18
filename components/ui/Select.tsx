import { cn } from "@/lib/utils";
import * as RadixSelect from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";

interface Props extends RadixSelect.SelectProps {
  placeholder?: string;
  options: SelectOption[];
  label: string;
  helperText?: string;
  variant?: "default" | "inline";
}

export const Select = ({
  placeholder,
  options,
  label,
  helperText,
  variant = "default",
  ...rest
}: Props) => (
  <div
    className={cn(
      "relative",
      variant === "inline" && "flex gap-2 justify-between"
    )}
  >
    {label && (
      <label className="block text-xs font-semibold mb-1">{label}</label>
    )}
    <RadixSelect.Root {...rest}>
      <RadixSelect.Trigger className="w-fit p-2 bg-slate-4 gap-2 px-4 inline-flex rounded-md text-sm text-slate-11 items-center justify-between">
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon>
          <ChevronDown className="w-4" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content className="overflow-hidden bg-slate-2 absolute top-0 w-full left-0 p-2 border border-slate-6 rounded-md">
          <RadixSelect.ScrollUpButton />
          <RadixSelect.Viewport>
            {options.map((option) => (
              <SelectItem value={option.value} label={option.label} />
            ))}

            <RadixSelect.Separator />
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton />
          <RadixSelect.Arrow />
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
    {helperText && (
      <p
        className={cn(
          "mt-1 text-xs text-slate-10",

          variant === "inline" && "absolute left-0 bottom-1"
        )}
      >
        {helperText}
      </p>
    )}
  </div>
);

type SelectOption = {
  label: string;
  value: string;
};

interface SelectItemProps extends RadixSelect.SelectItemProps, SelectOption {}

export const SelectItem = ({ value, label }: SelectItemProps) => {
  return (
    <RadixSelect.Item
      value={value}
      className="flex pl-5 text-sm data-[highlighted]:bg-indigo-9 data-[highlighted]:text-slate-12 data-[highlighted]:outline-none  rounded-md py-1 cursor-pointer"
    >
      <RadixSelect.ItemIndicator className="absolute left-0">
        <Check className="w-3" />
      </RadixSelect.ItemIndicator>
      <RadixSelect.ItemText>{label}</RadixSelect.ItemText>
    </RadixSelect.Item>
  );
};
