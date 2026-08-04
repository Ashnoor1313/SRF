import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Siya Ram Fabrics",
  description: "Privacy Policy for Siya Ram Fabrics website visitors and partners.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-20 md:py-[120px] min-h-[60vh]">
      <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Legal</span>
      <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-8">
        Privacy Policy
      </h1>
      <div className="w-20 h-1 bg-primary mb-12" />

      <div className="max-w-3xl space-y-10">
        <div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground mb-4">1. Information We Collect</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When you submit an enquiry through our contact form, we collect your name, email address,
            phone number, company name, and the details of your message. We only collect the information
            you choose to provide to us.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground mb-4">2. How We Use Your Information</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The information you provide is used solely to respond to your enquiry, provide you with
            product information, quotations, and relevant updates about Siya Ram Fabrics. We do not
            sell, rent, or trade your personal information to third parties.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground mb-4">3. Data Security</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We take reasonable measures to protect your personal information from unauthorised access,
            alteration, disclosure, or destruction. Our website is served over secure HTTPS connections.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground mb-4">4. Cookies</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This website may use essential cookies to ensure the site functions correctly. We do not use
            advertising or tracking cookies that profile your activity.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground mb-4">5. Contact Us</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            If you have any questions about this Privacy Policy or your data, please contact us at
            <span className="text-foreground font-medium"> siyaramfabrics@gmail.com</span> or
            call <span className="text-foreground font-medium">+91 9888778082</span>.
          </p>
        </div>
      </div>
    </div>
  );
}