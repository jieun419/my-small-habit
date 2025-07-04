"use client";

import { Suspense } from "react";

import Toaster from "@/components/toast";
import { QueryProvider } from "@/providers/query";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <Suspense>
        {children}
        <Toaster />
      </Suspense>
    </QueryProvider>
  );
};

export default ClientLayout;
