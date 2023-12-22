import { useEditorStore } from "@/components/context/useEditorStore";
import { ModuleElementInstance } from "@/lib/types/ModuleTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CustomInstance } from "./ButtonModuleTypes";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// must match the attributes defined above
const propertiesSchema = z.object({
  label: z.string(),
  color: z.string().optional(),
  backgroundColor: z.string().optional(),
});

type PropertiesSchemaType = z.infer<typeof propertiesSchema>;

export function PropertiesComponent({
  elementInstance,
}: {
  elementInstance: ModuleElementInstance;
}) {
  const element = elementInstance as CustomInstance;

  const updateElement = useEditorStore((s) => s.updateElement);

  const form = useForm<PropertiesSchemaType>({
    resolver: zodResolver(propertiesSchema),
    mode: "onChange",
    defaultValues: {
      ...element.attributes,
    },
  });

  const applyChanges = (values: PropertiesSchemaType) => {
    console.log("Updating element", values);

    updateElement(element.id, {
      ...element,
      attributes: values,
    });
  };

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={form.handleSubmit(applyChanges)}
        onChange={form.handleSubmit(applyChanges)}
      >
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Button Label</FormLabel>
              <FormControl>
                <Input placeholder="Ex. add to contacts" {...field} />
              </FormControl>
              <FormDescription>
                The text that will be displayed in the button.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="backgroundColor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Background Color</FormLabel>
              <FormControl>
                <Input placeholder="Ex. #121212" {...field} />
              </FormControl>
              <FormDescription>
                The color of the background of the button
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Text Color</FormLabel>
              <FormControl>
                <Input placeholder="Ex. #121212" {...field} />
              </FormControl>
              <FormDescription>
                The color of the text in the button
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
