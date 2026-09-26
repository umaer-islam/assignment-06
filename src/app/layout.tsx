import { Oswald } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastProvider from "@/components/ToastProvider";
import { FitLogProvider } from "@/context/FitLogContext";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FitLog",
  description: "Workout Library and Training Log",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={oswald.variable} data-scroll-behavior="smooth">
      <body className="flex min-h-screen flex-col">
        <FitLogProvider>
          <ToastProvider />
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </FitLogProvider>
      </body>
    </html>
  );
}
