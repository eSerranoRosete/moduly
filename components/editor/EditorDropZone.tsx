import { useModulesStore } from "@/lib/hooks/useModulesStore";
import {
  ModuleElementInstance,
  ModuleElements,
  ModulesType,
} from "@/lib/types/ModuleTypes";
import { cn, generateId } from "@/lib/utils";
import { useDndMonitor, useDraggable, useDroppable } from "@dnd-kit/core";
import { useEditor } from "../context/CardContext";
import { useState } from "react";
import { IconButton } from "../ui/IconButton";
import { Trash2 } from "lucide-react";
import { ModuleElemenWrapper } from "./ModuleElementWrapper";

export const EditorDropZone = () => {
  const { elements, addElement, selectedElement, setSelectedElement } =
    useEditor();

  const droppable = useDroppable({
    id: "editor-drop-area",
    data: {
      isEditorDropArea: true,
    },
  });

  console.log(elements);

  useDndMonitor({
    onDragEnd: (event) => {
      const { active, over } = event;

      if (!active || !over) return;

      const isEditorBtnElement = active.data.current?.isEditorBtnElement;

      if (isEditorBtnElement) {
        const type = active.data.current?.type as ModulesType;
        const newElement = ModuleElements[type].constructor(generateId());

        addElement(0, newElement);
      }
    },
  });

  return (
    <div
      className="w-full h-full rounded-md bg-slate-2 p-4 overflow-y-auto"
      onClick={() => selectedElement && setSelectedElement(null)}
    >
      <div
        ref={droppable.setNodeRef}
        className={cn(
          "w-full h-full bg-slate-1 max-w-md relative m-auto rounded-md shadow-lg flex flex-col p-2",
          droppable.isOver && "ring-2 ring-slate-9"
        )}
      >
        {!elements && (
          <>
            {droppable.isOver && (
              <div className="bg-slate-3 h-20 w-full rounded-md" />
            )}
            {!droppable.isOver && <div className="m-auto">Drop Here</div>}
          </>
        )}

        {elements && (
          <div className="w-full flex flex-col gap-2">
            {elements.map((element) => (
              <ModuleElemenWrapper key={element.id} element={element} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
