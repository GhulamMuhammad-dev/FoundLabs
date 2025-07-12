import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FoundLabs | AI Automation for Startups & Businesses",
    template: "%s | FoundLabs",
  },
  description:
    "FoundLabs helps startups and businesses grow faster with AI automation, chatbots, and custom AI agents tailored to your needs.",
  keywords: [
    "AI automation",
    "business automation",
    "custom AI chatbots",
    "AI agents for startups",
    "SaaS AI tools",
    "workflow automation",
    "FoundLabs",
    "foundlabs.online",
  ],
  metadataBase: new URL("https://foundlabs.online"),
  openGraph: {
    title: "FoundLabs | AI Automation for Startups & Businesses",
    description:
      "Accelerate your business with FoundLabs' custom AI agents, chatbots, and automated workflows.",
    url: "https://foundlabs.online",
    siteName: "FoundLabs",
    images: [
      {
        url: "https://foundlabs.online/opengraph-image.png", // Replace with your uploaded OG image
        width: 1200,
        height: 630,
        alt: "FoundLabs AI Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FoundLabs | AI Automation for Startups & Businesses",
    description:
      "AI automation solutions for startups and small businesses. Grow faster. Work less.",
    images: ["https://foundlabs.online/opengraph-image.png"],
    creator: "@foundlabs", // Add your Twitter handle if available
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
