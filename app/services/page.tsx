import {
  CpuChipIcon,
  ChatBubbleBottomCenterTextIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "AI-Powered Automation Services | FoundLabs",
  description:
    "FoundLabs offers AI agents, chatbots, automation workflows, and micro SaaS tools to help businesses scale effortlessly with intelligent automation.",
  keywords: [
    "AI services",
    "automation services",
    "AI agents",
    "AI chatbots",
    "custom automation",
    "workflow automation",
    "micro SaaS development",
    "AI web apps",
    "FoundLabs",
  ],
  openGraph: {
    title: "AI Automation Services for Modern Businesses | FoundLabs",
    description:
      "Explore AI-powered solutions including intelligent agents, custom chatbots, SaaS development, and workflow automation to streamline your business.",
    url: "https://foundlabs.online/services",
    siteName: "FoundLabs",
    images: [
      {
        url: "https://foundlabs.online/opengraph-image.png", // update if needed
        width: 1200,
        height: 630,
        alt: "FoundLabs AI Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FoundLabs | AI Automation Services",
    description:
      "Supercharge your business with custom AI solutions: chatbots, SaaS apps, and workflow automation by FoundLabs.",
    images: ["https://foundlabs.online/opengraph-image.png"], // update if needed
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ServicesPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Services by FoundLabs",
    provider: {
      "@type": "Organization",
      name: "FoundLabs",
    },
    serviceType: "AI Automation, Chatbots, SaaS Tools, Workflow Automation",
    description:
      "AI-powered services to automate workflows, lead gen, onboarding, and analytics through chatbots, AI agents, and SaaS products.",
    url: "https://foundlabs.online/services",
  };
  const services = [
    {
      icon: <CpuChipIcon className="h-10 w-10 text-[#724bf0]" />,
      title: "AI Agents",
      description:
        "Intelligent agents that automate customer support, lead generation, and internal workflows 24/7.",
      features: [
        "Custom-trained for your business",
        "Multi-channel deployment",
        "Continuous learning",
      ],
    },
    {
      icon: (
        <ChatBubbleBottomCenterTextIcon className="h-10 w-10 text-[#724bf0]" />
      ),
      title: "Custom AI Chatbots",
      description:
        "Conversational AI trained on your knowledge base to engage customers and automate interactions.",
      features: [
        "Website, Slack & WhatsApp integration",
        "Natural language processing",
        "Human handoff capability",
      ],
    },
    {
      icon: <CodeBracketIcon className="h-10 w-10 text-[#724bf0]" />,
      title: "AI Web Applications",
      description:
        "Custom dashboards and tools that leverage AI to provide insights and automate decisions.",
      features: [
        "Tailored to your workflows",
        "Real-time analytics",
        "API integrations",
      ],
    },
    {
      icon: <RocketLaunchIcon className="h-10 w-10 text-[#724bf0]" />,
      title: "Micro SaaS Products",
      description:
        "Lightweight SaaS solutions that solve specific business problems with AI at their core.",
      features: [
        "Niche automation tools",
        "White-label options",
        "Subscription-ready",
      ],
    },
    {
      icon: <ArrowsRightLeftIcon className="h-10 w-10 text-[#724bf0]" />,
      title: "Workflow Automation",
      description:
        "End-to-end automation of business processes to eliminate repetitive tasks.",
      features: [
        "Sales pipeline automation",
        "Customer onboarding flows",
        "HR operations",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>AI Automation Services – FoundLabs</title>
        <meta
          name="description"
          content="Explore FoundLabs AI services: intelligent agents, RAG chatbots, workflow automation, and micro SaaS for your business."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1c1c1e]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#724bf0] mb-4">
              AI-Powered Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automate your business and focus on what matters most
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-transparent to-gray-800  p-6 rounded-lg border-t-2 border-[#724bf0]"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-[#724bf0]/10 mr-4">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {service.title}
                  </h2>
                </div>
                <p className="text-gray-400 mb-6">{service.description}</p>

                <h3 className="font-medium text-white mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-200">
                      <span className="text-[#724bf0] mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 relative rounded-2xl overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
              <Image
                src="/images/herobg3.webp" // Replace with your image path
                alt=""
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-[#5e3ac7]/90 to-[#302355]/90 opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to automate your business?
              </h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
                Get started with a free consultation to identify your best
                automation opportunities.
              </p>
              <button className="bg-[#1c1c1e] hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300">
                <Link href="/contact">Book a Strategy Call</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
