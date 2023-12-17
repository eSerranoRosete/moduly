import { HeadingModule } from "@/components/card-modules/HeadingModule";
import { ElementType } from "react";

export type ModulesType = "Heading";

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
  Heading: HeadingModule,
};
