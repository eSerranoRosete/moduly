import { useEditorStore } from "@/components/context/useEditorStore";
import { IconButton } from "@/components/ui/IconButton";
import { ModuleElementInstance, ModuleElements } from "@/lib/types/ModuleTypes";
import { Plus } from "lucide-react";

type Props = {
  element: ModuleElementInstance;
};

export const EditorPropertiesSidebar = ({ element }: Props) => {
  const setSelectedElement = useEditorStore((s) => s.setSelectedElement);

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
      <p className="text-xs mb-5 text-muted-foreground">
        Customize the properties of this module
      </p>

      <PropertiesComponent elementInstance={element} />
    </div>
  );
};
