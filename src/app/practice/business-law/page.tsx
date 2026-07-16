import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Law | A.P. RANA & CO.",
  description:
    "Corporate & Commercial Law — litigation, arbitration, regulatory defense.",
};

const services = [
  {
    title: "Commercial Arbitration",
    description:
      "Representation in institutional and ad hoc arbitration involving commercial contracts, shareholder agreements, joint ventures and distribution arrangements. We prepare pleadings, statements of claim, evidentiary submissions and advise on interim relief under Section 9, execution under Section 36 and challenge proceedings under Section 34 of the Arbitration & Conciliation Act.",
  },
  {
    title: "Contractual & Shareholder Disputes",
    description:
      "Representation in contractual breach matters, shareholder oppression and mismanagement proceedings before the NCLT, enforcement of settlement agreements, joint venture disputes and contested board resolutions with commercially focused litigation strategies.",
  },
  {
    title: "Energy Sector Litigation",
    description:
      "Specialized representation before the Appellate Tribunal for Electricity (APTEL) involving tariff disputes, Power Purchase Agreements (PPA), regulatory compliance, and appeals arising from State Electricity Regulatory Commission orders.",
  },
  {
    title: "Interim Relief & Injunctions",
    description:
      "Securing urgent interim relief under Order 39 CPC and Section 9 of the Arbitration Act to preserve assets, restrain contractual breaches, prevent asset dissipation and protect commercial interests pending final adjudication.",
  },
  {
    title: "Employment & Labour Litigation",
    description:
      "Advising corporates on wrongful termination claims, industrial tribunal proceedings, ESIC & PF compliance, non-compete enforcement, confidentiality obligations and employment dispute resolution.",
  },
  {
    title: "Consumer & Regulatory Defence",
    description:
      "Defending businesses before Consumer Commissions, SEBI proceedings and regulatory authorities by combining litigation strategy with practical regulatory compliance advice.",
  },
];

const representativeWork = [
  "Section 9 interim relief applications before the Delhi High Court in high-value commercial disputes.",
  "NCLT proceedings for shareholder oppression and mismanagement under the Companies Act, 2013.",
  "Institutional and ad hoc arbitration mandates covering commercial contracts and joint venture disputes.",
  "NCLT petitions under Sections 7 & 9 of the Insolvency and Bankruptcy Code.",
  "APTEL proceedings involving tariff disputes and Power Purchase Agreement enforcement.",
  "All-India litigation and strategic counsel mandate for Crocs India involving commercial recovery, vendor disputes and employment litigation.",
  "Panel Legal Counsel for M/s Gunwale Organics.",
  "Panel Legal Counsel for M/s Civic Fix.",
];

export default function BusinessLawPage() {
  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
        <p className="uppercase tracking-[0.35em] text-sm text-accent-500 mb-4">
          Practice Area
        </p>

        <h1 className="font-display text-5xl md:text-6xl leading-tight">
          Corporate & Commercial
          <br />
          <span className="italic text-accent-500">Law</span>
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-lg leading-8 text-mist">
          Dispute resolution as a strategic business instrument—not merely a
          legal obligation. We help businesses resolve complex disputes while
          protecting their long-term commercial interests through litigation,
          arbitration, negotiation and regulatory advocacy.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-white border border-neutral-200 rounded-3xl p-10 shadow-sm">
          <h2 className="font-display text-3xl mb-6">
            Strategic Commercial Litigation
          </h2>

          <p className="text-mist leading-8 mb-6">
            Commercial disputes, managed without strategic discipline, become
            protracted liabilities. At A.P. RANA & CO., corporate litigation is
            approached as a form of business management. Our objective is not
            simply to win legal arguments, but to resolve disputes in the manner
            most consistent with our clients' long-term commercial interests—
            whether through aggressive enforcement, negotiated settlement,
            arbitration or appellate proceedings.
          </p>

          <p className="text-mist leading-8">
            Our corporate litigation team has represented promoters, directors,
            multinational corporations and financial institutions in high-value
            contractual disputes, shareholder conflicts and complex
            cross-jurisdictional enforcement proceedings.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.35em] text-sm text-accent-500 mb-3">
            Core Services
          </p>

          <h2 className="font-display text-4xl">
            Our Corporate Law Practice
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl border border-neutral-200 p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-display text-2xl mb-5">
                {service.title}
              </h3>

              <p className="text-mist leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Representative Work */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-white border border-neutral-200 rounded-3xl p-10">
          <p className="uppercase tracking-[0.35em] text-sm text-accent-500 mb-3">
            Experience
          </p>

          <h2 className="font-display text-4xl mb-10">
            Representative Work
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {representativeWork.map((item) => (
              <div
                key={item}
                className="flex gap-3 items-start rounded-xl border border-neutral-100 p-4"
              >
                <span className="text-accent-500 font-bold text-lg">✓</span>

                <p className="text-mist leading-7">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-3xl border border-neutral-200 text-center px-8 py-16">
          <p className="uppercase tracking-[0.35em] text-sm text-accent-500 mb-4">
            Let's Work Together
          </p>

          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Protect Your Business Interests
          </h2>

          <p className="max-w-2xl mx-auto text-mist text-lg leading-8 mb-10">
            Whether you require strategic litigation, commercial arbitration,
            shareholder dispute resolution or regulatory defence, our team
            provides commercially focused legal solutions tailored to your
            business objectives.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-accent-500 hover:bg-accent-400 transition-colors px-8 py-4 font-semibold text-ink"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}