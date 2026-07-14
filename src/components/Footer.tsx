import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/practice", label: "Practice" },
  { href: "/results", label: "Results" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative px-6 py-14 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9">
              <Image src="/logo-final.png" alt="Lex & Co." fill sizes="36px" className="object-contain" />
            </div>
            <div>
              <p className="font-display tracking-[0.15em]">LEX&amp;CO.</p>
              <p className="text-xs text-mist">Trusted since 2008</p>
            </div>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-mist">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-ivory transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-mist">
          <p>Providing exceptional legal services with integrity, professionalism and results.</p>
          <p>&copy; 2026 Lex&amp;Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
