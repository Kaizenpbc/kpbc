import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core Banking Software — TrustBankCBS™",
  description:
    "TrustBankCBS™ core banking solution by Trust Fintech Limited. Retail & corporate banking, multi-currency, KYC/AML compliance, treasury, trade finance, and digital banking integration.",
};

export default function CBSLayout({ children }: { children: React.ReactNode }) {
  return children;
}
