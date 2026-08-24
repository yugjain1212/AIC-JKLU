import type { Metadata } from "next";
import { Marcellus, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AIC-JKLU | Atal Incubation Centre - JK Lakshmipat University",
  description: "Backing Visionary Founders Building the Future from Jaipur. Supported by NITI Aayog & JK Lakshmipat University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${marcellus.variable} ${robotoMono.variable}`}>
      <body className="bg-canvas text-obsidian font-robotoMono antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}