import Link from "next/link";

import { AuthPage } from "@/components/blocks/AuthPage";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { PasswordInput } from "@/components/ui/PasswordInput";

import { ArrowLeft } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Link href="/">
        <Button
          variant="flat"
          icon={<ArrowLeft className="w-5" />}
          className="absolute top-4 left-4"
        />
      </Link>
      <AuthPage
        title="Let's get started"
        subtitle="Fill in your info to create an account"
      >
        <Input label="Name" type="text" placeholder="Enter your name" />
        <Input label="Email" type="email" placeholder="Enter your email" />
        <PasswordInput label="Password" placeholder="Create a password" />
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
