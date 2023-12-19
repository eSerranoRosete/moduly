import { ModuleElements, ModulesType } from "@/lib/types/ModuleTypes";
import { cn, generateId } from "@/lib/utils";
import { useDndMonitor, useDroppable } from "@dnd-kit/core";
import { useEditorStore } from "../context/useEditorStore";
import { ModuleElemenWrapper } from "./ModuleElementWrapper";

export const EditorDropZone = () => {
  const store = useEditorStore((s) => ({
    elements: s.elements,
    addElement: s.addElement,
    selectedElement: s.selectedElement,
    setSelectedElement: s.setSelectedElement,
    removeElement: s.removeElement,
  }));

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

        let elementIndex = store.elements ? store.elements.length : 0;

        store.addElement(elementIndex, newElement);
        store.setSelectedElement(newElement);
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

        if (store.elements) {
          const overElementIndex = store.elements.findIndex(
            (el) => el.id === over.data.current?.id
          );

          if (overElementIndex === -1) {
            throw new Error("Element not found");
          }

          let elementIndex = overElementIndex;

          if (isDroppingOverModuleElementBottomHalf) {
            elementIndex = overElementIndex + 1;
          }

          store.addElement(elementIndex, newElement);
          store.setSelectedElement(newElement);
          return;
        }
      }

      const isDraggingEditoElement = active.data.current?.isEditorElement;

      const isDragginModuleOverModule =
        isDroppingOverModuleElement && isDraggingEditoElement;

      if (isDragginModuleOverModule) {
        const activeId = active.data.current?.id;
        const overId = over.data.current?.id;

        if (store.elements) {
          const activeElementIndex = store.elements.findIndex(
            (el) => el.id === activeId
          );

          const overElementIndex = store.elements.findIndex(
            (el) => el.id === overId
          );

          if (activeElementIndex === -1 || overElementIndex === -1) {
            throw new Error("Element not found");
          }

          const activeElement = { ...store.elements[activeElementIndex] };
          store.removeElement(activeId);

          let elementIndex = overElementIndex;

          if (isDroppingOverModuleElementBottomHalf) {
            elementIndex = overElementIndex + 1;
          }

          store.addElement(elementIndex, activeElement);
        }
      }
    },
  });

  return (
    <div
      className="w-full h-full rounded-md p-4 overflow-y-auto bg-muted/30"
      onClick={() => store.selectedElement && store.setSelectedElement(null)}
    >
      <div
        ref={droppable.setNodeRef}
        className={cn(
          "w-full h-full  max-w-md relative m-auto rounded-md shadow-lg flex flex-col p-2 bg-background",
          droppable.isOver && "ring-2 ring-primary"
        )}
      >
        {store.elements.length === 0 && (
          <>
            {droppable.isOver && (
              <div className="h-20 w-full rounded-md bg-muted" />
            )}
            {!droppable.isOver && <div className="m-auto">Drop Here</div>}
          </>
        )}

        {store.elements.length > 0 && (
          <div className="w-full flex flex-col gap-0">
            {store.elements.map((element) => (
              <ModuleElemenWrapper key={element.id} element={element} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
