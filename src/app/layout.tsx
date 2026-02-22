import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TawkToChat from "@/components/TawkToChat";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kaizen Project & Business Consultants Inc. | IT Solutions & Enterprise Software",
    template: "%s | Kaizen Project & Business Consultants Inc.",
  },
  description:
    "Kaizen Project & Business Consultants Inc. delivers enterprise IT solutions including ECM (FineDocs™), BPM (FineFlow™), Core Banking (TrustBankCBS™), Loan Origination (TrustLOS™), CRM, ITSM, and AI Resume Writing services across Canada.",
  keywords: [
    "IT consulting Canada",
    "enterprise content management",
    "business process management",
    "core banking software",
    "loan origination software",
    "ECM FineDocs",
    "BPM FineFlow",
    "TrustBankCBS",
    "TrustLOS",
    "CRM",
    "ITSM",
    "AI resume writing",
    "project management consulting",
    "staff augmentation",
    "software solutions",
    "Kaizen consulting",
  ],
  metadataBase: new URL("https://kpbc.ca"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://kpbc.ca",
    siteName: "Kaizen Project & Business Consultants Inc.",
    title: "Kaizen Project & Business Consultants Inc. | IT Solutions & Enterprise Software",
    description:
      "Enterprise IT solutions including ECM, BPM, Core Banking, Loan Origination, CRM, ITSM, and AI Resume Writing services across Canada.",
  },
  alternates: {
    canonical: "https://kpbc.ca",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
          <TawkToChat />
        </ThemeProvider>
      </body>
    </html>
  );
}
