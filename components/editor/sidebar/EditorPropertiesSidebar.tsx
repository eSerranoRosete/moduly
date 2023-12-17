import { useEditor } from "@/components/context/CardContext";
import { IconButton } from "@/components/ui/IconButton";
import {
  ModuleElement,
  ModuleElementInstance,
  ModuleElements,
} from "@/lib/types/ModuleTypes";
import { Plus } from "lucide-react";
import React from "react";

type Props = {
  element: ModuleElementInstance;
};

export const EditorPropertiesSidebar = ({ element }: Props) => {
  const { setSelectedElement } = useEditor();

  const PropertiesComponent = ModuleElements[element.type].propertiesComponent;

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-sm">{element.type} Properties</h2>
        <IconButton
          variant="ghost"
          className="w-8 h-8"
          onClick={() => setSelectedElement(null)}
        >
          <Plus className="rotate-45 w-8" />
        </IconButton>
      </div>
      <p className="text-slate-11 text-xs mb-5">
        Customize the properties of this module
      </p>
      <PropertiesComponent elementInstance={element} />
    </div>
  );
};
