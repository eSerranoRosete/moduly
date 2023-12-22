"use client";

import { Cog, LayoutPanelLeft } from "lucide-react";

import { EditorModulesSidebar } from "./EditorModulesSidebar";
import { EditorPropertiesSidebar } from "./EditorPropertiesSidebar";
import { useEditorStore } from "@/components/context/useEditorStore";
import { Button } from "@/components/ui/button";

export const EditorSidebar = () => {
  const selectedElement = useEditorStore((s) => s.selectedElement);

  return (
    <aside className="w-full max-w-md  h-full flex gap-4 rounded-md">
      <div className="h-ful flex flex-col gap-4">
        <Button size="icon">
          <LayoutPanelLeft className="w-6" />
        </Button>
        <Button variant="secondary" size="icon">
          <Cog className="w-6" />
        </Button>
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
