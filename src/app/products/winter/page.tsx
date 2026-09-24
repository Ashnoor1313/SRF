import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Layers, Snowflake, Sun } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { CollectionFabricGrid } from "@/components/collection-fabric-grid";

export const metadata: Metadata = {
  title: "Winter Knitted Fabric Collection (6 Products) | Siya Ram Fabrics",
  description:
    "Explore our Winter Knitted Fabric Collection — Fake Cotton Russian Fleece, Airjet Fleece, Spun Fleece, RFD Fleece Cotton, 3 Thread Fleece, and 100% Cotton Fleece engineered for cold-weather apparel.",
};

export default function WinterCollectionPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end overflow-hidden pt-28 pb-16 md:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/winter-collection-fleece.jpg"
            alt="Winter knitted fabric collection at Siya Ram Fabrics"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/75 to-black/40" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-3xl space-y-6">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/70">
              <Link href="/products" className="hover:text-white transition-colors flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Collections</span>
              </Link>
              <span>/</span>
              <span className="text-brand-bright">Winter Collection</span>
            </div>

            {/* Winter Collection Tag */}
            <div className="inline-flex items-center gap-2 border border-cyan-500/50 bg-cyan-500/15 text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full backdrop-blur-md">
              <Snowflake className="w-3.5 h-3.5 text-cyan-400" />
              Winter Warmth • 260 – 450 GSM (6 Products)
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight text-white leading-[0.95]">
              Winter Knitted
              <br />
              <span className="text-brand-bright">Collection</span>
            </h1>

            <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl">
              Heavyweight, plush, and thermal fabrics engineered for cold-weather apparel — ultra-thick Fake Cotton Russian Fleece, zero-pill Airjet Fleece, Spun Fleece, RFD Cotton Fleece, 3 Thread Fleece, and 100% Combed Cotton Fleece.
            </p>
          </div>
        </div>
      </section>

      {/* Winter Fabrics Products Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 space-y-12">
          <FadeIn direction="up">
            <div className="max-w-2xl">
              <span className="text-primary font-semibold tracking-[0.15em] uppercase text-xs sm:text-sm mb-3 block">
                Winter Catalogue (6 Fabrics)
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
                Winter Knitted Fabrics
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mt-2.5 leading-relaxed">
                Manufactured with plush brushed inner fleece, anti-pilling airjet technology, and heavy 3-yarn structures for luxury handfeel and supreme thermal insulation.
              </p>
            </div>
          </FadeIn>

          {/* Interactive Collection Fabric Grid */}
          <CollectionFabricGrid collection="winter" />
        </div>
      </section>

      {/* Switch to Summer Collection Banner */}
      <section className="py-12 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-card border border-border p-6 sm:p-8 rounded-3xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0">
                <Sun className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary block mb-0.5">
                  Looking for Summerwear?
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-foreground">
                  Explore Summer Collection (6 Products)
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                  Lightweight 140–260 GSM Spun Matty, Fake Cotton, Sharina, Full Dull SAP, Fake Cotton Sinker & SAP Matty.
                </p>
              </div>
            </div>

            <Link
              href="/products/summer"
              className={buttonVariants({
                size: "lg",
                className:
                  "uppercase tracking-widest font-semibold rounded-full px-6 whitespace-nowrap shadow-sm bg-primary text-white hover:bg-[#8F1A2C] hover:text-white transition-all",
              })}
            >
              <span>View Summer Collection</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <span className="text-primary font-semibold tracking-[0.15em] uppercase text-sm mb-4 block">
            Custom Specifications
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
            Need Custom Fleece GSM or Anti-Pill Grade?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
            We manufacture 3-thread and 2-thread fleece with custom brushed pile density, anti-pill finishes, and wash stability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className={buttonVariants({
                size: "lg",
                className:
                  "uppercase tracking-widest font-semibold bg-primary text-white hover:bg-[#8F1A2C] hover:text-white rounded-full px-8 py-6 w-full sm:w-auto shadow-lg transition-all",
              })}
            >
              Request Sample Swatches
            </Link>
            <Link
              href="/process"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className:
                  "uppercase tracking-widest font-semibold border-2 border-foreground text-foreground hover:bg-foreground/10 hover:text-foreground rounded-full px-8 py-6 w-full sm:w-auto transition-all",
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
