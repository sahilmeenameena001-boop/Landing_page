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
      const t = setTimeout(() => setPhase("reveal"), 500);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setIndex((i) => i + 1), 420);
    return () => clearTimeout(t);
  }, [index, phase]);

  useEffect(() => {
    if (phase !== "reveal") return;
    const t = setTimeout(() => {
      setPhase("done");
      onDone();
    }, 1600);
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
            <AnimatePresence mode="wait">
              <motion.p
                key={WORDS[index]}
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative font-display italic text-4xl md:text-6xl tracking-wide text-ivory"
              >
                {WORDS[index]}
              </motion.p>
            </AnimatePresence>
          )}

          {phase === "reveal" && (
            <motion.div className="relative flex flex-col items-center gap-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="h-28 w-28 md:h-36 md:w-36 relative"
              >
                <Image
                  src="/logo.png"
                  alt="Lex & Co. crest"
                  fill
                  sizes="144px"
                  className="object-contain drop-shadow-[0_0_30px_rgba(63,203,166,0.35)]"
                  priority
                />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
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
