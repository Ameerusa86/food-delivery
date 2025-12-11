// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-store";
import { Navbar } from "@/components/ui/layout/navbar";
import { Footer } from "@/components/ui/layout/footer";
import { LoadingPage } from "@/components/loading-page";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FoodieGo - Delicious Food Delivered Fast",
  description:
    "Order from the best local restaurants. Fast delivery, great food, amazing experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.className} ${plusJakarta.variable} ${inter.variable} min-h-screen bg-background text-foreground`}
      >
        <LoadingPage />
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
