"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const capabilities = [
  {
    title: "Retail & Corporate Banking",
    description:
      "Comprehensive modules for savings, current accounts, fixed deposits, recurring deposits, loans, and corporate banking services on a single unified platform.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    title: "Multi-Currency & Multi-Lingual",
    description:
      "Full support for multi-currency transactions, multi-lingual interfaces, and multi-branch operations to serve diverse markets and geographies.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "KYC, AML & Compliance",
    description:
      "Built-in compliance automation for KYC verification, anti-money laundering checks, and statutory reporting to meet regulatory requirements across jurisdictions.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "360° Customer View",
    description:
      "Unified customer information file (CIF) with complete KYC integration, providing a holistic view of every customer relationship, account, and transaction history.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Treasury & Trade Finance",
    description:
      "Integrated treasury management and trade finance modules for foreign exchange, money market operations, letters of credit, and guarantees.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Digital Banking & Payments",
    description:
      "API-driven architecture enabling seamless integration with digital banking channels, payment gateways, mobile banking, and third-party fintech services.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const modules = [
  {
    name: "Deposits Module",
    fullName: "Savings, Current & Term Deposits",
    description:
      "Comprehensive deposit product management covering savings accounts, current accounts, fixed deposits, and recurring deposits. Configurable interest calculation, auto-renewal, and maturity processing with full audit trails.",
    features: [
      "Flexible Product Configuration",
      "Auto Interest Calculation",
      "Maturity & Renewal Processing",
      "Standing Instructions",
    ],
    gradient: "from-slate-500 to-zinc-600",
  },
  {
    name: "Loans Module",
    fullName: "Loan Origination & Management",
    description:
      "End-to-end loan lifecycle management from origination through disbursement to repayment. Support for retail, corporate, and microfinance lending with configurable repayment schedules, collateral management, and NPA tracking.",
    features: [
      "Loan Product Configuration",
      "Collateral & Security Management",
      "Repayment Schedule Engine",
      "NPA Classification & Provisioning",
    ],
    gradient: "from-zinc-600 to-slate-700",
  },
  {
    name: "General Ledger",
    fullName: "Financial Accounting & Reporting",
    description:
      "Robust financial accounting engine with automated journal entries, profit center accounting, and comprehensive financial reporting. Generate balance sheets, P&L statements, and regulatory reports with configurable chart of accounts.",
    features: [
      "Automated Journal Entries",
      "Profit Center Accounting",
      "Regulatory Reporting",
      "Configurable Chart of Accounts",
    ],
    gradient: "from-slate-600 to-gray-600",
  },
  {
    name: "Risk & Compliance",
    fullName: "Risk Management & Regulatory Compliance",
    description:
      "Integrated risk management framework with credit risk assessment, market risk monitoring, and operational risk controls. Automated regulatory compliance reporting, AML screening, and audit trail management.",
    features: [
      "Credit Risk Assessment",
      "AML & Transaction Monitoring",
      "Regulatory Report Generation",
      "Comprehensive Audit Trails",
    ],
    gradient: "from-gray-500 to-slate-500",
  },
];

export default function CBSPage() {
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
              Core Banking <span className="gradient-text">Software</span>
            </h1>
            <p className="text-2xl font-semibold text-heading mb-2">TrustBankCBS&#8482;</p>
            <p className="text-lg sm:text-xl text-muted leading-relaxed">
              Secure. Scalable. Unified. &mdash; A robust core banking solution by Trust Fintech Limited for financial institutions and banks of all sizes.
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
                The TrustBankCBS&#8482; <span className="gradient-text">Platform</span>
              </h2>
              <p className="text-muted leading-relaxed text-lg mb-4">
                TrustBankCBS&#8482; is a secure and robust core banking solution that operates as a web-based, on-premises application or SaaS offering. The platform provides integrated banking modules on a unified system with an API-driven architecture enabling flexible customization and seamless third-party integration.
              </p>
              <p className="text-muted leading-relaxed">
                Designed for co-operative banks, commercial banks, MFIs, small finance banks, NBFCs, credit unions, and offshore banking institutions, TrustBankCBS&#8482; delivers comprehensive 360-degree customer views, built-in compliance capabilities, and business intelligence for data-driven decisions.
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
              A comprehensive suite of banking capabilities to power every aspect of your financial institution.
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

      {/* Core Modules */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Core <span className="gradient-text">Modules</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              TrustBankCBS&#8482; is comprised of integrated modules designed to address every aspect of banking operations.
            </p>
          </AnimatedSection>

          <div className="space-y-10">
            {modules.map((mod, i) => (
              <AnimatedSection key={mod.name} delay={i * 0.05}>
                <div className="rounded-2xl bg-background border border-surface-light overflow-hidden">
                  <div className={`h-1.5 bg-gradient-to-r ${mod.gradient}`} />
                  <div className="p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${mod.gradient} flex items-center justify-center`}>
                            <span className="text-sm font-bold text-white">
                              {mod.name.split(" ")[0][0]}{mod.name.split(" ")[1]?.[0] || ""}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-heading">{mod.name}</h3>
                            <p className="text-muted text-sm">{mod.fullName}</p>
                          </div>
                        </div>
                        <p className="text-muted leading-relaxed mt-4">{mod.description}</p>
                      </div>
                      <div className="lg:w-72 flex-shrink-0">
                        <h4 className="text-sm font-semibold text-heading uppercase tracking-wider mb-3">Highlights</h4>
                        <div className="space-y-2.5">
                          {mod.features.map((feature) => (
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
                Powered by <span className="gradient-text">Trust Fintech Limited</span>
              </p>
              <p className="text-muted text-sm mt-2 max-w-xl mx-auto">
                KPBC partners with Trust Fintech Limited to deliver enterprise-grade core banking solutions built on the proven TrustBankCBS&#8482; platform.
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
              Ready to Modernize Your Banking?
            </h2>
            <p className="text-muted max-w-2xl mx-auto mb-8">
              Contact us to schedule a demo and discover how TrustBankCBS&#8482; can transform your financial institution&apos;s operations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-slate-500 to-zinc-600 text-white font-semibold text-lg hover:opacity-90 transition-opacity glow"
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
