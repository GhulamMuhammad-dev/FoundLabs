import AboutPageClient from "./AboutPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | FoundLabs — AI Automation for Business",
  description:
    "FoundLabs helps businesses automate support, lead capture, and operations using AI. Learn about our mission, team, and journey to making AI accessible.",
  keywords: [
    "FoundLabs",
    "about FoundLabs",
    "AI automation agency",
    "AI chatbot team",
    "business automation story",
    "startup automation AI",
    "meet FoundLabs team",
    "AI company mission",
  ],
  openGraph: {
    title: "About FoundLabs — AI for Business Automation",
    description:
      "Discover the story behind FoundLabs — a team on a mission to make AI automation accessible to all businesses.",
    url: "https://foundlabs.online/about",
    siteName: "FoundLabs",
    images: [
      {
        url: "https://foundlabs.online/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "FoundLabs Team and Vision",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About FoundLabs — AI Automation for Business",
    description:
      "We help businesses automate work with AI chatbots, support assistants, and smart workflows. Get to know our team and mission.",
    images: ["https://foundlabs.online/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
