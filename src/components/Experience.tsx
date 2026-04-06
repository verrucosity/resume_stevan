"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Client = { name: string; handle: string; url: string };
type Experience = {
  period: string;
  role: string;
  company: string;
  url?: string;
  type: string;
  highlights: string[];
  tags: string[];
  clients?: Client[];
};

const experiences: Experience[] = [
  {
    period: "2023 — Present",
    role: "Co-Founder & Lead Developer",
    company: "SyncWave Designs LLC",
    url: "https://syncwave-designs.vercel.app",
    type: "Venture",
    highlights: [
      "Delivered custom web and eCommerce solutions for clients across industries, including Japan-based creators",
      "Managed full project lifecycle: client relations, timelines, and technical execution",
      "Established robust CI/CD pipelines and deployment workflows",
    ],
    tags: ["React", "Node.js", "WooCommerce", "CI/CD"],
    clients: [
      { name: "nakamandem.com", handle: "@yasukejunior", url: "https://nakamandem.com" },
      { name: "racademy.co.uk", handle: "@ricchaadotv", url: "https://racademy.co.uk" },
    ],
  },
  {
    period: "2019 — 2020",
    role: "Freelance Full Stack Developer",
    company: "Independent",
    type: "Contract",
    highlights: [
      "Built backend systems and REST APIs for multiple clients",
      "Reduced inventory stock issues by 25% via custom inventory management system",
      "Integrated Stripe and PayPal payment processing pipelines",
    ],
    tags: ["Node.js", "Express", "Stripe", "PayPal", "APIs"],
  },
  {
    period: "2018",
    role: "Backend Software Engineer",
    company: "TS Co",
    type: "Full-time",
    highlights: [
      "Improved system performance and reduced load times by 40%",
      "Deployed and maintained microservices on AWS infrastructure",
    ],
    tags: ["AWS", "Microservices", "Performance", "Backend"],
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

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 lg:py-44 overflow-hidden">
      <div className="divider mb-24 mx-6 lg:mx-12" />

      <div
        className="glow-blob w-[400px] h-[400px] bottom-0 right-[-100px] opacity-15"
        style={{ background: "radial-gradient(circle, rgba(200,169,126,0.1) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
            <span className="tag-pill">Experience</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            <span className="text-[var(--text-primary)]">8 years.</span>
            <br />
            <span className="text-[var(--text-muted)] font-light">Proven track record.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.14} className="mb-20">
          <p className="text-[var(--text-secondary)] text-lg max-w-xl leading-relaxed font-light">
            From early-stage startups to independent ventures — a consistent record of building systems
            that stick.
          </p>
        </FadeIn>

        {/* Experience list */}
        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.company} delay={0.08 * i}>
              <motion.div
                className="glass rounded-2xl overflow-hidden group cursor-default metric-glow hover:border-[rgba(200,169,126,0.15)] transition-all duration-300"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="tag-pill">{exp.type}</span>
                        <span className="text-[var(--text-muted)] text-xs font-mono">{exp.period}</span>
                      </div>
                      <h3 className="text-xl lg:text-2xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                        {exp.role}
                      </h3>
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] text-sm mt-1 hover:text-[var(--accent)] transition-colors duration-300 cursor-none"
                        >
                          {exp.company}
                          <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </a>
                      ) : (
                        <p className="text-[var(--text-secondary)] text-sm mt-1">{exp.company}</p>
                      )}
                    </div>

                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 mt-1">
                      <svg className="w-3.5 h-3.5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-[var(--text-secondary)] text-sm leading-relaxed font-light">
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0 bg-[var(--accent)]" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {exp.clients && (
                    <div className="mb-6">
                      <p className="text-[var(--text-muted)] text-xs uppercase tracking-widest mb-3 font-medium">Notable Clients</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.clients.map((c) => (
                          <a
                            key={c.url}
                            href={c.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/client flex items-center gap-2 px-3 py-1.5 glass rounded-xl border border-[var(--border)] hover:border-[rgba(200,169,126,0.3)] transition-all duration-300 cursor-none"
                          >
                            <span className="text-xs font-medium text-[var(--text-secondary)] group-hover/client:text-[var(--accent)] transition-colors duration-300">{c.name}</span>
                            <span className="text-[10px] text-[var(--text-muted)] font-mono">{c.handle}</span>
                            <svg className="w-2.5 h-2.5 text-[var(--text-muted)] opacity-0 group-hover/client:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <span key={t} className="tag-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
