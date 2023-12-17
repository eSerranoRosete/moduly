import {
  ModuleElement,
  ModuleElementInstance,
  ModulesType,
} from "@/lib/types/ModuleTypes";
import { Heading } from "lucide-react";
import { Input } from "../ui/Input";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useEditor } from "../context/CardContext";

import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Select } from "../ui/Select";

const type: ModulesType = "Heading";

const attributes = {
  text: "Heading",
  fontSize: "xl",
};

export const fontSizes = ["xs", "sm", "base", "lg", "xl"] as const;

export type FontSize = (typeof fontSizes)[number];

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
  propertiesComponent: PropertiesComponent,
};

type CustomInstance = ModuleElementInstance & {
  attributes: typeof attributes & {
    fontSize: FontSize;
  };
};

function EditorComponent({
  elementInstance,
}: {
  elementInstance: ModuleElementInstance;
}) {
  const element = elementInstance as CustomInstance;

  const fontSize = element.attributes.fontSize;

  return (
    <div
      className={cn(
        "text-center text-2xl p-4",

        fontSize === "xs" && "text-xs",
        fontSize === "sm" && "text-sm",
        fontSize === "base" && "text-base",
        fontSize === "lg" && "text-lg",
        fontSize === "xl" && "text-xl"
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
    .max(50, {
      message: "Must be less than 50 characters",
    }),
  fontSize: z.enum(["xs", "sm", "base", "lg", "xl"]),
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
        <Select
          options={fontSizes.map((option) => ({
            label: option,
            value: option,
          }))}
          label="Font Size"
          helperText="The size of the text in the heading"
          variant="inline"
          {...form.register("fontSize")}
          control={form.control}
        />
      </form>
    </>
  );
}
