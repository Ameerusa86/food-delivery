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
      className="group overflow-hidden rounded-2xl border bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <Image
          src={restaurant.imageUrl}
          alt={restaurant.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <Badge className="bg-primary text-primary-foreground text-xs font-semibold shadow-lg border-0">
            <svg
              className="h-3 w-3 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {restaurant.deliveryTime} min
          </Badge>
          {restaurant.deliveryFee === 0 && (
            <Badge className="bg-primary text-primary-foreground text-xs font-semibold shadow-lg border-0">
              Free delivery
            </Badge>
          )}
        </div>
      </div>
      <div className="space-y-4 px-4 py-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-base leading-snug line-clamp-1 group-hover:text-primary transition-colors">
            {restaurant.name}
          </h3>
          <div className="flex items-center gap-1.5 shrink-0 bg-primary/10 px-2.5 py-1 rounded-lg">
            <svg
              className="h-3.5 w-3.5 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-bold text-primary">
              {restaurant.rating.toFixed(1)}
            </span>
          </div>
        </div>
        <p className="line-clamp-2 text-sm text-muted-foreground leading-relaxed">
          {restaurant.description}
        </p>
        <div className="flex items-center justify-between gap-3 pt-3 border-t text-sm">
          <span className="font-medium text-muted-foreground">
            {restaurant.cuisine}
          </span>
          {restaurant.deliveryFee > 0 && (
            <span className="text-muted-foreground">
              ${restaurant.deliveryFee.toFixed(2)} delivery
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
