import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Kaizen Project & Business Consultants Inc. — nearly a decade of experience delivering enterprise IT solutions, project management, and staff augmentation services across Canada.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
