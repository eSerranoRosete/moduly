import {
  ModuleElement,
  ModuleElementInstance,
  ModulesType,
} from "@/lib/types/ModuleTypes";
import { Heading } from "lucide-react";

const type: ModulesType = "Heading";

const attributes = {
  text: "Heading",
};

export const HeadingModule: ModuleElement = {
  type,

  constructor: (id: string) => ({
    id,
    type,
    attributes,
  }),

  editorButtonElement: {
    label: "Heading",
    icon: Heading,
  },

  editorComponent: EditorComponent,
  moduleComponent: () => <div>Module Component</div>,
  propertiesComponent: () => <div>Properties Component</div>,
};

type CustomInstance = ModuleElementInstance & {
  attributes: typeof attributes;
};

type EditorComponentProps = {
  elementInstance: ModuleElementInstance;
};

function EditorComponent({ elementInstance }: EditorComponentProps) {
  const element = elementInstance as CustomInstance;

  return (
    <div className="text-center text-2xl p-4">{element.attributes.text}</div>
  );
}
