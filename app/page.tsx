import { AppLogo } from "@/components/company/AppLogo";
import { Gradient } from "@/components/company/Gradient";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container m-auto">
      <header className="w-full p-5">
        <nav className="flex items-center gap-2 justify-between">
          <Link href="/">
            <AppLogo />
          </Link>
          <div className="flex gap-2">
            <Link href="/login">
              <Button variant="flat">Login</Button>
            </Link>
            <Link href="/register">
              <Button variant="flat">Register</Button>
            </Link>
          </div>
        </nav>
      </header>
    </main>
  );
}
