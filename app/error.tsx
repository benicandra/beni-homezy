"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Error caught by error boundary:", error);
  }, [error]);
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-6">
      <div className="text-center space-y-4">
        <div className="text-6xl">:(</div>
        <h2 className="text-2xl font-semibold text-foreground">
          Something went wrong!
        </h2>
        <p className="text-[#868893] font-light max-w-md">
          We apologize for the inconvenience. Please try later.
        </p>
        {error.digest && (
          <p className="text-xs text-[#868893]">Error ID: {error.digest}</p>
        )}
      </div>
      <div className="flex gap-4">
        <Button onClick={reset}>Try Again</Button>
        <Button onClick={() => (window.location.href = "/")} variant="outline">
          Go Home
        </Button>
      </div>
    </div>
  );
}
