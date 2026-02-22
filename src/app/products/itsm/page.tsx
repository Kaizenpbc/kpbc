"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const capabilities = [
  {
    title: "Incident Management",
    description:
      "Streamlined incident logging, categorization, prioritization, and resolution with SLA tracking and automated escalation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: "Problem Management",
    description:
      "Identify root causes, link related incidents, and implement permanent fixes with structured problem analysis workflows.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
  },
  {
    title: "Change Management",
    description:
      "Plan, approve, and implement changes with risk assessment, CAB approvals, and rollback procedures.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Asset Management (ITAM)",
    description:
      "Track IT assets throughout their lifecycle from procurement to disposal with auto-discovery and software license management.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Configuration Management (CMDB)",
    description:
      "Map relationships between infrastructure components to understand impact and dependencies for better decision-making.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    title: "Self-Service Portal",
    description:
      "Empower employees with a branded service catalog, knowledge base, and AI-powered chatbot for instant resolution.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const components = [
  {
    name: "Service Desk",
    fullName: "IT Service Desk",
    description:
      "The central hub for IT support that streamlines ticket management from creation to resolution. Equipped with SLA management, a dedicated agent workspace, and canned responses, the Service Desk ensures IT teams can handle incidents efficiently while maintaining service quality standards.",
    features: [
      "Ticket Management",
      "SLA Management",
      "Agent Workspace",
      "Canned Responses",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Freddy AI",
    fullName: "AI-Powered IT Assistant",
    description:
      "An AI-powered IT assistant that automatically triages incoming tickets, suggests resolutions based on historical data, and provides a virtual agent for employees to get instant answers. Freddy AI uses predictive analytics to identify trends and prevent issues before they impact the business.",
    features: [
      "Auto-Ticket Triage",
      "Resolution Suggestions",
      "Virtual Agent",
      "Predictive Analytics",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "ITOM",
    fullName: "IT Operations Management",
    description:
      "Monitor and manage IT infrastructure health from a single pane of glass. ITOM provides alert management, real-time health dashboards, orchestration capabilities, and cloud management tools to ensure optimal performance and rapid response to operational issues.",
    features: [
      "Alert Management",
      "Health Dashboard",
      "Orchestration",
      "Cloud Management",
    ],
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    name: "Project Management",
    fullName: "IT Project Management",
    description:
      "Plan and execute IT projects with integrated project management capabilities. From waterfall to agile methodologies, teams can create project plans, manage tasks with sprint boards, allocate resources effectively, and track progress alongside day-to-day service operations.",
    features: [
      "Project Planning",
      "Task Management",
      "Sprint Boards",
      "Resource Allocation",
    ],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    name: "Service Catalog",
    fullName: "Employee Service Catalog",
    description:
      "A self-service portal that empowers employees to browse and request IT services without contacting the help desk. Customizable request forms, multi-level approval workflows, an integrated knowledge base, and organized service categories make it easy for employees to get what they need.",
    features: [
      "Service Request Forms",
      "Approval Workflows",
      "Knowledge Base",
      "Service Categories",
    ],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    name: "Analytics",
    fullName: "IT Analytics & Reporting",
    description:
      "Comprehensive analytics and reporting that give IT leaders deep visibility into service desk performance, ticket trends, and team efficiency. Build custom dashboards, analyze SLA compliance, monitor customer satisfaction scores, and identify areas for continuous improvement.",
    features: [
      "Custom Dashboards",
      "Trend Analysis",
      "SLA Reports",
      "CSAT Surveys",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function ITSMPage() {
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
              IT Service <span className="gradient-text">Management</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted leading-relaxed">
              Deliver exceptional IT service with Freshservice &mdash; an intelligent, ITIL-aligned ITSM platform that streamlines IT operations and enhances employee experience.
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
                The Freshservice <span className="gradient-text">ITSM Platform</span>
              </h2>
              <p className="text-muted leading-relaxed text-lg mb-4">
                Freshservice is Freshworks&apos; AI-powered IT service management platform built on ITIL best practices. It provides a modern, intuitive solution for managing IT services, assets, and operations.
              </p>
              <p className="text-muted leading-relaxed">
                With Freddy AI, automated workflows, and a powerful CMDB, Freshservice helps IT teams resolve issues faster, manage changes with confidence, and deliver exceptional service to employees across the organization.
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
              ITIL-aligned capabilities designed to streamline IT operations, reduce downtime, and deliver outstanding service to every employee.
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
              The Freshservice ITSM platform is comprised of six integrated modules, each designed to address a critical aspect of IT service delivery.
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
                KPBC partners with Freshworks to deliver enterprise-grade Freshservice ITSM solutions built on the proven Freshworks platform.
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
              Ready to Transform Your IT Service?
            </h2>
            <p className="text-muted max-w-2xl mx-auto mb-8">
              Contact us to schedule a demo and discover how Freshservice ITSM can modernize your IT operations and elevate employee experience.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-lg hover:opacity-90 transition-opacity glow"
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
