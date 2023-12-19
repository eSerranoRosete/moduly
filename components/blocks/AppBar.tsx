import React, { ReactNode } from "react";
import { AppLogo } from "../company/AppLogo";
import { Button } from "../ui/button";
import Link from "next/link";
import { NavItems } from "./NavItems";

type AppBarProps = {
  navItems?: NavItem[];
  actionItems?: ReactNode;
};

export type NavItem = {
  title: string;
  href: string;
};

export const AppBar = ({ navItems, actionItems }: AppBarProps) => {
  return (
    <header className="w-full py-5">
      <nav className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="mr-10">
            <AppLogo />
          </Link>
          {navItems && <NavItems navItems={navItems} />}
        </div>
        <div className="flex gap-2">{actionItems}</div>
      </nav>
    </header>
  );
};
