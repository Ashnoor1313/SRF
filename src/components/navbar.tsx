"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_LINKS = [
  { name: "Manufacturing", href: "/manufacturing" },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-border" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="Siya Ram Fabrics Logo"
            width={122}
            height={103}
            className="h-12 md:h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-medium transition-colors uppercase tracking-wider ${
                  isActive ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link href="/contact" className={buttonVariants({ className: "uppercase tracking-widest font-semibold rounded-full" })}>
            Enquire Now
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden" render={<Button variant="ghost" size="icon" className="text-foreground" />}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
            <nav className="flex flex-col gap-6 mt-12">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <SheetClose key={link.name} render={<Link href={link.href} />}>
                    <span
                      className={`${
                        isActive
                          ? "text-primary font-bold"
                          : "text-foreground hover:text-primary"
                      } font-heading text-lg font-semibold uppercase tracking-wider`}
                    >
                      {link.name}
                    </span>
                  </SheetClose>
                );
              })}
              <div className="h-px w-full bg-border my-4" />
              <SheetClose render={<Link href="/contact" className={buttonVariants({ className: "bg-primary hover:bg-primary/90 text-white rounded-full uppercase tracking-widest font-semibold w-full" })} />}>
                Enquire Now
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}