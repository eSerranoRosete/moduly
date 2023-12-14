"use client";

import * as RadixDialog from "@radix-ui/react-dialog";

import { Plus } from "lucide-react";
import { ReactNode } from "react";

import { Button } from "./Button";

type DialogProps = {
  trigger: ReactNode;
  title?: string;
  subTitle?: string;
  actionButton?: ReactNode;
  closeButton?: ReactNode;

  children?: ReactNode;
};

export const Dialog = ({
  trigger,
  title,
  subTitle,
  actionButton,
  closeButton,

  children,
}: DialogProps) => (
  <RadixDialog.Root>
    <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0" />
      <RadixDialog.Content className="fixed top-1/2 left-1/2 data-[state=open]:animate-contentShow border-slate-6 border w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-md bg-slate-2 p-6 focus:outline-none">
        <RadixDialog.Title className="font-medium text-xl">
          {title}
        </RadixDialog.Title>
        <RadixDialog.Description className=" mt-2 mb-5 text-sm">
          {subTitle}
        </RadixDialog.Description>

        {children}

        <div className="mt-5 flex justify-end gap-2">
          <RadixDialog.Close asChild>{closeButton}</RadixDialog.Close>
          <RadixDialog.Close asChild>{actionButton}</RadixDialog.Close>
        </div>
        <RadixDialog.Close asChild>
          <Button
            icon={<Plus className="rotate-45" />}
            variant="flat"
            className="absolute top-2 right-2 bg-transparent"
          />
        </RadixDialog.Close>
      </RadixDialog.Content>
    </RadixDialog.Portal>
  </RadixDialog.Root>
);
