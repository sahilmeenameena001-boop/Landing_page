"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Reveal from "./Reveal";
import StatCounter from "./StatCounter";
import { STATS } from "@/lib/firm";

const VALUES = ["Integrity", "Advocacy", "Results"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-40 md:pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grain-gradient" />
      <motion.div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full bg-accent-500/10 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-4xl text-center flex flex-col items-center gap-6">
        <Reveal>
          <motion.svg
            aria-hidden
            viewBox="0 0 200 140"
            className="h-24 w-24 md:h-32 md:w-32 mb-2 mx-auto"
            fill="none"
            stroke="url(#scalesGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <defs>
              <linearGradient id="scalesGradient" x1="0" y1="0" x2="200" y2="140">
                <stop offset="0%" stopColor="#E3C589" />
                <stop offset="100%" stopColor="#C9A227" />
              </linearGradient>
            </defs>
            <line x1="100" y1="10" x2="100" y2="120" />
            <motion.g
              animate={{ rotate: [-2.5, 2.5, -2.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "100px 22px" }}
            >
              <line x1="34" y1="22" x2="166" y2="22" />
              <line x1="34" y1="22" x2="34" y2="52" />
              <line x1="166" y1="22" x2="166" y2="52" />
              <path d="M14 52 Q34 78 54 52" />
              <path d="M146 52 Q166 78 186 52" />
            </motion.g>
            <path d="M100 10 L92 22 L108 22 Z" fill="url(#scalesGradient)" stroke="none" />
            <path d="M76 120 H124" />
            <path d="M88 133 H112" />
          </motion.svg>
        </Reveal>

        <Reveal delay={0.05}>
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-accent-400 border border-accent-400/30 rounded-full px-4 py-1.5">
            Trusted Legal Excellence Since 2008
          </span>
        </Reveal>

        <Reveal delay={0.15}>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight">
            Experienced.{" "}
            <span className="italic text-gradient">Dedicated.</span>
            <br />
            Relentless.
          </h1>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="max-w-2xl text-mist text-lg leading-relaxed">
            We are a full-service law firm providing strategic legal solutions
            with integrity, professionalism and results.
          </p>
        </Reveal>

        <Reveal delay={0.35} className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link
            href="/contact"
            className="rounded-full bg-accent-500 hover:bg-accent-400 transition-colors text-ink font-semibold px-8 py-3.5"
          >
            Free Consultation
          </Link>
          <Link
            href="/practice"
            className="rounded-full glass-card hover:border-brass-400/40 transition-colors px-8 py-3.5 font-medium"
          >
            Our Practice Areas
          </Link>
        </Reveal>

        <Reveal delay={0.42} className="flex items-center gap-5 mt-1 text-xs tracking-[0.2em] uppercase text-mist">
          {VALUES.map((v, i) => (
            <span key={v} className="flex items-center gap-5">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-accent-500/70" />}
              {v}
            </span>
          ))}
        </Reveal>
      </div>

      <Reveal
        delay={0.5}
        className="relative grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-16 w-full max-w-4xl"
      >
        {STATS.map((s) => (
          <motion.div
            key={s.label}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="text-center glass-card rounded-2xl py-6 px-2"
          >
            <StatCounter value={s.value} />
            <p className="text-mist text-xs md:text-sm mt-2 tracking-wide uppercase">
              {s.label}
            </p>
          </motion.div>
        ))}
      </Reveal>
    </section>
  );
}
