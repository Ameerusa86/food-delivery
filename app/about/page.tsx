// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          About FoodieGo
        </h1>
        <p className="text-sm text-muted-foreground">
          FoodieGo is a modern food delivery experience focused on speed,
          reliability, and a delightful ordering journey.
        </p>
      </div>

      <section className="space-y-3 rounded-2xl border bg-card p-4 text-sm">
        <h2 className="text-base font-semibold">Our mission</h2>
        <p className="text-sm text-muted-foreground">
          We connect hungry people with their favorite restaurants across the
          city. From comfort food to healthy bowls, we believe ordering should
          be simple, transparent, and enjoyable from start to finish.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 text-sm">
        <div className="space-y-2 rounded-2xl border bg-card p-4">
          <h3 className="text-sm font-semibold">For customers</h3>
          <p className="text-xs text-muted-foreground">
            Easily discover new places, track your orders in real-time, and
            reorder your favorites in just a few taps.
          </p>
        </div>
        <div className="space-y-2 rounded-2xl border bg-card p-4">
          <h3 className="text-sm font-semibold">For restaurants</h3>
          <p className="text-xs text-muted-foreground">
            We provide a modern platform to reach new guests, manage incoming
            orders, and showcase their best dishes.
          </p>
        </div>
      </section>

      <section className="space-y-2 rounded-2xl border bg-card p-4 text-sm">
        <h2 className="text-base font-semibold">What&apos;s next</h2>
        <p className="text-sm text-muted-foreground">
          This project currently runs as a frontend-only experience. In the
          future, it can be connected to a real backend for live menus, order
          tracking, and secure payments.
        </p>
      </section>
    </div>
  );
}
