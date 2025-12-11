// components/layout/navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Menu, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-store";

/**
 * Cart button with badge, defined at the module level
 * so it isn't created during render.
 */
function CartButton({ className = "" }: { className?: string }) {
  const { itemCount } = useCart();

  return (
    <Link href="/cart" className={`relative inline-flex ${className}`}>
      <Button variant="ghost" size="icon">
        <ShoppingBag className="h-5 w-5" />
      </Button>
      {itemCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
          {itemCount > 9 ? "9+" : itemCount}
        </span>
      )}
    </Link>
  );
}

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        {/* Left: logo + desktop nav */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              FG
            </div>
            <span className="text-base font-semibold tracking-tight">
              FoodieGo
            </span>
          </Link>

          <nav className="hidden md:flex md:items-center md:gap-4 text-sm text-muted-foreground">
            <Link href="/restaurants" className="hover:text-foreground">
              Restaurants
            </Link>
            <Link href="/orders" className="hover:text-foreground">
              Orders
            </Link>
            <Link href="/about" className="hover:text-foreground">
              About
            </Link>
            <Link href="/help" className="hover:text-foreground">
              Help
            </Link>
            <Link href="/contact" className="hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>

        {/* Center: search (desktop) */}
        <div className="hidden flex-1 md:block">
          <div className="mx-auto max-w-md">
            <input
              className="w-full rounded-full border bg-background px-4 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              placeholder="Search for restaurants or dishes"
            />
          </div>
        </div>

        {/* Right: auth + cart */}
        <div className="flex items-center gap-3">
          {/* Desktop buttons */}
          <div className="hidden items-center gap-2 md:flex">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsLoginOpen(true)}
            >
              Log in
            </Button>
            <Button size="sm" onClick={() => setIsRegisterOpen(true)}>
              Sign up
            </Button>
            <CartButton />
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center gap-2 md:hidden">
            <CartButton />
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile nav sheet */}
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="mt-6 flex flex-col gap-3 text-sm">
            <Link href="/" onClick={() => setIsMobileOpen(false)}>
              Home
            </Link>
            <Link href="/restaurants" onClick={() => setIsMobileOpen(false)}>
              Restaurants
            </Link>
            <Link href="/orders" onClick={() => setIsMobileOpen(false)}>
              Orders
            </Link>
            <Link href="/about" onClick={() => setIsMobileOpen(false)}>
              About
            </Link>
            <Link href="/help" onClick={() => setIsMobileOpen(false)}>
              Help & FAQ
            </Link>
            <Link href="/contact" onClick={() => setIsMobileOpen(false)}>
              Contact
            </Link>
          </nav>
          <div className="mt-6 flex flex-col gap-2">
            <Button
              variant="outline"
              onClick={() => {
                setIsMobileOpen(false);
                setIsLoginOpen(true);
              }}
            >
              Log in
            </Button>
            <Button
              onClick={() => {
                setIsMobileOpen(false);
                setIsRegisterOpen(true);
              }}
            >
              Sign up
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Auth dialogs */}
      <LoginDialog
        open={isLoginOpen}
        onOpenChange={setIsLoginOpen}
        onSwitch={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
      />
      <RegisterDialog
        open={isRegisterOpen}
        onOpenChange={setIsRegisterOpen}
        onSwitch={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />
    </header>
  );
}

type AuthDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSwitch: () => void;
};

function LoginDialog({ open, onOpenChange, onSwitch }: AuthDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Log in</DialogTitle>
          <DialogDescription>
            Log in to track your orders and save your favorites.
          </DialogDescription>
        </DialogHeader>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            // no real auth for now
            onOpenChange(false);
          }}
        >
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

          <Button type="submit" className="w-full">
            Continue
          </Button>

          <p className="mt-2 text-center text-xs text-muted-foreground">
            Don&apos;t have an account?{" "}
            <button
              type="button"
              onClick={onSwitch}
              className="font-semibold text-primary"
            >
              Sign up
            </button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function RegisterDialog({ open, onOpenChange, onSwitch }: AuthDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Create an account</DialogTitle>
          <DialogDescription>
            Sign up to save addresses, payment methods, and orders.
          </DialogDescription>
        </DialogHeader>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            // no real auth for now
            onOpenChange(false);
          }}
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

          <Button type="submit" className="w-full">
            Create account
          </Button>

          <p className="mt-2 text-center text-xs text-muted-foreground">
            Already have an account?{" "}
            <button
              type="button"
              onClick={onSwitch}
              className="font-semibold text-primary"
            >
              Log in
            </button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
