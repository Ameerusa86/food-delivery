"use client";

import { useEffect, useState } from "react";
import { Loader } from "@/components/ui/loader";

export function LoadingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 1-2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-primary/80 shadow-2xl shadow-primary/30">
          <span className="text-2xl font-bold text-primary-foreground">FG</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Loader variant="spinner" size="lg" />
          <p className="text-sm font-medium text-muted-foreground">
            Loading FoodieGo...
          </p>
        </div>
      </div>
    </div>
  );
}
