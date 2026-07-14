import type { Metadata } from "next";
import CaseResults from "@/components/CaseResults";

export const metadata: Metadata = { title: "Case Results | Lex & Co." };

export default function ResultsPage() {
  return <CaseResults />;
}
