import { client } from "@/lib/sanity";
import { getPageQuery } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch(getPageQuery, { slug: "about" });
  if (!page) return { title: "About Us" };
  
  return {
    title: page.seoTitle || page.title || "About Us",
    description: page.seoDescription || "About Siya Ram Fabrics",
  };
}

const ptComponents = {
  types: {
    image: ({ value }: { value: unknown }) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const val = value as any;
      if (!val?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative h-64 md:h-96 w-full my-8">
          <Image
            src={urlFor(val).url()}
            alt={val.alt || "About Image"}
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
  block: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h1: ({children}: {children?: any}) => <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8 mt-12">{children}</h1>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h2: ({children}: {children?: any}) => <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6 mt-10">{children}</h2>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h3: ({children}: {children?: any}) => <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4 mt-8">{children}</h3>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    normal: ({children}: {children?: any}) => <p className="text-lg text-muted-foreground leading-relaxed mb-6">{children}</p>,
  },
};

export default async function AboutPage() {
  const page = await client.fetch(getPageQuery, { slug: "about" });

  if (!page) {
    // Return a default page if not found in Sanity yet
    return (
      <div className="container mx-auto px-4 md:px-8 py-20 md:py-[120px] min-h-[60vh] flex flex-col justify-center">
        <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">About Siya Ram Fabrics</span>
        <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-8">
          About Us
        </h1>
        <div className="w-20 h-1 bg-primary mb-12" />
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
          With over two decades of experience, Siya Ram Fabrics has evolved from a fabric supplier into a comprehensive manufacturing partner. We combine modern infrastructure with deep textile expertise to serve garment manufacturers who demand consistency and reliability.
        </p>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Our philosophy is simple: to manufacture high-quality knitted fabrics while building lasting relationships through operational excellence.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-8 py-20 md:py-[120px] min-h-[60vh]">
      <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">About Siya Ram Fabrics</span>
      <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-8">
        {page.title}
      </h1>
      <div className="w-20 h-1 bg-primary mb-12" />
      
      <div className="max-w-4xl">
        {page.content ? (
          <PortableText value={page.content} components={ptComponents} />
        ) : (
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
            Content coming soon.
          </p>
        )}
      </div>
    </div>
  );
}
