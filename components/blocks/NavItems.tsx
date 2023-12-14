"use client";

import React from "react";
import { NavItem } from "./AppBar";
import Link from "next/link";
import { Button } from "../ui/Button";
import { usePathname } from "next/navigation";

type Props = {
  navItems: NavItem[];
};

export const NavItems = ({ navItems }: Props) => {
  const path = usePathname();

  return (
    <>
      {navItems?.map((item) => (
        <Link href={item.href} key={item.title} className="relative">
          <Button variant="flat">{item.title}</Button>
          {path.includes(item.href) && (
            <div className="w-full h-0.5 bg-slate-11 absolute bottom-0 translate-y-1/2" />
          )}
        </Link>
      ))}
    </>
  );
};
