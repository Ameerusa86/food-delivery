// app/login/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
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
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-base text-muted-foreground">
            Log in to track your orders and enjoy exclusive benefits.
          </p>
        </div>

        <form
          className="space-y-5 rounded-2xl border bg-card p-8 shadow-xl"
          onSubmit={handleSubmit}
        >
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
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-foreground">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-xs font-medium text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              required
              placeholder="••••••••"
              className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-primary hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
