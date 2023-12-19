import { AppBar } from "@/components/blocks/AppBar";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <AppBar
        actionItems={
          <>
            <Button asChild variant="secondary" size="sm">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild variant="secondary" size="sm">
              <Link href="/register">Register</Link>
            </Button>
          </>
        }
      />
      <section className="mt-32">
        <Button asChild className="m-auto" type="submit">
          <Link href="/dashboard">Go to Dashboard</Link>
        </Button>
      </section>
    </main>
  );
}
