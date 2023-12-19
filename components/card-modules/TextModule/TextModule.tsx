import { ModuleElement, ModulesType } from "@/lib/types/ModuleTypes";
import { Text } from "lucide-react";

import { EditorComponent } from "./EditorComponent";
import { PropertiesComponent } from "./PropertiesComponent";
import { TextModuleAttributes } from "./TextModuleTypes";

const type: ModulesType = "Text";

const attributes: TextModuleAttributes = {
  text: "Text",
  fontSize: "xl",
  fontWeight: "normal",
  padding: "2",
  textAlign: "center",
};

export const TextModule: ModuleElement = {
  type,

  constructor: (id: string) => ({
    id,
    type,
    attributes,
  }),

  editorButtonElement: {
    label: "Text",
    icon: Text,
  },

  editorComponent: EditorComponent,
  moduleComponent: () => <div>Module Component</div>,
  propertiesComponent: PropertiesComponent,
};
