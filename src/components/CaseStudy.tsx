"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: "$40k+", label: "Revenue generated", sub: "from zero" },
  { value: "40%", label: "Operational efficiency", sub: "time savings" },
  { value: "1", label: "Engineer. 1 product.", sub: "full ownership" },
];

const timeline = [
  {
    phase: "01",
    title: "Architecture",
    body: "Designed the full system architecture from data modeling to frontend state — selecting WooCommerce as the commerce layer with custom Node.js services handling inventory and order logic.",
  },
  {
    phase: "02",
    title: "Plant Wizard",
    body: "Built a proprietary product discovery system that guides customers through curated plant selection based on their environment, experience level, and preferences. Conversion driver.",
  },
  {
    phase: "03",
    title: "Automation Engine",
    body: "Eliminated 40% of manual operational work by automating inventory tracking, low-stock alerts, and order status updates via custom Google Apps Script integrations.",
  },
  {
    phase: "04",
    title: "Revenue at Scale",
    body: "Took the platform from $0 to $40k+ in revenue while continuously iterating on UX, SEO, and checkout flow — operating simultaneously as engineer and product manager.",
  },
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function CaseStudy() {
  return (
    <section id="work" className="relative py-32 lg:py-44 overflow-hidden">
      {/* Top divider */}
      <div className="divider mb-24 mx-6 lg:mx-12" />

      {/* Glow */}
      <div
        className="glow-blob w-[500px] h-[500px] top-1/3 left-[-200px] opacity-20"
        style={{ background: "radial-gradient(circle, rgba(200,169,126,0.12) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
            <span className="tag-pill">Case Study</span>
            <span className="text-[var(--text-muted)] text-xs tracking-widest uppercase">01 / 01</span>
          </div>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.08}>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            <a
              href="https://naturescradle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-end gap-3 hover:opacity-90 transition-opacity duration-300"
            >
              <span className="text-[var(--text-primary)]">Nature&apos;s Cradle</span>
              <svg className="w-6 h-6 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors duration-300 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <br />
            <span className="text-[var(--text-muted)] font-light">eCommerce Platform</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.14}>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl leading-relaxed mb-16 font-light">
            Built from the ground up — sole engineer, product manager, and operator. A full eCommerce
            ecosystem that generates real revenue with minimal overhead.
          </p>
        </FadeIn>

        {/* Metrics row */}
        <FadeIn delay={0.18} className="mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                className="glass rounded-2xl p-8 metric-glow group hover:border-[rgba(200,169,126,0.2)] transition-colors duration-300"
              >
                <div className="text-5xl font-bold text-[var(--accent)] mb-2 tracking-tight">
                  {m.value}
                </div>
                <div className="text-[var(--text-primary)] text-sm font-medium mb-0.5">{m.label}</div>
                <div className="text-[var(--text-muted)] text-xs uppercase tracking-widest">{m.sub}</div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-transparent via-[var(--border)] to-transparent hidden lg:block" />

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <FadeIn key={item.phase} delay={0.1 * i}>
                <div className="relative flex gap-10 lg:gap-16 py-10 border-b border-[var(--border)] last:border-0 group">
                  {/* Phase number */}
                  <div className="hidden lg:flex flex-shrink-0 items-start pt-1">
                    <span className="w-12 h-12 rounded-full glass border border-[var(--border)] flex items-center justify-center text-xs text-[var(--text-muted)] font-mono group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] transition-all duration-300">
                      {item.phase}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-3">
                      <span className="lg:hidden tag-pill">{item.phase}</span>
                      <h3 className="text-xl lg:text-2xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed font-light max-w-2xl">
                      {item.body}
                    </p>
                  </div>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[var(--accent)] to-transparent group-hover:w-full transition-all duration-500" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Tags */}
        <FadeIn delay={0.1} className="mt-12">
          <div className="flex flex-wrap gap-2">
            {["WooCommerce", "Node.js", "Google Apps Script", "REST APIs", "React", "MySQL", "Automation"].map(
              (tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              )
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
