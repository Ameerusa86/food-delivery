// app/admin/customers/page.tsx
"use client";

import { useMemo } from "react";
import { UserCircle2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type OrderRow = {
  id: string;
  restaurant: string;
  customer: string;
  total: string; // "$24.10"
};

const orders: OrderRow[] = [
  {
    id: "#10234",
    restaurant: "Mario's Pizza",
    customer: "Sarah Johnson",
    total: "$32.40",
  },
  {
    id: "#10233",
    restaurant: "Spice Route",
    customer: "Ahmed Ali",
    total: "$18.75",
  },
  {
    id: "#10232",
    restaurant: "Green Garden",
    customer: "Emily Chen",
    total: "$24.10",
  },
  {
    id: "#10231",
    restaurant: "Burger Hub",
    customer: "Michael Brown",
    total: "$15.90",
  },
  {
    id: "#10230",
    restaurant: "Mario's Pizza",
    customer: "Sarah Johnson",
    total: "$19.80",
  },
];

type CustomerRow = {
  name: string;
  orders: number;
  totalSpent: number;
  favoriteRestaurant: string | null;
};

export default function CustomersPage() {
  const customers = useMemo<CustomerRow[]>(() => {
    const map = new Map<
      string,
      CustomerRow & { restaurantCounts: Record<string, number> }
    >();

    for (const o of orders) {
      const amount = Number(o.total.replace(/[^0-9.]/g, "")) || 0;

      if (!map.has(o.customer)) {
        map.set(o.customer, {
          name: o.customer,
          orders: 0,
          totalSpent: 0,
          favoriteRestaurant: null,
          restaurantCounts: {},
        });
      }

      const entry = map.get(o.customer)!;
      entry.orders += 1;
      entry.totalSpent += amount;
      entry.restaurantCounts[o.restaurant] =
        (entry.restaurantCounts[o.restaurant] ?? 0) + 1;
    }

    return Array.from(map.values()).map((entry) => {
      const [fav] = Object.entries(entry.restaurantCounts).sort(
        (a, b) => b[1] - a[1]
      )[0] ?? [null];

      return {
        name: entry.name,
        orders: entry.orders,
        totalSpent: entry.totalSpent,
        favoriteRestaurant: fav,
      };
    });
  }, []);

  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Customers
          </p>
          <h2 className="mt-1 text-xl font-semibold leading-snug">
            Customer insights
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            See your most active customers and their total spend.
          </p>
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">
              Total customers
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-2xl font-semibold">{customers.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">
              Total orders (sample)
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-2xl font-semibold">{orders.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs text-muted-foreground">
              Avg. spend per customer
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-2xl font-semibold">
              $
              {(
                customers.reduce((sum, c) => sum + c.totalSpent, 0) /
                Math.max(customers.length, 1)
              ).toFixed(2)}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm">
            <UserCircle2 className="h-4 w-4" />
            Customers
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead className="text-right">Orders</TableHead>
                <TableHead className="text-right">Total spent</TableHead>
                <TableHead>Favorite restaurant</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((c) => (
                <TableRow key={c.name}>
                  <TableCell className="text-sm font-medium">
                    {c.name}
                  </TableCell>
                  <TableCell className="text-right text-sm">
                    {c.orders}
                  </TableCell>
                  <TableCell className="text-right text-sm">
                    ${c.totalSpent.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-sm">
                    {c.favoriteRestaurant ? (
                      <Badge variant="outline" className="text-[11px]">
                        {c.favoriteRestaurant}
                      </Badge>
                    ) : (
                      <span className="text-xs text-muted-foreground">—</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              {customers.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="py-6 text-center text-xs text-muted-foreground"
                  >
                    No customer data yet.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
