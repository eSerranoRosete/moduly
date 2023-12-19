import { ModuleElement, ModulesType } from "@/lib/types/ModuleTypes";
import { SplitSquareVertical, Text } from "lucide-react";

import { PropertiesComponent } from "./PropertiesComponent";
import { SpacerModuleAttributes } from "./SpacerModuleTypes";
import { EditorComponent } from "./EditorComponent";

const type: ModulesType = "Spacer";

const attributes: SpacerModuleAttributes = {
  size: "3",
};

export const SpacerModule: ModuleElement = {
  type,

  constructor: (id: string) => ({
    id,
    type,
    attributes,
  }),

  editorButtonElement: {
    label: "Spacer",
    icon: SplitSquareVertical,
  },

  editorComponent: EditorComponent,
  moduleComponent: () => <div>Module Component</div>,
  propertiesComponent: PropertiesComponent,
};
