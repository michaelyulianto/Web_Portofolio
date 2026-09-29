import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Michael Yulianto Tamba — Portfolio",
  description: "Michael Yulianto Tamba is an Informatics student who enjoys learning web development.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={[displayFont.variable, bodyFont.variable, monoFont.variable].join(" ")}>
        {children}
      </body>
    </html>
  );
}
