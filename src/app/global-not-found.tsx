import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NotFoundContent } from "@/components/sections/NotFoundContent";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Page Not Found | Anchorage Chambers",
  description: "The page you're looking for may have moved or no longer exists.",
};

export default function GlobalNotFound() {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white">
        <NotFoundContent />
      </body>
    </html>
  );
}
