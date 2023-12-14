import React, { ReactNode } from "react";
import { Gradient } from "../company/Gradient";
import { AppLogo } from "../company/AppLogo";
import Link from "next/link";

type AuthPageProps = {
  title: ReactNode;
  subtitle: ReactNode;
  children: ReactNode;
};

export const AuthPage = ({ title, subtitle, children }: AuthPageProps) => {
  return (
    <div className="w-full max-w-lg relative">
      <div className="w-full flex absolute -translate-y-3/4 items-center justify-center">
        <Gradient className="m-auto w-full" />
        <Link href="/" className="absolute translate-y-1/2">
          <AppLogo />
        </Link>
      </div>
      <div className="max-w-sm m-auto grid gap-5 mt-10">
        <div className="text-center">
          <h1 className="text-3xl mb-2 font-semibold">{title}</h1>
          <h2 className="text-sm">{subtitle}</h2>
        </div>
        {children}
      </div>
    </div>
  );
};
