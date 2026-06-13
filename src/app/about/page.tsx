"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const team = [
  {
    name: "Michael Annamunthodo",
    role: "CEO & Co-Founder",
    bio: "Michael's career spans some of the most demanding technology environments in North American and Caribbean banking: Bank of Montreal, American Express, Royal Bank of Canada, Royal Bank of Trinidad & Tobago, and TD Bank. After a decade at TD Bank, he retired to lead Kaizen full-time, bringing institutional-grade discipline to every engagement.",
    initials: "MA",
  },
  {
    name: "Akil Annamunthodo",
    role: "CTO & Co-Founder",
    bio: "A seasoned technology leader with deep expertise in software architecture, cybersecurity, and digital transformation strategies. Akil oversees product development and technology partnerships, ensuring enterprise-grade quality across all KPBC solutions.",
    initials: "AA",
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

const sectors = [
  { name: "Government Agencies", detail: "PICA Jamaica, NWC Jamaica" },
  { name: "Credit Unions & Banks", detail: "Core banking, loan origination" },
  { name: "Financial Services", detail: "Compliance, KYC/AML workflows" },
  { name: "Educational Institutions", detail: "LMS, student information systems" },
  { name: "Healthcare", detail: "Document management, process automation" },
  { name: "Enterprise & SMBs", detail: "CRM, ITSM, customer service" },
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
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">Solutions Beyond Borders</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">KPBC</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted leading-relaxed mb-6">
              Founded and headquartered in Canada, Kaizen Project &amp; Business Consultants Inc. is a consulting firm led by Michael Annamunthodo, with over 25 years of experience delivering IT solutions and project management services to leading financial institutions and government agencies across Canada and the Caribbean.
            </p>
            <p className="text-muted leading-relaxed">
              We deliver enterprise IT solutions, workflow automation, cybersecurity, and digital transformation services — helping governments and financial institutions modernize operations with precision and speed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Kaizen Philosophy */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-6">
                The <span className="gradient-text">Kaizen</span> Philosophy
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                &ldquo;Kaizen&rdquo; means continuous improvement — and it&rsquo;s more than our name. It&rsquo;s how we operate.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                Michael&rsquo;s career spans some of the most demanding technology environments in North American and Caribbean banking: Bank of Montreal, American Express, Royal Bank of Canada, Royal Bank of Trinidad &amp; Tobago, and TD Bank. After a decade at TD Bank, Michael retired to lead Kaizen full-time, bringing institutional-grade discipline to every engagement.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                Beyond the corporate sector, Michael has contributed to regional capacity-building, delivering project management training for the Governments of Barbados and the Bahamas.
              </p>
              <p className="text-muted leading-relaxed">
                Today, Kaizen assembles diverse, skilled delivery teams drawn from an extensive professional network — tailoring the right expertise to each client&rsquo;s needs, whether the project calls for enterprise software, cybersecurity, or digital transformation.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "25+", label: "Years of Experience" },
                  { number: "50+", label: "Projects Delivered" },
                  { number: "99%", label: "Client Retention" },
                  { number: "5", label: "Office Locations" },
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

      {/* Proven Government Delivery */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-6">
              Proven Government <span className="gradient-text">Delivery</span>
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Kaizen brings direct, current experience delivering technology initiatives within the Government of Jamaica:
            </p>
            <div className="space-y-6 mb-8">
              <div className="p-6 rounded-2xl bg-surface border border-surface-light">
                <h3 className="text-heading font-semibold mb-2">Passport, Immigration &amp; Citizenship Agency (PICA)</h3>
                <p className="text-muted text-sm">CRM, AI Chat, and Contact Centre programme delivered on the Freshworks platform.</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface border border-surface-light">
                <h3 className="text-heading font-semibold mb-2">National Water Commission (NWC)</h3>
                <p className="text-muted text-sm">Mobile application development for Jamaica&rsquo;s national water utility.</p>
              </div>
            </div>
            <p className="text-muted leading-relaxed">
              These engagements demonstrate our working knowledge of government procurement environments and our ability to deliver complex technology projects within institutional frameworks.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-6">
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="text-muted leading-relaxed">
              We don&rsquo;t maintain a large bench of idle consultants. Instead, we assemble the right team for each engagement from a trusted network of specialists — keeping costs lean while delivering deep, relevant expertise. Every project gets a team built for its specific requirements.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Sectors We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              We specialize in industries where compliance, security, and operational efficiency are mission-critical.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, i) => (
              <AnimatedSection key={sector.name} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-surface border border-surface-light hover:border-primary/30 transition-all duration-300">
                  <h3 className="text-heading font-semibold mb-1">{sector.name}</h3>
                  <p className="text-muted text-sm">{sector.detail}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Technology <span className="gradient-text">Partners</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              We deliver enterprise solutions through certified partnerships with leading technology vendors.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { name: "Freshworks", role: "Implementation Partner", detail: "CRM, ITSM, CSM, Marketing, Chat, Phone" },
              { name: "Acyutah Technologies", role: "ECM & BPM Partner", detail: "FineDocs ECM, FineFlow BPM" },
              { name: "Trust Fintech", role: "Core Banking Partner", detail: "TrustBankCBS, TrustLOS" },
            ].map((partner, i) => (
              <AnimatedSection key={partner.name} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-background border border-surface-light text-center">
                  <h3 className="text-heading font-semibold mb-1">{partner.name}</h3>
                  <p className="text-primary text-xs font-medium mb-2">{partner.role}</p>
                  <p className="text-muted text-sm">{partner.detail}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
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
                  <h3 className="text-lg font-semibold text-heading mb-2">{value.title}</h3>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
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
                  <h3 className="text-xl font-semibold text-heading mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                  <p className="text-muted text-sm leading-relaxed">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_transparent_0%,_rgba(0,0,0,0.15)_100%)]" />
              <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Ready to Work With Us?
                </h2>
                <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
                  If your organization needs experienced leadership and reliable delivery, we&rsquo;re ready to help. Let&rsquo;s discuss your next initiative.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-primary font-semibold text-lg hover:bg-white/90 transition-colors"
                >
                  Book a Discovery Call
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
