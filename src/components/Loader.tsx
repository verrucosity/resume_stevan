"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast animated counter
    let start = 0;
    const duration = 1200;
    const step = 10;
    const increment = (100 / duration) * step;

    const timer = setInterval(() => {
      start += increment;
      if (start >= 100) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(() => setDone(true), 400);
      } else {
        setProgress(Math.min(start, 100));
      }
    }, step);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "var(--bg-primary)" }}
        >
          {/* Ambient glow */}
          <div
            className="absolute w-[400px] h-[400px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(200,169,126,0.3) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <div className="relative flex flex-col items-center gap-8">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-16 h-16 rounded-2xl glass border border-[rgba(200,169,126,0.3)] flex items-center justify-center"
            >
              <span className="text-[var(--accent)] text-xl font-bold font-mono">EM</span>
            </motion.div>

            {/* Progress counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-4"
            >
              <span className="text-5xl font-bold text-[var(--text-primary)] font-mono tabular-nums">
                {Math.round(progress)}
              </span>

              {/* Progress bar */}
              <div className="w-48 h-px bg-[var(--border)] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[var(--accent)] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>

              <span className="text-[var(--text-muted)] text-xs uppercase tracking-[0.25em] font-medium">
                Loading
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
