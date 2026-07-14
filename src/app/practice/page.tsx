import type { Metadata } from "next";
import PracticeAreas from "@/components/PracticeAreas";

export const metadata: Metadata = { title: "Practice Areas | Lex & Co." };

export default function PracticePage() {
  return <PracticeAreas />;
}
