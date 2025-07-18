"use client";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryProvider>
  );
};

export default ClientLayout;
