import {
  ModuleElement,
  ModuleElementInstance,
  ModulesType,
} from "@/lib/types/ModuleTypes";
import { Text } from "lucide-react";
import { Input } from "../../ui/Input";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useEditor } from "../../context/CardContext";

import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Select } from "../../ui/Select";
import { Divider } from "@/components/ui/Divider";

const type: ModulesType = "Text";

const attributes = {
  text: "Text",
  fontSize: "xl",
  fontWeight: "normal",
  padding: "2",
};

export const fontSizes = [
  "xs",
  "sm",
  "base",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
] as const;
export const fontWeights = ["light", "normal", "medium", "bold"] as const;
export const paddings = ["0", "1", "2", "3", "4", "5", "6", "7", "8"] as const;

export type FontSize = (typeof fontSizes)[number];
export type FontWeight = (typeof fontWeights)[number];
export type Padding = (typeof paddings)[number];

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

type CustomInstance = ModuleElementInstance & {
  attributes: typeof attributes & {
    fontSize: FontSize;
    fontWeight: FontWeight;
    padding: Padding;
  };
};

function EditorComponent({
  elementInstance,
}: {
  elementInstance: ModuleElementInstance;
}) {
  const element = elementInstance as CustomInstance;

  const { fontSize, fontWeight, padding } = element.attributes;

  return (
    <div
      className={cn(
        "text-center text-2xl p-4",

        fontSize === "xs" && "text-xs",
        fontSize === "sm" && "text-sm",
        fontSize === "base" && "text-base",
        fontSize === "lg" && "text-lg",
        fontSize === "xl" && "text-xl",
        fontSize === "2xl" && "text-2xl",
        fontSize === "3xl" && "text-3xl",
        fontSize === "4xl" && "text-4xl",

        fontWeight === "light" && "font-light",
        fontWeight === "normal" && "font-normal",
        fontWeight === "medium" && "font-medium",
        fontWeight === "bold" && "font-bold",

        padding === "0" && "p-0",
        padding === "1" && "p-1",
        padding === "2" && "p-2",
        padding === "3" && "p-3",
        padding === "4" && "p-4",
        padding === "5" && "p-5",
        padding === "6" && "p-6",
        padding === "7" && "p-7",
        padding === "8" && "p-8"
      )}
    >
      {element.attributes.text}
    </div>
  );
}

// must match the attributes defined above
const propertiesSchema = z.object({
  text: z
    .string()
    .min(2, {
      message: "Must be at least 2 characters",
    })
    .max(100, {
      message: "Must be less than 50 characters",
    }),
  fontSize: z.string(),
  fontWeight: z.string(),
  padding: z.string(),
});

type PropertiesSchemaType = z.infer<typeof propertiesSchema>;

function PropertiesComponent({
  elementInstance,
}: {
  elementInstance: ModuleElementInstance;
}) {
  const element = elementInstance as CustomInstance;

  const { updateElement } = useEditor();

  const form = useForm<PropertiesSchemaType>({
    resolver: zodResolver(propertiesSchema),
    mode: "onBlur",
    defaultValues: {
      ...element.attributes,
    },
  });

  useEffect(() => {
    form.reset(elementInstance.attributes);
  }, [elementInstance, form]);

  const applyChanges = (values: PropertiesSchemaType) => {
    console.log("Updating element", values);

    updateElement(element.id, {
      ...element,
      attributes: values,
    });
  };

  return (
    <>
      <form
        onBlur={form.handleSubmit(applyChanges)}
        onSubmit={(e) => e.preventDefault()}
        className="grid gap-6"
      >
        <Input
          variant="classic"
          {...form.register("text")}
          label="Text"
          defaultValue={element.attributes.text}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.currentTarget.blur();
            }
          }}
        />

        <Divider />

        <Select
          options={fontSizes.map((option) => ({
            label: option,
            value: option,
          }))}
          label="Font Size"
          helperText="The size of the text in the Text"
          variant="inline"
          {...form.register("fontSize")}
          control={form.control}
        />

        <Select
          options={fontWeights.map((option) => ({
            label: option,
            value: option,
          }))}
          label="Font Weight"
          helperText="How thik or thin the text is"
          variant="inline"
          {...form.register("fontWeight")}
          control={form.control}
        />

        <Select
          options={paddings.map((option) => ({
            label: option,
            value: option,
          }))}
          label="Box Padding"
          helperText="How much padding box has"
          variant="inline"
          {...form.register("padding")}
          control={form.control}
        />
      </form>
    </>
  );
}
