// app/privacy/page.tsx
export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 space-y-8 text-sm">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground">
          Last updated: December 10, 2025
        </p>
      </div>

      <section className="space-y-2 rounded-2xl border bg-card p-4">
        <h2 className="text-base font-semibold">1. Overview</h2>
        <p className="text-sm text-muted-foreground">
          FoodieGo is currently a frontend-only demo. It does not persist real
          user data or communicate with a production backend. Any data you enter
          is kept in memory in your browser session only.
        </p>
      </section>

      <section className="space-y-2 rounded-2xl border bg-card p-4">
        <h2 className="text-base font-semibold">2. Data collection</h2>
        <p className="text-sm text-muted-foreground">
          Forms such as login, register, checkout, and contact are present for
          UI demonstration. In this demo, those forms do not send data to a
          server or third party. Once you refresh or close the page, any entered
          values are lost.
        </p>
      </section>

      <section className="space-y-2 rounded-2xl border bg-card p-4">
        <h2 className="text-base font-semibold">3. Cookies and tracking</h2>
        <p className="text-sm text-muted-foreground">
          This demo does not implement analytics, tracking, or custom cookies
          beyond what the framework itself may use for basic functionality in
          development.
        </p>
      </section>

      <section className="space-y-2 rounded-2xl border bg-card p-4">
        <h2 className="text-base font-semibold">4. Future enhancements</h2>
        <p className="text-sm text-muted-foreground">
          If this interface is later connected to a real backend or deployed as
          a production service, this Privacy Policy would need to be updated to
          clearly describe what data is collected, how it is used, and how it is
          protected.
        </p>
      </section>
    </div>
  );
}
