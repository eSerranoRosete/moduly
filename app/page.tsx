import { AppBar } from "@/components/blocks/AppBar";
import { Button } from "@radix-ui/themes";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <AppBar
        actionItems={
          <>
            <Link href="/login">
              <Button variant="soft">Login</Button>
            </Link>
            <Link href="/register">
              <Button variant="soft">Register</Button>
            </Link>
          </>
        }
      />
      <section className="mt-32">
        <Link href="/dashboard">
          <Button className="m-auto" type="submit">
            Go to Dashboard
          </Button>
        </Link>
      </section>
    </main>
  );
}
