// app/admin/settings/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="space-y-8 p-8">
      <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Settings
          </p>
          <h2 className="mt-1 text-xl font-semibold leading-snug">
            Platform settings
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Configure your food delivery admin experience. (UI only for now.)
          </p>
        </div>
      </section>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        {/* General */}
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Brand</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="platform-name">Platform name</Label>
                  <Input
                    id="platform-name"
                    placeholder="Food Delivery Admin"
                    defaultValue="Food Delivery Admin"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="platform-url">Public URL</Label>
                  <Input
                    id="platform-url"
                    placeholder="https://example.com"
                    defaultValue="https://fooddelivery.local"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="support-email">Support email</Label>
                <Input
                  id="support-email"
                  placeholder="support@example.com"
                  defaultValue="support@fooddelivery.com"
                />
              </div>
              <div className="flex justify-end">
                <Button size="sm">Save changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Admin notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <Label htmlFor="notify-new-order">New orders</Label>
                  <p className="text-xs text-muted-foreground">
                    Receive alerts when new orders come in.
                  </p>
                </div>
                <Switch id="notify-new-order" defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <Label htmlFor="notify-restaurant-issue">
                    Restaurant issues
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Be notified about offline restaurants or menu sync errors.
                  </p>
                </div>
                <Switch id="notify-restaurant-issue" defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <Label htmlFor="notify-payment">Payment problems</Label>
                  <p className="text-xs text-muted-foreground">
                    Alerts when a payment fails or is disputed.
                  </p>
                </div>
                <Switch id="notify-payment" />
              </div>
              <div className="flex justify-end">
                <Button size="sm">Save preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing */}
        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Billing info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="billing-name">Company name</Label>
                <Input
                  id="billing-name"
                  placeholder="Company LLC"
                  defaultValue="Food Delivery LLC"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="billing-address">Billing address</Label>
                <Input
                  id="billing-address"
                  placeholder="123 Main St, City, Country"
                  defaultValue="123 Main St, New York, USA"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="vat">Tax / VAT ID</Label>
                <Input id="vat" placeholder="VAT123456" />
              </div>
              <div className="flex justify-end">
                <Button size="sm">Update billing</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
