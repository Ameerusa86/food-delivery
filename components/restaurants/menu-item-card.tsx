// components/restaurants/menu-item-card.tsx
"use client";

import { useCart } from "@/lib/cart-store";
import { Button } from "@/components/ui/button";
import type { MenuItem } from "@/lib/dummy-data";
import { Badge } from "@/components/ui/badge";

type Props = {
  item: MenuItem;
  restaurantId: string;
  restaurantName: string;
};

export function MenuItemCard({ item, restaurantId, restaurantName }: Props) {
  const { addItem } = useCart();

  return (
    <div className="flex items-start justify-between gap-3 rounded-2xl border bg-card p-3">
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-medium">{item.name}</h3>
          {item.isPopular && <Badge className="text-[10px]">Popular</Badge>}
        </div>
        {item.description && (
          <p className="text-xs text-muted-foreground line-clamp-2">
            {item.description}
          </p>
        )}
        <p className="text-sm font-semibold">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center">
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            addItem(
              {
                id: item.id,
                name: item.name,
                price: item.price,
                restaurantId,
                restaurantName,
              },
              1
            )
          }
        >
          Add
        </Button>
      </div>
    </div>
  );
}
