import Link from "next/link";

import { AuthPage } from "@/components/blocks/AuthPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/PasswordInput";

import { ArrowLeft } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center relative">
      <Link href="/" className="absolute top-4 left-0">
        <Button variant="secondary" size="icon">
          <ArrowLeft className="w-5" />
        </Button>
      </Link>
      <AuthPage
        title="Let's get started"
        subtitle="Fill in your info to create an account"
      >
        <Input type="text" placeholder="Enter your name" />
        <Input type="email" placeholder="Enter your email" />
        <PasswordInput placeholder="Create a password" />
        <Button type="submit">Register</Button>
        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </AuthPage>
    </div>
  );
}
