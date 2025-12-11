// app/checkout/page.tsx
"use client";

import { useCart } from "@/lib/cart-store";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hasItems = items.length > 0;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!hasItems || isSubmitting) return;
    setIsSubmitting(true);

    // Fake "processing" delay, then clear cart + show confirmation
    setTimeout(() => {
      clearCart();
      router.push("/order-confirmation");
    }, 600);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 space-y-8">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Checkout</h1>
        <p className="text-sm text-muted-foreground">
          Review your details and place your order.
        </p>
      </div>

      {!hasItems && (
        <div className="space-y-3 rounded-2xl border bg-card p-6 text-sm">
          <p className="text-muted-foreground">
            Your cart is empty. Add some items before checking out.
          </p>
          <Link href="/restaurants">
            <Button size="sm">Browse restaurants</Button>
          </Link>
        </div>
      )}

      {hasItems && (
        <div className="grid gap-8 md:grid-cols-[2fr,1.2fr]">
          {/* Left column: form */}
          <form
            className="space-y-6 rounded-2xl border bg-card p-6"
            onSubmit={handleSubmit}
          >
            <div className="space-y-2">
              <h2 className="text-sm font-semibold">Contact</h2>
              <p className="text-xs text-muted-foreground">
                We&apos;ll use this to contact you about your delivery.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2 text-xs">
                <label className="font-medium">First name</label>
                <input
                  required
                  className="w-full rounded-md border bg-background px-3 py-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>
              <div className="space-y-2 text-xs">
                <label className="font-medium">Last name</label>
                <input
                  required
                  className="w-full rounded-md border bg-background px-3 py-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>
            </div>
            <div className="space-y-2 text-xs">
              <label className="font-medium">Phone number</label>
              <input
                required
                type="tel"
                className="w-full rounded-md border bg-background px-3 py-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2 text-xs">
              <label className="font-medium">Email</label>
              <input
                required
                type="email"
                className="w-full rounded-md border bg-background px-3 py-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>

            <div className="pt-4 space-y-3">
              <h2 className="text-sm font-semibold">Delivery address</h2>
              <div className="space-y-2 text-xs">
                <label className="font-medium">Street address</label>
                <input
                  required
                  className="w-full rounded-md border bg-background px-3 py-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2 text-xs">
                  <label className="font-medium">City</label>
                  <input
                    required
                    className="w-full rounded-md border bg-background px-3 py-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-1 text-xs">
                  <label className="font-medium">State</label>
                  <input
                    required
                    className="w-full rounded-md border bg-background px-3 py-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-1 text-xs">
                  <label className="font-medium">ZIP</label>
                  <input
                    required
                    className="w-full rounded-md border bg-background px-3 py-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <h2 className="text-sm font-semibold">Payment</h2>
              <p className="text-xs text-muted-foreground">
                This is just UI for now—no real charges will be made.
              </p>
              <div className="space-y-2 text-xs">
                <label className="font-medium">Card number</label>
                <input
                  required
                  placeholder="1234 5678 9012 3456"
                  className="w-full rounded-md border bg-background px-3 py-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2 text-xs">
                  <label className="font-medium">Expiry</label>
                  <input
                    required
                    placeholder="MM/YY"
                    className="w-full rounded-md border bg-background px-3 py-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2 text-xs">
                  <label className="font-medium">CVC</label>
                  <input
                    required
                    placeholder="123"
                    className="w-full rounded-md border bg-background px-3 py-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2 text-xs">
                  <label className="font-medium">Name on card</label>
                  <input
                    required
                    className="w-full rounded-md border bg-background px-3 py-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Placing order..." : "Place order"}
            </Button>
          </form>

          {/* Right column: summary */}
          <aside className="space-y-6 rounded-2xl border bg-card p-6 text-sm h-fit sticky top-24">
            <h2 className="text-sm font-semibold">Order summary</h2>
            <div className="space-y-2">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between text-xs"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-muted-foreground">
                      x{item.quantity} · {item.restaurantName}
                    </p>
                  </div>
                  <p className="font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-1 border-t pt-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Delivery fee</span>
                <span>Calculated at delivery</span>
              </div>
            </div>
            <div className="flex items-center justify-between border-t pt-3 text-sm font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
