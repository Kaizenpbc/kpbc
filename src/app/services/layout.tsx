import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional IT consulting services including project management, software development, digital transformation, cybersecurity, staff augmentation, and enterprise software implementation.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
