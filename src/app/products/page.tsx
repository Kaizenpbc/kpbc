"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const products = [
  {
    id: "ecm",
    abbr: "ECM",
    name: "ECM \u2014 FineDocs\u2122",
    tagline: "Capture. Manage. Deliver.",
    description: "A comprehensive enterprise content management platform that helps organizations capture, manage, store, and deliver content and documents related to organizational processes. Powered by Acyutah Technologies' FineDocs platform, our ECM solution streamlines document workflows and ensures compliance with built-in version control, records management, and access controls.",
    features: [
      "Document & Records Management",
      "Workflow & Business Process Automation",
      "Advanced Capture & OCR",
      "Enterprise Search & Retrieval",
      "Web Portal & Collaboration",
      "Cloud & Mobile Access",
    ],
    gradient: "from-blue-500 to-cyan-500",
    demoLink: "/products/ecm",
  },
  {
    id: "bpm",
    abbr: "BPM",
    name: "BPM \u2014 FineFlow\u2122",
    tagline: "Automate. Optimize. Transform.",
    description: "A powerful business process management solution powered by Acyutah Technologies\u2019 FineFlow\u2122 platform. Design, automate, and optimize your workflows with an intuitive visual process designer. Streamline approvals, reduce manual tasks, and gain full visibility into your business processes with real-time tracking and analytics.",
    features: [
      "Visual Workflow Designer",
      "Automated Approval Routing",
      "Task & SLA Management",
      "Real-Time Process Analytics",
      "Integration with Enterprise Systems",
      "Configurable Business Rules",
    ],
    gradient: "from-indigo-500 to-blue-500",
    demoLink: "/products/bpm",
  },
  {
    id: "lms",
    abbr: "LMS",
    name: "Learning Management System",
    tagline: "Learn. Grow. Excel.",
    description: "A powerful learning platform designed to deliver, manage, and track educational content and training programs. Whether for corporate training or academic institutions, our LMS provides an engaging and effective learning experience.",
    features: [
      "Course Creation & Management",
      "Interactive Learning Modules",
      "Progress Tracking & Analytics",
      "Assessment & Certification",
      "Mobile-Friendly Interface",
      "SCORM & xAPI Compliance",
    ],
    gradient: "from-violet-500 to-purple-500",
    demoLink: "/products/lms",
  },
  {
    id: "crm",
    abbr: "CRM",
    name: "Customer Relationship Management",
    tagline: "Connect. Engage. Grow.",
    description: "An AI-powered CRM platform built on Freshsales that helps you manage customer interactions, track sales pipelines, and build lasting relationships. With Freddy AI for lead scoring, multichannel communication, and intelligent automation, drive revenue growth at scale.",
    features: [
      "AI-Powered Lead Scoring",
      "Sales Pipeline Management",
      "Multichannel Communication",
      "Workflow Automation",
      "Analytics & Reporting",
      "Freddy AI Insights",
    ],
    gradient: "from-emerald-500 to-teal-500",
    demoLink: "/products/crm",
  },
  {
    id: "sis",
    abbr: "SIS",
    name: "Student Information System",
    tagline: "Manage. Track. Succeed.",
    description: "A comprehensive student information system designed for educational institutions. Manage student enrollment, academic records, attendance, grading, and more in a single unified platform that simplifies administrative processes.",
    features: [
      "Student Enrollment & Registration",
      "Academic Records & Transcripts",
      "Attendance Tracking",
      "Grade Management",
      "Parent & Student Portals",
      "Reporting & Analytics",
    ],
    gradient: "from-orange-500 to-amber-500",
    demoLink: "/products/sis",
  },
  {
    id: "itsm",
    abbr: "ITSM",
    name: "IT Service Management",
    tagline: "Resolve. Manage. Deliver.",
    description: "An intelligent, ITIL-aligned IT service management platform powered by Freshservice. Streamline IT operations with AI-powered ticket management, asset tracking, change management, and a self-service portal that enhances the employee experience.",
    features: [
      "Incident & Problem Management",
      "Change & Release Management",
      "IT Asset Management (ITAM)",
      "CMDB & Impact Analysis",
      "Self-Service Portal",
      "Freddy AI for IT",
    ],
    gradient: "from-green-500 to-emerald-500",
    demoLink: "/products/itsm",
  },
  {
    id: "csm",
    abbr: "CSM",
    name: "Customer Service Management",
    tagline: "Support. Delight. Retain.",
    description: "An AI-powered customer service platform built on Freshdesk that delivers exceptional support across every channel. Unify email, chat, phone, and social media conversations with intelligent automation, SLA management, and self-service capabilities.",
    features: [
      "Omnichannel Ticketing",
      "AI-Powered Automation",
      "Knowledge Base & Self-Service",
      "SLA & Escalation Management",
      "Customer Satisfaction Tracking",
      "Team Collaboration Tools",
    ],
    gradient: "from-rose-500 to-pink-500",
    demoLink: "/products/csm",
  },
  {
    id: "ma",
    abbr: "MA",
    name: "Marketing Automation",
    tagline: "Attract. Engage. Convert.",
    description: "A powerful marketing automation platform built on Freshmarketer that helps you create personalized, data-driven campaigns across email, chat, SMS, and social channels. Build customer journeys, segment audiences, and optimize conversions with AI-powered insights.",
    features: [
      "Email Campaign Management",
      "Customer Journey Builder",
      "Audience Segmentation",
      "Conversion Optimization",
      "Multichannel Campaigns",
      "Marketing Analytics",
    ],
    gradient: "from-fuchsia-500 to-purple-500",
    demoLink: "/products/ma",
  },
  {
    id: "chat",
    abbr: "FC",
    name: "Live Chat & Messaging",
    tagline: "Chat. Engage. Convert.",
    description: "A modern conversational engagement platform powered by Freshchat. Engage customers in real-time across web, mobile, and messaging channels with AI-powered chatbots, proactive messaging, and rich media support for personalized conversations at scale.",
    features: [
      "Live Chat Widget",
      "AI-Powered Chatbots",
      "Multichannel Messaging",
      "Proactive Campaigns",
      "In-App Messaging",
      "Conversation Analytics",
    ],
    gradient: "from-sky-500 to-blue-500",
    demoLink: "/products/chat",
  },
  {
    id: "phone",
    abbr: "FP",
    name: "Cloud Phone System",
    tagline: "Call. Route. Analyze.",
    description: "A modern cloud-based phone system powered by Freshcaller with plug-and-play setup — no hardware required. Enterprise-grade calling with IVR, intelligent call routing, recording, real-time analytics, and seamless CRM integration for sales and support teams.",
    features: [
      "Cloud PBX System",
      "IVR & Smart Call Routing",
      "Call Recording & Monitoring",
      "Number Management",
      "Real-Time Call Analytics",
      "CRM & Helpdesk Integration",
    ],
    gradient: "from-teal-500 to-cyan-500",
    demoLink: "/products/phone",
  },
  {
    id: "cbs",
    abbr: "CBS",
    name: "Core Banking Software \u2014 TrustBankCBS\u2122",
    tagline: "Secure. Scalable. Unified.",
    description: "A secure and robust core banking solution by Trust Fintech Limited for financial institutions and banks. TrustBankCBS\u2122 is a web-based platform available on-premises or as SaaS, providing integrated banking modules on a unified system with API-driven architecture, multi-currency support, and built-in compliance capabilities.",
    features: [
      "Retail & Corporate Banking",
      "Multi-Currency & Multi-Lingual",
      "KYC, AML & Compliance Automation",
      "360\u00B0 Customer View (CIF/KYC)",
      "Treasury & Trade Finance",
      "Digital Banking & Payment Integration",
    ],
    gradient: "from-slate-500 to-zinc-600",
    demoLink: "/products/cbs",
  },
  {
    id: "los",
    abbr: "LOS",
    name: "Loan Origination Software \u2014 TrustLOS\u2122",
    tagline: "Apply. Approve. Disburse.",
    description: "A web- and mobile-based loan origination system by Trust Fintech Limited that streamlines lending operations end-to-end. TrustLOS\u2122 automates credit appraisal workflows, reduces turnaround time by up to 50%, and provides 24/7 online access for loan applications, status tracking, and document management.",
    features: [
      "Pre-Configured Loan Workflows",
      "Credit Scoring & Eligibility Engine",
      "KYC & Credit Bureau Integration",
      "Document Management System",
      "Mobile Access for Applicants",
      "Core Banking System Integration",
    ],
    gradient: "from-yellow-600 to-amber-500",
    demoLink: "/products/los",
  },
  {
    id: "ai-resume",
    abbr: "AI",
    name: "AI Resume Writing",
    tagline: "Craft. Optimize. Land the Job.",
    description: "An intelligent resume preparation platform that leverages advanced AI to help job seekers create polished, ATS-optimized resumes tailored to specific roles and industries. From formatting and keyword optimization to personalized content suggestions, our AI engine transforms your experience into a compelling career narrative that gets noticed.",
    features: [
      "AI-Powered Resume Builder",
      "ATS Optimization & Scoring",
      "Industry-Specific Tailoring",
      "Keyword & Skills Analysis",
      "Cover Letter Generation",
      "Multi-Format Export (PDF, DOCX)",
    ],
    gradient: "from-amber-500 to-orange-500",
    demoLink: "/products/ai-resume",
  },
];

