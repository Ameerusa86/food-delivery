// app/restaurants/[slug]/page.tsx
import { notFound } from "next/navigation";
import { restaurants } from "@/lib/dummy-data";
import { MenuItemCard } from "@/components/restaurants/menu-item-card";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function RestaurantDetailPage({ params }: Props) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const restaurant = restaurants.find((r) => r.slug === decodedSlug);

  if (!restaurant) {
    return notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 space-y-8">
      <header className="space-y-2 border-b pb-4">
        <h1 className="text-2xl font-semibold">{restaurant.name}</h1>
        <p className="text-sm text-muted-foreground">
          {restaurant.cuisine} • ⭐ {restaurant.rating.toFixed(1)} •{" "}
          {restaurant.deliveryTime} min •{" "}
          {restaurant.deliveryFee === 0
            ? "Free delivery"
            : `$${restaurant.deliveryFee.toFixed(2)} delivery`}
        </p>
        <p className="text-xs text-muted-foreground">
          {restaurant.description}
        </p>
      </header>

      <section className="space-y-6">
        {restaurant.menu.map((cat) => (
          <div key={cat.id} className="space-y-3">
            <h2 className="text-lg font-semibold">{cat.name}</h2>
            <div className="space-y-3">
              {cat.items.map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  restaurantId={restaurant.id}
                  restaurantName={restaurant.name}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
