import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/footer";
import { Navbar } from "./components/navbar";

export const metadata: Metadata = {
  title: "Ardrey Kell Computer Science Club",
  description: "Official website of the Ardrey Kell Computer Science Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="flex flex-col min-h-screen bg-black text-white">
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
