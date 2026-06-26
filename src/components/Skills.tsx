"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    id: "frontend",
    label: "Frontend",
    glyph: "フロント",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    glyph: "バック",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 88 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    id: "systems",
    label: "Systems & Tools",
    glyph: "システム",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    skills: [
      { name: "REST APIs", level: 92 },
      { name: "WooCommerce", level: 90 },
      { name: "Stripe / PayPal", level: 88 },
      { name: "Google Apps Script", level: 85 },
      { name: "CI/CD", level: 82 },
      { name: "AWS", level: 78 },
    ],
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

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className="group cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-sm font-medium transition-colors duration-200"
          style={{ color: hovered ? "var(--accent)" : "var(--text-primary)" }}
        >
          {name}
        </span>
        <span className="text-xs font-mono tabular-nums" style={{ color: hovered ? "var(--accent)" : "var(--text-muted)" }}>
          {level}%
        </span>
      </div>
      <div className="h-px w-full bg-[var(--border)] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15 + index * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full rounded-full relative"
          style={{
            background: hovered
              ? "var(--accent)"
              : "linear-gradient(90deg, rgba(200,169,126,0.6) 0%, rgba(200,169,126,0.3) 100%)",
            transition: "background 0.3s ease",
          }}
        >
          {/* Shimmer on bar */}
          {inView && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.06 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 lg:py-44 overflow-hidden">
      <div className="divider mb-24 mx-6 lg:mx-12" />

      <div
        className="glow-blob w-[400px] h-[400px] top-1/2 right-[-100px] opacity-20"
        style={{ background: "radial-gradient(circle, rgba(200,169,126,0.1) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
            <span className="tag-pill">Technical Skills</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            <span className="text-[var(--text-primary)]">Stack &</span>
            <br />
            <span className="text-[var(--text-muted)] font-light">Expertise</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.14} className="mb-16">
          <p className="text-[var(--text-secondary)] text-lg max-w-xl leading-relaxed font-light">
            Full-spectrum engineering, comfortable across the entire stack, with depth in backend
            systems and eCommerce automation.
          </p>
        </FadeIn>

        {/* 3-column skill groups - all visible at once */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, gi) => (
            <FadeIn key={group.id} delay={0.08 + gi * 0.1}>
              <div className="glass rounded-2xl p-7 metric-glow h-full">
                {/* Group header */}
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[var(--border)]">
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent-soft)] border border-[rgba(200,169,126,0.2)] flex items-center justify-center text-[var(--accent)]">
                    {group.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{group.label}</p>
                    <p className="text-[10px] font-mono text-[var(--text-muted)] tracking-widest">{group.glyph}</p>
                  </div>
                </div>

                {/* Skill bars */}
                <div className="space-y-5">
                  {group.skills.map((s, i) => (
                    <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Practices */}
        <FadeIn delay={0.1} className="mt-8">
          <div className="flex flex-wrap gap-2">
            {["CI/CD Pipelines", "Agile", "System Design", "API Architecture", "Performance Optimization", "Automation"].map(
              (p) => (
                <span key={p} className="tag-pill">{p}</span>
              )
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

