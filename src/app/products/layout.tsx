import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Enterprise software products: ECM (FineDocs™), BPM (FineFlow™), Core Banking (TrustBankCBS™), Loan Origination (TrustLOS™), CRM, ITSM, LMS, AI Resume Writing, and more.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
