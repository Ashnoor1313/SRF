import { client } from "@/lib/sanity";
import { getProductsQuery } from "@/lib/queries";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import { CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Products | Siya Ram Fabrics",
  description: "Explore our range of premium knitted fabrics.",
};

export default async function ProductsPage() {
  const products = await client.fetch(getProductsQuery);

  return (
    <div className="container mx-auto px-4 md:px-8 py-20 md:py-[120px] min-h-[60vh]">
      <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Catalogue</span>
      <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-8">
        Our Products
      </h1>
      <div className="w-20 h-1 bg-primary mb-12" />
      
      {(!products || products.length === 0) ? (
        <div className="py-12">
          <p className="text-xl text-muted-foreground">
            Our product catalogue is currently being updated. Please check back later.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {products.map((product: any) => (
            <div key={product._id} className="group flex flex-col bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-transparent">
              <div className="relative h-64 w-full overflow-hidden bg-muted">
                {product.image ? (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-secondary/10">
                    <span className="text-muted-foreground uppercase tracking-widest text-xs font-semibold">No Image Available</span>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                {product.category && (
                  <span className="text-primary text-xs font-semibold uppercase tracking-widest mb-2 block">
                    {product.category.title}
                  </span>
                )}
                <h3 className="font-heading text-2xl font-bold uppercase tracking-tight mb-3">
                  {product.name}
                </h3>
                {product.description && (
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                    {product.description}
                  </p>
                )}
                
                {product.features && product.features.length > 0 && (
                  <ul className="space-y-2 mb-8 mt-auto">
                    {product.features.slice(0, 3).map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                <Link 
                  href={`/contact?product=${product.slug?.current || ''}`} 
                  className={buttonVariants({ variant: "outline", className: "w-full uppercase tracking-widest text-sm font-semibold mt-auto" })}
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
