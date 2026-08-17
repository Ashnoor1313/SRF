"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, MessageSquare, ChevronDown, Layers, Droplets, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const PROCESS_SUB_LINKS = [
  {
    name: "Manufacturing",
    href: "/process/manufacturing",
    description: "Knitting & Fabric Engineering",
    icon: Layers,
  },
  {
    name: "Dyeing",
    href: "/process/dyeing",
    description: "Softflow & Shade Chemistry",
    icon: Droplets,
  },
  {
    name: "Finishing",
    href: "/process/finishing",
    description: "Compacting & Stentering",
    icon: Sparkles,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileProcessOpen, setMobileProcessOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/coming-soon") return null;

  const isProcessActive = pathname.startsWith("/process") || pathname.startsWith("/manufacturing");

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-border py-2"
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
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <div className="flex items-center gap-1 lg:gap-2 bg-muted/60 px-4 py-1.5 rounded-full border border-border/80">
            {/* 1. About Us */}
            <Link
              href="/about"
              className={`relative text-xs font-bold transition-all uppercase tracking-wider px-3.5 py-1.5 rounded-full ${
                pathname === "/about"
                  ? "text-white bg-primary shadow-sm"
                  : "text-foreground/80 hover:text-primary hover:bg-background/80"
              }`}
            >
              About Us
            </Link>

            {/* 2. Our Process (With Hover Dropdown) */}
            <div
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                href="/process"
                className={`relative inline-flex items-center text-xs font-bold transition-all uppercase tracking-wider px-3.5 py-1.5 rounded-full ${
                  isProcessActive
                    ? "text-white bg-primary shadow-sm"
                    : "text-foreground/80 hover:text-primary hover:bg-background/80"
                }`}
              >
                <span>Our Process</span>
                <ChevronDown
                  className={`transition-all duration-200 overflow-hidden ${
                    dropdownOpen
                      ? "w-3.5 h-3.5 ml-1 opacity-100 rotate-180 scale-100"
                      : "w-0 h-3.5 ml-0 opacity-0 rotate-0 scale-75 pointer-events-none"
                  }`}
                />
              </Link>

              {/* Hover Dropdown Menu - Compact & Brand Color */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-60 transition-all duration-200 z-50 ${
                  dropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-white border border-border rounded-2xl p-2 shadow-xl space-y-0.5">
                  <div className="px-2.5 py-1 border-b border-border/60 flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">3 Stages of Scale</span>
                    <Link
                      href="/process"
                      className="text-[9px] font-bold uppercase tracking-wider text-primary hover:underline"
                    >
                      Hub &rarr;
                    </Link>
                  </div>
                  {PROCESS_SUB_LINKS.map((sub) => {
                    const Icon = sub.icon;
                    const isSubActive = pathname === sub.href;
                    return (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={`group/sub flex items-center gap-2.5 p-2 rounded-xl transition-all ${
                          isSubActive
                            ? "bg-primary/10 text-primary font-semibold"
                            : "hover:bg-muted text-foreground"
                        }`}
                      >
                        <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover/sub:bg-primary group-hover/sub:text-white transition-colors shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[11px] font-bold uppercase tracking-wide leading-tight truncate">{sub.name}</p>
                          <p className="text-[10px] text-muted-foreground leading-tight truncate mt-0.5">{sub.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                  <div className="pt-1 border-t border-border/60">
                    <Link
                      href="/process"
                      className="flex items-center justify-between px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary hover:bg-primary/5 rounded-lg transition-colors"
                    >
                      <span>Explore Process Overview</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Infrastructure */}
            <Link
              href="/infrastructure"
              className={`relative text-xs font-bold transition-all uppercase tracking-wider px-3.5 py-1.5 rounded-full ${
                pathname === "/infrastructure"
                  ? "text-white bg-primary shadow-sm"
                  : "text-foreground/80 hover:text-primary hover:bg-background/80"
              }`}
            >
              Infrastructure
            </Link>

            {/* 4. Products */}
            <Link
              href="/products"
              className={`relative text-xs font-bold transition-all uppercase tracking-wider px-3.5 py-1.5 rounded-full ${
                pathname === "/products"
                  ? "text-white bg-primary shadow-sm"
                  : "text-foreground/80 hover:text-primary hover:bg-background/80"
              }`}
            >
              Products
            </Link>

            {/* 5. What's New */}
            <Link
              href="/whats-new"
              className={`relative text-xs font-bold transition-all uppercase tracking-wider px-3.5 py-1.5 rounded-full ${
                pathname === "/whats-new"
                  ? "text-white bg-primary shadow-sm"
                  : "text-foreground/80 hover:text-primary hover:bg-background/80"
              }`}
            >
              What&apos;s New
            </Link>
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
          <SheetContent side="right" className="w-[300px] sm:w-[380px] bg-background p-6 overflow-y-auto">
            <div className="flex flex-col h-full justify-between pt-6">
              <div className="space-y-6">
                <Link href="/" onClick={() => setOpen(false)} className="block mb-6">
                  <Image src="/logo.png" alt="Siya Ram Fabrics Logo" width={110} height={90} className="h-10 w-auto object-contain" />
                </Link>
                <nav className="flex flex-col gap-2">
                  {/* 1. About Us */}
                  <SheetClose render={<Link href="/about" />}>
                    <div
                      className={`flex items-center justify-between p-3 rounded-xl font-heading text-sm font-bold uppercase tracking-wider transition-all ${
                        pathname === "/about" ? "bg-primary text-white" : "text-foreground hover:bg-muted"
                      }`}
                    >
                      <span>About Us</span>
                    </div>
                  </SheetClose>

                  {/* 2. Our Process Accordion */}
                  <div className="rounded-xl overflow-hidden border border-border/60">
                    <button
                      type="button"
                      onClick={() => setMobileProcessOpen(!mobileProcessOpen)}
                      className={`w-full flex items-center justify-between p-3 font-heading text-sm font-bold uppercase tracking-wider transition-all ${
                        isProcessActive ? "bg-primary text-white" : "text-foreground hover:bg-muted"
                      }`}
                    >
                      <span>Our Process</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileProcessOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileProcessOpen && (
                      <div className="bg-muted/40 p-2 space-y-1 border-t border-border/40">
                        <SheetClose render={<Link href="/process" />}>
                          <div className="p-2 rounded-lg text-xs font-bold uppercase tracking-wider text-primary hover:bg-muted flex items-center justify-between">
                            <span>Process Overview Hub</span>
                            <ArrowRight className="w-3 h-3" />
                          </div>
                        </SheetClose>
                        {PROCESS_SUB_LINKS.map((sub) => (
                          <SheetClose key={sub.name} render={<Link href={sub.href} />}>
                            <div className="p-2 rounded-lg text-xs font-semibold text-foreground/80 hover:bg-muted hover:text-primary flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <span>{sub.name}</span>
                            </div>
                          </SheetClose>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 3. Infrastructure */}
                  <SheetClose render={<Link href="/infrastructure" />}>
                    <div
                      className={`flex items-center justify-between p-3 rounded-xl font-heading text-sm font-bold uppercase tracking-wider transition-all ${
                        pathname === "/infrastructure" ? "bg-primary text-white" : "text-foreground hover:bg-muted"
                      }`}
                    >
                      <span>Infrastructure</span>
                    </div>
                  </SheetClose>

                  {/* 4. Products */}
                  <SheetClose render={<Link href="/products" />}>
                    <div
                      className={`flex items-center justify-between p-3 rounded-xl font-heading text-sm font-bold uppercase tracking-wider transition-all ${
                        pathname === "/products" ? "bg-primary text-white" : "text-foreground hover:bg-muted"
                      }`}
                    >
                      <span>Products</span>
                    </div>
                  </SheetClose>

                  {/* 5. What's New */}
                  <SheetClose render={<Link href="/whats-new" />}>
                    <div
                      className={`flex items-center justify-between p-3 rounded-xl font-heading text-sm font-bold uppercase tracking-wider transition-all ${
                        pathname === "/whats-new" ? "bg-primary text-white" : "text-foreground hover:bg-muted"
                      }`}
                    >
                      <span>What&apos;s New</span>
                    </div>
                  </SheetClose>
                </nav>
              </div>

              <div className="space-y-4 pt-6 border-t border-border mt-6">
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