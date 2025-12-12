"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import {
  orderStatusValues,
  type OrderRow,
  type OrderStatus,
} from "@/lib/models/order";

const statusClasses: Record<OrderStatus, string> = {
  DELIVERED:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
  PREPARING:
    "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
  ON_THE_WAY: "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300",
  CANCELLED: "bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300",
};

export const orderColumns: ColumnDef<OrderRow, unknown>[] = [
  {
    accessorKey: "orderNumber",
    header: "Order",
    cell: ({ row }) => (
      <span className="font-mono text-xs">{row.original.orderNumber}</span>
    ),
  },
  {
    accessorKey: "restaurantName",
    header: "Restaurant",
  },
  {
    accessorKey: "customerName",
    header: "Customer",
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: ({ row }) => (
      <span className="text-sm font-medium">
        ${Number(row.original.total).toFixed(2)}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      const className =
        statusClasses[status] ?? "bg-muted text-foreground dark:bg-muted/30";

      return (
        <Badge variant="outline" className={`text-[11px] ${className}`}>
          {status.replace(/_/g, " ")}
        </Badge>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row }) => {
      const date = new Date(row.original.createdAt);
      return (
        <span className="text-xs text-muted-foreground">
          {date.toLocaleString()}
        </span>
      );
    },
  },
];
