import type { Metadata } from "next";
import "./globals.css";

import { Outfit, Raleway } from "next/font/google";
import React from "react";
import Navbar from "@/components/nav";
import Footer from "@/components/footer";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "CCE, IIT Mandi | Centre for Continuing Education",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${raleway.variable} ${outfit.className}`}
      >
        <div className="fixed top-0 left-0 w-screen h-fit z-50">
          <Navbar />
        </div>
        {children}
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
