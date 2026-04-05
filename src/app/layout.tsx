import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";
import { CustomCursor } from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vivek Misra | AI, ML & Web Innovator",
  description: "Personal branding, AI/ML POCs, weekly newsletters, and AI Decode Ebooks by Vivek Misra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative text-foreground bg-[var(--background)]">
        <BackgroundOrbs />
        <CustomCursor />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
