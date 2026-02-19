import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TawkToChat from "@/components/TawkToChat";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaizen Project & Business Consultants Inc. | Innovative IT Solutions",
  description:
    "Kaizen Project & Business Consultants Inc. delivers cutting-edge IT solutions including software development, cybersecurity, digital transformation, and enterprise products to drive your business forward.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <TawkToChat />
      </body>
    </html>
  );
}
