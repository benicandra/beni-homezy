import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "This page is under construction. Please check back later.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CatchAllPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-6">
      <div className="text-center space-y-4">
        <h1 className="text-8xl font-bold text-lavender">Soon</h1>
        <h2 className="text-2xl font-semibold text-foreground">Coming Soon</h2>
        <p className="text-[#868893] font-light max-w-md">
          This page is under construction. Please check back later.
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
