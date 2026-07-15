"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Reveal from "./Reveal";

const AREAS = [
  {
    title: "Criminal Defense",
    intro: "Facing charges is overwhelming — we build an aggressive, evidence-first defense from day one.",
    tags: ["DUI", "Drug Crimes", "Traffic", "Assault"],
  },
  {
    title: "Family Law",
    intro: "Compassionate, decisive counsel through the most personal legal matters a family can face.",
    tags: ["Divorce", "Child Custody", "Spousal Support"],
  },
  {
    title: "Personal Injury",
    intro: "No fee unless we win — we fight for every dollar of the compensation you're owed.",
    tags: ["Car Accidents", "Slip & Fall", "Medical Malpractice"],
  },
  {
    title: "Business Law",
    intro: "Protecting your company's interests, from first contract to complex dispute resolution.",
    tags: ["Contracts", "Disputes", "Compliance"],
  },
];

export default function PracticeAreas() {
  return (
    <section id="practice" className="relative px-6 pt-40 md:pt-44 pb-28 md:pb-32">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-accent-400">
            How We Can Help
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">
            Proven Results. <span className="italic text-gradient">Trusted Advocacy.</span>
          </h2>
          <p className="text-mist text-lg leading-relaxed mt-5">
            We are a full-service law firm providing strategic legal solutions
            with integrity, professionalism and results across four core
            practice areas.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AREAS.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="glass-card rounded-2xl p-7 h-full flex flex-col gap-4"
              >
                <span className="font-display text-3xl text-brass-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl">{a.title}</h3>
                <p className="text-mist text-sm leading-relaxed">{a.intro}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {a.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-accent-500 border border-accent-400/30 rounded-full px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="flex flex-col items-center text-center gap-4 mt-16">
          <p className="text-mist">Not sure which practice area fits your situation?</p>
          <Link
            href="/contact"
            className="rounded-full bg-accent-500 hover:bg-accent-400 transition-colors text-ink font-semibold px-8 py-3.5"
          >
            Get a Free Consultation
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
