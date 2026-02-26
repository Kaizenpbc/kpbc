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
    "Kaizen Project & Business Consultants Inc. delivers enterprise IT solutions including ECM (FineDocs™), BPM (FineFlow™), Core Banking (TrustBankCBS™), Loan Origination (TrustLOS™), CRM, ITSM, and AI Resume Writing, and AI Project Management services across Canada and the Caribbean.",
  keywords: [
    "IT consulting Canada",
    "IT consulting Caribbean",
    "IT consulting Jamaica",
    "IT consulting Barbados",
    "IT consulting Guyana",
    "IT consulting Trinidad and Tobago",
    "enterprise content management",
    "business process management",
    "core banking software",
    "core banking Caribbean",
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
    "software solutions Caribbean",
    "software solutions",
    "Kaizen consulting",
    "digital transformation Caribbean",
  ],
  metadataBase: new URL("https://kpbc.ca"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://kpbc.ca",
    siteName: "Kaizen Project & Business Consultants Inc.",
    title: "Kaizen Project & Business Consultants Inc. | IT Solutions & Enterprise Software",
    description:
      "Enterprise IT solutions including ECM, BPM, Core Banking, Loan Origination, CRM, ITSM, and AI Resume Writing, and AI Project Management services across Canada and the Caribbean.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaizen Project & Business Consultants Inc. | IT Solutions & Enterprise Software",
    description:
      "Enterprise IT solutions including ECM, BPM, Core Banking, Loan Origination, CRM, ITSM, and AI Resume Writing, and AI Project Management services across Canada and the Caribbean.",
  },
  alternates: {
    canonical: "https://kpbc.ca",
  },
  icons: {
    icon: "/kpbc-logo.svg",
    apple: "/kpbc-logo.svg",
  },
  verification: {
    google: "google3dd9688ad43ac813",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://kpbc.ca/#organization",
      name: "Kaizen Project & Business Consultants Inc.",
      url: "https://kpbc.ca",
      logo: "https://kpbc.ca/kpbc-logo.svg",
      description:
        "Enterprise IT solutions including ECM, BPM, Core Banking, Loan Origination, CRM, ITSM, and AI Resume Writing, and AI Project Management services across Canada and the Caribbean.",
      areaServed: [
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "Jamaica" },
        { "@type": "Country", name: "Barbados" },
        { "@type": "Country", name: "Guyana" },
        { "@type": "Country", name: "Trinidad and Tobago" },
      ],
      location: [
        { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Toronto", addressRegion: "Ontario", addressCountry: "CA" } },
        { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Kingston", addressCountry: "JM" } },
        { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Bridgetown", addressCountry: "BB" } },
        { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Georgetown", addressCountry: "GY" } },
        { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Port of Spain", addressCountry: "TT" } },
      ],
      serviceType: [
        "IT Consulting",
        "Project Management",
        "Staff Augmentation",
        "Software Solutions",
        "Enterprise Content Management",
        "Business Process Management",
        "Core Banking Software",
        "Loan Origination Software",
        "CRM",
        "ITSM",
        "AI Resume Writing",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://kpbc.ca/#website",
      url: "https://kpbc.ca",
      name: "Kaizen Project & Business Consultants Inc.",
      publisher: { "@id": "https://kpbc.ca/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      name: "FineDocs™ ECM",
      applicationCategory: "BusinessApplication",
      description: "Enterprise Content Management platform by Acyutah Technologies.",
      url: "https://kpbc.ca/products/ecm",
      provider: { "@id": "https://kpbc.ca/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      name: "FineFlow™ BPM",
      applicationCategory: "BusinessApplication",
      description: "Business Process Management platform by Acyutah Technologies.",
      url: "https://kpbc.ca/products/bpm",
      provider: { "@id": "https://kpbc.ca/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      name: "TrustBankCBS™",
      applicationCategory: "BusinessApplication",
      description: "Core Banking Software by Trust Fintech Limited.",
      url: "https://kpbc.ca/products/cbs",
      provider: { "@id": "https://kpbc.ca/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      name: "TrustLOS™",
      applicationCategory: "BusinessApplication",
      description: "Loan Origination Software by Trust Fintech Limited.",
      url: "https://kpbc.ca/products/los",
      provider: { "@id": "https://kpbc.ca/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
