"use client";

import { JSX, useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { PaginationState, SortingState } from "@tanstack/react-table";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DataTable } from "@/components/admin/data-table";
import { orderColumns } from "@/components/admin/orders/columns";
import {
  orderStatusValues,
  type OrderStatus,
  type OrderRow,
} from "@/lib/models/order";

type OrdersApiResponse = {
  data: OrderRow[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  sortBy: "createdAt" | "totalCents" | "orderNumber";
  sortDir: "asc" | "desc";
};

type StatusFilterValue = "ALL" | OrderStatus;

export default function OrdersPage(): JSX.Element {
  const [search, setSearch] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<StatusFilterValue>("ALL");

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const [sorting, setSorting] = useState<SortingState>([
    { id: "createdAt", desc: true },
  ]);

  const [data, setData] = useState<OrderRow[]>([]);
  const [pageCount, setPageCount] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const queryString = useMemo(() => {
    const params = new URLSearchParams();

    params.set("page", String(pagination.pageIndex + 1));
    params.set("pageSize", String(pagination.pageSize));

    if (search.trim().length > 0) {
      params.set("search", search.trim());
    }

    if (statusFilter !== "ALL") {
      params.set("status", statusFilter);
    }

    const primarySort = sorting[0];
    if (primarySort !== undefined) {
      params.set("sortBy", primarySort.id);
      params.set("sortDir", primarySort.desc ? "desc" : "asc");
    }

    return params.toString();
  }, [pagination, search, statusFilter, sorting]);

  useEffect(() => {
    let cancel = false;
    setIsLoading(true);

    const fetchOrders = async (): Promise<void> => {
      try {
        const response = await fetch(`/api/admin/orders?${queryString}`);
        if (!response.ok) {
          console.error("Failed to load orders", response.statusText);
          return;
        }

        const json = (await response.json()) as OrdersApiResponse;
        if (cancel) {
          return;
        }

        setData(json.data);
        setPageCount(json.totalPages || 1);
      } catch (error) {
        console.error("Failed to load orders", error);
      } finally {
        if (!cancel) {
          setIsLoading(false);
        }
      }
    };

    void fetchOrders();

    return () => {
      cancel = true;
    };
  }, [queryString]);

  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Orders
          </p>
          <h2 className="mt-1 text-xl font-semibold leading-snug">
            Manage orders
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            View and filter recent food delivery orders (MongoDB + Zod +
            Shadcn).
          </p>
        </div>
      </section>

      <Card>
        <CardHeader className="flex flex-col gap-3 space-y-0 border-b pb-3 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-sm">Orders</CardTitle>

          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
            {/* Search */}
            <div className="relative flex-1 sm:w-56">
              <Search className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by order, restaurant, customer"
                className="pl-8 text-xs"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setPagination((prev) => ({
                    ...prev,
                    pageIndex: 0,
                  }));
                }}
              />
            </div>

            {/* Status filter */}
            <Select
              value={statusFilter}
              onValueChange={(value: StatusFilterValue) => {
                setStatusFilter(value);
                setPagination((prev) => ({
                  ...prev,
                  pageIndex: 0,
                }));
              }}
            >
              <SelectTrigger className="h-9 w-full shrink-0 text-xs sm:w-40">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All statuses</SelectItem>
                {orderStatusValues.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status.replace(/_/g, " ")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>

        <CardContent className="pt-4">
          <DataTable<OrderRow>
            columns={orderColumns}
            data={data}
            pageCount={pageCount}
            pagination={pagination}
            onPaginationChange={setPagination}
            sorting={sorting}
            onSortingChange={setSorting}
            isLoading={isLoading}
          />
        </CardContent>
      </Card>
    </div>
  );
}
