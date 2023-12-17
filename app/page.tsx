import { AppBar } from "@/components/blocks/AppBar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
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
      <section className="mt-32">
        <Link href="/dashboard">
          <Button className="m-auto">Go to Dashboard</Button>
        </Link>
      </section>
    </main>
  );
}
