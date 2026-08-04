import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layers, Shirt, Sparkles, Waves } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Products | Siya Ram Fabrics",
  description:
    "Explore our range of premium knitted fabrics — single jersey, pique, rib, interlock, fleece, and fast fashion fabrics, manufactured in-house in Ludhiana.",
};

const fabricCategories = [
  { name: "Single Jersey", description: "Lightweight, breathable, and smooth — the everyday workhorse for t-shirts, tops, and basics." },
  { name: "Pique", description: "Textured, durable, and classic — the fabric behind premium polo shirts." },
  { name: "Rib", description: "Stretchy, form-fitting, and resilient — ideal for collars, cuffs, and fitted garments." },
  { name: "Interlock", description: "Double-knit warmth and softness with a refined finish on both sides." },
  { name: "Fleece", description: "Brushed, cosy, and heavyweight — engineered for hoodies and winter wear." },
];

const fastFashionPoints = [
  "Trend-responsive production cycles",
  "Rapid sampling for new season styles",
  "High-volume consistency for fast retail",
  "Agile dyeing and finishing turnaround",
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/fabric_rolls.png"
            alt="Premium knitted fabric rolls at Siya Ram Fabrics"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 pb-20 md:pb-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 border border-brand-bright/50 text-brand-bright text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2 mb-6 bg-black/40 rounded-full">
              Our Products
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-8xl font-bold uppercase tracking-tight text-white mb-6 leading-[0.9]">
              Fabrics That
              <br />
              <span className="text-brand-bright">Move Fashion</span>
              <br />
              Forward
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl mb-10">
              From timeless classics to fast fashion — every fabric is knitted, dyed,
              and finished in-house to deliver consistent quality at scale.
            </p>
            <Link
              href="/contact"
              className={buttonVariants({
                size: "lg",
                className: "uppercase tracking-widest font-semibold bg-white text-foreground hover:bg-white/90 rounded-full",
              })}
            >
              Request a Sample
            </Link>
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section className="py-20 md:py-[120px] bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn direction="up">
            <div className="max-w-2xl mb-16 md:mb-20">
              <span className="text-primary font-semibold tracking-[0.15em] uppercase text-sm mb-4 block">
                Knitted Catalogue
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
                A Fabric for Every Need
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our circular knitting machines produce a wide range of structures
                at high speeds with minimal variation — delivered at any GSM,
                width, or colour you specify.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-border rounded-2xl overflow-hidden shadow-lg">
            {fabricCategories.map((fabric) => (
              <StaggerItem key={fabric.name} className="bg-white p-8 md:p-10 hover:bg-[#FAFAFA] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Shirt className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3 uppercase tracking-wide">
                  {fabric.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{fabric.description}</p>
              </StaggerItem>
            ))}

            <StaggerItem className="bg-primary p-8 md:p-10 text-white">
              <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 uppercase tracking-wide">
                Fast Fashion Fabrics
              </h3>
              <p className="text-white/75 leading-relaxed text-sm mb-6">
                Introduced by the second generation — trend-driven fabrics built
                for the speed of modern retail.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest hover:gap-3 transition-all">
                Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Fast Fashion Feature */}
      <section className="py-20 md:py-[120px] bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-bright font-semibold tracking-[0.15em] uppercase text-sm mb-4 block">
                Fast Fashion Range
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">
                Built for the Speed of Modern Retail
              </h2>
              <p className="text-lg text-white/50 leading-relaxed mb-8">
                The second generation recognised the shift in global retail early.
                Our fast fashion fabrics bring trend-responsive production to the
                factory floor — without ever compromising the quality standards
                the founder set in 1998.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {fastFashionPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 bg-white/5 p-5">
                    <Waves className="w-5 h-5 text-brand-bright shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] md:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/fabric_rolls.png"
                alt="Fast fashion fabric rolls"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-[100px] bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <span className="text-primary font-semibold tracking-[0.15em] uppercase text-sm mb-4 block">
            Need Something Specific?
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-6">
            Custom GSM, Width
            <br />
            or Colour?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            We manufacture to your exact specifications. Share your requirement
            and our team will respond with samples and timelines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className={buttonVariants({
                size: "lg",
                className: "uppercase tracking-widest font-semibold bg-secondary text-white hover:bg-white/10 rounded-full w-full sm:w-auto",
              })}
            >
              Request a Quote
            </Link>
            <Link
              href="/manufacturing"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className: "uppercase tracking-widest font-semibold border-foreground text-foreground rounded-full w-full sm:w-auto",
              })}
            >
              View Manufacturing <Layers className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
