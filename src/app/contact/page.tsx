"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    area: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const [debugInfo, setDebugInfo] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setDebugInfo("Sending request...");
    console.log("[CONTACT FORM] Submitting:", JSON.stringify(formData));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("[CONTACT FORM] Response status:", response.status);
      console.log("[CONTACT FORM] Response body:", JSON.stringify(data));

      if (response.ok) {
        setStatus("success");
        setDebugInfo(`Success! Email ID: ${data.id || "N/A"}`);
        setFormData({ name: "", email: "", company: "", area: "", service: "", message: "" });
      } else {
        setStatus("error");
        setDebugInfo(`Error ${response.status}: ${data.error || "Unknown"} | Debug: ${JSON.stringify(data.debug) || "none"}`);
      }
    } catch (err) {
      console.error("[CONTACT FORM] Fetch error:", err);
      setStatus("error");
      setDebugInfo(`Network error: ${err instanceof Error ? err.message : String(err)}`);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted leading-relaxed">
              Ready to start your next project? Have a question about our services? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="p-8 lg:p-10 rounded-2xl bg-background border border-surface-light">
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>

                {status === "success" ? (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                    <p className="text-muted mb-6">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-primary hover:text-primary-light font-medium transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-light text-white placeholder-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-light text-white placeholder-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-muted mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-light text-white placeholder-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label htmlFor="area" className="block text-sm font-medium text-muted mb-2">
                          Area of Interest
                        </label>
                        <select
                          id="area"
                          value={formData.area}
                          onChange={(e) => setFormData({ ...formData, area: e.target.value, service: "" })}
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-light text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                        >
                          <option value="">Select an area</option>
                          <option value="services">Services</option>
                          <option value="products">Products</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {(formData.area === "services" || formData.area === "products") && (
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-muted mb-2">
                          {formData.area === "services" ? "Select a Service" : "Select a Product"}
                        </label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-light text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                        >
                          {formData.area === "services" ? (
                            <>
                              <option value="">Select a service</option>
                              <option value="software-development">Software Development</option>
                              <option value="application-development">Application Development</option>
                              <option value="website-development">Website Development</option>
                              <option value="cybersecurity">Cybersecurity</option>
                              <option value="digital-transformation">Digital Transformation</option>
                              <option value="bpr">Business Process Reengineering</option>
                              <option value="it-consulting">IT Consulting & Support</option>
                            </>
                          ) : (
                            <>
                              <option value="">Select a product</option>
                              <option value="dms">Document Management System</option>
                              <option value="lms">Learning Management System</option>
                              <option value="crm">Customer Relationship Management</option>
                              <option value="sis">Student Information System</option>
                            </>
                          )}
                        </select>
                      </div>
                    )}

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-light text-white placeholder-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors resize-none"
                        placeholder="Tell us about your project or question..."
                      />
                    </div>

                    {status === "error" && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                        <p>Something went wrong. Please try again or email us directly.</p>
                        {debugInfo && (
                          <pre className="mt-2 text-xs text-red-300/70 whitespace-pre-wrap break-all">{debugInfo}</pre>
                        )}
                      </div>
                    )}

                    {status === "success" && debugInfo && (
                      <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs">
                        <pre className="whitespace-pre-wrap break-all">{debugInfo}</pre>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg hover:opacity-90 transition-opacity glow disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <div className="space-y-6">
                {/* Email */}
                <div className="p-6 rounded-2xl bg-background border border-surface-light">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email Us</h3>
                      <p className="text-muted text-sm">contact@kpbc.com</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-6 rounded-2xl bg-background border border-surface-light">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Call Us</h3>
                      <p className="text-muted text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="p-6 rounded-2xl bg-background border border-surface-light">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Visit Us</h3>
                      <p className="text-muted text-sm">123 Innovation Drive<br />Tech District, City 10001</p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="p-6 rounded-2xl bg-background border border-surface-light">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted text-sm">Monday - Friday: 9AM - 6PM<br />Weekend: By appointment</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
