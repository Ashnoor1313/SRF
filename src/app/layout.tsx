import type { Metadata, Viewport } from "next";
import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-numbers",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://siyaramfabrics.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Siya Ram Fabrics | Trusted Knitted Fabric Manufacturer in Ludhiana",
    template: "%s | Siya Ram Fabrics",
  },
  description:
    "Family-owned textile manufacturer since 1998. 1.5 lac sq ft facility, 300+ employees, complete in-house knitting, dyeing & finishing of knitted fabrics in Ludhiana, Punjab.",
  keywords: [
    "knitted fabric manufacturer",
    "fabric supplier Ludhiana",
    "textile manufacturer Punjab",
    "single jersey fabric",
    "fleece fabric manufacturer",
    "fast fashion fabrics",
    "circular knitting",
    "Siya Ram Fabrics",
  ],
  authors: [{ name: "Siya Ram Fabrics" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Siya Ram Fabrics",
    title: "Siya Ram Fabrics | Trusted Knitted Fabric Manufacturer in Ludhiana",
    description:
      "Family-owned textile manufacturer since 1998. 1.5 lac sq ft facility, 300+ employees, complete in-house knitting, dyeing & finishing in Ludhiana, Punjab.",
    images: [
      {
        url: "/images/factory_floor.png",
        width: 1024,
        height: 1024,
        alt: "Siya Ram Fabrics — 1.5 lac sq ft textile manufacturing facility in Ludhiana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siya Ram Fabrics | Trusted Knitted Fabric Manufacturer in Ludhiana",
    description:
      "Family-owned textile manufacturer since 1998. 1.5 lac sq ft facility, 300+ employees, complete in-house knitting, dyeing & finishing in Ludhiana, Punjab.",
    images: ["/images/factory_floor.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#B12137",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Siya Ram Fabrics",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  foundingDate: "1998",
  founder: {
    "@type": "Person",
    name: "Harish Jindal",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "A4–A7, Hampton Court Business Park, Chandigarh Road",
    addressLocality: "Ludhiana",
    postalCode: "141008",
    addressRegion: "Punjab",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9888778082",
    contactType: "sales",
    availableLanguage: ["English", "Hindi", "Punjabi"],
  },
  areaServed: "India",
  numberOfEmployees: "300+",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
