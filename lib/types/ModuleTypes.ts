import { ElementType } from "react";

import { SpacerModule } from "@/components/card-modules/SpacerModule/SpacerModule";
import { TextModule } from "@/components/card-modules/TextModule/TextModule";
import { ButtonModule } from "@/components/card-modules/ButtonModule/ButtonModule";

export type ModulesType = "Text" | "Spacer" | "Button";

export type ModuleElement = {
  type: ModulesType;

  constructor: (id: string) => ModuleElementInstance;

  editorButtonElement: {
    icon: ElementType;
    label: string;
  };

  editorComponent: React.FC<{
    elementInstance: ModuleElementInstance;
  }>;
  moduleComponent: React.FC<{
    elementInstance: ModuleElementInstance;
  }>;
  propertiesComponent: React.FC<{
    elementInstance: ModuleElementInstance;
  }>;
};

export type ModuleElementInstance = {
  id: string;
  type: ModulesType;
  attributes?: Record<string, any>;
};

type ModuleElements = {
  [key in ModulesType]: ModuleElement;
};

export const ModuleElements: ModuleElements = {
  Text: TextModule,
  Spacer: SpacerModule,
  Button: ButtonModule,
};
