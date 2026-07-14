"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "What does a consultation cost?",
    a: "We offer free initial consultations for all potential clients.",
  },
  {
    q: "What case types do you handle?",
    a: "Criminal Defense, Family Law, Personal Injury, and Business Law.",
  },
  {
    q: "What is the expected timeline?",
    a: "It varies depending on complexity — some cases resolve in a few weeks, others take several months or even years.",
  },
  {
    q: "What compensation can I expect?",
    a: "Compensation varies by case type and may include medical expenses, lost wages, pain and suffering, and punitive damages.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative px-6 py-28 md:py-36">
      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-plum-400">FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">
            Common <span className="italic text-gradient">Questions</span>
          </h2>
        </Reveal>

        <div className="flex flex-col gap-4">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.06} className="glass-card rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-jade-400 text-2xl leading-none shrink-0"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="text-mist px-6 pb-5 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
