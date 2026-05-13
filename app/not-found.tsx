import Link from "next/link";

import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-6">
      <div className="text-center space-y-4">
        <h1 className="text-8xl font-bold text-lavender">404</h1>
        <h2 className="text-2xl font-semibold text-foreground">
          Page Not Found
        </h2>
        <p className="text-[#868893] font-light max-w-md">
          The page youre looking for doesnt exist or has been moved.
        </p>
      </div>
      <div className="flex gap-4">
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
