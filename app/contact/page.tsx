// app/contact/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Fake submit for demo
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Contact us</h1>
        <p className="text-sm text-muted-foreground">
          Have a question or feedback about FoodieGo? Send us a message.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-[1.4fr,1fr]">
        <form
          className="space-y-4 rounded-2xl border bg-card p-4 text-sm"
          onSubmit={handleSubmit}
        >
          <div className="space-y-1 text-xs">
            <label className="font-medium">Name</label>
            <input
              required
              className="w-full rounded-md border bg-background px-3 py-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>
          <div className="space-y-1 text-xs">
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full rounded-md border bg-background px-3 py-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>
          <div className="space-y-1 text-xs">
            <label className="font-medium">Subject</label>
            <input
              required
              className="w-full rounded-md border bg-background px-3 py-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>
          <div className="space-y-1 text-xs">
            <label className="font-medium">Message</label>
            <textarea
              required
              rows={4}
              className="w-full resize-none rounded-md border bg-background px-3 py-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto"
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </Button>
          {submitted && (
            <p className="text-xs text-emerald-600 mt-2">
              Thank you! Your message has been recorded (demo only).
            </p>
          )}
        </form>

        <aside className="space-y-4 rounded-2xl border bg-card p-4 text-sm">
          <h2 className="text-sm font-semibold">Support</h2>
          <p className="text-xs text-muted-foreground">
            In a real deployment, this section would contain live support
            details. For now, it simply demonstrates how the contact page might
            look.
          </p>
          <div className="space-y-1 text-xs">
            <p className="font-medium">Email</p>
            <p className="text-muted-foreground">support@foodiego.app</p>
          </div>
          <div className="space-y-1 text-xs">
            <p className="font-medium">Hours</p>
            <p className="text-muted-foreground">
              Monday–Sunday · 9:00 AM – 9:00 PM
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
