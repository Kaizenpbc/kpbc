import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Project Management Assistant",
  description:
    "AI-powered project management assistant for task scheduling, risk prediction, automated reporting, resource optimization, and sprint forecasting to keep projects on track and on budget.",
};

export default function AIPMLayout({ children }: { children: React.ReactNode }) {
  return children;
}
