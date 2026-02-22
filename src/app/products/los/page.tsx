"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const capabilities = [
  {
    title: "Pre-Configured Loan Workflows",
    description:
      "Ready-to-use workflows for retail and corporate loans that automate the entire lending process from application intake through credit appraisal to disbursement.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
  },
  {
    title: "Credit Scoring & Eligibility",
    description:
      "Automated credit scoring engine with configurable eligibility computation, risk-based pricing, and uniform credit appraisal techniques across all branches.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "KYC & Credit Bureau Integration",
    description:
      "Seamless integration with credit bureaus and E-KYC systems for real-time verification, PAN validation, and comprehensive applicant background checks.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Document Management",
    description:
      "Secure document storage, retrieval, and management system for loan applications, supporting documents, and compliance records with role-based access controls.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Mobile Access",
    description:
      "Mobile-based access for applicants and management, enabling 24/7 online loan applications, real-time status tracking, and document uploads from anywhere.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Core Banking Integration",
    description:
      "Seamless integration with core banking systems for automated account creation, disbursement processing, and repayment tracking across the loan lifecycle.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
];

const stages = [
  {
    step: "1",
    name: "Application",
    fullName: "Loan Application & Intake",
    description:
      "Applicants submit loan requests through web or mobile channels with guided forms, EMI calculators, and eligibility checks. The system captures all required information and documents in a structured digital format.",
    features: [
      "Online & Mobile Application",
      "EMI Calculator & Eligibility Check",
      "Document Upload & Verification",
      "Application Status Tracking",
    ],
    gradient: "from-yellow-600 to-amber-500",
  },
  {
    step: "2",
    name: "Appraisal",
    fullName: "Credit Appraisal & Scoring",
    description:
      "Automated credit assessment with configurable scoring models, credit bureau integration, and risk evaluation. The system applies uniform appraisal techniques and generates comprehensive risk reports for decision-makers.",
    features: [
      "Automated Credit Scoring",
      "Credit Bureau Verification",
      "Risk Assessment Reports",
      "Collateral Valuation",
    ],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    step: "3",
    name: "Approval",
    fullName: "Hierarchical Approval & Sanctions",
    description:
      "Role-based approval routing with configurable authorization hierarchies and delegation rules. Multi-level approvals with automated escalation ensure timely processing while maintaining compliance controls.",
    features: [
      "Multi-Level Approval Routing",
      "Delegation & Escalation Rules",
      "Conditional Sanctions",
      "Audit Trail & Compliance",
    ],
    gradient: "from-orange-500 to-red-500",
  },
  {
    step: "4",
    name: "Disbursement",
    fullName: "Disbursement & Account Setup",
    description:
      "Automated disbursement processing with core banking integration for seamless account creation, fund transfer, and repayment schedule generation. Configurable charge engine handles all service fees automatically.",
    features: [
      "Automated Fund Disbursement",
      "Repayment Schedule Generation",
      "Service Charge Configuration",
      "Core Banking Integration",
    ],
    gradient: "from-red-500 to-rose-500",
  },
];

export default function LOSPage() {
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
              Loan Origination <span className="gradient-text">Software</span>
            </h1>
            <p className="text-2xl font-semibold text-heading mb-2">TrustLOS&#8482;</p>
            <p className="text-lg sm:text-xl text-muted leading-relaxed">
              Apply. Approve. Disburse. &mdash; A web- and mobile-based loan origination system by Trust Fintech Limited that reduces turnaround time by up to 50%.
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
                The TrustLOS&#8482; <span className="gradient-text">Platform</span>
              </h2>
              <p className="text-muted leading-relaxed text-lg mb-4">
                TrustLOS&#8482; is a comprehensive loan origination system that enables financial institutions to streamline their entire lending operations. With 24/7 online access for loan applications, real-time status tracking, and integrated document management, the platform automates credit department processes and loan appraisal workflows.
              </p>
              <p className="text-muted leading-relaxed">
                From application intake to disbursement, TrustLOS&#8482; supports uniform credit appraisal techniques across branches, integrates seamlessly with credit bureaus and core banking systems, and provides mobile-based access for applicants and management alike.
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
              A complete suite of tools to automate and optimize every stage of the loan origination process.
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

      {/* Loan Lifecycle */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Loan <span className="gradient-text">Lifecycle</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              TrustLOS&#8482; automates the complete loan lifecycle from application through disbursement.
            </p>
          </AnimatedSection>

          <div className="space-y-10">
            {stages.map((s, i) => (
              <AnimatedSection key={s.name} delay={i * 0.05}>
                <div className="rounded-2xl bg-background border border-surface-light overflow-hidden">
                  <div className={`h-1.5 bg-gradient-to-r ${s.gradient}`} />
                  <div className="p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center`}>
                            <span className="text-lg font-bold text-white">{s.step}</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-heading">{s.name}</h3>
                            <p className="text-muted text-sm">{s.fullName}</p>
                          </div>
                        </div>
                        <p className="text-muted leading-relaxed mt-4">{s.description}</p>
                      </div>
                      <div className="lg:w-72 flex-shrink-0">
                        <h4 className="text-sm font-semibold text-heading uppercase tracking-wider mb-3">Highlights</h4>
                        <div className="space-y-2.5">
                          {s.features.map((feature) => (
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
                KPBC partners with Trust Fintech Limited to deliver enterprise-grade loan origination solutions built on the proven TrustLOS&#8482; platform.
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
              Ready to Streamline Your Lending?
            </h2>
            <p className="text-muted max-w-2xl mx-auto mb-8">
              Contact us to schedule a demo and discover how TrustLOS&#8482; can transform your loan origination process.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-600 to-amber-500 text-white font-semibold text-lg hover:opacity-90 transition-opacity glow"
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
