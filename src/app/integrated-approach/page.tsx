import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integrated Approach | A.P. RANA & CO.",
  description:
    "Legal precision alongside forensic financial intelligence unified under one command.",
};

const PROCESS = [
  {
    number: "01",
    title: "Strategic Consultation",
    description:
      "A comprehensive initial briefing to identify legal vulnerabilities, financial exposure, and commercial objectives conducted jointly by our litigation partners and financial strategists. No generic advisory—every mandate is examined on its own terms.",
  },
  {
    number: "02",
    title: "Integrated Structuring",
    description:
      "Our advocates and chartered accountants construct a unified strategy from day one. Audit-ready documentation and defensible financial narratives are prepared before proceedings commence.",
  },
  {
    number: "03",
    title: "Proposal & Execution Plan",
    description:
      "Clients receive a written roadmap covering timelines, strategic milestones, hearing schedules, cost-benefit projections, and a transparent fee structure.",
  },
  {
    number: "04",
    title: "Aggressive Execution",
    description:
      "From SARFAESI notices and DRT applications to settlements and forensic audits, the team acts with institutional speed while providing regular progress reports and hearing updates.",
  },
  {
    number: "05",
    title: "Ongoing Defense & Advisory",
    description:
      "Post-resolution compliance monitoring, appellate surveillance, and continuous strategic advisory ensure clients remain protected long after the immediate dispute concludes.",
  },
];

export default function IntegratedApproachPage() {
  return (
    <main className="min-h-screen px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-brass-400">
            Integrated Approach
          </span>

          <h1 className="font-display text-5xl md:text-7xl mt-5 leading-tight">
            The <span className="italic text-gradient">Double-Barrel</span>
            <br />
            Advantage
          </h1>

          <p className="text-mist text-xl leading-relaxed mt-8">
            Legal precision alongside forensic financial intelligence unified
            under one command.
          </p>
        </div>

        {/* Introduction */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">
          <div>
            <p className="text-mist text-lg leading-relaxed">
              Modern institutional disputes rarely turn on legal issues alone.
              Balance sheets, ledger discrepancies, tax exposures, and forensic
              audit trails can determine the outcome of recovery proceedings as
              decisively as courtroom arguments.
            </p>

            <p className="text-mist text-lg leading-relaxed mt-6">
              Traditional law firms compartmentalize these functions, leaving
              clients to navigate fragmented counsel and information
              asymmetries at precisely the moment they can least afford it.
            </p>

            <p className="text-mist text-lg leading-relaxed mt-6">
              At A.P. RANA & CO, our core litigation team works alongside a
              dedicated in-house Chartered Accountancy wing, ensuring every
              legal argument is architecturally aligned with an unimpeachable
              financial position.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-display text-2xl text-accent-400">
                  Legal Precision
                </h3>
                <p className="text-sm text-mist mt-2">
                  Research-driven advocacy backed by experienced litigators.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-display text-2xl text-brass-400">
                  Financial Intelligence
                </h3>
                <p className="text-sm text-mist mt-2">
                  In-house CA support, forensic audits, and commercial analysis.
                </p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="glass-card rounded-3xl p-6">
            <div className="h-[550px] rounded-3xl border border-white/10 bg-white/5 flex items-center justify-center">
              <span className="text-mist text-lg text-center">
                Litigation Team + Chartered Accountancy Wing
                <br />
                (Image Placeholder)
              </span>
            </div>
          </div>
        </div>

        {/* Statement */}
        <div className="max-w-5xl mx-auto text-center mt-28">
          <blockquote className="font-display text-3xl md:text-4xl leading-relaxed">
            “Law is not practiced in silos here. Every case strategy rests on
            two pillars:
            <span className="italic text-gradient">
              {" "}
              legal precision and financial intelligence.
            </span>
            ”
          </blockquote>
        </div>

        {/* Process */}
        <div className="mt-28">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-brass-400">
              Engagement Process
            </span>

            <h2 className="font-display text-4xl md:text-5xl mt-4">
              How We Execute Every Mandate
            </h2>
          </div>

          <div className="space-y-8">
            {PROCESS.map((step) => (
              <div
                key={step.number}
                className="glass-card rounded-3xl p-8"
              >
                <div className="grid lg:grid-cols-[120px_1fr] gap-8">
                  <div>
                    <span className="font-display text-5xl text-accent-400">
                      {step.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl mb-4">
                      {step.title}
                    </h3>

                    <p className="text-mist leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="glass-card rounded-3xl p-12 text-center mt-24">
          <h2 className="font-display text-4xl">
            More Than Outside Counsel
          </h2>

          <p className="text-mist text-lg leading-relaxed max-w-3xl mx-auto mt-6">
            From the first SARFAESI notice to the final execution of a recovery
            decree, A.P. RANA & CO operates as a retained institutional partner
            rather than a one-mandate vendor.
          </p>

          <p className="text-accent-400 mt-8 font-semibold">
            One Team. One Strategy. One Command.
          </p>

          <Link
            href="/contact"
            className="inline-flex mt-10 rounded-full bg-accent-500 hover:bg-accent-400 transition-colors text-ink font-semibold px-8 py-4"
          >
            Schedule a Strategic Consultation
          </Link>
        </div>
      </div>
    </main>
  );
}