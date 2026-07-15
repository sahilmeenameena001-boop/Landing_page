"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function StatCounter({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });

  useEffect(() => {
    if (inView && match) motionValue.set(Number(match[1]));
  }, [inView, match, motionValue]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current && match) {
        ref.current.textContent = `${Math.round(v)}${match[2]}`;
      }
    });
  }, [spring, match]);

  if (!match) {
    return <p className="font-display text-3xl md:text-4xl text-gradient">{value}</p>;
  }

  return (
    <p ref={ref} className="font-display text-3xl md:text-4xl text-gradient">
      0{match[2]}
    </p>
  );
}
