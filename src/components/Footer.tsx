"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/practice", label: "Practice" },
  { href: "/results", label: "Team" },
  { href: "/testimonials", label: "Why us" },
  { href: "/contact", label: "Contact" },
];

const PRACTICE_LINKS = [
  "Criminal Defense",
  "Family Law",
  "Personal Injury",
  "Business Law",
];

const SOCIALS = [
  {
    label: "X",
    path: "M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.9L4.7 22H1.6l8.1-9.3L1 2h7.1l4.9 6.3L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z",
  },
  {
    label: "LinkedIn",
    path: "M6.94 8.5H3.56V21h3.38V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM21 21h-3.38v-6.4c0-1.53-.03-3.5-2.13-3.5-2.14 0-2.47 1.67-2.47 3.39V21H9.65V8.5h3.24v1.7h.05c.45-.85 1.56-1.75 3.2-1.75 3.42 0 4.06 2.25 4.06 5.18V21Z",
  },
  {
    label: "Facebook",
    path: "M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46H16.5V4.34C16.06 4.28 14.9 4.17 13.55 4.17c-2.83 0-4.77 1.73-4.77 4.9v2.43H6.5v3h2.28V21h4.72Z",
  },
  {
    label: "Instagram",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.05a6.79 6.79 0 1 0 0 13.58 6.79 6.79 0 0 0 0-13.58Zm0 11.2a4.41 4.41 0 1 1 0-8.82 4.41 4.41 0 0 1 0 8.82Zm7.06-11.47a1.59 1.59 0 1 1-3.17 0 1.59 1.59 0 0 1 3.17 0Z",
  },
  {
    label: "YouTube",
    path: "M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.27 3.6-6.27 3.6Z",
  },
];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="relative px-6 pt-20 pb-10 border-t border-ink/10">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        <Reveal className="grid md:grid-cols-[1.4fr_1fr_1fr_1.3fr] gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9">
                <Image src="/logo-final.png" alt="A.P. RANA & CO." fill sizes="36px" className="object-contain" />
              </div>
              <div>
                <p className="font-display tracking-[0.15em]">A.P. RANA &amp; CO.</p>
                <p className="text-xs text-mist">Trusted since 2008</p>
              </div>
            </div>
            <p className="text-sm text-mist leading-relaxed max-w-xs">
              Providing exceptional legal services with integrity, professionalism and results.
            </p>
            <div className="flex items-center gap-3 mt-1">
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-mist hover:text-ink hover:border-accent-400/40 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d={s.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-brass-400 mb-4">Quick Links</p>
            <ul className="flex flex-col gap-2.5 text-sm text-mist">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-ink transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-brass-400 mb-4">Practice Areas</p>
            <ul className="flex flex-col gap-2.5 text-sm text-mist">
              {PRACTICE_LINKS.map((p) => (
                <li key={p}>
                  <Link href="/practice" className="hover:text-ink transition-colors">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-brass-400 mb-4">Legal Insights</p>
            <p className="text-sm text-mist leading-relaxed mb-4">
              Subscribe for legal insights and firm updates. No spam.
            </p>
            {subscribed ? (
              <p className="text-sm text-accent-400">Thanks — you&rsquo;re subscribed.</p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
                className="flex gap-2"
              >
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="min-w-0 flex-1 bg-ink/5 border border-ink/10 rounded-full px-4 py-2.5 text-sm outline-none focus:border-accent-400/50 transition-colors placeholder:text-mist"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="shrink-0 rounded-full bg-accent-500 hover:bg-accent-400 transition-colors text-ink text-sm font-semibold px-5 py-2.5"
                >
                  Join
                </motion.button>
              </form>
            )}
          </div>
        </Reveal>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-mist border-t border-ink/10 pt-8">
          <p>&copy; 2026 A.P. RANA &amp; CO. All rights reserved.</p>
          <p>A.P.Rana & Co. (Legal) Chamber No. 530, Lawyer's Chamber Block, saket Court Complex, Saket, New DElhi 110017</p>
        </div>
      </div>
    </footer>
  );
}
