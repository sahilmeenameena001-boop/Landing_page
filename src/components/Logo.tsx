"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed top-4 md:top-5 left-4 md:left-8 z-50"
    >
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative h-11 w-11 md:h-14 md:w-14 shrink-0 transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/logo-final.png"
            alt="Lex & Co."
            fill
            sizes="56px"
            className="object-contain"
            priority
          />
        </div>
        <span className="hidden sm:block font-display text-base md:text-lg tracking-[0.12em] text-ink">
          LEX&amp;CO.
        </span>
      </Link>
    </motion.div>
  );
}
