import { Document } from "mongodb";

export const orderStatusValues = [
  "DELIVERED",
  "PREPARING",
  "CANCELLED",
  "ON_THE_WAY",
] as const;

export type OrderStatus = (typeof orderStatusValues)[number];

// Document as it exists in MongoDB
export type OrderDocument = Document & {
  _id: string;
  orderNumber: string;
  restaurantName: string;
  customerName: string;
  totalCents: number;
  status: OrderStatus;
  createdAt: Date;
};

// Shape we send to the frontend table
export type OrderRow = {
  id: string;
  orderNumber: string;
  restaurantName: string;
  customerName: string;
  total: string; // "24.10"
  status: OrderStatus;
  createdAt: string; // ISO string
};
