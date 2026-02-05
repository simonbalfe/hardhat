import { HardHat } from "lucide-react";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import ThemeToggle from "../ui/theme-toggle";

interface NavbarProps {
  currentPath?: string;
}

export default function Navbar({ currentPath }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pathname, setPathname] = useState(currentPath ?? "/");

  /* Keep pathname in sync on the client (for SPA nav, etc.) */
  useEffect(() => {
    if (!currentPath) setPathname(window.location.pathname);
  }, [currentPath]);

  /* Prevent body scroll when mobile menu is open */
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  const NAV_ITEMS = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Results", href: "#results" },
    { label: "Our Team", href: "#team" },
  ];

  const bgColor = "bg-obsidian";

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "relative z-50 h-20 border-b border-b-dark-gray px-2.5 lg:px-0",
        bgColor,
      )}
    >
      <div className="container flex h-20 items-center border-l border-r border-l-dark-gray border-r-dark-gray">
        <div className="flex w-full items-center justify-between py-3">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <HardHat className="size-8 text-amber-500" />
            <span className="text-foreground text-xl font-bold">
              Hard Hat Growth
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="flex items-center justify-center">
            <nav className="mr-6 hidden items-center gap-6 lg:flex">
              {NAV_ITEMS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className={cn(
                    "text-foreground text-sm hover:text-muted-foreground transition-colors",
                  )}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-2.5">
              <a
                href="#contact"
                className={`transition-opacity duration-300 ${isMenuOpen ? "max-lg:pointer-events-none max-lg:opacity-0" : "opacity-100"}`}
              >
                <Button size="sm">Get Started</Button>
              </a>

              <div
                className={`transition-opacity duration-300 ${isMenuOpen ? "max-lg:pointer-events-none max-lg:opacity-0" : "opacity-100"}`}
              >
                <ThemeToggle />
              </div>

              {/* Hamburger Menu Button (Mobile Only) */}
              <button
                className="relative flex size-8 text-muted-foreground lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <div className="absolute left-1/2 top-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
                  <span
                    aria-hidden="true"
                    className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
                  />
                  <span
                    aria-hidden="true"
                    className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
                  />
                  <span
                    aria-hidden="true"
                    className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "container absolute inset-x-0 top-full flex h-[calc(100vh-80px)] flex-col border-t border-t-dark-gray px-2.5 lg:px-0",
          "transition duration-300 ease-in-out lg:hidden",
          isMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0",
          bgColor,
        )}
      >
        <div className="h-[calc(100vh-80px)] border-x border-dark-gray px-5">
          <nav className="mt-6 flex flex-1 flex-col gap-6">
            {NAV_ITEMS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "text-foreground text-lg tracking-[-0.36px] text-left",
                )}
              >
                {link.label}
              </button>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4"
            >
              <Button className="w-full">Get Started</Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export { Navbar };
