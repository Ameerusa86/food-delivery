// components/layout/footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-card/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-primary to-primary/80 text-sm font-bold text-primary-foreground">
                FG
              </div>
              <span className="text-lg font-bold">FoodieGo</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your favorite food, delivered fast. Order from the best local
              restaurants with ease.
            </p>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Company</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link
                href="/about"
                className="hover:text-foreground transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="hover:text-foreground transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/help"
                className="hover:text-foreground transition-colors"
              >
                Help & FAQ
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Legal</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link
                href="/terms"
                className="hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Get in Touch</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>support@foodiego.com</p>
              <p>1-800-FOODIE-GO</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 flex flex-col gap-4 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} FoodieGo. All rights reserved.</p>
          <p>Made with ❤️ for food lovers everywhere</p>
        </div>
      </div>
    </footer>
  );
}
