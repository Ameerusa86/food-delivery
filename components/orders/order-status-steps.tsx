// components/orders/order-status-steps.tsx
import type { OrderStatus } from "@/lib/dummy-data";

type Props = {
  status: OrderStatus;
};

const steps = [
  { id: "placed", label: "Placed" },
  { id: "preparing", label: "Preparing" },
  { id: "on_the_way", label: "On the way" },
  { id: "delivered", label: "Delivered" },
] as const;

export function OrderStatusSteps({ status }: Props) {
  if (status === "cancelled") {
    return (
      <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
        This order was cancelled.
      </div>
    );
  }

  const index = steps.findIndex((s) => s.id === status);
  const currentIndex = index === -1 ? 0 : index;

  return (
    <div className="flex flex-col gap-2 rounded-2xl border bg-card p-3">
      <p className="text-xs font-medium text-muted-foreground">Order status</p>
      <div className="flex items-center justify-between gap-2">
        {steps.map((step, i) => {
          const isCompleted = i <= currentIndex;
          const isLast = i === steps.length - 1;
          return (
            <div
              key={step.id}
              className="flex flex-1 items-center gap-2 last:flex-none"
            >
              <div
                className={[
                  "flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold",
                  isCompleted
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-muted text-muted-foreground",
                ].join(" ")}
              >
                {i + 1}
              </div>
              <span className="text-xs text-muted-foreground">
                {step.label}
              </span>
              {!isLast && (
                <div
                  className={[
                    "h-px flex-1",
                    isCompleted ? "bg-primary/60" : "bg-muted",
                  ].join(" ")}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
