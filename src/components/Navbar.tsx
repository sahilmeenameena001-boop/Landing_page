"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#practice", label: "Practice" },
  { href: "#results", label: "Results" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] md:w-auto"
    >
      <nav
        className={`glass-pill flex items-center justify-between md:justify-start gap-2 md:gap-8 rounded-full px-4 md:px-6 py-2.5 transition-all duration-500 ${
          scrolled ? "shadow-jade-500/10" : ""
        }`}
      >
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <div className="relative h-8 w-8">
            <Image src="/logo.png" alt="Lex & Co." fill sizes="32px" className="object-contain" />
          </div>
          <span className="font-display text-sm tracking-[0.15em] hidden sm:inline">
            LEX&amp;CO.
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-6 text-sm text-mist font-medium">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative transition-colors hover:text-ivory group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-jade-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-jade-500/90 hover:bg-jade-400 text-ink text-sm font-semibold px-4 py-1.5 transition-colors"
        >
          Free Consultation
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden relative h-6 w-6 shrink-0"
        >
          <span
            className={`absolute left-0 h-px w-6 bg-ivory transition-all duration-300 ${open ? "top-3 rotate-45" : "top-2"}`}
          />
          <span
            className={`absolute left-0 top-3 h-px w-6 bg-ivory transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute left-0 h-px w-6 bg-ivory transition-all duration-300 ${open ? "top-3 -rotate-45" : "top-4"}`}
          />
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-pill mt-3 rounded-3xl px-6 py-5 md:hidden"
        >
          <ul className="flex flex-col gap-4 text-mist font-medium">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="hover:text-ivory">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
