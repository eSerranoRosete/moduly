import { ModuleElementInstance } from "@/lib/types/ModuleTypes";

export type TextModuleAttributes = {
  text: string;
  fontSize: FontSizeType;
  fontWeight: FontWeightType;
  padding: PaddingType;
  textAlign: TextAlignType;
};

export type CustomInstance = ModuleElementInstance & {
  attributes: TextModuleAttributes;
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
export const textAligns = ["left", "center", "right"] as const;

export type FontSizeType = (typeof fontSizes)[number];
export type FontWeightType = (typeof fontWeights)[number];
export type PaddingType = (typeof paddings)[number];
export type TextAlignType = (typeof textAligns)[number];
