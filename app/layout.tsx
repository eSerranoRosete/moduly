import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-dark-full text-dark-50">
      <body>
        <div className="w-full m-auto container px-4">{children}</div>
      </body>
    </html>
  );
}
