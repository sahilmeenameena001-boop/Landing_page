import type { Metadata } from "next";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = { title: "Testimonials | A.P. RANA & CO." };

export default function TestimonialsPage() {
  return <Testimonials />;
}
