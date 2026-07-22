import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Siya Ram Fabrics",
  description: "Learn more about Siya Ram Fabrics, your trusted textile manufacturing partner since 1998.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-20 md:py-[120px] min-h-[60vh]">
      <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">About Siya Ram Fabrics</span>
      <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-8">
        About Us
      </h1>
      <div className="w-20 h-1 bg-primary mb-12" />

      <div className="max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground mb-4">Company Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Siya Ram Fabrics (SRF) is a proprietorship firm established in 1998 by Mr. Harish Jindal. With over 25 years of experience, we have evolved from a fabric supplier into a comprehensive in-house manufacturing facility.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We are a complete in-house facility that includes knitting, dyeing, and finishing of high-quality knitted fabrics. Our integrated operations allow us to maintain strict quality control at every stage of production.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our philosophy is simple: to manufacture high-quality knitted fabrics while building lasting relationships through operational excellence.
            </p>
          </div>
          <div className="bg-muted p-8 md:p-10 space-y-5">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Founder</p>
              <p className="font-heading text-xl font-bold text-foreground">Mr. Harish Jindal</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Year of Establishment</p>
              <p className="font-heading text-xl font-bold text-foreground">1998</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Business Type</p>
              <p className="font-heading text-xl font-bold text-foreground">Proprietorship Firm</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">GST Number</p>
              <p className="font-heading text-xl font-bold text-foreground">03ABEPJ2089F2ZY</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Facility</p>
              <p className="text-foreground leading-relaxed">Complete in-house facility including knitting, dyeing, and finishing of high-quality knitted fabrics</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-12">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground mb-4">Our Location</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A4–A7, Hampton Court Business Park,<br />
            Chandigarh Road, Ludhiana – 141008,<br />
            Punjab, India
          </p>
        </div>
      </div>
    </div>
  );
}
