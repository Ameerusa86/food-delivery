// app/api/admin/orders/route.ts
import { NextResponse } from "next/server";
import type { Filter } from "mongodb";

import { getCollection } from "@/lib/mongodb";
import {
  orderStatusValues,
  type OrderDocument,
  type OrderRow,
} from "@/lib/models/order";

const sortableFields = ["createdAt", "totalCents", "orderNumber"] as const;
type SortField = (typeof sortableFields)[number];

type SortDirection = "asc" | "desc";

type OrdersApiResponse = {
  data: OrderRow[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  sortBy: SortField;
  sortDir: SortDirection;
};

export async function GET(
  req: Request
): Promise<NextResponse<OrdersApiResponse>> {
  const { searchParams } = new URL(req.url);

  const pageParam = searchParams.get("page") ?? "1";
  const pageSizeParam = searchParams.get("pageSize") ?? "10";
  const statusParam = searchParams.get("status") ?? "ALL";
  const search = (searchParams.get("search") ?? "").trim();

  const sortByParam = (searchParams.get("sortBy") ?? "createdAt") as SortField;
  const sortDirParam = (searchParams.get("sortDir") ?? "desc") as SortDirection;

  const page = Math.max(Number(pageParam) || 1, 1);
  const pageSize = Math.min(Math.max(Number(pageSizeParam) || 10, 1), 100);

  const filter: Filter<OrderDocument> = {};

  if (statusParam !== "ALL") {
    if (
      orderStatusValues.includes(
        statusParam as (typeof orderStatusValues)[number]
      )
    ) {
      (filter as Record<string, unknown>).status = statusParam;
    }
  }

  if (search.length > 0) {
    filter.$or = [
      { orderNumber: { $regex: search, $options: "i" } },
      { restaurantName: { $regex: search, $options: "i" } },
      { customerName: { $regex: search, $options: "i" } },
    ];
  }

  const sort: Record<string, 1 | -1> = {};
  if (sortableFields.includes(sortByParam)) {
    sort[sortByParam] = sortDirParam === "asc" ? 1 : -1;
  } else {
    sort.createdAt = -1;
  }

  const ordersCollection = await getCollection<OrderDocument>("orders");

  const total = await ordersCollection.countDocuments(filter);

  const documents = await ordersCollection
    .find(filter)
    .sort(sort)
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .toArray();

  const rows: OrderRow[] = documents.map((doc) => {
    // Convert _id to string if needed
    const docId = typeof doc._id === "string" ? doc._id : String(doc._id);
    const createdAt =
      doc.createdAt instanceof Date ? doc.createdAt : new Date(doc.createdAt);

    const rowCandidate: OrderRow = {
      id: docId,
      orderNumber: doc.orderNumber,
      restaurantName: doc.restaurantName,
      customerName: doc.customerName,
      total: (doc.totalCents / 100).toFixed(2),
      status: doc.status,
      createdAt: createdAt.toISOString(),
    };

    return rowCandidate;
  });

  const totalPages = total === 0 ? 1 : Math.ceil(total / pageSize);

  return NextResponse.json({
    data: rows,
    page,
    pageSize,
    total,
    totalPages,
    sortBy: sortableFields.includes(sortByParam) ? sortByParam : "createdAt",
    sortDir: sortDirParam,
  });
}
