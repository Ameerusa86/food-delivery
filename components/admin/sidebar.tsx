// components/admin/sidebar.tsx
"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import {
  ChartPie,
  UtensilsCrossed,
  ShoppingBag,
  Users,
  Settings,
} from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

type NavItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

export const adminNavItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: <ChartPie className="h-4 w-4" />,
  },
  {
    label: "Restaurants",
    href: "/admin/restaurants",
    icon: <UtensilsCrossed className="h-4 w-4" />,
  },
  {
    label: "Orders",
    href: "/admin/orders",
    icon: <ShoppingBag className="h-4 w-4" />,
  },
  {
    label: "Customers",
    href: "/admin/customers",
    icon: <Users className="h-4 w-4" />,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: <Settings className="h-4 w-4" />,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-sidebar">
      {/* Brand */}
      <div className="flex h-16 items-center gap-2 border-b px-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sidebar-primary text-sidebar-primary-foreground text-sm font-semibold">
          FD
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-sidebar-foreground">
            Food Delivery
          </span>
          <span className="text-xs text-muted-foreground">Admin Panel</span>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-1 px-3 py-4">
          {adminNavItems.map((item) => {
            const isActive =
              item.href === "/admin"
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <Button
                key={item.href}
                variant={isActive ? "secondary" : "ghost"}
                size="sm"
                asChild
                className={`justify-start gap-2 px-3 ${
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
              >
                <a href={item.href}>
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-sidebar-accent/70">
                    {item.icon}
                  </span>
                  <span className="text-sm">{item.label}</span>
                </a>
              </Button>
            );
          })}
        </nav>
      </ScrollArea>

      <Separator />
      <div className="px-4 py-3 text-xs text-muted-foreground">
        <div className="flex items-center justify-between">
          <span>Admin</span>
          <span className="rounded-full bg-sidebar-accent px-2 py-0.5 text-[10px] font-medium text-sidebar-accent-foreground">
            v1.0
          </span>
        </div>
      </div>
    </aside>
  );
}
