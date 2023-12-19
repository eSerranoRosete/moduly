import { ModuleElementInstance } from "@/lib/types/ModuleTypes";

import { CustomInstance } from "./SpacerModuleTypes";
import { cn } from "@/lib/utils";

export function EditorComponent({
  elementInstance,
}: {
  elementInstance: ModuleElementInstance;
}) {
  const element = elementInstance as CustomInstance;

  const { size } = element.attributes;

  return (
    <div
      className={cn(
        size === "3" && "p-3",
        size === "4" && "p-4",
        size === "5" && "p-5",
        size === "6" && "p-6",
        size === "7" && "p-7",
        size === "8" && "p-8"
      )}
    ></div>
  );
}
