"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import HeroSlider from "@/components/HeroSlider";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
  { value: "25+", label: "Years Experience" },
];

const clients = [
  "PICA — Jamaica",
  "NWC — Jamaica",
  "GTA CPR — Canada",
];

const verticals = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Government Agencies",
    outcome: "Digitize citizen services and streamline document-heavy operations with ECM and BPM.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Credit Unions & Financial Services",
    outcome: "Modernize core banking, loan origination, and compliance workflows.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Educational Institutions",
    outcome: "Manage student data, deliver e-learning, and automate administrative processes.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Enterprise & SMBs",
    outcome: "Scale customer service, IT operations, and marketing with Freshworks-powered solutions.",
  },
];

const flagshipProducts = [
  {
    abbr: "ECM",
    name: "Enterprise Content Management",
    outcome: "Eliminate paper-based bottlenecks and automate document workflows for regulated industries.",
    href: "/products/ecm",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    abbr: "ITSM",
    name: "IT Service Management",
    outcome: "ITIL-aligned service desk with AI-powered ticket routing and asset management.",
    href: "/products/itsm",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    abbr: "CBS",
    name: "Core Banking — TrustBankCBS",
    outcome: "Secure, multi-currency core banking for credit unions and financial institutions.",
    href: "/products/cbs",
    gradient: "from-slate-500 to-zinc-600",
  },
];

const serviceBuckets = [
  {
    title: "Digital Platforms",
    services: ["Software Development", "Application Development", "Website Development"],
    cta: { label: "Book a Discovery Call", href: "/contact" },
  },
  {
    title: "Security & Reliability",
    services: ["Cybersecurity", "Penetration Testing", "IT Consulting & Support"],
    cta: { label: "Request a Security Assessment", href: "/contact" },
  },
  {
    title: "Operations & Transformation",
    services: ["Digital Transformation", "Business Process Reengineering", "Staff Augmentation"],
    cta: { label: "Book a Discovery Call", href: "/contact" },
  },
  {
    title: "AI & Automation",
    services: ["AI Resume Writing", "AI Project Management Assistant"],
    cta: { label: "Try a Guided Walkthrough", href: "/contact" },
  },
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

      {/* Clients / Social Proof */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-center text-xs font-medium tracking-[0.3em] uppercase text-muted mb-10">
              Trusted by government agencies, credit unions, and enterprises
            </p>
            <div className="marquee-fade overflow-hidden">
              <div className="marquee-track">
                {[...clients, ...clients, ...clients, ...clients].map((name, i) => (
                  <span
                    key={i}
                    className="flex-shrink-0 px-10 text-lg font-semibold text-muted hover:text-heading transition-colors duration-300 select-none whitespace-nowrap"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Who We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              We modernize document workflows, customer service, and core operations for organizations across Canada and the Caribbean.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {verticals.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-background border border-surface-light hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-heading mb-2">{v.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{v.outcome}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Flagship <span className="gradient-text">Products</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Enterprise-grade platforms trusted by regulated organizations to manage content, operations, and banking.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {flagshipProducts.map((product, i) => (
              <AnimatedSection key={product.abbr} delay={i * 0.1}>
                <div className="group relative rounded-2xl bg-surface border border-surface-light hover:border-primary/30 transition-all duration-300 glow-hover overflow-hidden h-full flex flex-col">
                  <div className={`h-1.5 bg-gradient-to-r ${product.gradient}`} />
                  <div className="p-8 flex flex-col flex-1">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6`}>
                      <span className="text-lg font-bold text-white">{product.abbr}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-heading mb-3">{product.name}</h3>
                    <p className="text-muted text-sm leading-relaxed mb-6">{product.outcome}</p>
                    <div className="mt-auto">
                      <Link
                        href={product.href}
                        className="inline-flex items-center text-primary hover:text-primary-light font-medium transition-colors text-sm"
                      >
                        Learn More
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

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center text-muted hover:text-heading font-medium transition-colors"
            >
              View All Products
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section — Grouped by Bucket */}
      <section ref={servicesRef} className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Comprehensive IT solutions designed to accelerate your growth and secure your digital future.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceBuckets.map((bucket, i) => (
              <AnimatedSection key={bucket.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-background border border-surface-light h-full flex flex-col">
                  <h3 className="text-lg font-semibold text-heading mb-4">{bucket.title}</h3>
                  <ul className="space-y-3 mb-6 flex-1">
                    {bucket.services.map((s) => (
                      <li key={s} className="flex items-center text-sm text-muted">
                        <svg className="w-4 h-4 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={bucket.cta.href}
                    className="inline-flex items-center text-primary hover:text-primary-light font-medium transition-colors text-sm"
                  >
                    {bucket.cta.label}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center text-muted hover:text-heading font-medium transition-colors"
            >
              View All Services in Detail
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Organizations Trust KPBC */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-3xl bg-surface border border-surface-light p-8 sm:p-12 lg:p-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-8 text-center">
                Why Organizations <span className="gradient-text">Trust KPBC</span>
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">25+</div>
                  <div className="text-heading text-sm font-medium mb-1">Years of Experience</div>
                  <p className="text-muted text-xs">Delivering IT solutions since the early 2000s</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">2 Regions</div>
                  <div className="text-heading text-sm font-medium mb-1">Canada &amp; Caribbean</div>
                  <p className="text-muted text-xs">Toronto, Kingston, Bridgetown, Georgetown, Port of Spain</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">Regulated</div>
                  <div className="text-heading text-sm font-medium mb-1">Industries Served</div>
                  <p className="text-muted text-xs">Government agencies, credit unions, financial institutions</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-2">Partners</div>
                  <div className="text-heading text-sm font-medium mb-1">Certified Partnerships</div>
                  <p className="text-muted text-xs">Freshworks, Acyutah Technologies, Trust Fintech</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_transparent_0%,_rgba(0,0,0,0.15)_100%)]" />
              <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Ready to Modernize Your Operations?
                </h2>
                <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
                  Book a 30-minute discovery call to discuss how we can streamline your workflows, strengthen your security, or implement the right enterprise platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-primary font-semibold text-lg hover:bg-white/90 transition-colors"
                  >
                    Book a Discovery Call
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-lg hover:bg-white/20 transition-colors border border-white/20"
                  >
                    Request a Product Demo
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
