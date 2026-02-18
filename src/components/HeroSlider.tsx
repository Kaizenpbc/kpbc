"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  subtitle: string;
  title: string;
  highlight: string;
  cta: { label: string; href: string };
  backgroundImage?: string;
  backgroundGradient: string;
}

const slides: Slide[] = [
  {
    subtitle: "Solutions Beyond Borders",
    title: "Welcome to",
    highlight: "Kaizen",
    cta: { label: "Our Services", href: "/services" },
    backgroundGradient:
      "linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #0c4a6e 70%, #0a0f1a 100%)",
  },
  {
    subtitle: "Innovative IT Solutions",
    title: "Transform Your Business with",
    highlight: "Technology",
    cta: { label: "Our Products", href: "/products" },
    backgroundGradient:
      "linear-gradient(135deg, #0a0f1a 0%, #1a1a2e 40%, #16213e 70%, #0f3460 100%)",
  },
  {
    subtitle: "Trusted by Organizations Worldwide",
    title: "Delivering Excellence in",
    highlight: "Every Project",
    cta: { label: "Contact Us", href: "/contact" },
    backgroundGradient:
      "linear-gradient(135deg, #0a0f1a 0%, #1b2838 40%, #0d3b66 70%, #0a0f1a 100%)",
  },
];

const AUTOPLAY_INTERVAL = 6000;

export default function HeroSlider({ paused = false }: { paused?: boolean }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(nextSlide, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide, paused]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
    }),
    center: {
      x: "0%",
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
    }),
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full Slide (Background + Content together) */}
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0"
        >
          {/* Background */}
          <div
            className="absolute inset-0"
            style={{
              background: slides[current].backgroundImage
                ? `url(${slides[current].backgroundImage}) center/cover no-repeat`
                : slides[current].backgroundGradient,
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Slide Content */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center px-4 max-w-4xl mx-auto">
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm sm:text-base uppercase tracking-[0.3em] text-white/80 mb-4 font-medium"
              >
                {slides[current].subtitle}
              </motion.p>

              {/* Decorative line */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mb-6"
              />

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
              >
                {slides[current].title}{" "}
                <span className="gradient-text">{slides[current].highlight}</span>
              </motion.h1>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Link
                  href={slides[current].cta.href}
                  className="inline-flex items-center px-8 py-4 mt-8 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
                >
                  {slides[current].cta.label}
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="group relative w-3 h-3 rounded-full transition-all duration-300"
          >
            <span
              className={`block w-full h-full rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-white scale-100"
                  : "bg-white/40 scale-75 group-hover:bg-white/70 group-hover:scale-90"
              }`}
            />
            {/* Active dot ring animation */}
            {index === current && (
              <motion.span
                layoutId="activeDot"
                className="absolute inset-[-3px] rounded-full border-2 border-white/60"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Left/Right Arrows */}
      <button
        onClick={() => {
          setDirection(-1);
          setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
        }}
        aria-label="Previous slide"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => {
          setDirection(1);
          setCurrent((prev) => (prev + 1) % slides.length);
        }}
        aria-label="Next slide"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
