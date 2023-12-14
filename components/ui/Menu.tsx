"use client";

import * as RadixMenu from "@radix-ui/react-dropdown-menu";
import React from "react";

type DropdownMenuProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
};

export const Menu = ({ trigger, children }: DropdownMenuProps) => {
  return (
    <RadixMenu.Root>
      <RadixMenu.Trigger asChild>{trigger}</RadixMenu.Trigger>

      <RadixMenu.Portal>
        <RadixMenu.Content className="min-w-[200px] mt-2 border border-dark-600 bg-dark-950 rounded-md p-2 will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade">
          {children}
        </RadixMenu.Content>
      </RadixMenu.Portal>
    </RadixMenu.Root>
  );
};

type MenuItemProps = {
  icon?: React.ReactNode;
  children: React.ReactNode;
};

export const MenuItem = ({ children, icon }: MenuItemProps) => {
  return (
    <RadixMenu.Item className="text-sm px-4 gap-2 py-1 hover:bg-dark-900 cursor-pointer rounded-md leading-none  flex items-center relative select-none outline-none">
      {icon}
      {children}
    </RadixMenu.Item>
  );
};

export const MenuSeparator = () => {
  return <RadixMenu.Separator className="h-[1px] bg-dark-600 m-1" />;
};
