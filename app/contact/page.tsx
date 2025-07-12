import { Suspense } from "react";
import ContactClient from "./ContactClient";
import { Metadata } from "next";
import Head from "next/head";

// 🛑 Important: disables static rendering to fix build error
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact | FoundLabs",
  description:
    "Contact FoundLabs to automate your business using custom AI agents, RAG chatbots, and smart automation solutions. Start your AI journey today.",
  keywords: [
    "contact AI agency",
    "custom AI chatbot",
    "RAG chatbot inquiry",
    "AI automation for business",
    "hire AI developer",
    "AI chat support",
    "FoundLabs contact",
  ],
  openGraph: {
    title: "Contact | FoundLabs",
    description:
      "Let’s bring AI automation to your business. Contact FoundLabs to build your own AI chatbot or assistant today.",
    url: "https://foundlabs.online/contact",
    siteName: "FoundLabs",
    images: [
      {
        url: "https://foundlabs.online/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "FoundLabs AI Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | FoundLabs",
    description:
      "Reach out to FoundLabs to automate your business using intelligent AI chatbots and automation tools.",
    images: ["https://foundlabs.online/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact – FoundLabs",
    url: "https://foundlabs.online/contact",
    mainEntity: {
      "@type": "Organization",
      name: "FoundLabs",
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@foundlabs.online",
        contactType: "customer support",
      },
    },
  };
  return (
    <>
      <Head>
        <title>Contact FoundLabs – Get in Touch</title>
        <meta
          name="description"
          content="Talk to the FoundLabs team. Let us help you automate your business using AI."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Suspense
        fallback={
          <div className="text-center text-gray-400">
            Loading contact form...
          </div>
        }
      >
        <ContactClient />
      </Suspense>
    </>
  );
}
