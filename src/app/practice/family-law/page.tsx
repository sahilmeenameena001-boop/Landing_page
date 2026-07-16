import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Family Law | A.P. RANA & CO.",
  description:
    "Family & Matrimonial Law practice of A.P. RANA & CO.",
};

const services = [
  {
    title: "Contested Divorce",
    description:
      "Representation in contested divorce proceedings with strategic case preparation, protecting personal, financial and business interests while pursuing practical and effective resolutions.",
  },
  {
    title: "Child Custody & Guardianship",
    description:
      "Advising parents in custody, guardianship and visitation disputes with a focus on the welfare of the child while safeguarding parental rights through litigation or negotiated settlements.",
  },
  {
    title: "Maintenance & Alimony",
    description:
      "Representation in maintenance, permanent alimony and financial support proceedings with careful assessment of income, assets and long-term financial implications.",
  },
  {
    title: "Domestic Violence Proceedings",
    description:
      "Legal representation in proceedings under the Protection of Women from Domestic Violence Act, including protection orders, residence rights, monetary relief and related litigation.",
  },
  {
    title: "Pre & Post-Nuptial Agreements",
    description:
      "Drafting and reviewing pre-nuptial and post-nuptial agreements for individuals and business families to protect personal wealth, investments and succession planning.",
  },
  {
    title: "High-Net-Worth Family Matters",
    description:
      "Confidential legal representation for HNIs, promoters and corporate families where matrimonial disputes involve business ownership, shareholding structures, inheritance planning and asset protection.",
  },
];

const representativeWork = [
  "Contested divorce proceedings.",
  "Child custody and visitation disputes.",
  "Maintenance and permanent alimony claims.",
  "Domestic violence litigation.",
  "Drafting pre-nuptial and post-nuptial agreements.",
  "Family settlements involving business assets.",
  "Protection of confidential family and corporate interests.",
  "Strategic legal advice for high-net-worth families.",
];

export default function FamilyLawPage() {
  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
        <p className="uppercase tracking-[0.35em] text-sm text-accent-500 mb-4">
          Practice Area
        </p>

        <h1 className="font-display text-5xl md:text-6xl leading-tight">
          Family
          <br />
          <span className="italic text-accent-500">
            Law
          </span>
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-lg leading-8 text-mist">
          Sensitive family disputes require more than legal knowledge—they
          require discretion, strategic planning and practical solutions. We
          assist individuals and families in resolving complex matrimonial
          matters while protecting their long-term personal and financial
          interests.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-white border border-neutral-200 rounded-3xl p-10 shadow-sm">
          <h2 className="font-display text-3xl mb-6">
            Strategic Matrimonial Representation
          </h2>

          <p className="text-mist leading-8 mb-6">
            Matrimonial disputes often extend beyond personal relationships and
            can significantly affect family wealth, business succession and
            financial stability. A.P. RANA & CO. provides comprehensive legal
            representation in divorce, child custody, maintenance and domestic
            violence matters with complete confidentiality and strategic
            planning.
          </p>

          <p className="text-mist leading-8">
            For high-net-worth individuals, promoters and business families, our
            approach ensures that family disputes are managed without disrupting
            corporate governance, investments or long-term succession planning.
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
            Our Family Law Practice
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
            Representative Matters
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
            Protect What Matters Most
          </h2>

          <p className="max-w-2xl mx-auto text-mist text-lg leading-8 mb-10">
            Whether you require advice on divorce, custody, maintenance,
            domestic violence or complex family wealth matters, our team
            provides practical legal solutions tailored to your circumstances.
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