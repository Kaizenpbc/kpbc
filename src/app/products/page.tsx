"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const products = [
  {
    id: "dms",
    abbr: "DMS",
    name: "Document Management System",
    tagline: "Organize. Collaborate. Secure.",
    description: "A comprehensive document management solution that helps organizations digitize, organize, store, and retrieve documents with ease. Streamline your document workflows and ensure compliance with built-in version control and access management.",
    features: [
      "Centralized Document Repository",
      "Advanced Search & Filtering",
      "Version Control & Audit Trail",
      "Role-Based Access Control",
      "Automated Workflow Routing",
      "OCR & Document Scanning",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "lms",
    abbr: "LMS",
    name: "Learning Management System",
    tagline: "Learn. Grow. Excel.",
    description: "A powerful learning platform designed to deliver, manage, and track educational content and training programs. Whether for corporate training or academic institutions, our LMS provides an engaging and effective learning experience.",
    features: [
      "Course Creation & Management",
      "Interactive Learning Modules",
      "Progress Tracking & Analytics",
      "Assessment & Certification",
      "Mobile-Friendly Interface",
      "SCORM & xAPI Compliance",
    ],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: "crm",
    abbr: "CRM",
    name: "Customer Relationship Management",
    tagline: "Connect. Engage. Grow.",
    description: "A robust CRM platform that helps you manage customer interactions, track sales pipelines, and build lasting relationships. Gain actionable insights into customer behavior and drive revenue growth with intelligent automation.",
    features: [
      "Contact & Lead Management",
      "Sales Pipeline Tracking",
      "Email Campaign Integration",
      "Customer Analytics & Reports",
      "Task & Activity Management",
      "Third-Party Integrations",
    ],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: "sis",
    abbr: "SIS",
    name: "Student Information System",
    tagline: "Manage. Track. Succeed.",
    description: "A comprehensive student information system designed for educational institutions. Manage student enrollment, academic records, attendance, grading, and more in a single unified platform that simplifies administrative processes.",
    features: [
      "Student Enrollment & Registration",
      "Academic Records & Transcripts",
      "Attendance Tracking",
      "Grade Management",
      "Parent & Student Portals",
      "Reporting & Analytics",
    ],
    gradient: "from-orange-500 to-amber-500",
  },
];

export default function ProductsPage() {
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Products</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted leading-relaxed">
              Enterprise-grade software products designed to streamline operations, enhance productivity, and drive organizational growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 0.05}>
                <div
                  id={product.id}
                  className="rounded-2xl bg-background border border-surface-light overflow-hidden scroll-mt-24"
                >
                  {/* Header Bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${product.gradient}`} />

                  <div className="p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row gap-10">
                      {/* Left - Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} bg-opacity-20 flex items-center justify-center`}>
                            <span className="text-xl font-bold text-white">{product.abbr}</span>
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-heading">{product.name}</h2>
                            <p className="text-muted text-sm">{product.tagline}</p>
                          </div>
                        </div>
                        <p className="text-muted leading-relaxed mt-6">{product.description}</p>
                      </div>

                      {/* Right - Features */}
                      <div className="lg:w-80 flex-shrink-0">
                        <h3 className="text-sm font-semibold text-heading uppercase tracking-wider mb-4">Key Features</h3>
                        <div className="space-y-3">
                          {product.features.map((feature) => (
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

                    <div className="mt-8 pt-6 border-t border-surface-light">
                      <Link
                        href="/contact"
                        className="inline-flex items-center text-primary hover:text-primary-light font-medium transition-colors text-sm"
                      >
                        Request a Demo
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Interested in Our Products?
            </h2>
            <p className="text-muted max-w-2xl mx-auto mb-8">
              Schedule a demo to see how our enterprise solutions can transform your organization&apos;s operations.
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
