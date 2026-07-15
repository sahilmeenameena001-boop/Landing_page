"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const WORDS = ["Justice", "Integrity", "Advocacy", "Diligence", "Trust", "Excellence"];

export default function IntroLoader({ onDone }: { onDone: () => void }) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"words" | "reveal" | "done">("words");

  useEffect(() => {
    if (phase !== "words") return;
    if (index >= WORDS.length - 1) {
      const t = setTimeout(() => setPhase("reveal"), 400);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setIndex((i) => i + 1), 1100);
    return () => clearTimeout(t);
  }, [index, phase]);

  useEffect(() => {
    if (phase !== "reveal") return;
    const t = setTimeout(() => {
      setPhase("done");
      onDone();
    }, 1500);
    return () => clearTimeout(t);
  }, [phase, onDone]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink overflow-hidden"
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-grain-gradient"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {phase === "words" && (
            <div className="relative flex flex-col items-center gap-7">
              <AnimatePresence mode="wait">
                <motion.p
                  key={WORDS[index]}
                  initial={{ opacity: 0, scale: 0.92, y: 10, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.04, y: -10, filter: "blur(8px)" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="relative font-display italic text-5xl md:text-7xl tracking-wide text-ivory"
                >
                  {WORDS[index]}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
                    className="absolute left-0 -bottom-3 h-px w-full origin-left bg-gradient-to-r from-accent-400 via-brass-400 to-transparent"
                  />
                </motion.p>
              </AnimatePresence>
              <div className="flex items-center gap-2">
                {WORDS.map((w, i) => (
                  <span
                    key={w}
                    className={`h-1 rounded-full transition-all duration-300 ${
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
                aria-hidden
                className="absolute -inset-16 rounded-full bg-accent-500/10 blur-3xl"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-40 w-40 md:h-52 md:w-52"
              >
                <Image
                  src="/logo-final.png"
                  alt="Lex & Co. crest"
                  fill
                  sizes="208px"
                  className="object-contain drop-shadow-[0_0_36px_rgba(93,122,148,0.4)]"
                  priority
                />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 10, letterSpacing: "0.3em" }}
                animate={{ opacity: 1, y: 0, letterSpacing: "0.08em" }}
                transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
                className="font-display text-3xl md:text-5xl"
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
