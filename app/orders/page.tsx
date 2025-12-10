// app/orders/page.tsx
import Link from "next/link";
import { mockOrders } from "@/lib/dummy-data";

function formatDate(dateString: string) {
  const d = new Date(dateString);
  return d.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function statusLabel(status: string) {
  switch (status) {
    case "placed":
      return "Placed";
    case "preparing":
      return "Preparing";
    case "on_the_way":
      return "On the way";
    case "delivered":
      return "Delivered";
    case "cancelled":
      return "Cancelled";
    default:
      return status;
  }
}

export default function OrdersPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Your orders</h1>
        <p className="text-sm text-muted-foreground">
          View your recent orders and their status.
        </p>
      </div>

      <div className="space-y-3">
        {mockOrders.map((order) => (
          <Link
            key={order.id}
            href={`/orders/${order.id}`}
            className="flex items-center justify-between gap-3 rounded-2xl border bg-card p-4 text-sm hover:border-primary/40"
          >
            <div className="space-y-1">
              <p className="font-medium">
                #{order.id} · {order.restaurantName}
              </p>
              <p className="text-xs text-muted-foreground">
                {formatDate(order.placedAt)} ·{" "}
                {order.items.map((i) => i.name).join(", ")}
              </p>
            </div>
            <div className="text-right text-xs">
              <p className="font-semibold">${order.total.toFixed(2)}</p>
              <p
                className={[
                  "mt-1 inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium",
                  order.status === "delivered"
                    ? "bg-emerald-50 text-emerald-700"
                    : order.status === "cancelled"
                    ? "bg-destructive/10 text-destructive"
                    : "bg-amber-50 text-amber-700",
                ].join(" ")}
              >
                {statusLabel(order.status)}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {mockOrders.length === 0 && (
        <p className="text-sm text-muted-foreground">
          You don&apos;t have any orders yet.
        </p>
      )}
    </div>
  );
}
