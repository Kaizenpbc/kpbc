import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BPM — FineFlow™ | Business Process Management",
  description:
    "FineFlow™ business process management by Acyutah Technologies. Visual workflow design, automated approvals, task management, real-time analytics, and enterprise integration.",
};

export default function BPMLayout({ children }: { children: React.ReactNode }) {
  return children;
}
