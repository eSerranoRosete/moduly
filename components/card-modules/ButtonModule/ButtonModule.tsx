import { ModuleElement, ModulesType } from "@/lib/types/ModuleTypes";

import { ButtonIcon } from "@radix-ui/react-icons";
import { ButtonModuleAttributes } from "./ButtonModuleTypes";
import { EditorComponent } from "./EditorComponent";
import { PropertiesComponent } from "./PropertiesComponent";

const type: ModulesType = "Button";

const attributes: ButtonModuleAttributes = {
  label: "Button",
};

export const ButtonModule: ModuleElement = {
  type,

  constructor: (id: string) => ({
    id,
    type,
    attributes,
  }),

  editorButtonElement: {
    label: "Button",
    icon: ButtonIcon,
  },

  editorComponent: EditorComponent,
  moduleComponent: () => <div>Module Component</div>,
  propertiesComponent: PropertiesComponent,
};
