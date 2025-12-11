// app/cart/page.tsx
"use client";

import { useCart } from "@/lib/cart-store";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart, total } = useCart();

  const hasItems = items.length > 0;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 lg:px-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Shopping cart</h1>
        {hasItems && (
          <button
            onClick={clearCart}
            className="text-sm font-semibold text-destructive hover:text-destructive/80 transition-colors"
          >
            Clear cart
          </button>
        )}
      </div>

      {!hasItems && (
        <div className="rounded-2xl border-2 border-dashed bg-card p-12 text-center shadow-lg">
          <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
            <svg
              className="h-8 w-8 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Add items from restaurants to get started
          </p>
          <Link href="/restaurants">
            <Button size="lg" className="shadow-lg shadow-primary/30">
              Browse restaurants
            </Button>
          </Link>
        </div>
      )}

      {hasItems && (
        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          {/* Items */}
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 rounded-2xl border-2 bg-card p-5 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex-1 space-y-2">
                  <h3 className="font-bold text-base">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.restaurantName}
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    ${item.price.toFixed(2)} each
                  </p>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <div className="flex items-center gap-2 bg-muted rounded-xl p-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-card hover:bg-accent transition-colors font-semibold"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-card hover:bg-accent transition-colors font-semibold"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-lg font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-sm font-medium text-muted-foreground hover:text-destructive transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <aside className="space-y-6 rounded-2xl border-2 bg-card p-6 shadow-xl h-fit sticky top-24">
            <h2 className="text-lg font-bold">Order summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Delivery fee</span>
                <span className="text-sm text-muted-foreground">
                  At checkout
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between border-t-2 pt-4 text-base font-bold">
              <span>Total</span>
              <span className="text-primary">${total.toFixed(2)}</span>
            </div>
            <Link href="/checkout">
              <Button size="lg" className="w-full shadow-lg shadow-primary/30">
                Proceed to checkout
              </Button>
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
