import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"]
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
});
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gajanan Traders | Kartar Agricultural Harvester",
  description: "Gajanan Traders - Renowned for providing agricultural equipment like Kartar 360 TAF Combine Harvester, Kartar Agriculture Rotavator, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-inter">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
