import type { Metadata } from "next";
import Link from "next/link";

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Law | A.P. RANA & CO.",
  description: "Corporate & Commercial Law — litigation, arbitration, regulatory defense.",
};

export default function BusinessLawPage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-paper text-ink">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl mb-6">Corporate &amp; Commercial Law</h1>

        <p className="text-mist text-lg leading-relaxed mb-6">
          Dispute resolution as a strategic business instrument, not merely a legal obligation. Commercial disputes, managed without strategic discipline, become protracted liabilities. A.P. RANA &amp; CO approaches corporate litigation as a form of business management: the objective is not simply to win arguments, but to resolve disputes in the manner most consistent with the client's long-term commercial interests whether through aggressive enforcement, negotiated settlement, or appellate reversal. Our corporate litigation team has represented promoters, directors, multinational corporations, and financial institutions in high-value contractual disputes, shareholder conflicts, and complex cross-jurisdictional enforcement proceedings.
        </p>

        <h2 className="font-display text-2xl mt-8 mb-3">Commercial Arbitration — Institutional &amp; Ad Hoc</h2>
        <p className="text-mist text-lg leading-relaxed mb-4">
          A.P. RANA &amp; CO handles both institutional and ad hoc arbitrations covering commercial contracts, joint ventures, shareholder agreements, and distribution arrangements. Our arbitration team drafts comprehensive pleadings and statements of claim, manages evidentiary submissions, and advises on the strategic deployment of interim relief under Section 9 of the Arbitration and Conciliation Act, 1996, to preserve assets and enforce obligations pending final award. We have appeared before arbitral tribunals under DIAC, ICADR, and ad hoc proceedings governed by the ICA Rules. Post-award, we manage execution proceedings under Section 36 and challenge petitions under Section 34.
        </p>

        <h2 className="font-display text-2xl mt-6 mb-3">Contractual Disputes &amp; Shareholder Conflicts</h2>
        <p className="text-mist text-lg leading-relaxed mb-4">
          We manage high-value contractual breach matters, shareholder oppression and mismanagement proceedings under Sections 241-242 of the Companies Act before the NCLT, and enforcement of settlement deeds across multiple jurisdictions. Our approach integrates commercial pragmatism with forensic documentary analysis ensuring that clients enter negotiations with a litigation position in reserve. We have particular expertise in disputes arising from failed joint ventures, breached shareholder agreements, and contested board resolutions where urgent interim relief is decisive.
        </p>

        <h2 className="font-display text-2xl mt-6 mb-3">Energy Sector — APTEL Representation</h2>
        <p className="text-mist text-lg leading-relaxed mb-4">
          A.P. RANA &amp; CO holds specialized expertise in regulatory and commercial disputes in the energy sector. We appear before the Appellate Tribunal for Electricity, managing tariff disputes, power purchase agreement enforcement, sector-specific regulatory compliance, and appeals from State Electricity Regulatory Commission orders. Our energy practice integrates legal advocacy with financial and technical analysis of power sector operations.
        </p>

        <h2 className="font-display text-2xl mt-6 mb-3">Interim Reliefs &amp; Injunctions</h2>
        <p className="text-mist text-lg leading-relaxed mb-4">
          The firm has a consistent track record securing urgent interim relief under Order 39 CPC and Section 9 of the Arbitration Act protecting commercial assets, restraining breach of restrictive covenants, preventing asset dissipation, and preserving the status quo pending final determination. We appear on short notice before the Delhi High Court for ad interim injunctions in high-value commercial matters.
        </p>

        <h2 className="font-display text-2xl mt-6 mb-3">Employment &amp; Labor Litigation</h2>
        <p className="text-mist text-lg leading-relaxed mb-4">
          A.P. RANA &amp; CO represents corporates in employment disputes including wrongful termination claims, ESIC and PF compliance matters, industrial tribunal proceedings, and enforcement of non-compete and confidentiality obligations. We advise HR teams on compliant termination procedures and severance structures to minimize downstream litigation risk.
        </p>

        <h2 className="font-display text-2xl mt-6 mb-3">Consumer Forum &amp; Regulatory Defense</h2>
        <p className="text-mist text-lg leading-relaxed mb-4">
          For corporates facing consumer commission proceedings, SEBI enforcement actions, or regulatory inquiry from sector bodies, A.P. RANA &amp; CO provides integrated legal defense combining litigation advocacy with regulatory compliance advisory ensuring the client's commercial position is defended without creating adverse precedent.
        </p>

        <h2 className="font-display text-2xl mt-6 mb-3">Representative Work</h2>
        <ul className="list-disc ml-6 text-mist mb-6">
          <li>Section 9 interim relief applications before the Delhi High Court in high-value commercial disputes</li>
          <li>NCLT proceedings for shareholder oppression and mismanagement under the Companies Act, 2013</li>
          <li>Institutional and ad hoc arbitration mandates covering commercial contracts and JV disputes</li>
          <li>NCLT petitions under Sections 7 &amp; 9 of the IBC for financial and operational creditors</li>
          <li>APTEL proceedings for power sector clients on tariff and PPA enforcement</li>
          <li>All-India litigation and strategic counsel mandate for Crocs India, commercial recovery, vendor disputes, employment litigation</li>
          <li>Panel Legal Counsel for M/s Gunwale Organics and M/s Civic Fix</li>
        </ul>

        <p className="text-mist text-lg leading-relaxed mb-8">
          Contact us to discuss bespoke dispute-resolution strategies that align litigation with your commercial objectives.
        </p>

        <Link href="/contact" className="inline-flex rounded-full bg-accent-500 hover:bg-accent-400 text-ink font-semibold px-6 py-3 transition-colors">
          Get a Consultation
        </Link>
      </div>
    </main>
  );
}
