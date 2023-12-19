import { Separator } from "@/components/ui/separator";
import { ModuleElements } from "@/lib/types/ModuleTypes";
import { ModuleBtnElement } from "../ModuleButtonElement";

export const EditorModulesSidebar = () => {
  return (
    <div className="grid gap-5">
      <div>
        <h2 className="font-semibold text-sm">Modules</h2>
        <p className="text-xs">Add and customize modules to your card</p>
      </div>
      <Separator />
      <div className="grid grid-cols-4 gap-4">
        <ModuleBtnElement element={ModuleElements.Text} />
        <ModuleBtnElement element={ModuleElements.Spacer} />
      </div>
    </div>
  );
};
