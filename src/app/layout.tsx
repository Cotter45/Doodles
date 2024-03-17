import { Inter } from "next/font/google";

import type { Metadata } from "next";

import "@/styles/globals.css";
import MusicPlayer from "@/components/MusicPlayer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doodles",
  description:
    "A collection of tap to color doodles. Click on a doodle to start coloring.",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["doodles", "coloring", "color", "tap", "doodle"],
  authors: [
    {
      name: "Sean Cotter",
      url: "https://cotter.tech",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MusicPlayer />
        {children}
      </body>
    </html>
  );
}
