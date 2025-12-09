// components/restaurants/restaurant-filter-bar.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

type Props = {
  onSearchChange?: (value: string) => void;
  onSortChange?: (value: string) => void;
};

export function RestaurantFilterBar({ onSearchChange, onSortChange }: Props) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("best");

  return (
    <div className="flex flex-col gap-3 rounded-2xl border bg-card p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div className="flex-1">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            onSearchChange?.(e.target.value);
          }}
          placeholder="Search restaurants or cuisines"
          className="w-full rounded-full border bg-background px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        />
      </div>
      <div className="flex items-center gap-2 text-xs sm:text-sm">
        <select
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            onSortChange?.(e.target.value);
          }}
          className="rounded-full border bg-background px-3 py-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <option value="best">Best match</option>
          <option value="rating">Highest rated</option>
          <option value="fastest">Fastest delivery</option>
          <option value="fee">Lowest delivery fee</option>
        </select>
        <Button variant="outline" size="icon" className="rounded-full">
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
