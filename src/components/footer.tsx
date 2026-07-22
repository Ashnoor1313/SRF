import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8 py-20 md:py-[120px]">
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
              Manufacturing quality you can rely on. Your trusted textile manufacturing partner since <span className="font-numbers">1998</span>, serving garment manufacturers across India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold uppercase tracking-wider text-sm">Explore</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/manufacturing" className="hover:text-primary transition-colors">Manufacturing Process</Link>
              </li>
              <li>
                <Link href="/infrastructure" className="hover:text-primary transition-colors">Our Infrastructure</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">Knitted Products</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">About the Company</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>A4–A7, Hampton Court Business Park,<br />Chandigarh Road, Ludhiana – 141008</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="font-numbers">+91 9888778082</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>siyaramfabrics@gmail.com</span>
              </li>
              <li className="text-xs text-muted-foreground/70">
                Mon – Sat: 10:00 AM – 7:00 PM
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold uppercase tracking-wider text-sm">Partner With Us</h4>
            <p className="text-sm text-muted-foreground">
              Looking for reliable manufacturing? Let&apos;s discuss your production needs.
            </p>
            <Link 
              href="/contact" 
              className={buttonVariants({ variant: "default", size: "lg", className: "w-full uppercase tracking-widest text-sm" })}
            >
              Request a Quote
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>&copy; <span className="font-numbers">{new Date().getFullYear()}</span> Siya Ram Fabrics. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
