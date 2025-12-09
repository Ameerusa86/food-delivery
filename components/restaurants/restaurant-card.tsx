// components/restaurants/restaurant-card.tsx
import Link from "next/link";
import Image from "next/image";
import type { Restaurant } from "@/lib/dummy-data";
import { Badge } from "@/components/ui/badge";

type Props = {
  restaurant: Restaurant;
};

export function RestaurantCard({ restaurant }: Props) {
  return (
    <Link
      href={`/restaurants/${restaurant.slug}`}
      className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={restaurant.imageUrl}
          alt={restaurant.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <Badge className="bg-background/90 text-xs">
            {restaurant.deliveryTime} min
          </Badge>
        </div>
      </div>
      <div className="space-y-1 px-3 py-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="truncate text-sm font-semibold">{restaurant.name}</h3>
          <span className="text-xs font-medium">
            ⭐ {restaurant.rating.toFixed(1)}
          </span>
        </div>
        <p className="line-clamp-2 text-xs text-muted-foreground">
          {restaurant.description}
        </p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{restaurant.cuisine}</span>
          <span>
            {restaurant.deliveryFee === 0
              ? "Free delivery"
              : `$${restaurant.deliveryFee.toFixed(2)} delivery`}
          </span>
        </div>
      </div>
    </Link>
  );
}
