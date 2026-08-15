import type { Metadata } from "next";
import { Marcellus, Roboto_Mono, Inter } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en">
      <body
        className={`${marcellus.variable} ${robotoMono.variable} ${inter.variable} bg-canvas text-obsidian font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}