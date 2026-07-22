import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Siya Ram Fabrics",
  description: "Explore our range of premium knitted fabrics.",
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-20 md:py-[120px] min-h-[60vh]">
      <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Catalogue</span>
      <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-8">
        Our Products
      </h1>
      <div className="w-20 h-1 bg-primary mb-12" />
      <div className="py-12">
        <p className="text-xl text-muted-foreground">
          Our product catalogue is currently being updated. Please check back later.
        </p>
      </div>
    </div>
  );
}
