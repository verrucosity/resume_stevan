"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

function useCountUp(target: number, duration: number = 1400, start: boolean = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return value;
}

function MetricsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const years = useCountUp(8, 1000, inView);
  const revenue = useCountUp(40, 1200, inView);
  const efficiency = useCountUp(40, 1100, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mt-20 grid grid-cols-2 sm:grid-cols-3 gap-px border border-[var(--border)] rounded-2xl overflow-hidden glass metric-glow"
    >
      {[
        { display: `${years}+`, label: "Years shipping" },
        { display: `$${revenue}k+`, label: "Revenue generated" },
        { display: `${efficiency}%`, label: "Efficiency gains" },
      ].map((m) => (
        <div key={m.label} className="px-8 py-6 flex flex-col gap-1">
          <span className="text-3xl lg:text-4xl font-bold text-[var(--accent)] tracking-tight tabular-nums">
            {m.display}
          </span>
          <span className="text-xs text-[var(--text-muted)] uppercase tracking-widest font-medium">
            {m.label}
          </span>
        </div>
      ))}
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Ambient glows */}
      <div
        className="glow-blob w-[600px] h-[600px] top-[-100px] right-[-150px] opacity-30"
        style={{ background: "radial-gradient(circle, rgba(200,169,126,0.15) 0%, transparent 70%)" }}
      />
      <div
        className="glow-blob w-[400px] h-[400px] bottom-[100px] left-[-100px] opacity-20"
        style={{ background: "radial-gradient(circle, rgba(100,120,200,0.1) 0%, transparent 70%)" }}
      />

      {/* Floating grid lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/4 w-px h-full opacity-[0.04] bg-white" />
        <div className="absolute top-0 left-2/4 w-px h-full opacity-[0.04] bg-white" />
        <div className="absolute top-0 left-3/4 w-px h-full opacity-[0.04] bg-white" />
        <div className="absolute top-1/3 w-full h-px opacity-[0.04] bg-white" />
        <div className="absolute top-2/3 w-full h-px opacity-[0.04] bg-white" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 pt-32 pb-20"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="tag-pill">Available for opportunities</span>
          <span className="text-[var(--text-muted)] text-sm tracking-widest uppercase font-light">
            New York, NY
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <span className="block text-[var(--text-primary)]">I build systems</span>
          <span className="block gradient-text">that turn ideas</span>
          <span className="block text-[var(--text-primary)]">into revenue.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-[var(--text-secondary)] text-lg lg:text-xl max-w-2xl leading-relaxed mb-12 font-light"
        >
          Full Stack Engineer with{" "}
          <span className="text-[var(--text-primary)] font-medium">8+ years</span> of experience
          in eCommerce, automation, and product systems. I specialize in building scalable tools
          that drive{" "}
          <span className="text-[var(--accent)]">real business outcomes</span> — from architecture
          to deployment.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-[var(--bg-primary)] bg-[var(--accent)] rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_32px_rgba(200,169,126,0.35)]"
          >
            <span className="relative z-10">View My Work</span>
            <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-[var(--text-primary)] glass rounded-full transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Animated metrics */}
        <MetricsStrip />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[var(--text-muted)] text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[var(--accent)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
