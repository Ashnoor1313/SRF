import { ContactForm } from "@/components/contact-form";
import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact Us | Siya Ram Fabrics",
  description:
    "Get in touch with Siya Ram Fabrics for all your knitted fabric manufacturing needs. Visit our 1.5 lac sq ft facility in Ludhiana or reach us by phone, email, or WhatsApp.",
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
                <div className="bg-muted p-3 shrink-0 rounded-xl">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Address</span>
                  <a
                    href="https://maps.app.goo.gl/su8KN3AsiPXTbz9Q8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-medium text-sm leading-relaxed hover:text-primary transition-colors inline-block"
                  >
                    A4–A7, Hampton Court Business Park,<br />
                    Chandigarh Road, Ludhiana – 141008,<br />
                    Punjab, India
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3 shrink-0 rounded-xl">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Phone</span>
                  <a href="tel:+919888778082" className="text-foreground font-medium hover:text-primary transition-colors">
                    +91 98887 78082
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3 shrink-0 rounded-xl">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Email</span>
                  <a href="mailto:siyaramfabrics@gmail.com" className="text-foreground font-medium hover:text-primary transition-colors">
                    siyaramfabrics@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-muted p-3 shrink-0 rounded-xl">
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

          <div className="p-6 bg-secondary text-white space-y-3 rounded-2xl shadow-lg">
            <p className="text-sm text-white/70">GST Number</p>
            <p className="font-heading text-lg font-bold tracking-wide">03ABEPJ2089F2ZY</p>
          </div>

          <div className="p-6 bg-[#25D366]/10 border border-[#25D366]/30 space-y-4 rounded-2xl">
            <p className="text-sm text-foreground/80">
              <span className="font-semibold uppercase tracking-wider text-sm">Prefer WhatsApp?</span>
              <span className="block mt-1 text-muted-foreground">
                Send us your requirement directly and get a faster response from our sales team.
              </span>
            </p>
            <a
              href="https://wa.me/919888778082?text=Hello%20Siya%20Ram%20Fabrics%2C%20I%20would%20like%20to%20discuss%20a%20fabric%20requirement."
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "sm", className: "w-full uppercase tracking-widest font-semibold bg-[#25D366] text-white hover:bg-[#1EBE5A] rounded-full" })}
            >
              Chat on WhatsApp
            </a>
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