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


      <body className="global-font min-h-screen pt-16 bg-linear-to-br from-red-200 via-white to-gray-200">

        <Navbar />
        <PetalBackground count={40} />

        <main>
          {children}
        </main>

      </body>

    </html>
  );
}
