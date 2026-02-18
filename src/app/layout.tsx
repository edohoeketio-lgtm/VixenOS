import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VixenOS — AI UGC Platform for Performance Marketers",
  description: "Create winning ads with AI. The all-in-one AI UGC platform that scales your creative production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased text-text-0 bg-bg-0 selection:bg-accent/20 selection:text-accent`}>
        {children}
        <Toaster position="bottom-right" theme="light" />
      </body>
    </html>
  );
}
