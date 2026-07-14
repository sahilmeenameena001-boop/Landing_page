"use client";

import { useState } from "react";
import IntroLoader from "@/components/IntroLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import CaseResults from "@/components/CaseResults";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <IntroLoader onDone={() => setIntroDone(true)} />
      {introDone && (
        <>
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <PracticeAreas />
            <CaseResults />
            <Testimonials />
            <FAQ />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
