import React from "react";
import { ModuleBtnElement } from "../ModuleButtonElement";
import { ModuleElements } from "@/lib/types/ModuleTypes";

export const EditorModulesSidebar = () => {
  return (
    <>
      <h2 className="font-semibold text-sm">Modules</h2>
      <p className="text-slate-11 text-xs">
        Add and customize modules to your card
      </p>
      <div className="w-full h-[1px] my-4 bg-slate-6" />
      <ModuleBtnElement element={ModuleElements.Heading} />
    </>
  );
};
