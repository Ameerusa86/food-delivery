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
    <div className="flex flex-col gap-4 rounded-2xl border-2 bg-card p-5 shadow-lg sm:flex-row sm:items-center sm:justify-between">
      <div className="flex-1 relative">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            onSearchChange?.(e.target.value);
          }}
          placeholder="Search restaurants, cuisines, or dishes..."
          className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 pl-11 text-sm font-medium shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary"
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              onSortChange?.(e.target.value);
            }}
            className="appearance-none rounded-xl border-2 border-input bg-background pl-4 pr-10 py-2.5 text-sm font-medium shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary cursor-pointer"
          >
            <option value="best">Best match</option>
            <option value="rating">Highest rated</option>
            <option value="fastest">Fastest delivery</option>
            <option value="fee">Lowest fee</option>
          </select>
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <Button variant="outline" size="icon">
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
