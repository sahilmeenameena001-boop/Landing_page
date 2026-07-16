"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Reveal from "./Reveal";

const CLIENTS = [
  "Banks, NBFCs & Cooperative Societies",
  "Real Estate Developers & MSMEs",
  "Multinational Corporations & HNIs",
  "Startups, Promoters & Directors",
  "Manufacturing & Industrial Enterprises",
];

const HIGHLIGHTS = [
  "Full-Service Litigation & Corporate Advisory",
  "Delhi-UP Corridor Dominance",
  "Supreme Court to District Court Coverage",
  "Integrated Legal & Financial Advisory Model",
  "Research-First Litigation Culture",
];

const JURISDICTIONS = [
  "Supreme Court of India",
  "Delhi High Court",
  "Allahabad & Lucknow High Court",
  "NCLT (New Delhi)",
  "DRT / DRAT (Delhi & UP)",
  "APTEL",
  "Meerut District & Sessions Court",
  "UP State Appellate Tribunals",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 pt-40 md:pt-44 pb-28 md:pb-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-brass-400">
              About A.P. RANA & CO.
            </span>

            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
              Dedicated to Justice.
              <br />
              <span className="italic text-gradient">
                A Firm Built for High-Stakes Mandates.
              </span>
            </h2>

            <p className="text-mist text-lg leading-relaxed mt-8">
              At A.P. Rana & Co. (Legal), we provide comprehensive legal
              services with professionalism, integrity, and dedication. Our
              approach combines legal expertise with practical solutions to
              protect our clients' rights and interests.
            </p>

            <p className="text-mist text-lg leading-relaxed mt-5">
              Whether you require legal advice, documentation, negotiations,
              arbitration, or courtroom representation, we are committed to
              delivering effective legal support tailored to your needs.
            </p>

            <p className="text-mist leading-relaxed mt-5">
              Our practice exists at the intersection of meticulous research,
              relentless advocacy, and forensic financial preparedness. Legal
              arguments that are not grounded in financial reality are
              vulnerable. At A.P. RANA & CO, they are not.
            </p>

            <div className="flex gap-10 mt-10">
              <div>
                <p className="font-display text-2xl text-accent-400">
                  Research
                </p>
                <p className="text-mist text-sm">
                  The foundation of every brief
                </p>
              </div>

              <div>
                <p className="font-display text-2xl text-brass-400">
                  Advocacy
                </p>
                <p className="text-mist text-sm">
                  Executed without compromise
                </p>
              </div>
            </div>
          </Reveal>

          {/* Founder Image */}
          <Reveal delay={0.15}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="glass-card rounded-3xl p-6"
            >
              <div className="h-[600px] rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center">
                {/* Replace later */}
                <span className="text-mist">
                  Founder / Managing Partner Portrait
                </span>

                {/* Example:
                <Image
                  src="/team/ap-rana.jpg"
                  fill
                  alt="A.P. Rana"
                  className="object-cover rounded-3xl"
                />
                */}
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* Middle Section */}
        <Reveal delay={0.25} className="mt-24">
          <div className="glass-card rounded-3xl p-10">
            <h3 className="font-display text-3xl text-center mb-10">
              At a Glance
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
              {CLIENTS.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
                >
                  <p className="text-sm text-mist leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Highlights */}
        <Reveal delay={0.35} className="mt-16">
          <h3 className="font-display text-3xl text-center mb-10">
            Why Clients Choose Us
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {HIGHLIGHTS.map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -6 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <p className="text-accent-400 font-semibold">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Jurisdictions */}
        <Reveal delay={0.45} className="mt-20">
          <div className="glass-card rounded-3xl p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-brass-400 text-center">
              Jurisdiction
            </p>

            <h3 className="font-display text-3xl text-center mt-4 mb-10">
              Courts & Tribunals We Regularly Appear Before
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {JURISDICTIONS.map((court) => (
                <div
                  key={court}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center"
                >
                  <p className="text-sm text-mist">{court}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.55} className="flex justify-center mt-16">
          <Link
            href="/practice"
            className="rounded-full bg-accent-500 hover:bg-accent-400 transition-colors text-ink font-semibold px-8 py-4"
          >
            Explore Our Practice Areas
          </Link>
        </Reveal>
      </div>
    </section>
  );
}