"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const capabilities = [
  {
    title: "AI-Powered Task Scheduling",
    description:
      "Automatically generate optimized project schedules based on task dependencies, team capacity, and historical performance data. The AI adjusts timelines dynamically as conditions change.",
    icon: (
      <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Risk Prediction & Mitigation",
    description:
      "Proactively identify project risks using machine learning models trained on thousands of project outcomes. Get early warnings and AI-recommended mitigation strategies before issues escalate.",
    icon: (
      <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: "Automated Status Reporting",
    description:
      "Generate comprehensive project status reports automatically. The AI summarizes progress, highlights blockers, and provides stakeholder-ready updates without manual effort.",
    icon: (
      <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Resource Optimization",
    description:
      "Intelligently allocate team members across projects based on skills, availability, and workload. The AI balances utilization to prevent burnout while maximizing productivity.",
    icon: (
      <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Sprint Planning & Forecasting",
    description:
      "AI-assisted sprint planning that analyzes team velocity, story point estimates, and historical delivery patterns to forecast realistic sprint commitments and release dates.",
    icon: (
      <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Stakeholder Communication",
    description:
      "AI-drafted communications tailored to different stakeholder audiences. From executive summaries to technical updates, ensure the right information reaches the right people at the right time.",
    icon: (
      <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

const components = [
  {
    step: "1",
    name: "Plan",
    fullName: "Intelligent Project Planning",
    description:
      "Define project scope, objectives, and deliverables. The AI analyzes similar past projects to suggest realistic timelines, resource requirements, and potential risks before work even begins.",
    features: [
      "Scope & Objective Definition",
      "AI-Suggested Timelines",
      "Resource Requirements Analysis",
      "Risk Pre-Assessment",
    ],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    step: "2",
    name: "Execute",
    fullName: "Smart Execution Tracking",
    description:
      "Monitor project progress in real-time with AI-powered dashboards that highlight deviations from the plan, predict delays, and suggest corrective actions before deadlines are at risk.",
    features: [
      "Real-Time Progress Tracking",
      "Deviation Detection",
      "Delay Prediction",
      "Corrective Action Suggestions",
    ],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    step: "3",
    name: "Optimize",
    fullName: "Continuous AI Optimization",
    description:
      "The AI continuously learns from project data to improve estimates, identify process bottlenecks, and recommend workflow improvements. Each project makes the next one more efficient.",
    features: [
      "Estimate Accuracy Improvement",
      "Bottleneck Identification",
      "Workflow Recommendations",
      "Performance Benchmarking",
    ],
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    step: "4",
    name: "Deliver",
    fullName: "Confident Project Delivery",
    description:
      "Ensure successful project delivery with AI-generated retrospectives, lessons learned documentation, and knowledge capture that feeds back into future project planning.",
    features: [
      "AI-Generated Retrospectives",
      "Lessons Learned Capture",
      "Knowledge Base Building",
      "Success Metrics Reporting",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
];

export default function AIPMPage() {
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
              <svg className="w-4 h-4 mr-1" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Products
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              AI Project Management <span className="gradient-text">Assistant</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted leading-relaxed">
              Plan. Track. Deliver. &mdash; Your AI-powered partner for smarter project planning, execution, and delivery.
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
                Projects Delivered <span className="gradient-text">Smarter</span>
              </h2>
              <p className="text-muted leading-relaxed text-lg mb-4">
                Managing complex projects across distributed teams requires more than spreadsheets and status meetings. Our AI Project Management Assistant learns from your organization&apos;s project history to provide intelligent scheduling, proactive risk management, and automated reporting that keeps everyone aligned.
              </p>
              <p className="text-muted leading-relaxed">
                Whether you&apos;re running agile sprints, waterfall projects, or hybrid methodologies &mdash; the AI assistant adapts to your workflow and continuously improves its recommendations based on actual outcomes.
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
              A comprehensive AI toolkit to plan, execute, and deliver projects with confidence.
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

      {/* How It Works */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Four phases of AI-assisted project management from planning to delivery.
            </p>
          </AnimatedSection>

          <div className="space-y-10">
            {components.map((s, i) => (
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
                        <ul className="space-y-2.5">
                          {s.features.map((feature) => (
                            <li key={feature} className="flex items-center text-sm text-muted">
                              <svg className="w-4 h-4 text-accent mr-3 flex-shrink-0" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Ready to Deliver Projects Smarter?
            </h2>
            <p className="text-muted max-w-2xl mx-auto mb-8">
              Contact us to learn how our AI Project Management Assistant can help your team deliver on time and on budget.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold text-lg hover:opacity-90 transition-opacity glow"
            >
              Get Started
              <svg className="ml-2 w-5 h-5" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
