import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RepliQ — Google Yorumlarına AI ile Otomatik Yanıt | 14 Gün Ücretsiz",
  description:
    "RepliQ ile restoran, klinik ve otel sahipleri Google yorumlarına 60 saniyede AI yanıt veriyor. Sentiment analizi + haftalık rapor. Kart gerekmez, 14 gün ücretsiz dene.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="tr" className={`${inter.variable} ${dmSans.variable}`}>
        <body className="antialiased">{children}</body>
      </html>
    </ClerkProvider>
  );
}
