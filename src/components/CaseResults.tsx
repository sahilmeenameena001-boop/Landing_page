"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const TEAM = [
  {
    name: "Adv. A.P. Rana",
    position: "Founder & Principal Litigation Strategist",
    image: "/team/ap-rana.jpg",
    qualifications:
      "B.Com. LL.B. (Hons.), Amity Law School · LL.M. in Corporate & Commercial Law · Ph.D. in Law (Pursuing)",
    meta:
      "Enrolled: 2023 · Supreme Court of India · Delhi High Court · NCLT · DRT · District Courts",
    description:
      "As Founder and Principal Litigation Strategist of A.P. RANA & CO, Mr. A.P. Rana combines academic depth with aggressive courtroom execution. His practice focuses on banking and institutional recovery, SARFAESI proceedings, DRT mandates, SLPs, Quashing Petitions, and multi-jurisdictional settlement deeds. Prior to founding the firm, he served as Legal Analyst under Mr. D.K. Singh, Former Vice Chairman of the Bar Council of Delhi, developing expertise in apex court portfolio management and institutional litigation.",
  },
  {
    name: "Adv. Neelam",
    position: "Senior Associate",
    image: "/team/neelam.jpg",
    qualifications:
      "Litigation & Dispute Resolution Practice",
    meta: "Practicing in Meerut District Court",
    description:
      "Ms. Neelam is a key member of the firm's litigation and dispute resolution practice. She advises corporations, financial institutions, and private clients in commercial litigation, white-collar crime, recovery proceedings, constitutional remedies, and regulatory enforcement. She also manages significant litigation portfolios, mentors junior associates, and works closely with the firm's financial and forensic teams to deliver commercially focused legal strategies.",
  },
  {
    name: "Adv. Akash Panwar",
    position: "Senior Associate",
    image: "/team/akash-panwar.jpg",
    qualifications:
      "B.A. LL.B. · LL.M. in Corporate & Financial Laws, O.P. Jindal Global University · MBA, Durham University (UK)",
    meta:
      "Enrolled: 2021 · Commercial Arbitral Tribunals · NCLT · High Courts · DRT",
    description:
      "Mr. Akash Panwar integrates courtroom advocacy with structured commercial foresight. He leads the firm's institutional enforcement and commercial arbitration practice and serves as All-India Litigation and Strategic Counsel for Crocs India, while also advising M/s Goanwala Organics and M/s Civic Fix on legal and strategic matters.",
  },
  {
    name: "Adv. Shashank",
    position: "Associate",
    image: "/team/shashank.jpg",
    qualifications:
      "B.B.A. LL.B., Guru Gobind Singh Indraprastha University · Certificate Course in Intellectual Property Law",
    meta:
      "Enrolled: 2023 · Delhi High Court · District Courts · Sessions Courts",
    description:
      "Mr. Shashank forms part of the firm's litigation and dispute resolution practice, assisting in commercial disputes, civil litigation, regulatory proceedings, and white-collar matters. His work focuses on legal research, drafting pleadings, analyzing judicial precedents, and supporting senior counsel before courts and tribunals.",
  },
  {
    name: "Adv. Aditi",
    position: "Associate",
    image: "/team/aditi.jpg",
    qualifications:
      "B.A. (History), University of Delhi · LL.B., Faculty of Law, University of Delhi",
    meta:
      "Enrolled: 2025 · Delhi High Court · District Courts · NCLT",
    description:
      "Ms. Aditi is engaged in the firm's corporate, commercial, and regulatory advisory practice. Her work includes corporate structuring, commercial contracts, due diligence, regulatory analysis, and governance advisory. She contributes to multidisciplinary engagements requiring both legal precision and commercial understanding.",
  },
];

export default function CoreTeam() {
  return (
    <section
      id="team"
      className="relative px-6 pt-40 md:pt-44 pb-28 md:pb-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <Reveal className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-brass-400">
            The Core Litigation Team
          </span>

          <h2 className="font-display text-4xl md:text-5xl mt-4">
            The Lawyers Behind Every{" "}
            <span className="italic text-gradient">Mandate</span>
          </h2>

          <p className="text-mist text-lg leading-relaxed mt-6">
            A.P. RANA & CO's strength derives from a compact, deeply
            experienced team in which every member carries direct
            responsibility across the mandates they supervise. Our partners
            and senior associates are not institutional figureheads—they are
            the lawyers who appear in court, draft the pleadings, and manage
            client relationships from instruction to resolution.
          </p>
        </Reveal>

        {/* Team Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {TEAM.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="glass-card rounded-3xl p-8 h-full"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Image Placeholder */}
                  <div className="flex-shrink-0">
                    <div className="w-40 h-48 rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
                      {/* Replace with Image component later */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />

                      {/* If image not available, use:
                      <span className="text-mist text-sm">
                        Profile Photo
                      </span>
                      */}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display text-2xl">
                      {member.name}
                    </h3>

                    <p className="text-accent-400 font-semibold mt-1">
                      {member.position}
                    </p>

                    <p className="text-sm text-mist mt-4 leading-relaxed">
                      {member.qualifications}
                    </p>

                    <div className="mt-4 rounded-xl bg-white/5 p-3 border border-white/10">
                      <p className="text-xs uppercase tracking-wider text-brass-400">
                        Jurisdictions & Enrollment
                      </p>

                      <p className="text-sm text-mist mt-2">
                        {member.meta}
                      </p>
                    </div>

                    <p className="text-mist leading-relaxed mt-5 text-sm">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}