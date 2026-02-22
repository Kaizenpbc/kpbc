"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const capabilities = [
  {
    title: "Document Management",
    description:
      "Centralized repository to store, organize, and retrieve documents with version control, audit trails, and role-based access.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Records Management",
    description:
      "Manage corporate records throughout their lifecycle with retention schedules, compliance controls, and secure archival.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
  {
    title: "Capture Solutions",
    description:
      "Digitize paper documents with high-speed scanning, intelligent OCR, barcode recognition, and automated classification.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Enterprise Portal",
    description:
      "Unified collaboration environment that integrates corporate information and applications through a personalized interface.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "Integration",
    description:
      "Seamlessly connect with ERP, CRM, email, and other enterprise applications through robust APIs and connectors.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    title: "Cloud & Mobile",
    description:
      "Access your content anywhere with cloud deployment options and mobile-optimized interfaces for on-the-go productivity.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
];

const components = [
  {
    name: "FineDocs DMS",
    fullName: "Document Management System",
    description:
      "A full-featured document management system that provides centralized storage, advanced search, version control, and granular access controls. Manage both structured and unstructured content throughout its entire lifecycle from creation to archival.",
    features: [
      "Centralized Document Repository",
      "Full-Text & Metadata Search",
      "Version Control & Check-In/Out",
      "Access Control & Audit Trail",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "FineFlow BPM",
    fullName: "Business Process Management",
    description:
      "A powerful workflow and business process management engine that automates document-centric processes. Design, execute, and monitor workflows with visual tools, automated routing, and real-time process analytics.",
    features: [
      "Visual Workflow Designer",
      "Automated Document Routing",
      "Parallel & Sequential Workflows",
      "SLA Tracking & Escalation",
    ],
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    name: "FineDocs Portal",
    fullName: "Enterprise Content Portal",
    description:
      "A unified enterprise collaboration and content management environment that enables organizations to engage employees and customers with relevant information through an intuitive, personalized interface. Aggregate content, knowledge, and collaborative features to gain visibility and access to the right information across the enterprise.",
    features: [
      "Enterprise Knowledge Management",
      "Collaborative Workspace & Chat",
      "News, Notice & Event Publishing",
      "Corporate Helpdesk Solution",
    ],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    name: "FineScan Capture",
    fullName: "Intelligent Document Capture",
    description:
      "A high-performance capture solution for digitizing paper documents and automating data extraction. Features intelligent OCR, barcode recognition, and automated document classification for rapid, accurate processing.",
    features: [
      "High-Speed Batch Scanning",
      "Intelligent OCR Engine",
      "Barcode & QR Recognition",
      "Auto-Classification & Indexing",
    ],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "FineDocs Integrator",
    fullName: "Enterprise Integration Platform",
    description:
      "Extends FineDocs integration capabilities to enable organizations to improve information governance in a unified platform. Pre-built connectors for leading enterprise systems and web services APIs for custom integration.",
    features: [
      "SAP ArchiveLink Integration",
      "MS SharePoint & Dynamics NAV",
      "Web Services & API for ERP",
      "Cloud Integration Platform",
    ],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    name: "FineDocs Mobile",
    fullName: "Mobile Content Access",
    description:
      "Access, review, and approve documents on the go with a mobile-optimized interface. Upload photos and scans directly from your device, receive push notifications, and manage workflows from anywhere.",
    features: [
      "Mobile Document Access",
      "On-Device Capture & Upload",
      "Workflow Approvals",
      "Push Notifications",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function ECMPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Link
              href="/products"
              className="inline-flex items-center text-sm text-muted hover:text-primary transition-colors mb-6"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Products
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Enterprise <span className="gradient-text">Content Management</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted leading-relaxed">
              Capture, manage, store, and deliver content across your organization with our comprehensive ECM platform powered by FineDocs technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-6">
                The FineDocs <span className="gradient-text">ECM Platform</span>
              </h2>
              <p className="text-muted leading-relaxed text-lg mb-4">
                FineDocs presents an excellent ECM experience with a complete range of products, tools, and technologies spanning Document Management, Records Management, Capture Solutions, and Archival Solutions &mdash; on-premises or in the cloud. Manage documents throughout their lifecycle, meet compliance, mitigate risks, and harness information that keeps long-term business value.
              </p>
              <p className="text-muted leading-relaxed">
                FineDocs is a complete ECM platform &mdash; not merely a product suite. It can establish itself as a standalone ECM environment or scale and integrate seamlessly with your existing enterprise applications to achieve a united IT ecosystem.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Key <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              A comprehensive suite of capabilities designed to address every aspect of enterprise content management.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 0.05}>
                <div className="p-8 rounded-2xl bg-surface border border-surface-light hover:border-primary/30 transition-all duration-300 glow-hover h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    {cap.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-heading mb-2">{cap.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{cap.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Component Products */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Product <span className="gradient-text">Components</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              The FineDocs ECM platform is comprised of six integrated components, each designed to address a specific aspect of content management.
            </p>
          </AnimatedSection>

          <div className="space-y-10">
            {components.map((component, i) => (
              <AnimatedSection key={component.name} delay={i * 0.05}>
                <div className="rounded-2xl bg-background border border-surface-light overflow-hidden">
                  <div className={`h-1.5 bg-gradient-to-r ${component.gradient}`} />
                  <div className="p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${component.gradient} flex items-center justify-center`}>
                            <span className="text-sm font-bold text-white">
                              {component.name.split(" ")[0][0]}
                              {component.name.split(" ")[1]?.[0] || ""}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-heading">{component.name}</h3>
                            <p className="text-muted text-sm">{component.fullName}</p>
                          </div>
                        </div>
                        <p className="text-muted leading-relaxed mt-4">{component.description}</p>
                      </div>

                      {/* Features */}
                      <div className="lg:w-72 flex-shrink-0">
                        <h4 className="text-sm font-semibold text-heading uppercase tracking-wider mb-3">Highlights</h4>
                        <div className="space-y-2.5">
                          {component.features.map((feature) => (
                            <div key={feature} className="flex items-center text-sm text-muted">
                              <svg className="w-4 h-4 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Powered By */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center p-8 rounded-2xl bg-surface border border-surface-light">
              <p className="text-sm text-muted uppercase tracking-wider mb-2">Technology Partner</p>
              <p className="text-lg font-semibold text-heading">
                Powered by <span className="gradient-text">Acyutah Technologies</span>
              </p>
              <p className="text-muted text-sm mt-2 max-w-xl mx-auto">
                KPBC partners with Acyutah Technologies to deliver enterprise-grade ECM solutions built on the proven FineDocs platform.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Ready to Manage Your Content Smarter?
            </h2>
            <p className="text-muted max-w-2xl mx-auto mb-8">
              Contact us to schedule a demo and discover how FineDocs ECM can transform your organization&apos;s content management.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg hover:opacity-90 transition-opacity glow"
            >
              Schedule a Demo
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
