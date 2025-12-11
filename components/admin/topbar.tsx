// components/admin/topbar.tsx
"use client";

import { useState } from "react";
import { Menu, Bell, LogOut, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { adminNavItems } from "./sidebar";

export function AdminTopbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-md lg:px-8">
        {/* Left: mobile menu + title */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-4 w-4" />
            <span className="sr-only">Open admin menu</span>
          </Button>

          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              Admin
            </span>
            <h1 className="text-base font-semibold leading-snug">Dashboard</h1>
          </div>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>

          {/* Simple theme placeholder – replace with your actual ThemeToggle */}
          <Button variant="outline" size="sm" className="hidden sm:inline-flex">
            Theme
          </Button>

          {/* User dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 px-2 py-1.5"
              >
                <Avatar className="h-8 w-8">
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div className="hidden flex-col text-left text-xs sm:flex">
                  <span className="font-medium">Admin User</span>
                  <span className="text-[11px] text-muted-foreground">
                    admin@fooddelivery.com
                  </span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuLabel>My account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Mobile sidebar via Sheet */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="flex w-72 flex-col p-0">
          <SheetHeader className="border-b px-4 py-3 text-left">
            <SheetTitle>Admin menu</SheetTitle>
          </SheetHeader>
          <ScrollArea className="flex-1 px-3 py-4">
            <nav className="flex flex-col gap-1">
              {adminNavItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="justify-start gap-2 px-3"
                  onClick={() => setOpen(false)}
                >
                  <a href={item.href}>
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-muted">
                      {item.icon}
                    </span>
                    <span className="text-sm">{item.label}</span>
                  </a>
                </Button>
              ))}
            </nav>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
}
