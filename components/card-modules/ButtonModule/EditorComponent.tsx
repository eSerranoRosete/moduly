import { ModuleElementInstance } from "@/lib/types/ModuleTypes";

import { Button } from "@/components/ui/button";
import { CustomInstance } from "./ButtonModuleTypes";

export function EditorComponent({
  elementInstance,
}: {
  elementInstance: ModuleElementInstance;
}) {
  const element = elementInstance as CustomInstance;

  const { label, color, backgroundColor } = element.attributes;

  return (
    <div className="p-2">
      <Button style={{ backgroundColor, color }} className="w-full">
        {label}
      </Button>
    </div>
  );
}
