import { ModuleElementInstance } from "@/lib/types/ModuleTypes";
import { CustomInstance } from "./TextModuleTypes";
import { cn } from "@/lib/utils";

export function EditorComponent({
  elementInstance,
}: {
  elementInstance: ModuleElementInstance;
}) {
  const element = elementInstance as CustomInstance;

  const { fontSize, fontWeight, padding, textAlign } = element.attributes;

  return (
    <div
      className={cn(
        "text-center text-2xl p-4",

        fontSize === "xs" && "text-xs",
        fontSize === "sm" && "text-sm",
        fontSize === "base" && "text-base",
        fontSize === "lg" && "text-lg",
        fontSize === "xl" && "text-xl",
        fontSize === "2xl" && "text-2xl",
        fontSize === "3xl" && "text-3xl",
        fontSize === "4xl" && "text-4xl",

        fontWeight === "light" && "font-light",
        fontWeight === "normal" && "font-normal",
        fontWeight === "medium" && "font-medium",
        fontWeight === "bold" && "font-bold",

        padding === "0" && "p-0",
        padding === "1" && "p-1",
        padding === "2" && "p-2",
        padding === "3" && "p-3",
        padding === "4" && "p-4",
        padding === "5" && "p-5",
        padding === "6" && "p-6",
        padding === "7" && "p-7",
        padding === "8" && "p-8",

        textAlign === "left" && "text-left",
        textAlign === "center" && "text-center",
        textAlign === "right" && "text-right"
      )}
    >
      {element.attributes.text}
    </div>
  );
}
