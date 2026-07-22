import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infrastructure | Siya Ram Fabrics",
  description: "Our manufacturing facility represents the pinnacle of modern textile engineering.",
};

export default function InfrastructurePage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-20 md:py-[120px] min-h-[60vh] flex flex-col justify-center">
      <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Facilities</span>
      <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-8">
        Infrastructure
      </h1>
      <div className="w-20 h-1 bg-primary mb-12" />
      <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
        Our manufacturing facility represents the pinnacle of modern textile engineering. We continuously invest in technology to improve efficiency, reduce turnaround times, and expand our capabilities.
      </p>
      <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
        Equipped with high-speed circular knitting machines, automated quality inspection systems, and a climate-controlled production environment, our infrastructure is built to deliver precision at scale.
      </p>
    </div>
  );
}
