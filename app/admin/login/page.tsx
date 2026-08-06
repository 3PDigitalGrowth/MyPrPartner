import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/admin/auth";
import { LoginForm } from "./LoginForm";

export default function AdminLoginPage() {
  if (isAuthenticated()) redirect("/admin");

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-card p-8">
        <h1 className="font-heading font-bold text-text-dark text-2xl mb-1">
          Content editor
        </h1>
        <p className="text-text-medium text-sm mb-6">
          Log in to edit the My PR Partner website.
        </p>
        <LoginForm />
      </div>
    </main>
  );
}
