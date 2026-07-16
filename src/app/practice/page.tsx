import type { Metadata } from "next";
import PracticeAreas from "@/components/PracticeAreas";

export const metadata: Metadata = { title: "Practice Areas | A.P. RANA & CO." };

export default function PracticePage() {
  return <PracticeAreas />;
}
