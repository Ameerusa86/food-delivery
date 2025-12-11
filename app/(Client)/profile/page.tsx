// app/profile/page.tsx
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 space-y-8">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Profile</h1>
        <p className="text-sm text-muted-foreground">
          Manage your account details, addresses, and preferences.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Account info */}
        <section className="space-y-3 rounded-2xl border bg-card p-4 text-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold">Account</h2>
            <Button variant="outline" size="sm">
              Edit
            </Button>
          </div>
          <div className="space-y-1 text-xs">
            <p className="text-muted-foreground">Name</p>
            <p className="font-medium">John Doe</p>
          </div>
          <div className="space-y-1 text-xs">
            <p className="text-muted-foreground">Email</p>
            <p className="font-medium">john@example.com</p>
          </div>
          <div className="space-y-1 text-xs">
            <p className="text-muted-foreground">Phone</p>
            <p className="font-medium">+1 (555) 555-1234</p>
          </div>
        </section>

        {/* Addresses */}
        <section className="space-y-3 rounded-2xl border bg-card p-4 text-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold">Saved addresses</h2>
            <Button variant="outline" size="sm">
              Add address
            </Button>
          </div>
          <div className="space-y-1 text-xs">
            <p className="font-medium">Home</p>
            <p className="text-muted-foreground">
              123 Main St, Apt 4B, City, ST 12345
            </p>
          </div>
        </section>

        {/* Payment methods */}
        <section className="space-y-3 rounded-2xl border bg-card p-4 text-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold">Payment methods</h2>
            <Button variant="outline" size="sm">
              Add card
            </Button>
          </div>
          <div className="space-y-1 text-xs">
            <p className="font-medium">Visa</p>
            <p className="text-muted-foreground">**** **** **** 1234</p>
          </div>
        </section>

        {/* Preferences */}
        <section className="space-y-3 rounded-2xl border bg-card p-4 text-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold">Preferences</h2>
          </div>
          <div className="space-y-2 text-xs">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-3 w-3" defaultChecked />
              <span>Email me order updates</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-3 w-3" />
              <span>Send me promotions</span>
            </label>
          </div>
        </section>
      </div>
    </div>
  );
}
