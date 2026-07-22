import { ContactForm } from "@/components/contact-form";
import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

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
                <div className="bg-muted p-3 shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Address</span>
                  <span className="text-foreground font-medium text-sm leading-relaxed">
                    A4–A7, Hampton Court Business Park,<br />
                    Chandigarh Road, Ludhiana – 141008,<br />
                    Punjab, India
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3 shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Phone</span>
                  <span className="text-foreground font-medium">+91 9888778082</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3 shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Email</span>
                  <span className="text-foreground font-medium">siyaramfabrics@gmail.com</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3 shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Business Hours</span>
                  <span className="text-foreground font-medium">Monday – Saturday</span>
                  <span className="block text-foreground/70 text-sm">10:00 AM – 7:00 PM</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-secondary text-white space-y-3">
            <p className="text-sm text-white/70">GST Number</p>
            <p className="font-heading text-lg font-bold tracking-wide">03ABEPJ2089F2ZY</p>
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
