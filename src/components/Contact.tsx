"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative px-6 py-28 md:py-36">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">
        <Reveal>
          <span className="text-xs tracking-[0.3em] uppercase text-jade-400">Contact</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
            Let&rsquo;s Discuss <span className="italic text-gradient">Your Case</span>
          </h2>
          <div className="mt-8 flex flex-col gap-5 text-mist">
            <div>
              <p className="text-ivory font-semibold">Phone</p>
              <p>(555) 123-4567 &middot; Mon&ndash;Fri 9am&ndash;6pm</p>
            </div>
            <div>
              <p className="text-ivory font-semibold">Email</p>
              <p>info@lexcolaw.com &middot; response within 24 hours</p>
            </div>
            <div>
              <p className="text-ivory font-semibold">Address</p>
              <p>123 Legal Street, Suite 100, New York, NY 10001</p>
            </div>
            <div>
              <p className="text-ivory font-semibold">Emergency</p>
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
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-jade-400/50 transition-colors placeholder:text-mist"
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-jade-400/50 transition-colors placeholder:text-mist"
              />
              <textarea
                required
                placeholder="Message"
                rows={5}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-jade-400/50 transition-colors placeholder:text-mist resize-none"
              />
              <button
                type="submit"
                className="rounded-full bg-jade-500 hover:bg-jade-400 transition-colors text-ink font-semibold px-8 py-3.5"
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
