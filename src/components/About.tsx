"use client";

import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative px-6 pt-40 md:pt-44 pb-28 md:pb-32">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <Reveal>
          <span className="text-xs tracking-[0.3em] uppercase text-brass-400">
            About Lex&amp;Co.
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
            Dedicated to Justice.
            <br />
            <span className="italic text-gradient">Committed to You.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-mist text-lg leading-relaxed">
            With over 15 years of experience, our firm delivers personalized
            legal services tailored to achieve the best outcomes for our
            clients — grounded in discretion, precision, and an unwavering
            commitment to advocacy.
          </p>
          <div className="flex gap-8 mt-8">
            <div>
              <p className="font-display text-2xl text-accent-400">Justice</p>
              <p className="text-mist text-sm mt-1">Our foundation</p>
            </div>
            <div>
              <p className="font-display text-2xl text-brass-400">Trust</p>
              <p className="text-mist text-sm mt-1">Our practice</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
