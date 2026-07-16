import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Taxation & Financial Advisory | A.P. RANA & CO.",
  description:
    "GST, Income Tax, FEMA, Virtual CFO, Forensic Audit & Financial Advisory services.",
};

const services = [
  {
    title: "GST & Indirect Tax Litigation",
    description:
      "Strategic representation in GST search and seizure proceedings, assessments, appeals before GST Appellate Authorities, CESTAT and High Courts. We advise on input tax credit disputes, classification issues, export refunds and anti-profiteering investigations while providing real-time support during departmental actions.",
  },
  {
    title: "Income Tax & Direct Tax Advisory",
    description:
      "Comprehensive advisory on income tax compliance, assessments, reassessments, appellate litigation, transfer pricing, cross-border taxation and tax planning. Every tax position is supported by detailed legal research and financial analysis.",
  },
  {
    title: "Forensic Audit & Financial Investigation",
    description:
      "Investigation of financial fraud, embezzlement, accounting irregularities, related-party transactions and misappropriation. Our reports are prepared to support litigation before courts, NCLT, banks and regulatory authorities.",
  },
  {
    title: "Virtual CFO Services",
    description:
      "Dedicated Virtual CFO support for growing businesses including MIS reporting, budgeting, forecasting, board reporting, banking relationship management and strategic financial planning on a retainer basis.",
  },
  {
    title: "Business Valuation & Due Diligence",
    description:
      "Business valuation for mergers & acquisitions, ESOPs, buy-sell agreements and regulatory purposes together with financial, legal and tax due diligence for acquisitions and investments.",
  },
  {
    title: "FEMA & RBI Compliance",
    description:
      "Advisory on FDI structuring, ODI filings, ECB compliance, FEMA regulations, RBI approvals and compounding applications ensuring cross-border transactions remain fully compliant.",
  },
];

const representativeWork = [
  "GST search, seizure and assessment proceedings.",
  "Income Tax appellate representation.",
  "Input Tax Credit (ITC) disputes.",
  "Export refund and classification litigation.",
  "Forensic accounting and fraud investigations.",
  "Virtual CFO advisory for startups and corporates.",
  "Business valuation and M&A due diligence.",
  "FEMA and RBI compliance advisory.",
];

export default function TaxationFinancialPage() {
  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
        <p className="uppercase tracking-[0.35em] text-sm text-accent-500 mb-4">
          Practice Area
        </p>

        <h1 className="font-display text-5xl md:text-6xl leading-tight">
          Taxation &
          <br />
          <span className="italic text-accent-500">
            Financial Advisory
          </span>
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-lg leading-8 text-mist">
          A legal strategy that does not account for fiscal position is
          fundamentally incomplete. Our integrated legal and Chartered
          Accountancy team delivers litigation, regulatory compliance and
          financial advisory through a single coordinated approach.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-white border border-neutral-200 rounded-3xl p-10 shadow-sm">
          <h2 className="font-display text-3xl mb-6">
            Integrated Legal & Financial Advisory
          </h2>

          <p className="text-mist leading-8 mb-6">
            A.P. RANA & CO.'s in-house Chartered Accountancy wing operates as an
            integral component of every major engagement. This unique structure
            enables us to combine legal strategy with financial expertise,
            ensuring litigation is supported by strong accounting analysis and
            transactions are optimized from both legal and fiscal perspectives.
          </p>

          <p className="text-mist leading-8">
            From tax litigation and forensic audits to Virtual CFO services,
            business valuation and FEMA compliance, our multidisciplinary team
            provides practical solutions that strengthen both legal outcomes and
            commercial decision-making.
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
            Our Financial Advisory Practice
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
            Representative Services
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
            Build a Strong Financial Foundation
          </h2>

          <p className="max-w-2xl mx-auto text-mist text-lg leading-8 mb-10">
            Whether you require tax litigation, forensic accounting, Virtual CFO
            services, business valuation or FEMA compliance, our integrated
            legal and financial team delivers commercially focused solutions
            tailored to your business objectives.
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