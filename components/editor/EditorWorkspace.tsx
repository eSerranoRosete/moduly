"use client";

import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { EditorContextProvider } from "../context/CardContext";
import { DragOverlayWrapper } from "./DragOverlayWrapper";
import { EditorDropZone } from "./EditorDropZone";
import { EditorSidebar } from "./sidebar/EditorSidebar";

export const EditorWorkspace = () => {
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  return (
    <EditorContextProvider>
      <DndContext sensors={sensors}>
        <div className="w-full grow mb-4 flex gap-4">
          <EditorSidebar />
          <EditorDropZone />
        </div>
        <DragOverlayWrapper />
      </DndContext>
    </EditorContextProvider>
  );
};
