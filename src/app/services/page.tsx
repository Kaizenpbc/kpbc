"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    id: "software-development",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Software Development",
    description: "We build custom software solutions that address your unique business challenges. From enterprise applications to elegant consumer-facing products, our development team delivers robust, scalable software.",
    features: ["Custom Application Development", "Web & Mobile Applications", "API Development & Integration", "Legacy System Modernization"],
  },
  {
    id: "application-development",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Application Development",
    description: "End-to-end application development services from concept to deployment. We craft high-performance applications using modern frameworks and best practices to ensure reliability and maintainability.",
    features: ["Full-Stack Development", "Cloud-Native Applications", "Progressive Web Apps", "Cross-Platform Solutions"],
  },
  {
    id: "website-development",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "Website Development",
    description: "Modern, responsive websites that make a lasting impression. We design and develop websites that are fast, accessible, and optimized for search engines, helping you connect with your audience effectively.",
    features: ["Responsive Web Design", "E-Commerce Platforms", "Content Management Systems", "SEO Optimization"],
  },
  {
    id: "cybersecurity",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Cybersecurity",
    description: "Comprehensive cybersecurity services to protect your organization from evolving threats. We implement defense-in-depth strategies tailored to your risk profile and compliance requirements.",
    features: ["Security Assessments & Audits", "Threat Detection & Response", "Compliance & Governance", "Security Awareness Training"],
  },
  {
    id: "digital-transformation",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Business Digital Transformation",
    description: "Navigate the digital landscape with confidence. We help organizations reimagine their operations, adopt new technologies, and create digital-first strategies that deliver measurable business outcomes.",
    features: ["Digital Strategy & Roadmapping", "Process Automation", "Cloud Migration", "Data Analytics & Insights"],
  },
  {
    id: "business-process-reengineering",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Business Process Reengineering",
    description: "Fundamentally rethink and redesign your business processes to achieve dramatic improvements in productivity, quality, and efficiency. We identify bottlenecks and implement streamlined workflows.",
    features: ["Process Analysis & Mapping", "Workflow Optimization", "Change Management", "Performance Measurement"],
  },
  {
    id: "it-consulting",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "IT Consulting & Support",
    description: "Expert IT guidance and reliable support services to keep your technology running smoothly. From strategic planning to day-to-day helpdesk operations, we are your trusted technology partner.",
    features: ["IT Strategy & Planning", "Managed IT Services", "24/7 Helpdesk Support", "Infrastructure Management"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted leading-relaxed">
              From software development to cybersecurity, we offer a full spectrum of IT services designed to transform your business and keep you ahead of the competition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 0.05}>
                <div
                  id={service.id}
                  className="group p-8 lg:p-10 rounded-2xl bg-background border border-surface-light hover:border-primary/30 transition-all duration-300 glow-hover scroll-mt-24"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
                      <p className="text-muted leading-relaxed mb-6">{service.description}</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted max-w-2xl mx-auto mb-8">
              Every business is unique. Let&apos;s discuss your specific needs and craft a tailored solution that delivers results.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg hover:opacity-90 transition-opacity glow"
            >
              Let&apos;s Talk
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
