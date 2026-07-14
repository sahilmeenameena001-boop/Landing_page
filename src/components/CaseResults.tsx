"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const RESULTS = [
  { amount: "$2.5M", type: "Personal Injury", desc: "Settlement for car accident injury." },
  { amount: "$1.2M", type: "Wrongful Death", desc: "Recovery for medical negligence." },
  { amount: "$950K", type: "Medical Malpractice", desc: "Healthcare provider accountability." },
  { amount: "$750K", type: "Truck Accident", desc: "Commercial accident settlement." },
];

export default function CaseResults() {
  return (
    <section id="results" className="relative px-6 pt-40 md:pt-44 pb-28 md:pb-32">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-brass-400">
            Case Results
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">
            A Record That <span className="italic text-gradient">Speaks</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESULTS.map((r, i) => (
            <Reveal key={r.type} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="glass-card rounded-2xl p-7 text-center h-full"
              >
                <p className="font-display text-4xl text-accent-400">{r.amount}</p>
                <p className="font-semibold mt-3">{r.type}</p>
                <p className="text-mist text-sm mt-2 leading-relaxed">{r.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
