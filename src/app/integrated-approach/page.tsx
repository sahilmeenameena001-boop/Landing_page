import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integrated Approach | Lex & Co.",
  description: "Integrated Approach — demo page. Replace with real content.",
};

export default function IntegratedApproachPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl text-center">
        <h1 className="font-display text-4xl md:text-5xl mb-4">Integrated Approach</h1>
        <p className="text-mist mb-6">This is a demo page — replace with your content.</p>
        <Link href="/about" className="text-accent-500 hover:underline">
          Back to About
        </Link>
      </div>
    </main>
  );
}
