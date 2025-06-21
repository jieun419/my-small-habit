"use client";

import ErrorFallback from "@/components/error";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <ErrorFallback error={error} resetErrorBoundary={reset} />
      </body>
    </html>
  );
}
