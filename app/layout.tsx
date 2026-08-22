import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://www.nexoraglobal.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nexora Global | International Import & Export Company",
    template: "%s | Nexora Global",
  },
  description:
    "Nexora Global sources, imports, and exports high-quality agricultural, industrial, textile, and consumer products across 35+ countries with reliable logistics and quality assurance.",
  keywords: [
    "import export company",
    "global trading company",
    "product sourcing",
    "export services",
    "international logistics",
    "wholesale exporters",
  ],
  openGraph: {
    title: "Nexora Global | International Import & Export Company",
    description:
      "Connecting quality products to global markets through reliable sourcing, quality assurance, and fast logistics.",
    url: siteUrl,
    siteName: "Nexora Global",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Global | International Import & Export Company",
    description:
      "Connecting quality products to global markets through reliable sourcing, quality assurance, and fast logistics.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
