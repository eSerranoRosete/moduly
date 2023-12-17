import { ModuleElements, ModulesType } from "@/lib/types/ModuleTypes";
import { cn, generateId } from "@/lib/utils";
import { useDndMonitor, useDroppable } from "@dnd-kit/core";
import { useEditor } from "../context/CardContext";
import { ModuleElemenWrapper } from "./ModuleElementWrapper";

export const EditorDropZone = () => {
  const {
    elements,
    addElement,
    selectedElement,
    setSelectedElement,
    removeElement,
  } = useEditor();

  const droppable = useDroppable({
    id: "editor-drop-area",
    data: {
      isEditorDropArea: true,
    },
  });

  useDndMonitor({
    onDragEnd: (event) => {
      const { active, over } = event;

      if (!active || !over) return;

      const isEditorBtnElement = active.data.current?.isEditorBtnElement;

      const isDroppingOverEditorArea = over.data.current?.isEditorDropArea;

      /**
       * If the user is dragging an element from the sidebar and dropping it over the editor area
       */
      if (isEditorBtnElement && isDroppingOverEditorArea) {
        const type = active.data.current?.type as ModulesType;
        const newElement = ModuleElements[type].constructor(generateId());

        let elementIndex = elements ? elements.length : 0;

        addElement(elementIndex, newElement);
        setSelectedElement(newElement);
        return;
      }

      const isDroppingOverModuleElementTopHalf = over.data.current?.isTopHalf;
      const isDroppingOverModuleElementBottomHalf =
        over.data.current?.isBottomHalf;

      const isDroppingOverModuleElement =
        isDroppingOverModuleElementTopHalf ||
        isDroppingOverModuleElementBottomHalf;

      const isDroppingSidebarBtnOverModuleElement =
        isEditorBtnElement && isDroppingOverModuleElement;

      if (isDroppingSidebarBtnOverModuleElement) {
        const type = active.data.current?.type as ModulesType;
        const newElement = ModuleElements[type].constructor(generateId());

        if (elements) {
          const overElementIndex = elements.findIndex(
            (el) => el.id === over.data.current?.id
          );

          if (overElementIndex === -1) {
            throw new Error("Element not found");
          }

          let elementIndex = overElementIndex;

          if (isDroppingOverModuleElementBottomHalf) {
            elementIndex = overElementIndex + 1;
          }

          addElement(elementIndex, newElement);
          setSelectedElement(newElement);
          return;
        }
      }

      const isDraggingEditoElement = active.data.current?.isEditorElement;

      const isDragginModuleOverModule =
        isDroppingOverModuleElement && isDraggingEditoElement;

      if (isDragginModuleOverModule) {
        const activeId = active.data.current?.id;
        const overId = over.data.current?.id;

        if (elements) {
          const activeElementIndex = elements.findIndex(
            (el) => el.id === activeId
          );

          const overElementIndex = elements.findIndex((el) => el.id === overId);

          if (activeElementIndex === -1 || overElementIndex === -1) {
            throw new Error("Element not found");
          }

          const activeElement = { ...elements[activeElementIndex] };
          removeElement(activeId);

          let elementIndex = overElementIndex;

          if (isDroppingOverModuleElementBottomHalf) {
            elementIndex = overElementIndex + 1;
          }

          addElement(elementIndex, activeElement);
        }
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
