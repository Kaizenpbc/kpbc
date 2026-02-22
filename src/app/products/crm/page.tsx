"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const capabilities = [
  {
    title: "Contact & Lead Management",
    description:
      "Centralized database for contacts, leads, and accounts with lifecycle tracking, custom fields, and activity timelines for complete visibility.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Insights (Freddy AI)",
    description:
      "Intelligent lead scoring, deal insights, and sales forecasting powered by Freddy AI to prioritize high-value prospects.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Sales Pipeline Management",
    description:
      "Visual deal pipelines with drag-and-drop stages, weighted forecasting, and automated deal progression.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
      </svg>
    ),
  },
  {
    title: "Multichannel Communication",
    description:
      "Built-in email, phone, SMS, WhatsApp, and chat integration to engage prospects across every channel from one platform.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive sales tasks with intelligent workflows, auto-assignment rules, and sequenced outreach campaigns.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Analytics & Reporting",
    description:
      "Customizable dashboards and reports with real-time metrics on sales performance, team productivity, and revenue trends.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const components = [
  {
    name: "Freshsales CRM",
    fullName: "Sales Force Automation",
    description:
      "The core CRM engine that provides a complete 360-degree view of every customer interaction. Manage contacts, accounts, and deals with intelligent territory management, automated sales sequences, and a unified timeline that captures every touchpoint across the customer journey.",
    features: [
      "360\u00B0 Contact View",
      "Deal Management",
      "Territory Management",
      "Sales Sequences",
    ],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "Freddy AI",
    fullName: "AI-Powered Sales Assistant",
    description:
      "An AI-powered sales assistant that analyzes historical data and engagement patterns to score leads, surface deal insights, and forecast revenue with confidence. Freddy AI helps sales teams focus on the right opportunities at the right time with smart recommendations and predictive analytics.",
    features: [
      "Predictive Lead Scoring",
      "Deal Insights",
      "Sales Forecasting",
      "Smart Recommendations",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Freshsales Suite",
    fullName: "CRM + Marketing Bundle",
    description:
      "A combined sales and marketing platform that unifies customer relationship management with multi-channel marketing automation. Build customer journeys, launch cross-channel campaigns, and attribute revenue to specific marketing efforts for a complete view of the funnel from first touch to closed deal.",
    features: [
      "Unified CRM + Marketing",
      "Customer Journey Builder",
      "Cross-Channel Campaigns",
      "Revenue Attribution",
    ],
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    name: "Email & Phone",
    fullName: "Built-In Communication",
    description:
      "Integrated email and phone capabilities built directly into the CRM so sales reps never have to leave the platform. Two-way email sync keeps conversations in context, while the built-in phone dialer with call recording and voicemail drop enables teams to connect with prospects instantly.",
    features: [
      "Two-Way Email Sync",
      "Built-In Phone Dialer",
      "Email Templates",
      "Call Recording",
    ],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    name: "Workflows",
    fullName: "Sales Automation Engine",
    description:
      "A powerful automation engine that eliminates repetitive manual tasks from the sales process. Configure auto-assignment rules to route leads to the right reps, build multi-step sales sequences for consistent outreach, and set trigger-based actions that keep deals moving through the pipeline.",
    features: [
      "Auto-Assignment Rules",
      "Sales Sequences",
      "Task Automation",
      "Trigger-Based Actions",
    ],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    name: "Analytics",
    fullName: "Sales Intelligence",
    description:
      "Comprehensive reporting and analytics that give sales leaders full visibility into pipeline health, team performance, and revenue trends. Build custom dashboards, track key metrics in real time, and generate detailed reports to make data-driven decisions that accelerate growth.",
    features: [
      "Custom Dashboards",
      "Pipeline Reports",
      "Team Performance",
      "Revenue Analytics",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function CRMPage() {
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
              Customer <span className="gradient-text">Relationship Management</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted leading-relaxed">
              Manage customer interactions, track sales pipelines, and build lasting relationships with Freshsales &mdash; an AI-powered CRM platform that helps teams close deals faster.
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
                The Freshsales <span className="gradient-text">CRM Platform</span>
              </h2>
              <p className="text-muted leading-relaxed text-lg mb-4">
                Freshsales is an AI-powered CRM by Freshworks designed to help sales teams attract, engage, and close deals faster. With built-in email, phone, chat, and AI-powered lead scoring via Freddy AI, Freshsales gives teams everything they need to manage their pipeline and accelerate revenue.
              </p>
              <p className="text-muted leading-relaxed">
                From contact management to deal tracking, Freshsales provides a 360-degree view of every customer interaction &mdash; empowering sales teams with the context and tools they need to build meaningful relationships and drive predictable growth.
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
              A comprehensive set of sales tools designed to help teams manage relationships, automate workflows, and close deals with confidence.
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

      {/* Product Components */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Product <span className="gradient-text">Components</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              The Freshsales CRM platform is comprised of six integrated modules, each designed to address a critical aspect of the sales process.
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
                Powered by <span className="gradient-text">Freshworks</span>
              </p>
              <p className="text-muted text-sm mt-2 max-w-xl mx-auto">
                KPBC partners with Freshworks to deliver enterprise-grade Freshsales CRM solutions built on the proven Freshworks platform.
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
              Ready to Accelerate Your Sales?
            </h2>
            <p className="text-muted max-w-2xl mx-auto mb-8">
              Contact us to schedule a demo and discover how Freshsales CRM can transform your sales operations and drive revenue growth.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-lg hover:opacity-90 transition-opacity glow"
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
