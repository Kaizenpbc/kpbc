"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const team = [
  {
    name: "John Smith",
    role: "CEO & Co-Founder",
    bio: "With over 15 years of experience in enterprise IT solutions, John leads KPBC's strategic vision and drives innovation across all service lines.",
    initials: "JS",
  },
  {
    name: "Sarah Johnson",
    role: "CTO & Co-Founder",
    bio: "A seasoned technology leader with deep expertise in software architecture, cybersecurity, and digital transformation strategies.",
    initials: "SJ",
  },
];

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Innovation",
    description: "We stay at the forefront of technology, continuously exploring new solutions to drive your business forward.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Integrity",
    description: "We build trust through transparent communication, honest advice, and delivering on every promise we make.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Partnership",
    description: "We don't just deliver projects — we become an extension of your team, invested in your long-term success.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Excellence",
    description: "We hold ourselves to the highest standards, delivering solutions that exceed expectations every time.",
  },
];

export default function AboutPage() {
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
              About <span className="gradient-text">Kaizen Project &amp; Business Consultants Inc.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted leading-relaxed">
              We are a team of passionate technologists dedicated to helping businesses harness the power of technology. Since our founding, KPBC has been at the forefront of delivering innovative IT solutions that drive real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                At KPBC, our mission is to empower organizations through transformative technology solutions. We believe that the right technology, implemented strategically, can unlock unprecedented growth and efficiency.
              </p>
              <p className="text-muted leading-relaxed">
                From custom software development to comprehensive cybersecurity solutions, we partner with businesses of all sizes to navigate the complexities of digital transformation and emerge stronger, smarter, and more competitive.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "50+", label: "Projects Delivered" },
                  { number: "99%", label: "Client Retention" },
                  { number: "10+", label: "Years of Experience" },
                  { number: "4", label: "Enterprise Products" },
                ].map((stat) => (
                  <div key={stat.label} className="p-6 rounded-2xl bg-background border border-surface-light text-center">
                    <div className="text-2xl font-bold gradient-text mb-1">{stat.number}</div>
                    <div className="text-muted text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              The principles that guide everything we do at KPBC.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-surface border border-surface-light hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              The leadership behind KPBC&apos;s vision and innovation.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.15}>
                <div className="group p-8 rounded-2xl bg-background border border-surface-light hover:border-primary/30 transition-all duration-300 glow-hover text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-white">{member.initials}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                  <p className="text-muted text-sm leading-relaxed">{member.bio}</p>
                  <div className="flex justify-center space-x-3 mt-6">
                    <a href="#" className="w-9 h-9 rounded-lg bg-surface-light flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-9 h-9 rounded-lg bg-surface-light flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
