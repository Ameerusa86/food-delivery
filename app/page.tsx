// app/page.tsx
import { featuredRestaurants } from "@/lib/dummy-data";
import { RestaurantCard } from "@/components/restaurants/restaurant-card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-10">
      {/* Hero */}
      <section className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:text-left">
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Your favorite food, delivered
            <span className="text-primary"> fast.</span>
          </h1>
          <p className="text-sm text-muted-foreground md:text-base">
            Browse top-rated restaurants near you and get your favorites in
            minutes.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              placeholder="Enter your address"
              className="flex-1 rounded-full border bg-background px-4 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
            <Button className="rounded-full px-6">Find food</Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Popular in your area · No minimum order on selected restaurants
          </p>
        </div>

        <div className="flex-1">
          <div className="h-56 w-full rounded-3xl bg-gradient-to-br from-primary/15 via-orange-100 to-yellow-100 shadow-lg md:h-64" />
        </div>
      </section>

      {/* Featured restaurants */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight">
            Popular near you
          </h2>
          <a
            href="/restaurants"
            className="text-xs font-medium text-primary hover:underline"
          >
            View all
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {featuredRestaurants.map((r) => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
        </div>
      </section>
    </div>
  );
}
