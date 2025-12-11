// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 lg:px-8 space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          About FoodieGo
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          FoodieGo is a modern food delivery platform focused on speed,
          reliability, and creating a delightful ordering experience for food
          lovers everywhere.
        </p>
      </div>

      <section className="space-y-4 rounded-2xl border-2 bg-card p-8 shadow-xl">
        <h2 className="text-2xl font-bold">Our mission</h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          We connect hungry people with their favorite restaurants across the
          city. From comfort food to healthy bowls, gourmet cuisine to quick
          bites, we believe ordering should be simple, transparent, and
          enjoyable from start to finish. Our goal is to make every meal
          memorable.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-2xl border-2 bg-linear-to-br from-card to-primary/5 p-8 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
            <svg
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold">For customers</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Easily discover new places, track your orders in real-time, save
            your favorites, and reorder with just a few taps. We're committed to
            making your food journey seamless and enjoyable.
          </p>
        </div>
        <div className="space-y-3 rounded-2xl border-2 bg-linear-to-br from-card to-primary/5 p-8 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
            <svg
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold">For restaurants</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We provide a modern platform to reach new guests, manage incoming
            orders efficiently, and showcase your best dishes. Grow your
            business with our powerful tools and insights.
          </p>
        </div>
      </section>

      <section className="space-y-4 rounded-2xl border-2 bg-card p-8 shadow-xl">
        <h2 className="text-2xl font-bold">What&apos;s next</h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          This project currently runs as a frontend-only demonstration. In the
          future, it can be connected to a real backend for live menus, order
          tracking, secure payments, and much more. We're excited about the
          possibilities!
        </p>
      </section>
    </div>
  );
}
