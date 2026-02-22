import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Origination Software — TrustLOS™",
  description:
    "TrustLOS™ loan origination system by Trust Fintech Limited. Automated credit appraisal, KYC & credit bureau integration, mobile access, and 50% faster turnaround for financial institutions.",
};

export default function LOSLayout({ children }: { children: React.ReactNode }) {
  return children;
}
