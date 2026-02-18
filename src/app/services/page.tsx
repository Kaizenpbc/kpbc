"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    id: "software-development",
    abbr: "SD",
    title: "Software Development",
    tagline: "Build. Scale. Deliver.",
    description: "We build custom software solutions that address your unique business challenges. From enterprise applications to elegant consumer-facing products, our development team delivers robust, scalable software.",
    features: ["Custom Application Development", "Web & Mobile Applications", "API Development & Integration", "Legacy System Modernization"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "application-development",
    abbr: "AD",
    title: "Application Development",
    tagline: "Concept. Code. Deploy.",
    description: "End-to-end application development services from concept to deployment. We craft high-performance applications using modern frameworks and best practices to ensure reliability and maintainability.",
    features: ["Full-Stack Development", "Cloud-Native Applications", "Progressive Web Apps", "Cross-Platform Solutions"],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: "website-development",
    abbr: "WD",
    title: "Website Development",
    tagline: "Design. Develop. Launch.",
    description: "Modern, responsive websites that make a lasting impression. We design and develop websites that are fast, accessible, and optimized for search engines, helping you connect with your audience effectively.",
    features: ["Responsive Web Design", "E-Commerce Platforms", "Content Management Systems", "SEO Optimization"],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: "cybersecurity",
    abbr: "CS",
    title: "Cybersecurity",
    tagline: "Protect. Detect. Respond.",
    description: "Comprehensive cybersecurity services to protect your organization from evolving threats. We implement defense-in-depth strategies tailored to your risk profile and compliance requirements.",
    features: ["Security Assessments & Audits", "Threat Detection & Response", "Compliance & Governance", "Security Awareness Training"],
    gradient: "from-red-500 to-rose-500",
  },
  {
    id: "digital-transformation",
    abbr: "DT",
    title: "Business Digital Transformation",
    tagline: "Innovate. Modernize. Grow.",
    description: "Navigate the digital landscape with confidence. We help organizations reimagine their operations, adopt new technologies, and create digital-first strategies that deliver measurable business outcomes.",
    features: ["Digital Strategy & Roadmapping", "Process Automation", "Cloud Migration", "Data Analytics & Insights"],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: "business-process-reengineering",
    abbr: "BPR",
    title: "Business Process Reengineering",
    tagline: "Analyze. Redesign. Optimize.",
    description: "Fundamentally rethink and redesign your business processes to achieve dramatic improvements in productivity, quality, and efficiency. We identify bottlenecks and implement streamlined workflows.",
    features: ["Process Analysis & Mapping", "Workflow Optimization", "Change Management", "Performance Measurement"],
    gradient: "from-pink-500 to-fuchsia-500",
  },
  {
    id: "it-consulting",
    abbr: "ITC",
    title: "IT Consulting & Support",
    tagline: "Advise. Support. Empower.",
    description: "Expert IT guidance and reliable support services to keep your technology running smoothly. From strategic planning to day-to-day helpdesk operations, we are your trusted technology partner.",
    features: ["IT Strategy & Planning", "Managed IT Services", "24/7 Helpdesk Support", "Infrastructure Management"],
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    id: "staff-augmentation",
    abbr: "SA",
    title: "Staff Augmentation",
    tagline: "Scale. Integrate. Deliver.",
    description: "Extend your team with skilled IT professionals who integrate seamlessly into your workflows. Whether you need specialized expertise for a critical project or additional capacity to meet deadlines, our staff augmentation services provide the right talent, right when you need it.",
    features: ["Dedicated Development Teams", "Specialized Skill Sourcing", "Flexible Engagement Models", "Rapid Team Scaling"],
    gradient: "from-cyan-500 to-sky-500",
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

      {/* Services */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="rounded-2xl bg-background border border-surface-light overflow-hidden scroll-mt-24 h-full flex flex-col"
              >
                {/* Header Bar */}
                <div className={`h-1.5 bg-gradient-to-r ${service.gradient}`} />

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-xl font-bold text-white">{service.abbr}</span>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">{service.title}</h2>
                      <p className="text-muted text-sm">{service.tagline}</p>
                    </div>
                  </div>

                  <p className="text-muted leading-relaxed text-sm mt-2">{service.description}</p>

                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Key Features</h3>
                    <div className="space-y-2">
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

                  <div className="mt-auto pt-6 border-t border-surface-light mt-8">
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-primary hover:text-primary-light font-medium transition-colors text-sm"
                    >
                      Get in Touch
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
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
