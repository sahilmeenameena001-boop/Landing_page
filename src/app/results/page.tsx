import type { Metadata } from "next";
import CaseResults from "@/components/CaseResults";

export const metadata: Metadata = { title: "Case Results | A.P. RANA & CO." };

export default function ResultsPage() {
  return <CaseResults />;
}
