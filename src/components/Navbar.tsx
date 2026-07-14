"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice", label: "Practice" },
  { href: "/results", label: "Results" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className="fixed top-4 md:top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-auto"
    >
      <nav className="glass-pill flex items-center justify-between sm:justify-start gap-2 md:gap-8 rounded-full pl-5 pr-2.5 md:pl-7 md:pr-3 py-2.5">
        <ul className="hidden md:flex items-center gap-7 text-sm text-mist font-medium">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`relative transition-colors hover:text-ivory ${
                    active ? "text-ivory" : ""
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-accent-400 transition-all duration-300 ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-accent-500/90 hover:bg-accent-400 text-ink text-sm font-semibold px-4 py-1.5 transition-colors whitespace-nowrap"
        >
          Free Consultation
        </Link>

        <span className="md:hidden font-display text-sm tracking-[0.1em] text-ivory pl-2">
          MENU
        </span>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden relative h-9 w-9 shrink-0"
        >
          <span
            className={`absolute left-1.5 h-px w-6 bg-ivory transition-all duration-300 ${open ? "top-4 rotate-45" : "top-3"}`}
          />
          <span
            className={`absolute left-1.5 top-4 h-px w-6 bg-ivory transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute left-1.5 h-px w-6 bg-ivory transition-all duration-300 ${open ? "top-4 -rotate-45" : "top-5"}`}
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
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={pathname === l.href ? "text-ivory" : "hover:text-ivory"}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
