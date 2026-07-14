"use client";

import Reveal from "./Reveal";

const RESULTS = [
  { amount: "$2.5M", type: "Personal Injury", desc: "Settlement for car accident injury." },
  { amount: "$1.2M", type: "Wrongful Death", desc: "Recovery for medical negligence." },
  { amount: "$950K", type: "Medical Malpractice", desc: "Healthcare provider accountability." },
  { amount: "$750K", type: "Truck Accident", desc: "Commercial accident settlement." },
];

export default function CaseResults() {
  return (
    <section id="results" className="relative px-6 py-28 md:py-36">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-plum-400">
            Case Results
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">
            A Record That <span className="italic text-gradient">Speaks</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESULTS.map((r, i) => (
            <Reveal key={r.type} delay={i * 0.08} className="glass-card rounded-2xl p-7 text-center">
              <p className="font-display text-4xl text-jade-400">{r.amount}</p>
              <p className="font-semibold mt-3">{r.type}</p>
              <p className="text-mist text-sm mt-2 leading-relaxed">{r.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
