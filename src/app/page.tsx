"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import HeroSlider from "@/components/HeroSlider";

const services = [
  { abbr: "SD", name: "Software Development", description: "Custom applications, web & mobile development, and API integrations tailored to your business needs." },
  { abbr: "AD", name: "Application Development", description: "End-to-end application development from concept to deployment using modern frameworks." },
  { abbr: "WD", name: "Website Development", description: "Responsive, fast, and SEO-optimized websites that connect you with your audience." },
  { abbr: "CS", name: "Cybersecurity", description: "Protect your digital assets with comprehensive security audits, threat monitoring, and compliance." },
  { abbr: "DT", name: "Digital Transformation", description: "Modernize your operations with strategic technology adoption and process automation." },
  { abbr: "BPR", name: "Business Process Reengineering", description: "Redesign business processes for dramatic improvements in productivity and efficiency." },
  { abbr: "ITC", name: "IT Consulting & Support", description: "Strategic IT guidance, managed services, and dedicated helpdesk support." },
  { abbr: "SA", name: "Staff Augmentation", description: "Extend your team with skilled IT professionals who integrate seamlessly into your workflows." },
];

const products = [
  { abbr: "DMS", name: "Document Management System", description: "Organize, store, and retrieve documents with ease." },
  { abbr: "LMS", name: "Learning Management System", description: "Deliver and track training programs seamlessly." },
  { abbr: "CRM", name: "Customer Relationship Management", description: "Manage customer interactions and grow revenue." },
  { abbr: "SIS", name: "Student Information System", description: "Streamline student data and academic processes." },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
  { value: "10+", label: "Years Experience" },
];

export default function Home() {
  const servicesRef = useRef<HTMLElement>(null);
  const [servicesVisible, setServicesVisible] = useState(false);

  useEffect(() => {
    const el = servicesRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setServicesVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Slider */}
      <HeroSlider paused={servicesVisible} />

      {/* Stats Section */}
      <section className="py-16 border-y border-surface-light bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-muted text-sm">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Comprehensive IT solutions designed to accelerate your growth and secure your digital future.
            </p>
          </AnimatedSection>

          <div className="services-grid">
            {services.map((service, i) => (
              <motion.div
                key={service.abbr}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              >
                <div className="group relative p-8 rounded-2xl bg-surface border border-surface-light hover:border-primary/30 transition-all duration-300 glow-hover text-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold gradient-text">{service.abbr}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-muted text-sm">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center text-primary hover:text-primary-light font-medium transition-colors"
            >
              View All Services
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="gradient-text">Products</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Enterprise-grade solutions built to streamline your operations and drive efficiency.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <AnimatedSection key={product.abbr} delay={i * 0.1}>
                <div className="group relative p-8 rounded-2xl bg-background border border-surface-light hover:border-primary/30 transition-all duration-300 glow-hover text-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold gradient-text">{product.abbr}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-muted text-sm">{product.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center text-primary hover:text-primary-light font-medium transition-colors"
            >
              Explore Products
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_transparent_0%,_rgba(0,0,0,0.3)_100%)]" />
              <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
                  Let&apos;s discuss how KPBC can help you achieve your technology goals and stay ahead of the competition.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-primary font-semibold text-lg hover:bg-white/90 transition-colors"
                >
                  Contact Us Today
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
