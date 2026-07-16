"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const ADVANTAGES = [
  {
    title: "Experienced Legal Professionals",
    description:
      "Every mandate is supervised by experienced litigators who combine courtroom advocacy with strategic commercial insight across complex disputes and institutional portfolios.",
  },
  {
    title: "Personalized Legal Advice",
    description:
      "No two matters are identical. Every legal strategy is tailored to the client's commercial objectives, risk profile, and long-term interests.",
  },
  {
    title: "Timely Assistance",
    description:
      "Institutional and individual clients receive prompt responses, hearing updates, and proactive case management throughout every engagement.",
  },
  {
    title: "In-House Financial Analysis",
    description:
      "Our dedicated CA team provides forensic financial analysis, settlement valuations, and recovery assessments to support every major mandate.",
  },
  {
    title: "Cross-Jurisdictional Capability",
    description:
      "With an active presence across New Delhi and Uttar Pradesh, we seamlessly manage matters before the Delhi High Court, NCLT, DRT, Allahabad High Court, and District Courts.",
  },
  {
    title: "Institutional Efficiency",
    description:
      "Structured case management protocols, hearing tracking, and periodic reporting allow us to efficiently manage large NPA and litigation portfolios.",
  },
  {
    title: "Ethical & Confidential Service",
    description:
      "Strict confidentiality protocols ensure that sensitive financial, commercial, and personal information remains protected at every stage.",
  },
  {
    title: "Research-Driven Advocacy",
    description:
      "Every brief is built on comprehensive legal research, current precedent analysis, and strategic positioning—not template drafting.",
  },
  {
    title: "End-to-End Representation",
    description:
      "From advisory and commercial structuring to appellate proceedings and post-judgment enforcement, we remain your counsel throughout the entire matter lifecycle.",
  },
];

export default function Advantage() {
  return (
    <section
      id="advantage"
      className="relative px-6 pt-40 md:pt-44 pb-28 md:pb-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-accent-400">
            A.P. RANA & CO
          </span>

          <h2 className="font-display text-4xl md:text-5xl mt-4">
            The <span className="italic text-gradient">Advantage</span> &
            Client Commitment
          </h2>

          <p className="text-mist text-lg leading-relaxed mt-5">
            Elite corporations and financial institutions trust A.P. RANA &
            CO because we align legal strategy with ultimate commercial
            objectives. These commitments define how we engage with every
            client—from a single matter instruction to a full institutional
            panel mandate.
          </p>
        </Reveal>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {ADVANTAGES.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="glass-card rounded-2xl p-7 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-400/10 flex items-center justify-center mb-5">
                  <span className="font-display text-xl text-accent-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-semibold text-lg mb-3">
                  {item.title}
                </h3>

                <p className="text-mist text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Section */}
        <Reveal delay={0.5}>
          <div className="glass-card rounded-3xl p-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Content */}
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-brass-400">
                  Client Commitment
                </span>

                <h3 className="font-display text-3xl mt-4">
                  Strategic Counsel.
                  <br />
                  Consistent Communication.
                </h3>

                <p className="text-mist leading-relaxed mt-6">
                  From pre-dispute advisory and commercial structuring through
                  trial, appellate proceedings, and post-judgment enforcement,
                  A.P. RANA & CO provides seamless representation across the
                  complete lifecycle of a legal engagement.
                </p>

                <p className="text-mist leading-relaxed mt-5">
                  We maintain active precedent monitoring, institutional
                  reporting systems, and strict confidentiality standards to
                  ensure that every client receives sophisticated, research-led
                  advocacy.
                </p>

                <div className="mt-8 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <p className="font-semibold">
                    Institutional Enquiries
                  </p>

                  <p className="text-mist text-sm mt-2">
                    To arrange an empanelment presentation, credential
                    submission, or strategic consultation, contact
                    A.P. RANA & CO directly.
                  </p>

                  <p className="text-accent-400 text-sm mt-3">
                    All institutional enquiries are responded to within
                    24 hours.
                  </p>
                </div>
              </div>

              {/* Image Area */}
              <div className="grid grid-cols-2 gap-5">
                <div className="h-80 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {/* Replace with founder image */}
                  <span className="text-mist">
                    Founder Portrait
                  </span>
                </div>

                <div className="space-y-5">
                  <div className="h-[150px] rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-mist text-sm">
                      Team Image
                    </span>
                  </div>

                  <div className="h-[150px] rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-mist text-sm">
                      Courtroom / Office
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}