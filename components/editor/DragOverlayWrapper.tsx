"use client";

import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { useState } from "react";
import { ModuleBtnElementDragOverlay } from "./ModuleButtonElement";
import {
  ModuleElement,
  ModuleElements,
  ModulesType,
} from "@/lib/types/ModuleTypes";
import { useEditorStore } from "../context/useEditorStore";

export const DragOverlayWrapper = () => {
  const [draggedItem, setItem] = useState<Active | null>(null);

  const elements = useEditorStore((s) => s.elements);

  useDndMonitor({
    onDragStart: (event) => {
      setItem(event.active);
    },
    onDragEnd: () => {
      setItem(null);
    },
    onDragCancel: () => {
      setItem(null);
    },
  });

  if (!draggedItem) return null;

  let node: JSX.Element = <div>No drag overlay</div>;

  const isEditorBtnElement = draggedItem.data.current?.isEditorBtnElement;

  if (isEditorBtnElement) {
    const type = draggedItem.data.current?.type as ModulesType;

    node = <ModuleBtnElementDragOverlay element={ModuleElements[type]} />;
  }

  const isEditorElement = draggedItem.data.current?.isEditorElement;

  if (isEditorElement) {
    const id = draggedItem.data.current?.id;

    const element = elements?.find((el) => el.id === id);

    if (!element) {
      node = <div>Element not found</div>;
    } else {
      const EditorElementComponent =
        ModuleElements[element.type].editorComponent;

      node = (
        <div className="rounded-md opacity-50 pointer-events-none bg-muted">
          <EditorElementComponent elementInstance={element} />
        </div>
      );
    }
  }

  return <DragOverlay>{node}</DragOverlay>;
};
