// app/admin/page.tsx
"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowDownRight, Clock } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

type Timeframe = "Today" | "7 days" | "30 days" | "90 days";

const timeframes: Timeframe[] = ["Today", "7 days", "30 days", "90 days"];

const statCards = [
  {
    label: "Total orders",
    value: "1,284",
    change: "+12.4%",
    trend: "up" as const,
  },
  {
    label: "Revenue",
    value: "$24,920",
    change: "+8.2%",
    trend: "up" as const,
  },
  {
    label: "Active restaurants",
    value: "32",
    change: "+3",
    trend: "up" as const,
  },
  {
    label: "Avg. delivery time",
    value: "27 min",
    change: "-2 min",
    trend: "down" as const,
  },
];

type OrderRow = {
  id: string;
  restaurant: string;
  customer: string;
  total: string;
  status: "Delivered" | "Preparing" | "Cancelled" | "On the way";
  timeAgo: string;
};

const recentOrders: OrderRow[] = [
  {
    id: "#10234",
    restaurant: "Mario's Pizza",
    customer: "Sarah Johnson",
    total: "$32.40",
    status: "Delivered",
    timeAgo: "12 min ago",
  },
  {
    id: "#10233",
    restaurant: "Spice Route",
    customer: "Ahmed Ali",
    total: "$18.75",
    status: "On the way",
    timeAgo: "18 min ago",
  },
  {
    id: "#10232",
    restaurant: "Green Garden",
    customer: "Emily Chen",
    total: "$24.10",
    status: "Preparing",
    timeAgo: "23 min ago",
  },
  {
    id: "#10231",
    restaurant: "Burger Hub",
    customer: "Michael Brown",
    total: "$15.90",
    status: "Cancelled",
    timeAgo: "45 min ago",
  },
];

const topRestaurants = [
  {
    name: "Mario's Pizza",
    cuisine: "Pizza",
    orders: 184,
    rating: 4.7,
  },
  {
    name: "Spice Route",
    cuisine: "Indian",
    orders: 156,
    rating: 4.6,
  },
  {
    name: "Green Garden",
    cuisine: "Healthy",
    orders: 132,
    rating: 4.8,
  },
  {
    name: "Tokyo Bites",
    cuisine: "Japanese",
    orders: 97,
    rating: 4.5,
  },
];

export default function AdminPage() {
  const [selectedTimeframe, setSelectedTimeframe] =
    useState<Timeframe>("7 days");

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Overview
          </p>
          <h2 className="mt-1 text-xl font-semibold leading-snug">
            Food delivery performance
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Monitor orders, revenue, and restaurant performance at a glance.
          </p>
        </div>

        {/* Timeframe selector using Buttons */}
        <div className="flex items-center gap-1 rounded-full border bg-card p-1">
          {timeframes.map((tf) => {
            const isActive = tf === selectedTimeframe;
            return (
              <Button
                key={tf}
                size="sm"
                variant={isActive ? "default" : "ghost"}
                className={`rounded-full px-3 text-xs ${
                  isActive ? "shadow-sm" : "text-muted-foreground"
                }`}
                onClick={() => setSelectedTimeframe(tf)}
              >
                {tf}
              </Button>
            );
          })}
        </div>
      </section>

      {/* Stat cards */}
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card) => (
          <Card key={card.label} className="shadow-sm">
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {card.label}
                </p>
                <p className="mt-2 text-xl font-semibold">{card.value}</p>
              </div>
              <Badge
                variant="outline"
                className={`flex items-center gap-1 border text-[11px] ${
                  card.trend === "up"
                    ? "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300"
                    : "border-red-300 bg-red-50 text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300"
                }`}
              >
                {card.trend === "up" ? (
                  <ArrowUpRight className="h-3 w-3" />
                ) : (
                  <ArrowDownRight className="h-3 w-3" />
                )}
                <span>{card.change}</span>
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Compared to previous period.
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Main grid */}
      <section className="grid gap-6 lg:grid-cols-[2fr,1.3fr]">
        {/* Recent orders */}
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b py-3">
            <div className="flex items-center gap-2">
              <CardTitle className="text-sm">Recent orders</CardTitle>
              <Badge variant="outline" className="text-[11px]">
                {recentOrders.length} orders
              </Badge>
            </div>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="gap-1 text-xs text-primary"
            >
              <a href="/admin/orders">
                View all
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[90px]">Order</TableHead>
                  <TableHead>Restaurant</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-mono text-xs">
                      {order.id}
                    </TableCell>
                    <TableCell>{order.restaurant}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell className="text-right font-medium">
                      {order.total}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`text-[11px] ${
                          order.status === "Delivered"
                            ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300"
                            : order.status === "Preparing"
                            ? "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300"
                            : order.status === "On the way"
                            ? "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300"
                            : "bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300"
                        }`}
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right text-xs text-muted-foreground">
                      {order.timeAgo}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Right column */}
        <div className="space-y-4">
          {/* Top restaurants */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Top restaurants</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {topRestaurants.map((r, idx) => (
                <div
                  key={r.name}
                  className="flex items-center justify-between gap-3 rounded-lg border bg-muted/40 px-3 py-2.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{r.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {r.cuisine} · {r.orders} orders
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Rating</p>
                    <p className="text-sm font-semibold">
                      {r.rating.toFixed(1)}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Trend placeholder */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <CardTitle className="text-sm">Order volume trend</CardTitle>
              </div>
              <Badge variant="outline" className="text-[11px]">
                Charts later
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                When you connect real data, this card can host a chart using
                your <code>--chart-*</code> colors.
              </p>
              <div className="mt-4 flex h-28 items-center justify-center rounded-lg border border-dashed text-xs text-muted-foreground">
                Order trend chart placeholder
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
