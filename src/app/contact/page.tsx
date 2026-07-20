import { ContactForm } from "@/components/contact-form";
import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Siya Ram Fabrics",
  description: "Get in touch with Siya Ram Fabrics for all your knitted fabric manufacturing needs.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-20 md:py-[120px] min-h-[60vh]">
      <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
      <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-8">
        Contact Us
      </h1>
      <div className="w-20 h-1 bg-primary mb-12" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-12">
          <div>
            <h3 className="font-heading text-xl font-bold uppercase tracking-wider mb-6">Corporate Office & Manufacturing</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Address</span>
                  <span className="text-foreground font-medium">Phase 8, Focal Point,<br />Ludhiana, Punjab 141010<br />India</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Phone</span>
                  <span className="text-foreground font-medium">+91 98765 43210<br />+91 161 2345678</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Email</span>
                  <span className="text-foreground font-medium">info@siyaramfabrics.com<br />sales@siyaramfabrics.com</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="p-6 bg-secondary text-white">
            <h3 className="font-heading text-lg font-bold uppercase tracking-wider mb-3">Business Hours</h3>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex justify-between">
                <span>Monday - Saturday</span>
                <span>9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
