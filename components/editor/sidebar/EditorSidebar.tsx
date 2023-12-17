"use client";

import { LayoutPanelLeft } from "lucide-react";
import { useEditor } from "../../context/CardContext";
import { IconButton } from "../../ui/IconButton";
import { EditorModulesSidebar } from "./EditorModulesSidebar";
import { EditorPropertiesSidebar } from "./EditorPropertiesSidebar";
import { ModuleElements } from "@/lib/types/ModuleTypes";

export const EditorSidebar = () => {
  const { selectedElement } = useEditor();

  return (
    <aside className="w-full max-w-md h-full flex gap-4 rounded-md">
      <div className="h-ful flex flex-col gap-4">
        <IconButton>
          <LayoutPanelLeft className="w-6" />
        </IconButton>
      </div>
      <div className="w-full bg-slate-2 p-4 rounded-md">
        {!selectedElement ? (
          <EditorModulesSidebar />
        ) : (
          <EditorPropertiesSidebar element={selectedElement} />
        )}
      </div>
    </aside>
  );
};
