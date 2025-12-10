// app/orders/[id]/page.tsx
import { notFound } from "next/navigation";
import { mockOrders } from "@/lib/dummy-data";
import { OrderStatusSteps } from "@/components/orders/order-status-steps";

type Props = {
  params: Promise<{ id: string }>;
};

function formatDate(dateString: string) {
  const d = new Date(dateString);
  return d.toLocaleString(undefined, {
    weekday: "short",
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

export default async function OrderDetailPage({ params }: Props) {
  const { id } = await params;
  const order = mockOrders.find((o) => o.id === id);

  if (!order) {
    return notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Order #{order.id}
          </h1>
          <p className="text-sm text-muted-foreground">
            {order.restaurantName} · {formatDate(order.placedAt)}
          </p>
        </div>
        <div className="text-right text-xs">
          <p className="inline-flex rounded-full bg-primary/5 px-2 py-0.5 font-medium text-primary">
            {statusLabel(order.status)}
          </p>
          {order.eta && order.status !== "delivered" && (
            <p className="mt-1 text-muted-foreground">
              Estimated arrival: {order.eta}
            </p>
          )}
        </div>
      </div>

      <OrderStatusSteps status={order.status} />

      <div className="grid gap-6 md:grid-cols-[2fr,1.2fr]">
        {/* Items */}
        <div className="space-y-3 rounded-2xl border bg-card p-4 text-sm">
          <h2 className="text-sm font-semibold">Items</h2>
          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between text-xs"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-muted-foreground">x{item.quantity}</p>
              </div>
              <p className="font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        {/* Summary */}
        <aside className="space-y-3 rounded-2xl border bg-card p-4 text-sm">
          <h2 className="text-sm font-semibold">Summary</h2>
          <div className="space-y-1 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Items total</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Delivery</span>
              <span>Included</span>
            </div>
          </div>
          <div className="flex items-center justify-between border-t pt-3 text-sm font-semibold">
            <span>Total</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
          <p className="text-xs text-muted-foreground">
            This is mock data for UI only. Later, this page can be connected to
            your real backend.
          </p>
        </aside>
      </div>
    </div>
  );
}
