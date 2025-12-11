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
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">
          Restaurants near you
        </h1>
        <p className="text-lg text-muted-foreground">
          Browse by cuisine, rating, delivery time, and more. Discover your next
          favorite restaurant.
        </p>
      </div>

      <RestaurantFilterBar onSearchChange={setSearch} onSortChange={setSort} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((r) => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 space-y-3">
          <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center">
            <svg
              className="h-8 w-8 text-muted-foreground"
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
          <h3 className="text-lg font-semibold">No restaurants found</h3>
          <p className="text-sm text-muted-foreground">
            Try adjusting your search or filters to find what you're looking
            for.
          </p>
        </div>
      )}
    </div>
  );
}
