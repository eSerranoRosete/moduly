"use client";

import { LayoutPanelLeft } from "lucide-react";

import { IconButton } from "../../ui/IconButton";
import { EditorModulesSidebar } from "./EditorModulesSidebar";
import { EditorPropertiesSidebar } from "./EditorPropertiesSidebar";
import { useEditorStore } from "@/components/context/useEditorStore";

export const EditorSidebar = () => {
  const selectedElement = useEditorStore((s) => s.selectedElement);

  return (
    <aside className="w-full max-w-md  h-full flex gap-4 rounded-md">
      <div className="h-ful flex flex-col gap-4">
        <IconButton>
          <LayoutPanelLeft className="w-6" />
        </IconButton>
      </div>
      <div className="w-full p-4 rounded-md bg-muted/30">
        {!selectedElement ? (
          <EditorModulesSidebar />
        ) : (
          <EditorPropertiesSidebar element={selectedElement} />
        )}
      </div>
    </aside>
  );
};
