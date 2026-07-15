"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Reveal from "./Reveal";
import StatCounter from "./StatCounter";

const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Cases Won" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-40 md:pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grain-gradient" />
      <motion.div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full bg-accent-500/10 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-4xl text-center flex flex-col items-center gap-6">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-accent-400 border border-accent-400/30 rounded-full px-4 py-1.5">
            Trusted Legal Excellence Since 2008
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight">
            Experienced.{" "}
            <span className="italic text-gradient">Dedicated.</span>
            <br />
            Relentless.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="max-w-2xl text-mist text-lg leading-relaxed">
            We are a full-service law firm providing strategic legal solutions
            with integrity, professionalism and results.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="flex flex-col sm:flex-row gap-4 mt-2">
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
      </div>

      <Reveal
        delay={0.4}
        className="relative grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-20 w-full max-w-4xl"
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
