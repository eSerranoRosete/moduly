import { AppBar } from "@/components/blocks/AppBar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container m-auto">
      <AppBar
        actionItems={
          <>
            <Link href="/login">
              <Button variant="flat">Login</Button>
            </Link>
            <Link href="/register">
              <Button variant="flat">Register</Button>
            </Link>
          </>
        }
      />
    </main>
  );
}
