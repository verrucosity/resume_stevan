"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const principles = [
  {
    glyph: "所有",
    en: "Total Ownership",
    body: "I don't hand things off — I ship them. From database schema to deploy script, I treat every product as if my name is on it. Because it is.",
  },
  {
    glyph: "自動",
    en: "Automate Everything",
    body: "Manual processes are technical debt in disguise. I look for the repetitive, the error-prone, and I replace it with systems that don't sleep.",
  },
  {
    glyph: "成長",
    en: "Build to Scale",
    body: "Writing code that works today is the baseline. I architect for the version of the product six months from now — with room to grow.",
  },
  {
    glyph: "影響",
    en: "Measure Impact",
    body: "Every technical decision maps back to a business outcome. I care about efficiency percentages and revenue numbers, not just clean code.",
  },
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-32 lg:py-44 overflow-hidden">
      <div className="divider mb-24 mx-6 lg:mx-12" />

      {/* Ambient */}
      <div
        className="glow-blob w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 opacity-10"
        style={{ background: "radial-gradient(circle, rgba(200,169,126,0.18) 0%, transparent 60%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
            <span className="tag-pill">Philosophy</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            <span className="text-[var(--text-primary)]">How I Build</span>
            <br />
            <span className="text-[var(--text-muted)] font-light">— and why it works.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.14} className="mb-20">
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl leading-relaxed font-light">
            I don&apos;t just build features. I build systems that solve real business problems, automate
            workflows, and scale with growth. From idea to deployment, I take full ownership of the
            product.
          </p>
        </FadeIn>

        {/* Principles grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {principles.map((p, i) => (
            <FadeIn key={p.en} delay={0.08 * i}>
              <motion.div
                className="glass rounded-2xl p-8 h-full group cursor-default metric-glow hover:border-[rgba(200,169,126,0.18)] transition-all duration-300"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Japanese glyph */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-lg font-medium" style={{ color: "var(--accent)", borderColor: "rgba(200,169,126,0.2)" }}>
                    <span className="text-xs font-bold tracking-wider">{p.glyph}</span>
                  </div>
                  <div className="w-6 h-6 rounded-full border border-[var(--border)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-3 h-3 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                  {p.en}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm font-light">
                  {p.body}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Pull quote */}
        <FadeIn delay={0.1} className="mt-16">
          <div className="relative border-l-2 border-[var(--accent)] pl-8 py-2">
            <blockquote className="text-2xl lg:text-3xl font-light text-[var(--text-primary)] leading-snug mb-4">
              &ldquo;Automation isn&apos;t about replacing people — it&apos;s about freeing them to do
              the work that actually matters.&rdquo;
            </blockquote>
            <cite className="text-[var(--text-muted)] text-sm not-italic uppercase tracking-widest">
              Estevan Mejia
            </cite>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
