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
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Restaurants near you
        </h1>
        <p className="text-sm text-muted-foreground">
          Browse by cuisine, rating, delivery time, and more.
        </p>
      </div>

      <RestaurantFilterBar onSearchChange={setSearch} onSortChange={setSort} />

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filtered.map((r) => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-muted-foreground">
          No restaurants match your search.
        </p>
      )}
    </div>
  );
}
