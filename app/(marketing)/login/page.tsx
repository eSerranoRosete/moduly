import { AuthPage } from "@/components/blocks/AuthPage";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { Input } from "@/components/ui/Input";
import { PasswordInput } from "@/components/ui/PasswordInput";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      <Link href="/" className="absolute top-4 left-0">
        <IconButton variant="flat">
          <ArrowLeft className="w-5" />
        </IconButton>
      </Link>
      <AuthPage title="Welcome Back" subtitle="Login to your account">
        <Input label="Email" type="email" placeholder="Enter your email" />
        <PasswordInput label="Password" placeholder="Enter your password" />
        <Button type="submit">Login</Button>
        <p className="text-center text-sm">
          Need to create an account?{" "}
          <Link href={"/register"} className="text-blue-600 underline">
            Register
          </Link>
        </p>
      </AuthPage>
    </div>
  );
}
