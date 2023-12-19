import { ModuleElementInstance } from "@/lib/types/ModuleTypes";
import * as z from "zod";
import {
  CustomInstance,
  fontSizes,
  fontWeights,
  paddings,
  textAligns,
} from "./TextModuleTypes";
import { useEditorStore } from "@/components/context/useEditorStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/Input";

// must match the attributes defined above
const propertiesSchema = z.object({
  text: z.string(),
  fontSize: z.string(),
  fontWeight: z.string(),
  padding: z.string(),
  textAlign: z.string(),
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
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Text</FormLabel>
              <FormControl>
                <Input placeholder="Text here" {...field} />
              </FormControl>
              <FormDescription>
                The text that will be displayed in the module.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator />
        <FormField
          control={form.control}
          name="fontSize"
          render={({ field }) => (
            <FormItem className="flex justify-between items-center">
              <div className="text-xs grid gap-1">
                <FormLabel>Font Size</FormLabel>
                <FormDescription>How big or small the text is</FormDescription>
              </div>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                {...field}
              >
                <FormControl>
                  <SelectTrigger className="w-20">
                    <SelectValue placeholder="Select a value" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {fontSizes.map((fontSize) => (
                    <SelectItem key={fontSize} value={fontSize}>
                      {fontSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fontWeight"
          render={({ field }) => (
            <FormItem className="flex justify-between items-center">
              <div className="text-xs grid gap-1">
                <FormLabel>Font Weight</FormLabel>
                <FormDescription>How thin or thick the text is</FormDescription>
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
                  {fontWeights.map((fontWeight) => (
                    <SelectItem key={fontWeight} value={fontWeight}>
                      {fontWeight}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="padding"
          render={({ field }) => (
            <FormItem className="flex justify-between items-center">
              <div className="text-xs grid gap-1">
                <FormLabel>Padding</FormLabel>
                <FormDescription>
                  How much space is around the text
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
                  {paddings.map((padding) => (
                    <SelectItem key={padding} value={padding}>
                      {padding}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="textAlign"
          render={({ field }) => (
            <FormItem className="flex justify-between items-center">
              <div className="text-xs grid gap-1">
                <FormLabel>Text Alignment</FormLabel>
                <FormDescription>How the text is aligned</FormDescription>
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
                  {textAligns.map((alignment) => (
                    <SelectItem key={alignment} value={alignment}>
                      {alignment}
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
