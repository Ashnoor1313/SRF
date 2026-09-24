import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SR PROCESSORS | Textile Processing & Dyeing Division | Ludhiana",
  description:
    "SR PROCESSORS — Khata No. 130/152, Khasra No. 20/8/2, Village Paharuwal, Chd. Road, Ludhiana-141114. GSTIN: 03AEZFS2960Q1Z1. State: Punjab (03). Phone: +91 98887 77382.",
  keywords: [
    "SR Processors",
    "fabric processing Ludhiana",
    "textile dyeing Ludhiana",
    "softflow dyeing Punjab",
    "stenter finishing",
    "Siya Ram Fabrics sub company",
    "Village Paharuwal Chandigarh Road",
  ],
};

export default function SRProcessorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
