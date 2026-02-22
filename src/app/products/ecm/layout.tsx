import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECM — FineDocs™ | Enterprise Content Management",
  description:
    "FineDocs™ enterprise content management by Acyutah Technologies. Document management, workflow automation, OCR capture, records management, and compliance for organizations.",
};

export default function ECMLayout({ children }: { children: React.ReactNode }) {
  return children;
}
