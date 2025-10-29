import type { Metadata } from "next";
import "./globals.css";
import PetalBackground from "@/components/AnimatedBackgrounds";
import Navbar from "@/components/Navbar";



export const metadata: Metadata = {
  title: "Master Gen",
  description: "A Harmony of Code, Art and Philosophy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=BBH+Sans+Hegarty&family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&family=Rubik+Vinyl&family=Ysabeau+SC:wght@1..1000&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="global-font min-h-screen relative overflow-x-hidden">
        <PetalBackground count={40} />

        {/* Misty overlay gradient */}
        <div className="fixed inset-0 -z-10 bg-linear-to-br from-[rgba(252,7,7,0.15)] via-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.2)] pointer-events-none" />

        <Navbar />

        <main className="relative z-10 pt-16">
          {children}
        </main>

      </body>

    </html>
  );
}
