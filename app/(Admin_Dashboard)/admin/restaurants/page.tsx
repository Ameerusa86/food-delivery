// app/admin/restaurants/page.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Search, Star } from "lucide-react";

import { restaurants } from "@/lib/dummy-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RestaurantsPage() {
  const [search, setSearch] = useState("");
  const [cuisineFilter, setCuisineFilter] = useState("All");

  const cuisines = useMemo(() => {
    const set = new Set<string>();
    restaurants.forEach((r) => set.add(r.cuisine));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    return restaurants.filter((r) => {
      const matchesSearch =
        search.trim().length === 0 ||
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase());

      const matchesCuisine =
        cuisineFilter === "All" ? true : r.cuisine === cuisineFilter;

      return matchesSearch && matchesCuisine;
    });
  }, [search, cuisineFilter]);

  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Restaurants
          </p>
          <h2 className="mt-1 text-xl font-semibold leading-snug">
            Manage restaurant partners
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            View all restaurants available in your food delivery platform.
          </p>
        </div>
      </section>

      <Card>
        <CardHeader className="flex flex-col gap-3 space-y-0 border-b pb-3 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-sm">Restaurants</CardTitle>

          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
            {/* Search */}
            <div className="relative flex-1 sm:w-60">
              <Search className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by name or description"
                className="pl-8 text-xs"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Cuisine */}
            <Select
              value={cuisineFilter}
              onValueChange={(v) => setCuisineFilter(v)}
            >
              <SelectTrigger className="h-9 w-full shrink-0 text-xs sm:w-40">
                <SelectValue placeholder="All cuisines" />
              </SelectTrigger>
              <SelectContent>
                {cuisines.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c === "All" ? "All cuisines" : c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>

        <CardContent className="grid gap-4 py-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.length === 0 ? (
            <p className="col-span-full py-4 text-center text-xs text-muted-foreground">
              No restaurants match this filter.
            </p>
          ) : (
            filtered.map((r) => (
              <div
                key={r.id}
                className="flex gap-3 rounded-xl border bg-card p-3 shadow-sm"
              >
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border bg-muted">
                  <Image
                    src={r.imageUrl}
                    alt={r.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-1">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-semibold">{r.name}</p>
                      <span className="flex items-center gap-1 text-xs">
                        <Star className="h-3 w-3 text-yellow-500" />
                        <span>{r.rating.toFixed(1)}</span>
                      </span>
                    </div>
                    <p className="line-clamp-2 text-xs text-muted-foreground">
                      {r.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="text-[10px] uppercase tracking-wide"
                      >
                        {r.cuisine}
                      </Badge>
                      <span className="text-[11px] text-muted-foreground">
                        {r.deliveryTime} min
                      </span>
                    </div>
                    <span className="text-xs font-medium">
                      ${r.deliveryFee.toFixed(2)} fee
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}
