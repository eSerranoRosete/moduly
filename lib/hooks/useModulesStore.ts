"use client";

import { create } from "zustand";
import { ModuleElementInstance } from "../types/ModuleTypes";

type State = {
  elements: ModuleElementInstance[] | null;
};

type Actions = {
  setElements: (elements: ModuleElementInstance[]) => void;
  addElement: (index: number, element: ModuleElementInstance) => void;
};

export const useModulesStore = create<State & Actions>((set, get) => ({
  // state
  elements: null,
  // actions
  setElements: (elements) => set({ elements }),
  addElement: (index, element) => {
    const elements = get().elements || [];
    const elementsCopy = [...elements];

    const newElements = elementsCopy.splice(index, 0, element);

    set({ elements: newElements });
  },
}));
