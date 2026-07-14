import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Lex & Co. | Attorneys at Law",
  description:
    "Trusted legal excellence since 2008. Experienced. Dedicated. Relentless.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${manrope.variable} font-body antialiased bg-ink text-ivory overflow-x-hidden`}
      >
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
