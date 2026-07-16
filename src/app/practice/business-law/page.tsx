import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Law | A.P. RANA & CO.",
  description: "Corporate & commercial litigation, arbitration, and regulatory defense.",
};

export default function BusinessLawPage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-paper text-ink">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl mb-6">Corporate & Commercial Law</h1>

        <p className="text-mist text-lg leading-relaxed mb-6">
          Dispute resolution is a strategic business instrument, not merely a legal obligation. A.P. RANA &amp; CO. treats corporate litigation and arbitration as part of commercial decision-making — the objective is to resolve disputes in the manner most consistent with our clients' long-term business interests, whether by aggressive enforcement, negotiated settlement, or appellate reversal.
        </p>

        <h2 className="font-display text-2xl mt-8 mb-3">Corporate &amp; Commercial Litigation</h2>
        <p className="text-mist text-lg leading-relaxed mb-4">
          Our corporate litigation team represents promoters, directors, multinationals, and financial institutions in high-value contractual disputes, shareholder conflicts, and cross-jurisdictional enforcement proceedings. We combine commercial judgment with forensic documentary analysis so clients negotiate from a position of strength.
        </p>

        <h2 className="font-display text-2xl mt-6 mb-3">Commercial Arbitration — Institutional &amp; Ad Hoc</h2>
        <p className="text-mist text-lg leading-relaxed mb-4">
          We handle both institutional and ad hoc arbitrations across commercial contracts, joint ventures, shareholder agreements, and distribution arrangements. Our team prepares pleadings, manages evidentiary submissions, and advises on interim relief under Section 9 of the Arbitration and Conciliation Act, 1996 to preserve assets and enforce obligations pending the final award.
        </p>

        <h2 className="font-display text-2xl mt-6 mb-3">Contractual Disputes &amp; Shareholder Conflicts</h2>
        <p className="text-mist text-lg leading-relaxed mb-4">
          We manage high-value contractual breach matters, shareholder oppression and mismanagement proceedings (Sections 241–242 before the NCLT), and enforcement of settlement deeds across jurisdictions. Our approach integrates commercial pragmatism with tactical litigation readiness.
        </p>

        <h2 className="font-display text-2xl mt-6 mb-3">Energy Sector / APTEL Representation</h2>
        <p className="text-mist text-lg leading-relaxed mb-4">
          The firm has specialized expertise in regulatory and commercial disputes in the energy sector, appearing before the Appellate Tribunal for Electricity (APTEL) on tariff disputes, PPA enforcement, and appeals from state regulatory orders. We combine legal advocacy with financial and technical analysis of power-sector operations.
        </p>

        <h2 className="font-display text-2xl mt-6 mb-3">Interim Reliefs &amp; Injunctions</h2>
        <p className="text-mist text-lg leading-relaxed mb-4">
          We regularly secure urgent interim relief under Order 39 CPC and Section 9 of the Arbitration Act, restraining breaches of contractual covenants, preventing asset dissipation, and preserving the status quo. Our litigators appear on short notice before the Delhi High Court for ad interim injunctions in high-value matters.
        </p>

        <h2 className="font-display text-2xl mt-6 mb-3">Employment, Consumer &amp; Regulatory Defense</h2>
        <p className="text-mist text-lg leading-relaxed mb-4">
          A.P. RANA &amp; CO. represents corporates in employment disputes, consumer forum proceedings, SEBI enforcement matters, and regulatory inquiries. We blend litigation advocacy with compliance counselling to defend commercial positions without creating adverse precedent.
        </p>

        <h2 className="font-display text-2xl mt-6 mb-3">Representative Work</h2>
        <ul className="list-disc ml-6 text-mist mb-6">
          <li>Section 9 interim relief applications before the Delhi High Court in high-value commercial disputes</li>
          <li>NCLT proceedings for shareholder oppression and mismanagement (Sections 241–242)</li>
          <li>Institutional and ad hoc arbitration mandates covering commercial contracts and JV disputes</li>
          <li>NCLT petitions under Sections 7 &amp; 9 of the IBC for creditors</li>
          <li>APTEL proceedings for power-sector clients on tariff and PPA enforcement</li>
          <li>All-India litigation and strategic counsel mandates for commercial clients</li>
        </ul>

        <p className="text-mist text-lg leading-relaxed mb-8">
          Panel Legal Counsel for commercial clients and bespoke dispute-resilience strategies are available — contact us to discuss how we can align litigation strategy with your commercial objectives.
        </p>

        <Link href="/contact" className="inline-flex rounded-full bg-accent-500 hover:bg-accent-400 text-ink font-semibold px-6 py-3 transition-colors">
          Get a Consultation
        </Link>
      </div>
    </main>
  );
}
