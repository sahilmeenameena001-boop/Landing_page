import type { Metadata } from "next";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = { title: "Contact | Lex & Co." };

export default function ContactPage() {
  return (
    <>
      <Contact />
      <FAQ />
    </>
  );
}
