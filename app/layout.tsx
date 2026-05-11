import type { Metadata } from "next";
import { Nunito, Quicksand } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { pageMetadata } from "@/lib/site";

const heading = Quicksand({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const body = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = pageMetadata({
  title: "Summer Sprout",
  description:
    "Simple summer fun for kids and families with activities, meal ideas, printables, routines, and screen-free inspiration."
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
