import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Resume Writing",
  description:
    "AI-powered resume writing platform. ATS-optimized resumes, keyword analysis, industry-specific tailoring, cover letter generation, and multi-format export to land your next role.",
};

export default function AIResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
