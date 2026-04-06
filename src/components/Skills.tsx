"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    id: "frontend",
    label: "Frontend",
    glyph: "フロント",
    skills: [
      { name: "React", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "HTML / CSS", level: 95 },
      { name: "Next.js", level: 88 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    glyph: "バック",
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
    skills: [
      { name: "AWS", level: 78 },
      { name: "REST APIs", level: 92 },
      { name: "CI/CD", level: 82 },
      { name: "WooCommerce", level: 90 },
      { name: "Stripe / PayPal", level: 88 },
      { name: "Google Apps Script", level: 85 },
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
        <span className="text-xs font-mono" style={{ color: hovered ? "var(--accent)" : "var(--text-muted)" }}>
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
  const [activeGroup, setActiveGroup] = useState("frontend");
  const active = skillGroups.find((g) => g.id === activeGroup)!;

  return (
    <section id="skills" className="relative py-32 lg:py-44 overflow-hidden">
      <div className="divider mb-24 mx-6 lg:mx-12" />

      {/* Glow */}
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
            Full-spectrum engineering — comfortable across the entire stack, with depth in backend systems
            and eCommerce automation.
          </p>
        </FadeIn>

        {/* Tab nav */}
        <FadeIn delay={0.18} className="mb-12">
          <div className="flex flex-wrap gap-2">
            {skillGroups.map((g) => (
              <button
                key={g.id}
                onClick={() => setActiveGroup(g.id)}
                className="group relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-none"
                style={{
                  background: activeGroup === g.id ? "var(--accent-soft)" : "transparent",
                  border: `1px solid ${activeGroup === g.id ? "rgba(200,169,126,0.35)" : "var(--border)"}`,
                  color: activeGroup === g.id ? "var(--accent)" : "var(--text-secondary)",
                }}
              >
                <span className="mr-2 text-xs opacity-50 font-mono">{g.glyph}</span>
                {g.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Skill bars */}
        <motion.div
          key={activeGroup}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-2xl p-8 lg:p-12 metric-glow"
        >
          <div className="flex items-start justify-between mb-10">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--text-primary)]">{active.label}</h3>
              <p className="text-[var(--text-muted)] text-xs mt-1 font-mono tracking-widest">{active.glyph}</p>
            </div>
            <span className="text-6xl font-bold text-[var(--border)] select-none">{active.skills.length}</span>
          </div>

          <div className="space-y-6">
            {active.skills.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Practices row */}
        <FadeIn delay={0.1} className="mt-8">
          <div className="flex flex-wrap gap-2">
            {["CI/CD Pipelines", "Agile", "System Design", "API Architecture", "Performance Optimization", "Automation"].map(
              (p) => (
                <span key={p} className="tag-pill">
                  {p}
                </span>
              )
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
