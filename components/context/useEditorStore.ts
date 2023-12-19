import { ModuleElementInstance } from "@/lib/types/ModuleTypes";
import { create } from "zustand";

type State = {
  elements: ModuleElementInstance[];
  selectedElement: ModuleElementInstance | null;
};

type Actions = {
  addElement: (index: number, element: ModuleElementInstance) => void;
  updateElement: (id: string, element: ModuleElementInstance) => void;
  removeElement: (id: string) => void;

  setSelectedElement: (element: ModuleElementInstance | null) => void;
};

export const useEditorStore = create<State & Actions>((set, get) => ({
  elements: [],
  selectedElement: null,

  addElement: (index, element) =>
    set((state) => {
      const elements = [...state.elements];
      elements.splice(index, 0, element);
      return { elements };
    }),
  updateElement: (id, element) =>
    set((state) => {
      const elements = [...state.elements];
      const index = elements.findIndex((e) => e.id === id);
      elements[index] = element;
      return { elements };
    }),

  removeElement: (id) =>
    set((state) => {
      const elements = [...state.elements];
      const index = elements.findIndex((e) => e.id === id);
      elements.splice(index, 1);
      return { elements };
    }),

  setSelectedElement: (element) => set({ selectedElement: element }),
}));
