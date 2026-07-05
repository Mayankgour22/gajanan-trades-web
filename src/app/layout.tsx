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
  title: "Gajanan Traders | Kartar Agricultural Harvesters & Agriverse Machinery",
  description: "Gajanan Traders (formerly Kartar Agri / Agriverse) - Authorized dealer of high-performance Kartar combine harvesters, rotavators, and farming equipment in Harda, Madhya Pradesh.",
  keywords: [
    "Gajanan Traders",
    "Kartar Agri",
    "Agriverse",
    "Gajanan Group",
    "Shri Gajanan Guru Pvt Ltd",
    "Gajanan Agro & Spares",
    "Gajanan Agro and Spares",
    "Shri Gajanan Guru",
    "Gajanan Traders Harda",
    "Kartar Combine Harvester",
    "Kartar 4000 Deluxe Harvester",
    "Kartar Agri Harvesters",
    "Agriverse Farm Machinery",
    "Combine Harvester Harda",
    "Agricultural Equipment Madhya Pradesh",
    "Harvester Spares and Parts India",
    "Agriculture spare parts supplier Harda",
    "Agricultural Machinery Exporter India"
  ],
  authors: [{ name: "Gajanan Traders" }],
  openGraph: {
    title: "Gajanan Traders | Kartar Harvester & Agriverse Machinery",
    description: "Gajanan Traders (formerly Kartar Agri / Agriverse) - Authorized dealer of combine harvesters, farming equipment, and genuine spare parts.",
    url: "https://gajanantraders.com",
    siteName: "Gajanan Traders",
    type: "website",
    locale: "en_IN",
  }
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
