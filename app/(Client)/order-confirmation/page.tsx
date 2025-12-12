// app/order-confirmation/page.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OrderConfirmationPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-12">
      <div className="flex flex-col items-center gap-4 max-w-md text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <span className="text-3xl">✅</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Order placed!</h1>
        <p className="text-sm text-muted-foreground">
          We&apos;re getting your order ready. You can track it in the Orders
          section.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Link href="/orders">
            <Button className="w-full sm:w-auto">View my orders</Button>
          </Link>
          <Link href="/restaurants">
            <Button variant="outline" className="w-full sm:w-auto">
              Continue browsing
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
