import { ModuleElementInstance, ModuleElements } from "@/lib/types/ModuleTypes";
import { cn } from "@/lib/utils";
import { useDroppable, useDraggable } from "@dnd-kit/core";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useEditor } from "../context/CardContext";
import { IconButton } from "../ui/IconButton";
import { AlertDialog } from "../ui/AlertDialog";
import { Button } from "../ui/Button";

type ModuleElemenWrapperProps = {
  element: ModuleElementInstance;
};

export const ModuleElemenWrapper = ({ element }: ModuleElemenWrapperProps) => {
  const [mouseOver, setMouseOver] = useState(false);

  const { removeElement, selectedElement, setSelectedElement } = useEditor();

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

  console.log(selectedElement, "🟦");

  return (
    <div
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
      className="w-full rounded-md border border-dashed border-slate-4 relative !select-none cursor-pointer"
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedElement(element);
      }}
    >
      {mouseOver && (
        <div className="absolute top-0 text-sm flex items-center justify-center z-10 left-0 w-full h-full bg-slate-2 opacity-85 rounded-md">
          <AlertDialog
            title="Delete Module"
            subTitle="Are you sure you want to delete this module?"
            cancelBtn={<Button variant="flat">Cancel</Button>}
            actionBtn={
              <Button
                variant="danger"
                onClick={(e) => {
                  e.stopPropagation();
                  removeElement(element.id);
                  if (selectedElement?.id === element.id) {
                    setSelectedElement(null);
                  }
                }}
              >
                Delete
              </Button>
            }
            trigger={
              <IconButton variant="danger" className="h-full absolute right-0">
                <Trash2 className="w-4" />
              </IconButton>
            }
          ></AlertDialog>
          Click to edit or drag to move
        </div>
      )}

      <div
        ref={topHalf.setNodeRef}
        className={cn(
          "absolute w-full h-1/2 top-0",
          topHalf.isOver && "border-t-4 border-indigo-9"
        )}
      />
      <EditorComponent elementInstance={element} />
      <div
        ref={bottomHalf.setNodeRef}
        className={cn(
          "absolute w-full h-1/2 bottom-0",
          bottomHalf.isOver && "border-b-4 border-indigo-9"
        )}
      />
    </div>
  );
};
