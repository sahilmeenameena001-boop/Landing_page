"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";
import IntroLoader from "./IntroLoader";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Chrome({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    if (sessionStorage.getItem("lexco-intro-seen")) {
      setShowIntro(false);
    }
  }, []);

  const finishIntro = () => {
    sessionStorage.setItem("lexco-intro-seen", "1");
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <IntroLoader onDone={finishIntro} />}
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
