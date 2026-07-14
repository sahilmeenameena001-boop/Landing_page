"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const WORDS = [
  "Justice",
  "Integrity",
  "Advocacy",
  "Diligence",
  "Precision",
  "Trust",
];

export default function IntroLoader({ onDone }: { onDone: () => void }) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"words" | "reveal" | "done">("words");

  useEffect(() => {
    if (phase !== "words") return;
    if (index >= WORDS.length - 1) {
      const t = setTimeout(() => setPhase("reveal"), 900);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setIndex((i) => i + 1), 950);
    return () => clearTimeout(t);
  }, [index, phase]);

  useEffect(() => {
    if (phase !== "reveal") return;
    const t = setTimeout(() => {
      setPhase("done");
      onDone();
    }, 2200);
    return () => clearTimeout(t);
  }, [phase, onDone]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-grain-gradient" />

          {phase === "words" && (
            <div className="relative flex flex-col items-center gap-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={WORDS[index]}
                  initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative font-display italic text-4xl md:text-6xl tracking-wide text-ivory"
                >
                  {WORDS[index]}
                </motion.p>
              </AnimatePresence>
              <div className="flex items-center gap-2">
                {WORDS.map((w, i) => (
                  <span
                    key={w}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === index ? "w-6 bg-accent-400" : "w-1.5 bg-white/15"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {phase === "reveal" && (
            <motion.div className="relative flex flex-col items-center gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="h-40 w-40 md:h-52 md:w-52 relative"
              >
                <Image
                  src="/logo-final.png"
                  alt="Lex & Co. crest"
                  fill
                  sizes="208px"
                  className="object-contain drop-shadow-[0_0_36px_rgba(93,122,148,0.35)]"
                  priority
                />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="font-display text-3xl md:text-5xl tracking-[0.08em]"
              >
                Lex<span className="text-gradient">&amp;</span>Co.
              </motion.h1>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
