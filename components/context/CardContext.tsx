"use client";

import { ModuleElementInstance } from "@/lib/types/ModuleTypes";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type EditorContextType = {
  elements: ModuleElementInstance[] | null;

  addElement: (index: number, element: ModuleElementInstance) => void;
  removeElement: (id: string) => void;

  selectedElement: ModuleElementInstance | null;
  setSelectedElement: Dispatch<SetStateAction<ModuleElementInstance | null>>;
};

export const EditorContext = createContext<EditorContextType | null>(null);

export const EditorContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [elements, setElements] = useState<ModuleElementInstance[] | null>(
    null
  );

  const [selectedElement, setSelectedElement] =
    useState<ModuleElementInstance | null>(null);

  const addElement = (index: number, element: ModuleElementInstance) => {
    setElements((prev) => {
      const newElements = [...(prev || [])];
      newElements.splice(index, 0, element);
      return newElements;
    });
  };

  const removeElement = (id: string) => {
    setElements((prev) => {
      const newElements = [...(prev || [])];

      return newElements.filter((element) => element.id !== id);
    });
  };

  return (
    <EditorContext.Provider
      value={{
        elements,
        addElement,
        removeElement,
        selectedElement,
        setSelectedElement,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);

  if (!context) {
    throw new Error("useEditor must be used within a EditorContextProvider");
  }

  return context;
};
