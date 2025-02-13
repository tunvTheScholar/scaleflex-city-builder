"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "./get-query-client";

interface ReactQueryProviderProps {
  children: React.ReactNode;
}
export default function ReactQueryProvider({
  children,
}: ReactQueryProviderProps) {
  const client = getQueryClient();
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
