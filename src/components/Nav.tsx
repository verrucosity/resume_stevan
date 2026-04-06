"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Experience", href: "#experience" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 lg:px-12 py-5 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(8,10,15,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group cursor-none">
          <div className="w-7 h-7 rounded-md flex items-center justify-center border border-[var(--accent)] bg-[var(--accent-soft)]">
            <span className="text-[var(--accent)] text-xs font-bold font-mono">EM</span>
          </div>
          <span className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300">
            Estevan Mejia
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-300 hover-underline cursor-none"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="text-sm px-5 py-2.5 glass rounded-full text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[rgba(200,169,126,0.3)] transition-all duration-300 cursor-none"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 cursor-none"
          aria-label="Toggle menu"
        >
          <span
            className="w-5 h-px bg-[var(--text-primary)] transition-all duration-300"
            style={{ transform: menuOpen ? "rotate(45deg) translate(2px, 2px)" : "none" }}
          />
          <span
            className="w-5 h-px bg-[var(--text-primary)] transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="w-5 h-px bg-[var(--text-primary)] transition-all duration-300"
            style={{ transform: menuOpen ? "rotate(-45deg) translate(2px, -2px)" : "none" }}
          />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[72px] inset-x-0 z-40 glass border-b border-[var(--border)] px-6 py-6 md:hidden"
            style={{ backdropFilter: "blur(24px)" }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 py-1 cursor-none"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 text-sm px-5 py-3 text-center glass rounded-full text-[var(--accent)] border-[rgba(200,169,126,0.2)] cursor-none"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
