// app/admin/orders/page.tsx
"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type OrderStatus = "Delivered" | "Preparing" | "Cancelled" | "On the way";

type OrderRow = {
  id: string;
  restaurant: string;
  customer: string;
  total: string;
  status: OrderStatus;
  timeAgo: string;
};

const allOrders: OrderRow[] = [
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
  {
    id: "#10230",
    restaurant: "Tokyo Bites",
    customer: "Hiro Tanaka",
    total: "$29.50",
    status: "Delivered",
    timeAgo: "1 h ago",
  },
];

const statusColors: Record<OrderStatus, string> = {
  Delivered:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
  Preparing:
    "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
  "On the way":
    "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300",
  Cancelled: "bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300",
};

export default function OrdersPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | OrderStatus>("All");

  const orders = useMemo(() => {
    return allOrders.filter((o) => {
      const matchesSearch =
        search.trim().length === 0 ||
        o.id.toLowerCase().includes(search.toLowerCase()) ||
        o.restaurant.toLowerCase().includes(search.toLowerCase()) ||
        o.customer.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ? true : o.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  return (
    <div className="space-y-8 p-8">
      <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Orders
          </p>
          <h2 className="mt-1 text-xl font-semibold leading-snug">
            Manage orders
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            View and filter recent food delivery orders.
          </p>
        </div>
      </section>

      <Card>
        <CardHeader className="flex flex-col gap-3 space-y-0 border-b pb-4 pt-5 px-6 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-sm">Orders</CardTitle>

          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
            {/* Search */}
            <div className="relative flex-1 sm:w-56">
              <Search className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by order, restaurant, customer"
                className="pl-8 text-xs"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Status filter */}
            <Select
              value={statusFilter}
              onValueChange={(v: "All" | OrderStatus) => setStatusFilter(v)}
            >
              <SelectTrigger className="h-9 w-full shrink-0 text-xs sm:w-40">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All statuses</SelectItem>
                <SelectItem value="Delivered">Delivered</SelectItem>
                <SelectItem value="Preparing">Preparing</SelectItem>
                <SelectItem value="On the way">On the way</SelectItem>
                <SelectItem value="Cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
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
              {orders.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="py-6 text-center text-xs text-muted-foreground"
                  >
                    No orders found for this filter.
                  </TableCell>
                </TableRow>
              ) : (
                orders.map((order) => (
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
                        className={`text-[11px] ${statusColors[order.status]}`}
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right text-xs text-muted-foreground">
                      {order.timeAgo}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
