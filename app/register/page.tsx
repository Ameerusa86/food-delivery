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
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-3 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary to-primary/80 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/30 mx-auto">
            FG
          </div>
          <h1 className="text-3xl font-bold tracking-tight">
            Create your account
          </h1>
          <p className="text-base text-muted-foreground">
            Join FoodieGo to save addresses, track orders, and get exclusive
            deals.
          </p>
        </div>

        <form
          className="space-y-5 rounded-2xl border bg-card p-8 shadow-xl"
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">
              Full name
            </label>
            <input
              required
              placeholder="John Doe"
              className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">
              Email address
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary"
            />
            <p className="text-xs text-muted-foreground">
              Must be at least 8 characters
            </p>
          </div>

          <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-3">
            <input
              type="checkbox"
              required
              className="mt-0.5 h-4 w-4 rounded border-2"
            />
            <span className="text-sm leading-relaxed text-muted-foreground">
              I agree to the{" "}
              <Link
                href="/terms"
                className="font-medium text-primary hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="font-medium text-primary hover:underline"
              >
                Privacy Policy
              </Link>
            </span>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating your account..." : "Create account"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-primary hover:underline"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
