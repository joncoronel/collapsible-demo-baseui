import type { Metadata } from "next";
import { Geist, Geist_Mono, Asap } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const asap = Asap({
  variable: "--font-asap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Collapsible Demo - Base UI Components",
  description: "A demo of the collapsible component from Base UI Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased root font-sans`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
