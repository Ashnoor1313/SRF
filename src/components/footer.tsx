"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/coming-soon") return null;
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8 py-20 md:py-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center transition-transform hover:scale-[1.02] w-fit">
              <Image
                src="/logo.png"
                alt="Siya Ram Fabrics Logo"
                width={122}
                height={103}
                className="h-14 w-auto object-contain brightness-0 invert"
                priority
              />
            </Link>
            <p className="text-muted-foreground max-w-xs leading-relaxed text-sm">
              A family textile business since <span className="font-numbers">1998</span>. From
              500 sq ft and one employee to a 1.5 lac sq ft facility with 300+ people —
              manufacturing quality knitted fabrics you can rely on.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-full">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">GST No.</span>
              <span className="font-numbers text-sm font-semibold text-white">03ABEPJ2089F2ZY</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold uppercase tracking-wider text-sm">Explore</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-brand-bright transition-colors">About Us & Legacy</Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-brand-bright transition-colors">Our Process (Hub)</Link>
              </li>
              <li>
                <Link href="/infrastructure" className="hover:text-brand-bright transition-colors">Infrastructure & Plant</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-brand-bright transition-colors">Knitted Products</Link>
              </li>
              <li>
                <Link href="/whats-new" className="hover:text-brand-bright transition-colors">What&apos;s New & Updates</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-bright transition-colors">Contact & Inquiries</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-bright shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/su8KN3AsiPXTbz9Q8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-bright transition-colors"
                >
                  A4–A7, Hampton Court Business Park,<br />Chandigarh Road, Ludhiana – 141008,<br />Punjab, India
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-bright shrink-0" />
                <a href="tel:+919888778082" className="font-numbers hover:text-brand-bright transition-colors">
                  +91 98887 78082
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-bright shrink-0" />
                <a href="mailto:siyaramfabrics@gmail.com" className="hover:text-brand-bright transition-colors">
                  siyaramfabrics@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-brand-bright shrink-0" />
                <span>Mon – Sat: 10:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold uppercase tracking-wider text-sm">Partner With Us</h4>
            <p className="text-sm text-muted-foreground">
              Looking for reliable knitted fabric manufacturing? Let&apos;s discuss your
              production needs — from single jersey basics to fast fashion fabrics.
            </p>
            <Link
              href="/contact"
              className={buttonVariants({ variant: "default", size: "lg", className: "w-full uppercase tracking-widest text-sm" })}
            >
              Request a Quote
            </Link>
            <a
              href="https://wa.me/919888778082"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "lg", className: "w-full uppercase tracking-widest text-sm text-white border-white/30 hover:bg-white/10 hover:text-white" })}
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>&copy; <span className="font-numbers">{new Date().getFullYear()}</span> Siya Ram Fabrics. All rights reserved. Family textile business since 1998.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
