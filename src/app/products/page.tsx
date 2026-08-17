import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Layers, Waves } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { ProductsInteractiveCatalog } from "@/components/products-interactive-catalog";

export const metadata: Metadata = {
  title: "Products & Knitted Fabric Catalogue | Siya Ram Fabrics",
  description:
    "Explore our range of premium knitted fabrics — single jersey, pique, rib, interlock, fleece, and fast fashion fabrics, manufactured in-house in Ludhiana.",
};

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
      <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-end overflow-hidden pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/fabric_rolls.png"
            alt="Premium knitted fabric rolls at Siya Ram Fabrics"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/60 to-black/30" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 pb-20 md:pb-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 border border-brand-bright/50 text-brand-bright text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2 mb-6 bg-black/40 rounded-full backdrop-blur-sm">
              In-House Fabric Portfolio
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-8xl font-bold uppercase tracking-tight text-white mb-6 leading-[0.9]">
              Fabrics That
              <br />
              <span className="text-brand-bright">Move Fashion</span>
              <br />
              Forward
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mb-10">
              From timeless single jersey classics to fast-fashion structures — every fabric is knitted, dyed, and finished in-house in Ludhiana to deliver consistent quality at scale.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className={buttonVariants({
                  variant: "white",
                  size: "lg",
                  className: "uppercase tracking-widest font-semibold rounded-full px-8",
                })}
              >
                Request Sample Roll
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section className="py-20 md:py-[120px] bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn direction="up">
            <div className="max-w-2xl mb-12">
              <span className="text-primary font-semibold tracking-[0.15em] uppercase text-sm mb-4 block">
                Knitted Catalogue
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
                A Fabric for Every Need
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our circular knitting machines produce a wide range of structures
                at high speeds with minimal variation — delivered at any GSM,
                width, or color specification.
              </p>
            </div>
          </FadeIn>

          {/* Interactive Catalog Filter & Cards */}
          <ProductsInteractiveCatalog />
        </div>
      </section>

      {/* Fast Fashion Feature */}
      <section className="py-20 md:py-[120px] bg-secondary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-bright font-semibold tracking-[0.15em] uppercase text-sm mb-4 block">
                Fast Fashion Range
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">
                Built for the Speed of Modern Retail
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                The second generation recognised the shift in global retail early.
                Our fast fashion fabrics bring trend-responsive production to the
                factory floor — without ever compromising the quality standards
                the founder set in 1998.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {fastFashionPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 bg-white/5 hover:bg-white/12 border border-white/10 hover:border-brand-bright/50 hover:shadow-[0_0_20px_rgba(229,72,77,0.25)] hover:-translate-y-1 transition-all duration-300 rounded-2xl p-5 cursor-pointer group"
                  >
                    <Waves className="w-5 h-5 text-brand-bright shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white/80 group-hover:text-white text-sm font-medium transition-colors duration-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] md:h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-brand-bright/40 transition-all duration-500 group">
              <Image
                src="/images/fabric_rolls.png"
                alt="Fast fashion fabric rolls"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-[100px] bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <span className="text-primary font-semibold tracking-[0.15em] uppercase text-sm mb-4 block">
            Need Something Custom?
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-6">
            Custom GSM, Width
            <br />
            or Colour Match?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            We manufacture to your exact specifications. Share your requirement
            and our team will respond with physical swatches and turnaround estimates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className={buttonVariants({
                size: "lg",
                className: "uppercase tracking-widest font-semibold bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-6 w-full sm:w-auto shadow-lg",
              })}
            >
              Request a Custom Quote
            </Link>
            <Link
              href="/process"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className: "uppercase tracking-widest font-semibold border-foreground text-foreground rounded-full px-8 py-6 w-full sm:w-auto",
              })}
            >
              Our Process <Layers className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
