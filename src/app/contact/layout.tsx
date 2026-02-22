import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Kaizen Project & Business Consultants Inc. for enterprise IT solutions, software consulting, and project management services. Schedule a demo today.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
