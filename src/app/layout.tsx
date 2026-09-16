import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DirectDebitSetupProvider } from "@/components/direct-debit-setup/DirectDebitSetupProvider";
import { OnlinePaymentProvider } from "@/components/online-payment/OnlinePaymentProvider";
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
  title: "Anchorage Chambers | Expert Debt Solutions",
  description:
    "Practical, ethical, and legally compliant routes out of debt — from Individual Voluntary Arrangements to corporate insolvency. Licensed Insolvency Practitioners across the UK, Asia and Southern Africa.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <DirectDebitSetupProvider>
          <OnlinePaymentProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </OnlinePaymentProvider>
        </DirectDebitSetupProvider>
      </body>
    </html>
  );
}
