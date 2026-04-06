"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 lg:py-44 overflow-hidden">
      <div className="divider mb-24 mx-6 lg:mx-12" />

      {/* Big ambient glow behind CTA */}
      <div
        className="glow-blob w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25"
        style={{ background: "radial-gradient(circle, rgba(200,169,126,0.12) 0%, transparent 65%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
            <span className="tag-pill">Contact</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h2 className="text-4xl lg:text-[5rem] font-bold tracking-tight leading-tight mb-8">
            <span className="text-[var(--text-primary)]">Let&apos;s build</span>
            <br />
            <span className="gradient-text">something great.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.14} className="mb-16">
          <p className="text-[var(--text-secondary)] text-lg max-w-lg leading-relaxed font-light">
            Open to senior Full Stack roles — especially at product-minded teams working on meaningful
            systems. Currently exploring opportunities in Japan.
          </p>
        </FadeIn>

        {/* Contact methods */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="mailto:verrucosity@gmail.com"
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="group flex items-center gap-4 glass rounded-2xl px-8 py-6 metric-glow hover:border-[rgba(200,169,126,0.25)] transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] border border-[rgba(200,169,126,0.2)] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-0.5">Email</div>
                <div className="text-[var(--text-primary)] text-sm font-medium group-hover:text-[var(--accent)] transition-colors duration-300 hover-underline">
                  verrucosity@gmail.com
                </div>
              </div>
              <svg className="w-4 h-4 text-[var(--text-muted)] ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/estevan-mejia-5803b7272"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="group flex items-center gap-4 glass rounded-2xl px-8 py-6 metric-glow hover:border-[rgba(200,169,126,0.25)] transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] border border-[rgba(200,169,126,0.2)] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-0.5">LinkedIn</div>
                <div className="text-[var(--text-primary)] text-sm font-medium group-hover:text-[var(--accent)] transition-colors duration-300 hover-underline">
                  estevan-mejia
                </div>
              </div>
              <svg className="w-4 h-4 text-[var(--text-muted)] ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </FadeIn>

        {/* Footer */}
        <FadeIn delay={0.28} className="mt-24 pt-8 border-t border-[var(--border)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-[var(--text-muted)] text-sm">Estevan Mejia</span>
              <span className="text-[var(--text-muted)] opacity-40">·</span>
              <span className="text-[var(--text-muted)] text-sm">New York, NY</span>
              <span className="text-[var(--text-muted)] opacity-40">·</span>
              <span className="text-[var(--text-muted)] text-sm font-mono text-xs">2026</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[var(--text-muted)] text-xs uppercase tracking-widest">Open to work</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
