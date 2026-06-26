import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Estevan Mejia - Full Stack Engineer",
  description:
    "Full Stack Engineer with 8+ years building scalable web apps, eCommerce systems, and automation tools. Product-focused, end-to-end ownership.",
  openGraph: {
    title: "Estevan Mejia - Full Stack Engineer",
    description: "I build systems that turn ideas into revenue.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full antialiased noise">{children}</body>
    </html>
  );
}

