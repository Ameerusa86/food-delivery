// app/restaurants/page.tsx
"use client";

import { useMemo, useState } from "react";
import { restaurants } from "@/lib/dummy-data";
import { RestaurantCard } from "@/components/restaurants/restaurant-card";
import { RestaurantFilterBar } from "@/components/restaurants/restaurant-filter-bar";

export default function RestaurantsPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("best");

  const filtered = useMemo(() => {
    let result = [...restaurants];

    if (search.trim()) {
      const term = search.toLowerCase();
      result = result.filter(
        (r) =>
          r.name.toLowerCase().includes(term) ||
          r.cuisine.toLowerCase().includes(term) ||
          r.description.toLowerCase().includes(term)
      );
    }

    switch (sort) {
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "fastest":
        result.sort(
          (a, b) =>
            parseInt(a.deliveryTime.split("-")[0]) -
            parseInt(b.deliveryTime.split("-")[0])
        );
        break;
      case "fee":
        result.sort((a, b) => a.deliveryFee - b.deliveryFee);
        break;
      default:
        break;
    }

    return result;
  }, [search, sort]);

  return (
    <div className="space-y-8">
      {/* Header Section with Background */}
      <section className="relative overflow-hidden bg-linear-to-b from-primary/8 via-background to-background py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-3">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Explore Top Restaurants
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl leading-tight">
              Find your favorite
              <span className="bg-linear-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                {" "}
                restaurants
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Discover top-rated restaurants in your area. Filter by cuisine,
              rating, delivery time, and more to find exactly what you're
              craving.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-8 pb-8">
        {/* Filter Bar */}
        <div className="sticky top-20 z-30 bg-background/95 backdrop-blur-sm py-4 -mx-4 px-4 lg:-mx-8 lg:px-8 rounded-2xl border-b">
          <RestaurantFilterBar
            onSearchChange={setSearch}
            onSortChange={setSort}
          />
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">
              {filtered.length > 0
                ? `${filtered.length} restaurants`
                : "No restaurants found"}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {filtered.length > 0
                ? "Browse and select your favorite restaurant below"
                : "Try adjusting your search or filters"}
            </p>
          </div>
          {filtered.length > 0 && (
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground bg-muted px-4 py-2 rounded-lg">
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
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"
                />
              </svg>
              {filtered.length === 1
                ? "1 result"
                : `${filtered.length} results`}
            </div>
          )}
        </div>

        {/* Restaurant Grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((r) => (
              <RestaurantCard key={r.id} restaurant={r} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-dashed bg-card/50 py-20 text-center space-y-4">
            <div className="mx-auto w-20 h-20 rounded-full bg-muted flex items-center justify-center">
              <svg
                className="h-10 w-10 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold">No restaurants found</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                We couldn't find any restaurants matching your criteria. Try
                adjusting your search keywords or filters to discover more
                options.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
