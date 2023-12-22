import { ModuleElementInstance } from "@/lib/types/ModuleTypes";

export type ButtonModuleAttributes = {
  label: string;
  color?: string;
  backgroundColor?: string;
};

export type CustomInstance = ModuleElementInstance & {
  attributes: ButtonModuleAttributes;
};
