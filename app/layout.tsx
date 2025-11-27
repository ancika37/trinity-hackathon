import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather, Lexend, Yatra_One, Oswald, Rambla, Jost } from "next/font/google";
import { LanguageProvider } from "@/context/language";
import "./globals.css";
import LightRays from "@/components/LightRays";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jost = Jost({
  weight: ["500"],
  variable: "--font-josh",
  subsets: ["latin"]
})

const rambla = Rambla({
  variable: "--font-rambla",
  weight: ["400", "700"],
  subsets: ["latin"]
})

const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["400"],
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const yatra = Yatra_One({
  variable: "--font-yatra-one",
  subsets: ["latin"],
  weight: ["400"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merri = Merriweather({
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mero Aushadhi",
  description: "Created by SXC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jost.variable} ${rambla.variable} ${merri.variable} ${yatra.variable} ${lexend.variable} ${oswald.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <Navbar />
          <div className="absolute inset-0 top-0 -z-1 min-h-screen">
            <LightRays
              raysOrigin="top-center-offset"
              raysColor="#5dfeca"
              raysSpeed={0.5}
              lightSpread={0.9}
              rayLength={1.4}
              followMouse={true}
              mouseInfluence={0.02}
              noiseAmount={0.0}
              distortion={0.01}
            />
          </div>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
