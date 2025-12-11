// app/help/page.tsx
import Link from "next/link";

export default function HelpPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Help & FAQ</h1>
        <p className="text-sm text-muted-foreground">
          Find answers to common questions about ordering, delivery, and your
          account.
        </p>
      </div>

      <section className="space-y-4 rounded-2xl border bg-card p-4 text-sm">
        <h2 className="text-base font-semibold">Frequently asked questions</h2>

        <div className="space-y-2 text-sm">
          <details className="rounded-xl border bg-background px-3 py-2">
            <summary className="cursor-pointer text-sm font-medium">
              How does FoodieGo work?
            </summary>
            <p className="mt-2 text-xs text-muted-foreground">
              Browse restaurants, add items to your cart, and place your order
              at checkout. In this demo, everything runs in the browser with
              mock data only.
            </p>
          </details>

          <details className="rounded-xl border bg-background px-3 py-2">
            <summary className="cursor-pointer text-sm font-medium">
              Are payments real?
            </summary>
            <p className="mt-2 text-xs text-muted-foreground">
              No. This project is currently frontend-only. Payment details are
              purely for UI demonstration and are never sent anywhere.
            </p>
          </details>

          <details className="rounded-xl border bg-background px-3 py-2">
            <summary className="cursor-pointer text-sm font-medium">
              Can I track my order?
            </summary>
            <p className="mt-2 text-xs text-muted-foreground">
              The Orders section shows mock orders with status steps to
              demonstrate what live tracking could look like once wired to a
              backend.
            </p>
          </details>

          <details className="rounded-xl border bg-background px-3 py-2">
            <summary className="cursor-pointer text-sm font-medium">
              How do I contact support?
            </summary>
            <p className="mt-2 text-xs text-muted-foreground">
              You can reach out through the{" "}
              <Link href="/contact" className="text-primary underline">
                Contact
              </Link>{" "}
              page. In a real deployment, this would send your message to a
              support team.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
