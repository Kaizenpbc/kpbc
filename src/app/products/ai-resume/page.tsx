"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const capabilities = [
  {
    title: "AI-Powered Resume Builder",
    description:
      "Intelligent content generation that transforms your work experience into compelling, results-driven bullet points optimized for your target role and industry.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "ATS Optimization & Scoring",
    description:
      "Ensure your resume passes Applicant Tracking Systems with keyword optimization, formatting compliance checks, and real-time ATS compatibility scoring.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Industry-Specific Tailoring",
    description:
      "Customized resume templates and content suggestions tailored to your target industry, from technology and finance to healthcare and creative fields.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Keyword & Skills Analysis",
    description:
      "AI-driven analysis of job postings to identify critical keywords, required skills, and qualifications &mdash; then maps them to your experience for maximum relevance.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Cover Letter Generation",
    description:
      "Automatically generate personalized, compelling cover letters that complement your resume and address specific job requirements and company culture.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Multi-Format Export",
    description:
      "Export your polished resume in multiple formats including PDF, DOCX, and plain text &mdash; each optimized for different submission requirements.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const steps = [
  {
    step: "1",
    name: "Upload & Analyze",
    fullName: "Import Your Existing Resume",
    description:
      "Upload your current resume or LinkedIn profile. Our AI engine parses and analyzes your experience, skills, and achievements to build a comprehensive career profile as the foundation for your optimized resume.",
    features: [
      "Resume & LinkedIn Import",
      "Skills & Experience Extraction",
      "Career Timeline Analysis",
      "Gap Identification",
    ],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    step: "2",
    name: "Target & Optimize",
    fullName: "Match to Your Target Role",
    description:
      "Paste a job posting or select your target role and industry. The AI compares your profile against job requirements, identifies keyword gaps, and suggests content optimizations to maximize your match score.",
    features: [
      "Job Posting Analysis",
      "Keyword Gap Detection",
      "Skills Matching & Scoring",
      "Content Recommendations",
    ],
    gradient: "from-orange-500 to-red-500",
  },
  {
    step: "3",
    name: "Generate & Refine",
    fullName: "AI-Powered Content Creation",
    description:
      "Our AI generates polished, achievement-focused bullet points and professional summaries tailored to your target role. Review, edit, and refine with real-time suggestions until every section is perfect.",
    features: [
      "AI-Generated Bullet Points",
      "Professional Summary Writing",
      "Achievement Quantification",
      "Tone & Style Adjustment",
    ],
    gradient: "from-red-500 to-pink-500",
  },
  {
    step: "4",
    name: "Format & Export",
    fullName: "Professional Formatting & Delivery",
    description:
      "Choose from professionally designed templates optimized for ATS compatibility and visual appeal. Preview your resume, make final adjustments, and export in your preferred format ready for submission.",
    features: [
      "Professional Templates",
      "ATS Compatibility Check",
      "Multi-Format Export",
      "Version History & Tracking",
    ],
    gradient: "from-pink-500 to-purple-500",
  },
];

export default function AIResumePage() {
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
              AI Resume <span className="gradient-text">Preparation</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted leading-relaxed">
              Craft. Optimize. Land the Job. &mdash; Leverage advanced AI to create polished, ATS-optimized resumes that turn your experience into opportunities.
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
                Your Career, <span className="gradient-text">AI-Optimized</span>
              </h2>
              <p className="text-muted leading-relaxed text-lg mb-4">
                In today&apos;s competitive job market, your resume has just seconds to make an impression. Our AI Resume Preparation platform analyzes job postings, understands industry expectations, and crafts tailored resumes that highlight your strengths in the language hiring managers and ATS systems are looking for.
              </p>
              <p className="text-muted leading-relaxed">
                Whether you&apos;re a recent graduate entering the workforce, a professional pivoting careers, or a seasoned executive updating your profile &mdash; our AI engine transforms your experience into a compelling narrative that opens doors.
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
              A complete suite of AI-powered tools to create, optimize, and deliver resumes that get results.
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
              Four simple steps from your current resume to a polished, job-winning document.
            </p>
          </AnimatedSection>

          <div className="space-y-10">
            {steps.map((s, i) => (
              <AnimatedSection key={s.name} delay={i * 0.05}>
                <div className="rounded-2xl bg-background border border-surface-light overflow-hidden">
                  <div className={`h-1.5 bg-gradient-to-r ${s.gradient}`} />
                  <div className="p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Info */}
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

                      {/* Features */}
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

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Ready to Land Your Next Role?
            </h2>
            <p className="text-muted max-w-2xl mx-auto mb-8">
              Contact us to learn how our AI Resume Preparation platform can help you stand out and get noticed by the right employers.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-lg hover:opacity-90 transition-opacity glow"
            >
              Get Started
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
