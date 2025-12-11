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

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
        {/* Left: logo + desktop nav */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary to-primary/80 text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all group-hover:shadow-xl group-hover:shadow-primary/30 group-hover:scale-105">
              FG
            </div>
            <span className="text-xl font-bold tracking-tight bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              FoodieGo
            </span>
          </Link>

          <nav className="hidden lg:flex lg:items-center lg:gap-1 text-sm font-medium">
            <Link
              href="/restaurants"
              className="px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
            >
              Restaurants
            </Link>
            <Link
              href="/orders"
              className="px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
            >
              Orders
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
            >
              About
            </Link>
            <Link
              href="/help"
              className="px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
            >
              Help
            </Link>
          </nav>
        </div>

        {/* Center: search (desktop) */}
        <div className="hidden flex-1 lg:block max-w-xl">
          <div className="relative">
            <input
              className="w-full rounded-xl border border-input bg-background/50 backdrop-blur-sm px-4 py-2.5 pl-10 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all"
              placeholder="Search for restaurants or dishes..."
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Right: auth + cart */}
        <div className="flex items-center gap-2">
          {/* Desktop buttons */}
          <div className="hidden items-center gap-2 lg:flex">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsLoginOpen(true)}
              className="font-medium"
            >
              Log in
            </Button>
            <Button
              size="sm"
              onClick={() => setIsRegisterOpen(true)}
              className="font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
            >
              Sign up
            </Button>
            <Button variant="outline" size="icon" className="relative ml-1">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                0
              </span>
            </Button>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                0
              </span>
            </Button>
            <Button
              variant="outline"
              size="icon"
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
              Help
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
