import ApplicationsPageClient from "./ApplicationsPageClient";

export const metadata = {
  title: "AI SaaS Applications | FoundLabs",
  description:
    "Explore AI-powered SaaS applications by FoundLabs — from workflow automation to customer support chatbots. Built to scale and automate your business.",
  keywords: [
    "AI SaaS",
    "AI applications",
    "AI tools",
    "FoundLabs SaaS",
    "chatbot app",
    "workflow automation",
    "lead generation AI",
    "data analytics AI",
    "business automation tools",
  ],
  openGraph: {
    title: "AI SaaS Tools for Business | FoundLabs",
    description:
      "Discover powerful AI-powered applications built by FoundLabs to help you automate operations, support, analytics, and sales.",
    url: "https://foundlabs.online/applications",
    siteName: "FoundLabs",
    images: [
      {
        url: "https://foundlabs.online/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "FoundLabs AI SaaS",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FoundLabs AI Applications",
    description:
      "AI applications built for business efficiency — automate tasks, support, analytics, and lead generation with our powerful tools.",
    images: ["https://foundlabs.online/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ApplicationsPage() {
  return <ApplicationsPageClient />;
}
