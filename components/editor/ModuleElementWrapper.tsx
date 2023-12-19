import { ModuleElementInstance, ModuleElements } from "@/lib/types/ModuleTypes";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useEditorStore } from "../context/useEditorStore";

import { Button } from "../ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type ModuleElemenWrapperProps = {
  element: ModuleElementInstance;
};

export const ModuleElemenWrapper = ({ element }: ModuleElemenWrapperProps) => {
  const [mouseOver, setMouseOver] = useState(false);

  const removeElement = useEditorStore((s) => s.removeElement);
  const setSelectedElement = useEditorStore((s) => s.setSelectedElement);

  const EditorComponent = ModuleElements[element.type].editorComponent;

  const topHalf = useDroppable({
    id: `${element.id}-top-half`,
    data: {
      type: element.type,
      id: element.id,
      isTopHalf: true,
    },
  });

  const bottomHalf = useDroppable({
    id: `${element.id}-bottom-half`,
    data: {
      type: element.type,
      id: element.id,
      isBottomHalf: true,
    },
  });

  const draggable = useDraggable({
    id: element.id + "-drag-handler",
    data: {
      type: element.type,
      id: element.id,
      isEditorElement: true,
    },
  });

  if (draggable.isDragging) return null;

  return (
    <div
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
      className="w-full rounded-md border  border-dashed relative !select-none cursor-pointer"
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedElement(element);
      }}
    >
      {mouseOver && (
        <div className="absolute top-0 text-sm flex items-center bg-muted/80 justify-center z-10 left-0 w-full h-full rounded-md">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="destructive"
                size="icon"
                className="h-full absolute right-0"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Trash2 className="w-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  module.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedElement(null);
                    removeElement(element.id);
                  }}
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          Click to edit or drag to move
        </div>
      )}

      <div ref={topHalf.setNodeRef} className="absolute w-full h-1/2 top-0">
        {topHalf.isOver && (
          <div className="absolute top-0 left-0 w-full h-1 -translate-y-full rounded-full bg-primary opacity-80" />
        )}
      </div>
      <EditorComponent elementInstance={element} />
      <div
        ref={bottomHalf.setNodeRef}
        className="absolute w-full h-1/2 bottom-0"
      >
        {bottomHalf.isOver && (
          <div className="absolute bottom-0 left-0 w-full h-1 translate-y-full rounded-full  bg-primary opacity-80" />
        )}
      </div>
    </div>
  );
};
