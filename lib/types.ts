// lib/types.ts
export type OrderStatus =
  | "DELIVERED"
  | "PREPARING"
  | "CANCELLED"
  | "ON_THE_WAY";

export type OrderDoc = {
  _id?: string; // Mongo ObjectId as string when serialized
  orderNumber: string;
  restaurantName: string;
  customerName: string;
  totalCents: number;
  status: OrderStatus;
  createdAt: Date;
};
