"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const AREAS = [
  {
    title: "Criminal Defense",
    desc: "DUI, Drug Crimes, Traffic, Assault and other criminal charges.",
  },
  {
    title: "Family Law",
    desc: "Divorce, Child Custody, Spousal Support and other family matters.",
  },
  {
    title: "Personal Injury",
    desc: "Car Accidents, Slip & Fall, Medical Malpractice and other injuries.",
  },
  {
    title: "Business Law",
    desc: "Contracts, Disputes, Compliance and other business matters.",
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
                <p className="text-mist text-sm leading-relaxed">{a.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
