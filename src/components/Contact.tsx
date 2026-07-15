"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative px-6 pt-40 md:pt-44 pb-28 md:pb-32">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">
        <Reveal>
          <span className="text-xs tracking-[0.3em] uppercase text-accent-400">Contact</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
            Let&rsquo;s Discuss <span className="italic text-gradient">Your Case</span>
          </h2>
          <p className="text-mist text-lg leading-relaxed mt-5">
            Free initial consultations, a response within 24 hours, and 24/7
            emergency assistance when you need us most.
          </p>
          <div className="mt-8 flex flex-col gap-5 text-mist">
            <div>
              <p className="text-ink font-semibold">Phone</p>
              <p>(555) 123-4567 &middot; Mon&ndash;Fri 9am&ndash;6pm</p>
            </div>
            <div>
              <p className="text-ink font-semibold">Email</p>
              <p>info@lexcolaw.com &middot; response within 24 hours</p>
            </div>
            <div>
              <p className="text-ink font-semibold">Address</p>
              <p>123 Legal Street, Suite 100, New York, NY 10001</p>
            </div>
            <div>
              <p className="text-ink font-semibold">Emergency</p>
              <p>24/7 support available</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="glass-card rounded-2xl p-8">
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-3 py-12">
              <p className="font-display text-2xl text-gradient">Message Sent</p>
              <p className="text-mist">We&rsquo;ll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="flex flex-col gap-4"
            >
              <input
                required
                placeholder="Your Name"
                className="bg-ink/5 border border-ink/10 rounded-xl px-4 py-3 outline-none focus:border-accent-400/50 transition-colors placeholder:text-mist"
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                className="bg-ink/5 border border-ink/10 rounded-xl px-4 py-3 outline-none focus:border-accent-400/50 transition-colors placeholder:text-mist"
              />
              <textarea
                required
                placeholder="Message"
                rows={5}
                className="bg-ink/5 border border-ink/10 rounded-xl px-4 py-3 outline-none focus:border-accent-400/50 transition-colors placeholder:text-mist resize-none"
              />
              <button
                type="submit"
                className="rounded-full bg-accent-500 hover:bg-accent-400 transition-colors text-ink font-semibold px-8 py-3.5"
              >
                Send Message
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
