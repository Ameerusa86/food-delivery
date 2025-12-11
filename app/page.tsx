// app/page.tsx
import { featuredRestaurants } from "@/lib/dummy-data";
import { RestaurantCard } from "@/components/restaurants/restaurant-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-b from-primary/5 via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
          <div className="flex flex-col items-center gap-12 text-center lg:flex-row lg:items-center lg:text-left">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Now delivering in your area
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Your favorite food delivered,{" "}
                <span className="bg-linear-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                  <span className="text-primary font-bold">Fast</span>
                </span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Order from the best local restaurants and get your favorites
                delivered to your door in minutes. Fast, fresh, and always
                delicious.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row max-w-2xl">
                <div className="relative flex-1">
                  <input
                    placeholder="Enter your delivery address..."
                    className="w-full rounded-xl border-2 border-input bg-card px-4 py-3.5 pl-11 text-sm font-medium shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all"
                  />
                  <svg
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <Button
                  size="lg"
                  className="rounded-xl px-8 font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
                >
                  Find restaurants
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  No minimum order
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Live order tracking
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Lightning-fast delivery
                </div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg">
              <div className="relative aspect-square w-full rounded-3xl p-4 bg-linear-to-br from-primary/15 via-orange-200/30 to-yellow-200/30 shadow-2xl shadow-primary/20">
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  <Image
                    src="/Images/hero.jpg"
                    alt="Delicious food delivery"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured restaurants */}
      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8 space-y-8">
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold tracking-tight">
              Popular near you
            </h2>
            <p className="text-muted-foreground">
              Top-rated restaurants in your area
            </p>
          </div>
          <Link
            href="/restaurants"
            className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
          >
            View all
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredRestaurants.map((r) => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
        </div>
      </section>
    </div>
  );
}
