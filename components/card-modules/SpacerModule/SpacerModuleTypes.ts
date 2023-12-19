import { ModuleElementInstance } from "@/lib/types/ModuleTypes";

export type SpacerModuleAttributes = {
  size: Size;
};

export type CustomInstance = ModuleElementInstance & {
  attributes: SpacerModuleAttributes;
};

export const sizes = ["3", "4", "5", "6", "7", "8"] as const;

export type Size = (typeof sizes)[number];
