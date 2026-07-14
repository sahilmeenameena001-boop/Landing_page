import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative px-6 py-14 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8">
            <Image src="/logo.png" alt="Lex & Co." fill sizes="32px" className="object-contain" />
          </div>
          <div>
            <p className="font-display tracking-[0.15em]">LEX&amp;CO.</p>
            <p className="text-xs text-mist">Trusted since 2008</p>
          </div>
        </div>
        <p className="text-mist text-sm text-center">
          Providing exceptional legal services with integrity, professionalism and results.
        </p>
        <p className="text-mist text-sm">&copy; 2026 Lex&amp;Co. All rights reserved.</p>
      </div>
    </footer>
  );
}