export default function ProductsPage() {
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Products</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted leading-relaxed">
              Enterprise-grade software products designed to streamline operations, enhance productivity, and drive organizational growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 0.05}>
                <div
                  id={product.id}
                  className="rounded-2xl bg-background border border-surface-light overflow-hidden scroll-mt-24"
                >
                  {/* Header Bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${product.gradient}`} />

                  <div className="p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row gap-10">
                      {/* Left - Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} bg-opacity-20 flex items-center justify-center`}>
                            <span className="text-xl font-bold text-white">{product.abbr}</span>
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-heading">{product.name}</h2>
                            <p className="text-muted text-sm">{product.tagline}</p>
                          </div>
                        </div>
                        <p className="text-muted leading-relaxed mt-6">{product.description}</p>
                      </div>

                      {/* Right - Features */}
                      <div className="lg:w-80 flex-shrink-0">
                        <h3 className="text-sm font-semibold text-heading uppercase tracking-wider mb-4">Key Features</h3>
                        <div className="space-y-3">
                          {product.features.map((feature) => (
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

                    <div className="mt-8 pt-6 border-t border-surface-light">
                      <Link
                        href={product.demoLink || "/contact"}
                        className="inline-flex items-center text-primary hover:text-primary-light font-medium transition-colors text-sm"
                      >
                        {product.demoLink ? "Learn More" : "Request a Demo"}
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Interested in Our Products?
            </h2>
            <p className="text-muted max-w-2xl mx-auto mb-8">
              Schedule a demo to see how our enterprise solutions can transform your organization&apos;s operations.
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
