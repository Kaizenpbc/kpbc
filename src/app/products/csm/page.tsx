"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const capabilities = [
  {
    title: "Ticket Management",
    description:
      "Streamline support operations with intelligent ticket creation, categorization, and prioritization. Automatically assign tickets to the right agents based on skill, workload, and availability.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    ),
  },
  {
    title: "Omnichannel Support",
    description:
      "Unify customer conversations across email, chat, phone, social media, and messaging apps in a single workspace. Deliver consistent support experiences regardless of the channel customers choose.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Automation",
    description:
      "Leverage Freddy AI to automate repetitive tasks, suggest responses, and predict ticket fields. Reduce resolution times and free agents to focus on complex customer issues.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Knowledge Base",
    description:
      "Build a comprehensive self-service portal with articles, FAQs, and solution guides. Empower customers to find answers independently and reduce ticket volume significantly.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "SLA & Escalation Management",
    description:
      "Define service level agreements with automatic escalation rules and reminders. Ensure no ticket falls through the cracks and maintain accountability across the support team.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Customer Satisfaction Analytics",
    description:
      "Track CSAT scores, response times, and agent performance with real-time dashboards. Gain actionable insights to continuously improve the quality of your customer service operations.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const components = [
  {
    name: "Freshdesk",
    fullName: "AI-Powered Helpdesk",
    description:
      "The core helpdesk platform that centralizes all customer support interactions in one place. Freshdesk provides intelligent ticket management, team collaboration tools, and automation workflows that help support teams resolve issues efficiently. With a clean, intuitive interface and powerful customization options, it scales from small teams to enterprise operations.",
    features: [
      "Unified Ticket Inbox",
      "Team Collaboration Tools",
      "Custom Ticket Fields & Workflows",
      "Multi-Brand & Multi-Product Support",
    ],
    gradient: "from-rose-500 to-pink-500",
  },
  {
    name: "Freddy AI",
    fullName: "AI Support Assistant",
    description:
      "Freshworks&apos; built-in AI engine that supercharges support operations with intelligent automation. Freddy AI can auto-suggest ticket fields, recommend solutions to agents, and power chatbots that handle common queries without human intervention. It continuously learns from your support data to improve accuracy and relevance over time.",
    features: [
      "AI-Powered Chatbots",
      "Auto Ticket Classification",
      "Smart Response Suggestions",
      "Predictive Analytics",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Omnichannel",
    fullName: "Unified Support Channels",
    description:
      "A comprehensive channel management module that brings email, live chat, phone, social media, WhatsApp, and web forms into a single conversational interface. Agents can switch between channels seamlessly without losing context, ensuring customers receive consistent, high-quality support no matter how they reach out.",
    features: [
      "Email & Web Form Integration",
      "Social Media Support",
      "WhatsApp & Messaging Apps",
      "Unified Agent Workspace",
    ],
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    name: "Knowledge Base",
    fullName: "Self-Service Portal",
    description:
      "A robust self-service solution that empowers customers to find answers on their own through well-organized articles, FAQs, and community forums. The knowledge base integrates directly with the helpdesk, allowing agents to link relevant articles to tickets and enabling AI-powered article suggestions for customers.",
    features: [
      "Searchable Article Repository",
      "Community Forums",
      "Multilingual Support",
      "SEO-Optimized Content",
    ],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "Analytics",
    fullName: "Support Intelligence",
    description:
      "A powerful analytics and reporting engine that provides deep visibility into support team performance, customer satisfaction trends, and operational efficiency. With pre-built dashboards and custom report builders, managers can track KPIs like first response time, resolution rate, and CSAT scores to make data-driven improvements.",
    features: [
      "Real-Time Dashboards",
      "Custom Report Builder",
      "Agent Performance Tracking",
      "CSAT & NPS Analytics",
    ],
    gradient: "from-orange-500 to-amber-500",
  },
];

export default function CSMPage() {
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
              Customer Service <span className="gradient-text">Management</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted leading-relaxed">
              Deliver exceptional customer support across every channel with Freshdesk &mdash; an AI-powered helpdesk platform that makes customer service effortless.
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
                The Freshdesk <span className="gradient-text">Support Platform</span>
              </h2>
              <p className="text-muted leading-relaxed text-lg mb-4">
                Freshdesk is Freshworks&apos; flagship customer service platform that helps businesses deliver outstanding support experiences. With AI-powered ticket management, omnichannel communication, and intelligent automation, Freshdesk enables support teams to resolve issues faster and keep customers happy.
              </p>
              <p className="text-muted leading-relaxed">
                From email and chat to phone and social media, Freshdesk unifies all customer conversations in one intuitive workspace.
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
              Comprehensive customer service capabilities powered by Freshdesk to help your team deliver world-class support.
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
              The Freshdesk platform is comprised of five integrated components, each designed to address a critical aspect of customer service management.
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
                KPBC partners with Freshworks to deliver enterprise-grade customer service solutions built on the proven Freshdesk platform.
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
              Ready to Elevate Your Customer Service?
            </h2>
            <p className="text-muted max-w-2xl mx-auto mb-8">
              Contact us to schedule a demo and discover how Freshdesk can transform your organization&apos;s customer support operations.
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
