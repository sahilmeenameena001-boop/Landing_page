import type { Metadata } from "next";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = { title: "Testimonials | Lex & Co." };

export default function TestimonialsPage() {
  return <Testimonials />;
}
