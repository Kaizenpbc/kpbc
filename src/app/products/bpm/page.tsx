"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const capabilities = [
  {
    title: "Visual Workflow Designer",
    description:
      "Intuitive drag-and-drop interface for designing complex business workflows without writing code. Map processes visually and deploy them instantly.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
  },
  {
    title: "Automated Approval Routing",
    description:
      "Streamline multi-level approvals with conditional routing, parallel approvals, and escalation rules that keep processes moving efficiently.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Task & SLA Management",
    description:
      "Assign, track, and manage tasks with built-in SLA monitoring. Automatic escalations and notifications ensure deadlines are met consistently.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Real-Time Process Analytics",
    description:
      "Gain deep insights into process performance with live dashboards, bottleneck detection, and trend analysis to drive continuous improvement.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Integration Framework",
    description:
      "Connect seamlessly with ERP, CRM, HRMS, and other enterprise systems through pre-built connectors and robust REST APIs.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    title: "Configurable Business Rules",
    description:
      "Define and manage complex business rules without code changes. Dynamic rule evaluation ensures processes adapt to changing business conditions.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const components = [
  {
    name: "Process Designer",
    fullName: "Visual Process Design Studio",
    description:
      "A powerful visual modeling environment for designing, simulating, and deploying business processes. Drag-and-drop workflow elements, define conditions and branching logic, and preview process flows before going live &mdash; all without writing a single line of code.",
    features: [
      "Drag-and-Drop Workflow Builder",
      "Process Simulation & Testing",
      "Template Library & Reusable Patterns",
      "Version Control & Change History",
    ],
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    name: "Rules Engine",
    fullName: "Business Rules Management System",
    description:
      "A centralized rules management engine that separates business logic from application code. Define, test, and deploy complex decision rules and policies that govern how processes behave under varying conditions, enabling rapid adaptation to new requirements.",
    features: [
      "Visual Rule Builder",
      "Decision Tables & Trees",
      "Rule Versioning & Rollback",
      "Real-Time Rule Evaluation",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Forms Builder",
    fullName: "Dynamic Forms & Data Capture",
    description:
      "Create sophisticated digital forms with dynamic fields, conditional logic, and data validation. Build forms that adapt to user input in real time, capture structured data, and feed it directly into automated workflows for immediate processing.",
    features: [
      "Drag-and-Drop Form Designer",
      "Conditional Logic & Validation",
      "Multi-Step & Wizard Forms",
      "Data Pre-Population & Lookups",
    ],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    name: "Analytics Dashboard",
    fullName: "Process Intelligence & Reporting",
    description:
      "Comprehensive analytics and reporting platform that provides real-time visibility into process performance. Monitor KPIs, identify bottlenecks, track SLA compliance, and generate actionable insights to drive continuous process improvement across the organization.",
    features: [
      "Real-Time Process Monitoring",
      "KPI Dashboards & Scorecards",
      "Bottleneck Detection & Alerts",
      "Custom Reports & Export",
    ],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "Integration Hub",
    fullName: "Enterprise Integration Platform",
    description:
      "A robust integration layer that connects your BPM platform with existing enterprise systems. Pre-built connectors for popular applications, RESTful APIs, and webhook support ensure seamless data flow across your entire technology ecosystem.",
    features: [
      "Pre-Built Enterprise Connectors",
      "RESTful API & Webhook Support",
      "Data Mapping & Transformation",
      "Event-Driven Integration",
    ],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    name: "Mobile Workflow",
    fullName: "Mobile Process Management",
    description:
      "Extend your business processes to mobile devices with a responsive, touch-optimized interface. Approve requests, complete tasks, and monitor process status on the go with push notifications and offline capability for uninterrupted productivity.",
    features: [
      "Mobile Task Management",
      "One-Tap Approvals",
      "Push Notifications & Alerts",
      "Offline Mode & Sync",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function BPMPage() {
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
              Business Process <span className="gradient-text">Management</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted leading-relaxed">
              Automate. Optimize. Transform. &mdash; Powerful BPM solutions to design, automate, and optimize your business workflows for maximum efficiency.
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
                Intelligent <span className="gradient-text">Process Automation</span>
              </h2>
              <p className="text-muted leading-relaxed text-lg mb-4">
                Our Business Process Management platform empowers organizations to design, automate, and continuously optimize their business workflows. From simple approval routing to complex multi-department processes, the BPM suite streamlines operations, reduces manual tasks, and eliminates bottlenecks that slow your business down.
              </p>
              <p className="text-muted leading-relaxed">
                With real-time tracking and analytics, gain complete visibility into every process across your organization. Monitor performance, identify improvement opportunities, and make data-driven decisions that transform how your teams work &mdash; delivering measurable results from day one.
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
              A comprehensive suite of capabilities designed to automate and optimize every aspect of your business processes.
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
              The BPM platform is comprised of six integrated components, each designed to address a specific aspect of business process management.
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
                KPBC partners with Acyutah Technologies to deliver enterprise-grade BPM solutions built on a proven process automation platform.
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
              Ready to Optimize Your Processes?
            </h2>
            <p className="text-muted max-w-2xl mx-auto mb-8">
              Contact us to schedule a demo and discover how our BPM platform can automate and transform your organization&apos;s workflows.
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
