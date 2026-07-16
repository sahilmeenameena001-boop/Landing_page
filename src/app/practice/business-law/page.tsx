import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Law | A.P. RANA & CO.",
  description: "Business Law practice page for A.P. RANA & CO.",
};

export default function BusinessLawPage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-paper text-ink">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl mb-6">Business Law</h1>
        <p className="text-mist text-lg leading-relaxed mb-8">
          Explore our Business Law services, including contracts, disputes, and compliance support. This page is a demo placeholder for future content.
        </p>
        <Link href="/practice" className="inline-flex rounded-full bg-accent-500 hover:bg-accent-400 text-ink font-semibold px-6 py-3 transition-colors">
          Back to Practice Areas
        </Link>
      </div>
    </main>
  );
}
