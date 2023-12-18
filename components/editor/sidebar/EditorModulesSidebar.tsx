import React from "react";
import { ModuleBtnElement } from "../ModuleButtonElement";
import { ModuleElements } from "@/lib/types/ModuleTypes";
import { Divider } from "@/components/ui/Divider";

export const EditorModulesSidebar = () => {
  return (
    <div className="grid gap-5">
      <div>
        <h2 className="font-semibold text-sm">Modules</h2>
        <p className="text-slate-11 text-xs">
          Add and customize modules to your card
        </p>
      </div>
      <Divider />
      <ModuleBtnElement element={ModuleElements.Text} />
    </div>
  );
};
