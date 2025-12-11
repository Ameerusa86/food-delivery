// app/terms/page.tsx
export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 space-y-6 text-sm">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Terms of Use</h1>
        <p className="text-sm text-muted-foreground">
          Last updated: December 10, 2025
        </p>
      </div>

      <section className="space-y-2 rounded-2xl border bg-card p-4">
        <h2 className="text-base font-semibold">1. Overview</h2>
        <p className="text-sm text-muted-foreground">
          FoodieGo is a demonstration food delivery interface. These Terms of
          Use describe how you may use this website and its features. This
          project currently runs as a frontend-only experience and does not
          process real orders or payments.
        </p>
      </section>

      <section className="space-y-2 rounded-2xl border bg-card p-4">
        <h2 className="text-base font-semibold">2. Non-production use</h2>
        <p className="text-sm text-muted-foreground">
          The app is provided for demonstration and portfolio purposes only. Any
          order, payment, or account details you enter are not sent to a real
          backend and should not be treated as real transactions.
        </p>
      </section>

      <section className="space-y-2 rounded-2xl border bg-card p-4">
        <h2 className="text-base font-semibold">3. User responsibilities</h2>
        <p className="text-sm text-muted-foreground">
          You agree not to misuse the interface, attempt to circumvent security
          mechanisms, or use it in any way that could harm the application or
          its hosting environment.
        </p>
      </section>

      <section className="space-y-2 rounded-2xl border bg-card p-4">
        <h2 className="text-base font-semibold">4. Changes to these terms</h2>
        <p className="text-sm text-muted-foreground">
          Because this is a demo project, these terms may be updated at any time
          to reflect new features or project scope. Continuing to use the site
          after changes are published indicates that you accept the updated
          terms.
        </p>
      </section>
    </div>
  );
}
