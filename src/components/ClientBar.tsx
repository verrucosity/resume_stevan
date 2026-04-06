"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const clients = [
  {
    name: "syncwave-designs.vercel.app",
    handle: "My studio",
    flag: "⚡",
    url: "https://syncwave-designs.vercel.app",
  },
  {
    name: "nakamandem.com",
    handle: "@yasukejunior",
    flag: "🇯🇵",
    url: "https://nakamandem.com",
  },
  {
    name: "racademy.co.uk",
    handle: "@ricchaadotv",
    flag: "🇯🇵",
    url: "https://racademy.co.uk",
  },
  {
    name: "naturescradle.com",
    handle: "Current employer",
    flag: "🌿",
    url: "https://naturescradle.com",
  },
];

export default function ClientBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="relative py-12 overflow-hidden">
      {/* Hairline top */}
      <div className="divider mb-12 mx-6 lg:mx-12" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[var(--text-muted)] text-xs uppercase tracking-[0.2em] font-medium flex-shrink-0"
          >
            Live client work
          </motion.p>

          {/* Vertical divider — desktop only */}
          <div className="hidden sm:block w-px h-8 bg-[var(--border)]" />

          {/* Client chips */}
          <div className="flex flex-wrap gap-3">
            {clients.map((c, i) => (
              <motion.a
                key={c.url}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -2 }}
                className="group flex items-center gap-2.5 px-4 py-2 glass rounded-full border border-[var(--border)] hover:border-[rgba(200,169,126,0.35)] hover:bg-[var(--accent-soft)] transition-all duration-300 cursor-none"
              >
                <span className="text-sm" aria-hidden>{c.flag}</span>
                <span className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                  {c.name}
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)] hidden sm:block">
                  {c.handle}
                </span>
                <svg
                  className="w-3 h-3 text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Hairline bottom */}
      <div className="divider mt-12 mx-6 lg:mx-12" />
    </div>
  );
}
