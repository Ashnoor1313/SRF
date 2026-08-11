"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, MessageSquare } from "lucide-react";
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-md border-b border-border py-2"
          : "bg-white py-3 border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 group">
          <Image
            src="/logo.png"
            alt="Siya Ram Fabrics Logo"
            width={130}
            height={110}
            className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 bg-muted/60 px-5 py-2 rounded-full border border-border/80">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative text-xs font-bold transition-all uppercase tracking-wider px-3 py-1.5 rounded-full ${
                    isActive
                      ? "text-white bg-primary shadow-sm"
                      : "text-foreground/80 hover:text-primary hover:bg-background/80"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919888778082"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="p-2.5 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className={buttonVariants({
                size: "sm",
                className: "uppercase tracking-widest text-xs font-bold rounded-full px-5 py-2 shadow-sm hover:shadow-md transition-all",
              })}
            >
              Enquire Now
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden" render={<Button variant="ghost" size="icon" className="text-foreground rounded-full" />}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[380px] bg-background p-6">
            <div className="flex flex-col h-full justify-between pt-8">
              <div className="space-y-6">
                <Link href="/" onClick={() => setOpen(false)} className="block mb-8">
                  <Image src="/logo.png" alt="Siya Ram Fabrics Logo" width={110} height={90} className="h-10 w-auto object-contain" />
                </Link>
                <nav className="flex flex-col gap-3">
                  {NAV_LINKS.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <SheetClose key={link.name} render={<Link href={link.href} />}>
                        <div
                          className={`flex items-center justify-between p-3.5 rounded-xl font-heading text-base font-bold uppercase tracking-wider transition-all ${
                            isActive
                              ? "bg-primary text-white"
                              : "text-foreground hover:bg-muted"
                          }`}
                        >
                          <span>{link.name}</span>
                        </div>
                      </SheetClose>
                    );
                  })}
                </nav>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <SheetClose render={<Link href="/contact" className={buttonVariants({ className: "bg-primary hover:bg-primary/90 text-white rounded-full uppercase tracking-widest text-xs font-bold w-full py-3" })} />}>
                  Enquire Now
                </SheetClose>
                <a
                  href="tel:+919888778082"
                  className="flex items-center justify-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest py-2"
                >
                  <Phone className="w-3.5 h-3.5 text-primary" /> +91 98887 78082
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}