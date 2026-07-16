"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";
// IntroLoader removed from automatic rendering to disable opening reveal
import Logo from "./Logo";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Chrome({ children }: { children: React.ReactNode }) {
  useState;
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  // IntroLoader usage disabled — reveal removed

  return (
    <>
      {/* IntroLoader removed */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent-400 origin-left z-[60]"
        style={{ scaleX: progress }}
      />
      <Logo />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
