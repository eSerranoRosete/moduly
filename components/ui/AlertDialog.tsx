import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";
import { ReactNode } from "react";

interface Props extends RadixAlertDialog.AlertDialogProps {
  trigger: React.ReactNode;
  title?: string;
  subTitle?: string;
  actionBtn?: ReactNode;
  cancelBtn?: ReactNode;
}

export const AlertDialog = ({
  trigger,
  title,
  subTitle,
  children,
  actionBtn,
  cancelBtn,
}: Props) => (
  <RadixAlertDialog.Root>
    <RadixAlertDialog.Trigger asChild>{trigger}</RadixAlertDialog.Trigger>
    <RadixAlertDialog.Portal>
      <RadixAlertDialog.Overlay className="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0" />

      <RadixAlertDialog.Content className="fixed top-1/2 left-1/2 data-[state=open]:animate-contentShow border-slate-6 border w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-md bg-slate-2 p-6 focus:outline-none">
        <RadixAlertDialog.Title className="font-medium text-xl">
          {title}
        </RadixAlertDialog.Title>
        <RadixAlertDialog.Description className=" mt-2 mb-5 text-sm">
          {subTitle}
        </RadixAlertDialog.Description>
        {children}
        <div className="mt-5 flex justify-end gap-2">
          <RadixAlertDialog.Cancel asChild>{cancelBtn}</RadixAlertDialog.Cancel>
          <RadixAlertDialog.Action asChild>{actionBtn}</RadixAlertDialog.Action>
        </div>
      </RadixAlertDialog.Content>
    </RadixAlertDialog.Portal>
  </RadixAlertDialog.Root>
);
