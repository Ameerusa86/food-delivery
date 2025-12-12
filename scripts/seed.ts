// scripts/seed.ts
import "dotenv/config";
import { MongoClient } from "mongodb";
import type { OrderDoc } from "../lib/types";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "food_delivery_admin";

if (!uri) {
  throw new Error("MONGODB_URI is not set");
}

const sampleOrders: OrderDoc[] = [
  {
    orderNumber: "#10234",
    restaurantName: "Mario's Pizza",
    customerName: "Sarah Johnson",
    totalCents: 3240,
    status: "DELIVERED",
    createdAt: new Date(),
  },
  {
    orderNumber: "#10233",
    restaurantName: "Spice Route",
    customerName: "Ahmed Ali",
    totalCents: 1875,
    status: "ON_THE_WAY",
    createdAt: new Date(),
  },
  {
    orderNumber: "#10232",
    restaurantName: "Green Garden",
    customerName: "Emily Chen",
    totalCents: 2410,
    status: "PREPARING",
    createdAt: new Date(),
  },
  {
    orderNumber: "#10231",
    restaurantName: "Burger Hub",
    customerName: "Michael Brown",
    totalCents: 1590,
    status: "CANCELLED",
    createdAt: new Date(),
  },
];

async function main() {
  const client = new MongoClient(uri!);
  await client.connect();
  const db = client.db(dbName);

  const orders = db.collection<OrderDoc>("orders");

  console.log("Clearing existing orders...");
  await orders.deleteMany({});

  console.log("Inserting sample orders...");
  await orders.insertMany(sampleOrders);

  console.log("Done.");
  await client.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
