"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Reveal from "./Reveal";
import StatCounter from "./StatCounter";
import { STATS, AWARDS } from "@/lib/firm";

export default function About() {
  return (
    <section id="about" className="relative px-6 pt-40 md:pt-44 pb-28 md:pb-32">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <Reveal>
          <span className="text-xs tracking-[0.3em] uppercase text-brass-400">
            About Lex&amp;Co.
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
            Dedicated to Justice.
            <br />
            <span className="italic text-gradient">A Firm Built for High-Stakes Mandates.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-mist text-lg leading-relaxed">
            At A.P. Rana & Co. (Legal), we provide comprehensive
legal services with professionalism, integrity, and
dedication. Our approach combines legal expertise with
practical solutions to protect our clients' rights and
interests.
Whether you require legal advice, documentation,
negotiations, arbitration, or courtroom representation,
we are committed to delivering effective legal support
tailored to your needs.
intersection of meticulous research, relentless
advocacy, and forensic financial preparedness. Legal
arguments that are not grounded in financial reality are
vulnerable. At A.P. RANA & CO, they are not.
intersection of meticulous research, relentless advocacy, and forensic financial preparedness. Legal
arguments that are not grounded in financial reality are vulnerable. At A.P. RANA & CO, they are not.
By bridging the Delhi-UP legal corridor, A.P. RANA & CO offers an operational advantage that few firms
can replicate deep-rooted bar networks and trial experience across Saket Courts, the NCLT, the Debt
Recovery Tribunal, and the Meerut District and Sessions Court. High-volume institutional mandates are
executed with precision, speed, and zero administrative delay.     
          </p>
          <div className="flex gap-8 mt-8">
            <div>
              <p className="font-display text-2xl text-accent-400">Justice</p>
              <p className="text-mist text-sm mt-1">Our foundation</p>
            </div>
            <div>
              <p className="font-display text-2xl text-brass-400">Trust</p>
              <p className="text-mist text-sm mt-1">Our practice</p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal
        delay={0.25}
        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-20"
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

      <Reveal delay={0.35} className="max-w-5xl mx-auto mt-16">
        <p className="text-xs tracking-[0.3em] uppercase text-brass-400 text-center mb-6">
          Recognized Excellence
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {AWARDS.map((a) => (
            <span key={a} className="glass-card rounded-full px-6 py-2.5 text-sm text-mist">
              {a}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.45} className="flex justify-center mt-16">
        <Link
          href="/practice"
          className="rounded-full bg-accent-500 hover:bg-accent-400 transition-colors text-ink font-semibold px-8 py-3.5"
        >
          Explore Our Practice Areas
        </Link>
      </Reveal>
    </section>
  );
}
