// app/register/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 600); // demo only
  };

  return (
    <div className="mx-auto flex max-w-md flex-col gap-6 px-4 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-sm text-muted-foreground">
          Sign up to save addresses, payment methods, and orders.
        </p>
      </div>

      <form
        className="space-y-4 rounded-2xl border bg-card p-4"
        onSubmit={handleSubmit}
      >
        <div className="space-y-1 text-sm">
          <label className="font-medium">Full name</label>
          <input
            required
            className="w-full rounded-md border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="font-medium">Email</label>
          <input
            type="email"
            required
            className="w-full rounded-md border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="font-medium">Password</label>
          <input
            type="password"
            required
            className="w-full rounded-md border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          />
        </div>

        <div className="flex items-start gap-2 text-xs">
          <input type="checkbox" required className="mt-1" />
          <span>
            I agree to the{" "}
            <Link href="/terms" className="text-primary underline">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary underline">
              Privacy Policy
            </Link>
            .
          </span>
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Creating account..." : "Create account"}
        </Button>

        <p className="mt-2 text-center text-xs text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-primary underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
