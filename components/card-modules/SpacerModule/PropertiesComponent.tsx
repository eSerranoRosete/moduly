import { useEditorStore } from "@/components/context/useEditorStore";
import { ModuleElementInstance } from "@/lib/types/ModuleTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CustomInstance, sizes } from "./SpacerModuleTypes";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// must match the attributes defined above
const propertiesSchema = z.object({
  size: z.string(),
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
          name="size"
          render={({ field }) => (
            <FormItem className="flex justify-between items-center">
              <div className="text-xs grid gap-1">
                <FormLabel>Size</FormLabel>
                <FormDescription>
                  How much vertical space to add
                </FormDescription>
              </div>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                {...field}
              >
                <FormControl>
                  <SelectTrigger className="w-20 min-w-fit">
                    <SelectValue placeholder="Select a value" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
