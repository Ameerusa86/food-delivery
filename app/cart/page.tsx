// app/cart/page.tsx
"use client";

import { useCart } from "@/lib/cart-store";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart, total } = useCart();

  const hasItems = items.length > 0;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Your cart</h1>
        {hasItems && (
          <button
            onClick={clearCart}
            className="text-xs font-medium text-destructive hover:underline"
          >
            Clear cart
          </button>
        )}
      </div>

      {!hasItems && (
        <div className="rounded-2xl border bg-card p-6 text-center text-sm text-muted-foreground">
          Your cart is empty.
          <div className="mt-3">
            <Link href="/restaurants">
              <Button size="sm">Browse restaurants</Button>
            </Link>
          </div>
        </div>
      )}

      {hasItems && (
        <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
          {/* Items */}
          <div className="space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 rounded-2xl border bg-card p-3"
              >
                <div className="space-y-1 text-sm">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.restaurantName}
                  </p>
                  <p className="text-xs font-medium">
                    ${item.price.toFixed(2)} each
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="flex h-7 w-7 items-center justify-center rounded-full border text-sm"
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="flex h-7 w-7 items-center justify-center rounded-full border text-sm"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-sm font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-xs text-muted-foreground hover:text-destructive"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <aside className="space-y-4 rounded-2xl border bg-card p-4">
            <h2 className="text-sm font-semibold">Order summary</h2>
            <div className="space-y-1 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Delivery fee</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            <div className="flex items-center justify-between border-t pt-3 text-sm font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Link href="/checkout">
              <Button className="w-full">Proceed to checkout</Button>
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
