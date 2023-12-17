"use client";

import { ModuleElement } from "@/lib/types/ModuleTypes";
import React from "react";
import { Button } from "../ui/Button";
import { useDraggable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

type Props = {
  element: ModuleElement;
};

export const ModuleBtnElement = ({ element }: Props) => {
  const { label, icon: Icon } = element.editorButtonElement;

  const draggable = useDraggable({
    id: `editor-btn-${element.type}`,
    data: {
      type: element.type,
      isEditorBtnElement: true,
    },
  });

  return (
    <Button
      ref={draggable.setNodeRef}
      variant="flat"
      className={cn(
        "flex-col p-4 cursor-grab",
        draggable.isDragging && "ring-2 ring-indigo-9"
      )}
      {...draggable.attributes}
      {...draggable.listeners}
    >
      <Icon className="w-6" />
      <span className="text-xs">{label}</span>
    </Button>
  );
};

export const ModuleBtnElementDragOverlay = ({ element }: Props) => {
  const { label, icon: Icon } = element.editorButtonElement;

  return (
    <Button variant="flat" className={"flex-col p-4 cursor-grab"}>
      <Icon className="w-6" />
      <span className="text-xs">{label}</span>
    </Button>
  );
};
