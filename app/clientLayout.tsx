"use client";

import Toaster from "@/components/toast";
import { QueryProvider } from "@/providers/query";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      {children}
      <Toaster />
    </QueryProvider>
  );
};

export default ClientLayout;
