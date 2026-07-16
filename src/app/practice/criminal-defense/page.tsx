import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Real Estate & RERA | A.P. RANA & CO.",
  description:
    "RERA Compliance, Real Estate Litigation & Transactional Advisory.",
};

const services = [
  {
    title: "UPRERA Compliance & Registration",
    description:
      "Comprehensive regulatory compliance support for developers including mandatory UPRERA registrations, quarterly compliance filings, website disclosure obligations, phased project registrations, and advisory to eliminate registration-stage vulnerabilities before they become enforcement risks.",
  },
  {
    title: "RERA Appellate Tribunal Representation",
    description:
      "Representation before Real Estate Appellate Tribunals for appeals against RERA Authority orders, refund claims, interim stay applications, project delay disputes, interest liability matters and appellate proceedings involving evolving RERA jurisprudence.",
  },
  {
    title: "Builder-Buyer Agreements",
    description:
      "Drafting and reviewing Builder-Buyer Agreements aligned with current RERA jurisprudence, including force majeure provisions, possession timelines, penalty mechanisms, refund clauses and dispute-minimization strategies throughout the project lifecycle.",
  },
  {
    title: "Mass Homebuyer Claim Defence",
    description:
      "Strategic defence for developers facing coordinated litigation before RERA Authorities, Consumer Commissions and Civil Courts through consolidated pleadings, structured settlement frameworks and efficient case management.",
  },
  {
    title: "Consumer & Civil Litigation",
    description:
      "Representation before National and State Consumer Disputes Redressal Commissions together with title disputes, injunction suits, partition matters, specific performance actions and other complex property litigation.",
  },
  {
    title: "Real Estate Transactional Advisory",
    description:
      "Advisory for developers and investors covering title due diligence, Joint Development Agreements (JDAs), land aggregation, revenue-sharing arrangements and RERA-compliant transaction structuring.",
  },
];

const representativeWork = [
  "UPRERA registration and compliance advisory for developers.",
  "Representation before Real Estate Appellate Tribunals.",
  "Builder-Buyer Agreement drafting aligned with RERA jurisprudence.",
  "Mass homebuyer litigation and consolidated defence strategy.",
  "Consumer Commission litigation involving real estate disputes.",
  "Title due diligence and Joint Development Agreement structuring.",
  "Property litigation including injunctions, partition and specific performance suits.",
  "Transactional advisory for developers and institutional investors.",
];

export default function CriminalDefensePage() {
  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
        <p className="uppercase tracking-[0.35em] text-sm text-accent-500 mb-4">
          Practice Area
        </p>

        <h1 className="font-display text-5xl md:text-6xl leading-tight">
          Real Estate &
          <br />
          <span className="italic text-accent-500">
            RERA
          </span>
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-lg leading-8 text-mist">
          End-to-end regulatory expertise and litigation agility across the
          entire RERA compliance and dispute spectrum. We advise developers,
          investors and homebuyers through every stage of real estate projects,
          from regulatory registration to appellate litigation.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-white border rounded-3xl p-10 shadow-sm">
          <h2 className="font-display text-3xl mb-6">
            Strategic Real Estate Advisory
          </h2>

          <p className="text-mist leading-8 mb-6">
            The Real Estate (Regulation and Development) Act, 2016 transformed
            the regulatory landscape governing developers and homebuyers. A.P.
            RANA & CO. advises developers, investors and project entities across
            the full RERA lifecycle—from project registration and regulatory
            compliance to complex appellate proceedings before the Real Estate
            Appellate Tribunal.
          </p>

          <p className="text-mist leading-8">
            Our team has extensive experience defending large-scale developers
            against coordinated homebuyer litigation while also representing
            homebuyers in legitimate claims involving delayed possession,
            disclosure failures and statutory non-compliance.
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
            Our RERA Practice
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl border p-8 hover:shadow-lg transition-shadow"
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
        <div className="bg-white border rounded-3xl p-10">
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
                className="flex gap-3 items-start rounded-xl border p-4"
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
        <div className="bg-white border rounded-3xl text-center px-8 py-16">
          <p className="uppercase tracking-[0.35em] text-sm text-accent-500 mb-4">
            Let's Work Together
          </p>

          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Secure Your Real Estate Interests
          </h2>

          <p className="max-w-2xl mx-auto text-mist text-lg leading-8 mb-10">
            Whether you require RERA compliance, appellate representation,
            builder-buyer documentation, property litigation or transactional
            advisory, our team delivers commercially focused legal solutions
            tailored to your objectives.
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