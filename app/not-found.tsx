// app/not-found.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
        <span className="text-2xl">🍕</span>
      </div>
      <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
      <p className="max-w-md text-sm text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved. Try going back home or browsing restaurants.
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Link href="/">
          <Button className="w-full sm:w-auto">Back to home</Button>
        </Link>
        <Link href="/restaurants">
          <Button variant="outline" className="w-full sm:w-auto">
            Browse restaurants
          </Button>
        </Link>
      </div>
    </div>
  );
}
