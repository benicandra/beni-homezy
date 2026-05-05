import Link from "next/link";
import Image from "next/image";

import { headerNavItems } from "@/config/navigation";
import { Button, Container } from "@/components/ui";

export default function Header() {
  return (
    <header className="bg-background sticky top-0 z-50">
      <Container as="nav" className="py-6 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Homezy Logo"
            width={36}
            height={37}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <ul className="hidden md:flex items-center gap-16">
          {headerNavItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-body font-normal text-lg text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button variant="outline" size="normal">
          Contact Us
        </Button>
      </Container>
    </header>
  );
}
