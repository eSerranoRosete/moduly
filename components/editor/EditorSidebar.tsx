import React from "react";
import { IconButton } from "../ui/IconButton";
import { LayoutPanelLeft } from "lucide-react";
import { ModuleElements } from "@/lib/types/ModuleTypes";
import { ModuleBtnElement } from "./ModuleButtonElement";

export const EditorSidebar = () => {
  return (
    <aside className="w-full max-w-md h-full flex gap-4 rounded-md">
      <div className="h-ful flex flex-col gap-4">
        <IconButton>
          <LayoutPanelLeft className="w-6" />
        </IconButton>
      </div>
      <div className="w-full bg-slate-2 p-4 rounded-md">
        <h2 className="font-semibold">Modules</h2>
        <p className="text-slate-11 text-sm">
          Add and customize modules to your card
        </p>
        <div className="w-full h-[1px] my-4 bg-slate-6" />
        <ModuleBtnElement element={ModuleElements.Heading} />
      </div>
    </aside>
  );
};
