"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const serviceItems = [
  { href: "/services#software-development", abbr: "SD", label: "Software Development" },
  { href: "/services#application-development", abbr: "AD", label: "Application Development" },
  { href: "/services#website-development", abbr: "WD", label: "Website Development" },
  { href: "/services#cybersecurity", abbr: "CS", label: "Cybersecurity" },
  { href: "/services#penetration-testing", abbr: "PT", label: "Penetration Testing" },
  { href: "/services#digital-transformation", abbr: "DT", label: "Digital Transformation" },
  { href: "/services#business-process-reengineering", abbr: "BPR", label: "Business Process Reengineering" },
  { href: "/services#it-consulting", abbr: "ITC", label: "IT Consulting & Support" },
  { href: "/services#staff-augmentation", abbr: "SA", label: "Staff Augmentation" },
];

const productItems = [
  { href: "/products#ecm", label: "Enterprise Content Management" },
  { href: "/products#bpm", label: "Business Process Management" },
  { href: "/products#lms", label: "Learning Management System" },
  { href: "/products#crm", label: "Customer Relationship Management" },
  { href: "/products#sis", label: "Student Information System" },
];


function DesktopDropdown({
  label,
  items,
  wide,
}: {
  label: string;
  items: { href: string; abbr?: string; label: string }[];
  wide?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className="px-4 py-2 rounded-lg text-sm font-medium text-muted hover:text-heading hover:bg-surface-light transition-all duration-200 flex items-center gap-1"
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className={`absolute top-full left-0 mt-1 rounded-xl glass border border-surface-light shadow-2xl overflow-hidden ${wide ? "w-[520px] -left-40" : "w-72"}`}
          >
            <div className={wide ? "grid grid-cols-2 gap-x-2 p-4" : "py-2"}>
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    wide
                      ? "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted hover:text-heading hover:bg-surface-light transition-colors"
                      : "block px-4 py-2.5 text-sm text-muted hover:text-heading hover:bg-surface-light transition-colors"
                  }
                  onClick={() => setOpen(false)}
                >
                  {wide && item.abbr && (
                    <span className="text-primary font-bold text-xs w-8 shrink-0">{item.abbr}</span>
                  )}
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileDropdown({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: { href: string; abbr?: string; label: string }[];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-muted hover:text-heading hover:bg-surface-light transition-colors"
        onClick={() => setOpen((v) => !v)}
      >
        <span>{label}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="pl-4 py-1 space-y-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-muted hover:text-heading hover:bg-surface-light transition-colors"
                  onClick={onNavigate}
                >
                  {item.abbr && (
                    <span className="text-primary font-bold text-xs w-8 shrink-0">{item.abbr}</span>
                  )}
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/kpbc-logo.svg" alt="KPBC Logo" width={40} height={40} />
            <span className="text-xl font-bold text-heading">KPBC</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg text-sm font-medium text-muted hover:text-heading hover:bg-surface-light transition-all duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 rounded-lg text-sm font-medium text-muted hover:text-heading hover:bg-surface-light transition-all duration-200"
            >
              About
            </Link>
            <DesktopDropdown label="Services" items={serviceItems} wide />
            <DesktopDropdown label="Products" items={productItems} />
            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg text-sm font-medium text-muted hover:text-heading hover:bg-surface-light transition-all duration-200"
            >
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-lg text-muted hover:text-heading hover:bg-surface-light transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <Link
              href="/contact"
              className="ml-2 px-5 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-muted hover:text-heading hover:bg-surface-light transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-surface-light"
          >
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 rounded-lg text-muted hover:text-heading hover:bg-surface-light transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 rounded-lg text-muted hover:text-heading hover:bg-surface-light transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <MobileDropdown label="Services" items={serviceItems} onNavigate={() => setIsOpen(false)} />
              <MobileDropdown label="Products" items={productItems} onNavigate={() => setIsOpen(false)} />
              <Link
                href="/contact"
                className="block px-4 py-2 rounded-lg text-muted hover:text-heading hover:bg-surface-light transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <button
                onClick={toggleTheme}
                className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-muted hover:text-heading hover:bg-surface-light transition-colors"
              >
                {theme === "dark" ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
                <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
              </button>
              <Link
                href="/contact"
                className="block px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-center font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
