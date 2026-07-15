"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { AWARDS } from "@/lib/firm";

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Personal Injury Client",
    quote:
      "Mr. Anderson and his team were absolutely amazing. They handled my case with professionalism and got me the best result possible.",
  },
  {
    name: "Michael Rodriguez",
    role: "Criminal Defense Client",
    quote:
      "I was facing serious charges and didn't know where to turn. Lex&Co. gave me hope and fought tirelessly for my freedom.",
  },
  {
    name: "Emily Chen",
    role: "Family Law Client",
    quote:
      "Going through a divorce was difficult, but the team at Lex&Co. made the process manageable.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative px-6 pt-40 md:pt-44 pb-28 md:pb-32">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-accent-400">
            Rana & Co.
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">
            Voices of <span className="italic text-gradient">Trust</span>
          </h2>
          <p className="text-mist text-lg leading-relaxed mt-5">
            Elite corporations and financial institutions trust A.P. RANA & CO because we align legal strategy with
ultimate commercial objectives.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="glass-card rounded-2xl p-8 flex flex-col gap-5 h-full"
              >
                <span className="font-display text-5xl text-brass-400/60 leading-none">&ldquo;</span>
                <p className="text-mist leading-relaxed -mt-6">{t.quote}</p>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-mist uppercase tracking-wide">{t.role}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex flex-wrap justify-center gap-4">
          {AWARDS.map((a) => (
            <span
              key={a}
              className="glass-card rounded-full px-6 py-2.5 text-sm text-mist"
            >
              {a}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
