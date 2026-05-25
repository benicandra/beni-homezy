"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { headerNavItems, pagesLinks } from "@/config/navigation";
import { Button, Container } from "@/components/ui";
import MenuIcon from "@/assets/icons/menu.svg";
import ArrowDownIcon from "@/assets/icons/arrow-down-linear.svg";
import { useOutsideClick } from "@/lib/hooks";
import { cn } from "@/lib/utils";

function PagesDropdown({ item }: { item: { label: string; href: string } }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useOutsideClick<HTMLLIElement>(() => setIsOpen(false));

  return (
    <li ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="font-body font-normal text-lg text-foreground flex items-center gap-1.5 transition-colors hover:text-primary cursor-pointer"
      >
        {item.label}
        <ArrowDownIcon
          className={cn(
            "w-5 h-5 transition-transform duration-300",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-4 w-60 max-h-[60vh] overflow-y-auto bg-white border border-lavender-40 rounded-[15px] shadow-lg z-50 p-2">
          {pagesLinks.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              prefetch={false}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 text-base font-medium text-foreground hover:bg-lavender-20 hover:text-lavender transition-colors rounded-[10px]"
            >
              {page.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}

function MobilePagesDropdown({
  item,
  onClose,
}: {
  item: { label: string; href: string };
  onClose: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:bg-lavender-20 hover:text-lavender transition-colors rounded-[10px]"
      >
        {item.label}
        <ArrowDownIcon
          className={cn(
            "w-5 h-5 transition-transform duration-300",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {isOpen && (
        <div className="mt-1 flex flex-col gap-1 border-l-2 border-lavender-40 ml-6 pl-2 py-1">
          {pagesLinks.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              prefetch={false}
              onClick={onClose}
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-lavender-20 hover:text-lavender transition-colors rounded-[10px]"
            >
              {page.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useOutsideClick<HTMLDivElement>(() =>
    setIsMobileMenuOpen(false),
  );

  return (
    <header className="bg-background sticky top-0 z-50">
      <Container as="nav" className="py-6 flex items-center justify-between">
        <Link href="/" className="shrink-0">
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
          {headerNavItems.map((item) => {
            if (item.label === "Pages") {
              return <PagesDropdown key={item.label} item={item} />;
            }
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  prefetch={false}
                  className="font-body font-normal text-lg text-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Button variant="outline" size="normal">
            Contact Us
          </Button>
        </div>

        <button
          className="md:hidden p-2 transition-colors hover:text-primary"
          aria-label="Open menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </Container>

      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-full left-4 right-4 mt-2 bg-white border border-lavender-40 rounded-[15px] shadow-xl z-50 p-2 md:hidden"
        >
          <div className="flex flex-col gap-1 max-h-[75vh] overflow-y-auto">
            {headerNavItems.map((item) => (
              <div key={item.label}>
                {item.label === "Pages" ? (
                  <MobilePagesDropdown
                    item={item}
                    onClose={() => setIsMobileMenuOpen(false)}
                  />
                ) : (
                  <Link
                    href={item.href}
                    prefetch={false}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-foreground hover:bg-lavender-20 hover:text-lavender transition-colors rounded-[10px]"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-2 pt-3 border-t border-lavender-40 px-2 pb-1">
              <Button
                variant="outline"
                className="w-full justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
