import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Siya Ram Fabrics",
  description: "Terms of Service for Siya Ram Fabrics website usage and business dealings.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-20 md:py-[120px] min-h-[60vh]">
      <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Legal</span>
      <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-8">
        Terms of Service
      </h1>
      <div className="w-20 h-1 bg-primary mb-12" />

      <div className="max-w-3xl space-y-10">
        <div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground mb-4">1. Acceptance of Terms</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            By accessing and using this website, you accept and agree to be bound by these Terms of
            Service. If you do not agree with any part of these terms, please discontinue use of the website.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground mb-4">2. Use of Website Content</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            All content on this website — including text, images, logos, and product information — is the
            property of Siya Ram Fabrics and is provided for informational purposes only. Content may not
            be reproduced, distributed, or used commercially without prior written consent.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground mb-4">3. Product Information</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Product specifications, capabilities, and performance details described on this website are
            provided in good faith and are subject to change. Final specifications are confirmed at the
            time of order placement.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground mb-4">4. Enquiries and Quotations</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Submitting an enquiry through our website does not constitute a binding agreement. All
            quotations are subject to written confirmation from Siya Ram Fabrics and prevailing terms
            of trade at the time of confirmation.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground mb-4">5. Limitation of Liability</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Siya Ram Fabrics shall not be liable for any indirect, incidental, or consequential damages
            arising from the use of this website or reliance on the information contained within it.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground mb-4">6. Governing Law</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            These terms are governed by the laws of India, and any disputes shall be subject to the
            exclusive jurisdiction of the courts of Ludhiana, Punjab.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground mb-4">7. Contact</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For questions regarding these Terms of Service, contact us at
            <span className="text-foreground font-medium"> siyaramfabrics@gmail.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
}