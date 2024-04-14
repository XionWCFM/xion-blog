"use client";

import Error from "next/error";
import { useEffect } from "react";

import * as Sentry from "@sentry/nextjs";

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <Error statusCode={500} />
      </body>
    </html>
  );
}
