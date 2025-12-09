// components/layout/footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} FoodieGo. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/about" className="hover:text-foreground">
            About
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
          <Link href="/help" className="hover:text-foreground">
            Help & FAQ
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
