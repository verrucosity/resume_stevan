"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const psi = [
  {
    label: "Problem",
    glyph: "問題",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
    ),
    color: "rgba(239,68,68,0.08)",
    borderColor: "rgba(239,68,68,0.15)",
    accentColor: "#EF4444",
    content: "Manual workflows, zero structured eCommerce system, inefficient inventory handling. Every order managed by hand. No visibility into stock, no automated tracking, no conversion infrastructure.",
    points: ["No eCommerce platform", "Manual inventory & orders", "Zero automation"],
  },
  {
    label: "Solution",
    glyph: "解決",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    color: "rgba(200,169,126,0.06)",
    borderColor: "rgba(200,169,126,0.2)",
    accentColor: "#C8A97E",
    content: "Built a full eCommerce platform from scratch. Created the \"Plant Wizard\" - a proprietary product discovery system that converts browsers into buyers. Automated inventory tracking, low-stock alerts, and order updates via Google Apps Script.",
    points: ["Full eCommerce platform", "Plant Wizard discovery system", "Automated order & inventory workflows"],
  },
  {
    label: "Impact",
    glyph: "影響",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    color: "rgba(52,211,153,0.06)",
    borderColor: "rgba(52,211,153,0.15)",
    accentColor: "#34D399",
    content: "Took the business from $0 digital revenue to $40,000+ while simultaneously acting as engineer, product manager, and operator. Ongoing - still shipping improvements.",
    points: ["$40,000+ revenue generated", "40% reduction in operational workload", "Full product lifecycle ownership"],
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
      <div className="divider mb-24 mx-6 lg:mx-12" />

      <div
        className="glow-blob w-[500px] h-[500px] top-1/3 left-[-200px] opacity-20"
        style={{ background: "radial-gradient(circle, rgba(200,169,126,0.12) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Label */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
            <span className="tag-pill">Case Study</span>
            <span className="text-[var(--text-muted)] text-xs tracking-widest uppercase">01 / 01</span>
          </div>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.08}>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight mb-4">
            <span className="text-[var(--text-primary)]">Scaling a Nursery into</span>
            <br />
            <span className="text-[var(--text-muted)] font-light">a Digital Business</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.14} className="mb-6">
          <div className="flex items-center gap-3">
            <a
              href="https://naturescradle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300 text-sm"
            >
              naturescradle.com
              <svg className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <span className="text-[var(--text-muted)] opacity-40">·</span>
            <span className="text-[var(--text-muted)] text-xs uppercase tracking-widest">2020 - Present</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.18} className="mb-20">
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl leading-relaxed font-light">
            Sole engineer, product manager, and operator. Took a manual business and built the
            digital infrastructure that turned it into a revenue-generating system.
          </p>
        </FadeIn>

        {/* PSI Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-16">
          {psi.map((item, i) => (
            <FadeIn key={item.label} delay={0.1 + i * 0.1}>
              <motion.div
                className="rounded-2xl p-8 h-full flex flex-col border metric-glow group transition-all duration-300"
                style={{
                  background: item.color,
                  borderColor: item.borderColor,
                }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Icon + label */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: `${item.accentColor}18`, color: item.accentColor }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-mono text-[var(--text-muted)] tracking-widest">{item.glyph}</p>
                      <p className="text-sm font-semibold" style={{ color: item.accentColor }}>{item.label}</p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed font-light mb-6 flex-1">
                  {item.content}
                </p>

                {/* Point list */}
                <ul className="space-y-2">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)] font-light">
                      <span
                        className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: item.accentColor }}
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Tags */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-2">
            {["WooCommerce", "Node.js", "Google Apps Script", "REST APIs", "React", "MySQL", "Automation"].map(
              (tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              )
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
