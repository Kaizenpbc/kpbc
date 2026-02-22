"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const capabilities = [
  {
    title: "Cloud PBX",
    description:
      "Replace traditional hardware-based phone systems with a fully cloud-hosted PBX. Set up virtual phone numbers, extensions, and call groups in minutes without any physical infrastructure.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "IVR & Call Routing",
    description:
      "Build multi-level IVR menus and intelligent call routing rules to direct callers to the right team or agent. Configure routing by skill, availability, time of day, or custom business logic.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Call Recording & Monitoring",
    description:
      "Record calls automatically for quality assurance, training, and compliance. Supervisors can monitor live calls, whisper coaching to agents, or barge into conversations when needed.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: "Number Management",
    description:
      "Purchase local, toll-free, and international phone numbers from over 90 countries. Port existing numbers seamlessly and manage your entire number inventory from a centralized dashboard.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Real-Time Call Analytics",
    description:
      "Monitor call volumes, wait times, agent availability, and service levels with live dashboards. Track call metrics and performance trends to optimize staffing and improve customer experience.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Integration & APIs",
    description:
      "Integrate Freshcaller with your CRM, helpdesk, and business tools for seamless workflows. Open APIs and pre-built integrations with Freshdesk, Freshsales, and third-party platforms.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
];

const components = [
  {
    name: "Cloud PBX",
    fullName: "Virtual Phone System",
    description:
      "A fully hosted, enterprise-grade cloud phone system that eliminates the need for traditional PBX hardware. Set up virtual extensions, call queues, and business hours in minutes with an intuitive admin portal. Cloud PBX scales instantly as your team grows, supporting remote and distributed workforces with the same call quality as on-premises systems.",
    features: [
      "Zero-Hardware Setup",
      "Virtual Extensions & Groups",
      "Business Hours & Holidays",
      "Auto-Scaling Infrastructure",
    ],
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    name: "Smart Routing",
    fullName: "Intelligent Call Routing",
    description:
      "An advanced call routing engine that directs incoming calls to the most appropriate agent or team based on configurable rules. Support skill-based routing, round-robin distribution, and time-based rules. Multi-level IVR menus guide callers through self-service options before connecting them with live agents, reducing wait times and improving first-call resolution.",
    features: [
      "Skill-Based Routing",
      "Multi-Level IVR Builder",
      "Queue Management",
      "Time-Based Routing Rules",
    ],
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    name: "Call Center",
    fullName: "Contact Center Solution",
    description:
      "A full-featured inbound and outbound contact center solution built for modern support and sales teams. Features include call queuing, warm and cold transfers, conference calling, after-call work management, and supervisor controls. Agents get a unified desktop with caller context, interaction history, and CRM data to deliver personalized phone experiences.",
    features: [
      "Inbound & Outbound Calling",
      "Call Queuing & Transfers",
      "Agent Desktop with Context",
      "Supervisor Monitoring & Barge",
    ],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    name: "Voicebot",
    fullName: "AI Voice Assistant",
    description:
      "An AI-powered voice assistant that handles routine phone inquiries using natural language understanding. Voicebot can answer FAQs, collect caller information, verify identities, and route calls intelligently &mdash; all without human intervention. For complex requests, it seamlessly transfers to a live agent with complete conversation context preserved.",
    features: [
      "Natural Language Understanding",
      "Automated Call Handling",
      "Smart Agent Handoff",
      "Continuous Learning & Improvement",
    ],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "Analytics",
    fullName: "Call Intelligence",
    description:
      "A powerful analytics and reporting platform that provides real-time visibility into call center operations and agent performance. Track KPIs including average handle time, first-call resolution, abandonment rate, and service level adherence. Customizable dashboards and scheduled reports empower managers to make data-driven decisions for staffing, training, and process improvement.",
    features: [
      "Live Call Dashboard",
      "Historical Trend Reports",
      "Agent Scorecards",
      "Custom KPI Tracking",
    ],
    gradient: "from-orange-500 to-amber-500",
  },
];

export default function PhonePage() {
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
              Cloud Phone <span className="gradient-text">System</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted leading-relaxed">
              Set up a modern cloud phone system in minutes with Freshcaller &mdash; no hardware, no downloads, just seamless business communications.
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
                The Freshcaller <span className="gradient-text">Phone Platform</span>
              </h2>
              <p className="text-muted leading-relaxed text-lg mb-4">
                Freshcaller is Freshworks&apos; cloud-based phone system designed for modern businesses. With no hardware requirements and plug-and-play setup, Freshcaller provides enterprise-grade calling capabilities including IVR, call routing, recording, and real-time analytics.
              </p>
              <p className="text-muted leading-relaxed">
                Whether for sales outreach or customer support, Freshcaller enables teams to make and receive calls from anywhere with crystal-clear quality.
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
              Enterprise-grade phone system capabilities powered by Freshcaller to help your team communicate with customers effortlessly.
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
              The Freshcaller platform is comprised of five integrated components, each designed to address a critical aspect of cloud phone communications.
            </p>
          </AnimatedSection>

          <div className="space-y-10">
            {components.map((component, i) => (
              <AnimatedSection key={component.name} delay={i * 0.05}>
                <div className="rounded-2xl bg-background border border-surface-light overflow-hidden">
                  <div className={`h-1.5 bg-gradient-to-r ${component.gradient}`} />
                  <div className="p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row gap-8">
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
                KPBC partners with Freshworks to deliver enterprise-grade cloud phone solutions built on the proven Freshcaller platform.
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
              Ready to Modernize Your Phone System?
            </h2>
            <p className="text-muted max-w-2xl mx-auto mb-8">
              Contact us to schedule a demo and discover how Freshcaller can transform your organization&apos;s business communications.
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
