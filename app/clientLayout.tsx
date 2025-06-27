"use client";

import { QueryProvider } from "@/providers/query";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return <QueryProvider>{children}</QueryProvider>;
};

export default ClientLayout;
