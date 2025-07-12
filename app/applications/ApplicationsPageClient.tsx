"use client";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Head from "next/head";

const ApplicationsPageClient = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "FoundLabs SaaS Applications",
    url: "https://foundlabs.online/applications",
    description:
      "FoundLabs builds smart SaaS products like AutoFlow, ChatGenius, and DataPilot to help automate and optimize your business.",
    numberOfItems: 4,
    itemListElement: [
      {
        "@type": "SoftwareApplication",
        name: "AutoFlow",
        applicationCategory: "Productivity",
        operatingSystem: "Web",
        url: "https://autoflow.example.com",
      },
      {
        "@type": "SoftwareApplication",
        name: "ChatGenius",
        applicationCategory: "Customer Support",
        operatingSystem: "Web",
        url: "https://chatgenius.example.com",
      },
      {
        "@type": "SoftwareApplication",
        name: "DataPilot",
        applicationCategory: "Analytics",
        operatingSystem: "Web",
        url: "https://datapilot.example.com",
      },
      {
        "@type": "SoftwareApplication",
        name: "LeadEngine",
        applicationCategory: "Sales",
        operatingSystem: "Web",
        url: "https://leadengine.example.com",
      },
    ],
  };

  const saasProducts = [
    {
      id: 1,
      name: "AutoFlow",
      description:
        "AI-powered workflow automation that connects your apps and automates repetitive tasks.",
      category: "Productivity",
      logo: "/logos/autoflow.svg",
      link: "https://autoflow.example.com",
      features: [
        "No-code automation builder",
        "100+ app integrations",
        "Smart error handling",
      ],
    },
    {
      id: 2,
      name: "ChatGenius",
      description:
        "Custom AI chatbots trained on your knowledge base for 24/7 customer support.",
      category: "Customer Support",
      logo: "/logos/chatgenius.svg",
      link: "https://chatgenius.example.com",
      features: [
        "Multilingual support",
        "Seamless human handoff",
        "Real-time analytics",
      ],
    },
    {
      id: 3,
      name: "DataPilot",
      description:
        "Business intelligence platform that turns your data into actionable insights.",
      category: "Analytics",
      logo: "/logos/datapilot.svg",
      link: "https://datapilot.example.com",
      features: [
        "Automated reporting",
        "Predictive analytics",
        "Custom dashboards",
      ],
    },
    {
      id: 4,
      name: "LeadEngine",
      description:
        "AI-driven lead generation and qualification system for sales teams.",
      category: "Sales",
      logo: "/logos/leadengine.svg",
      link: "https://leadengine.example.com",
      features: ["Intent detection", "CRM integrations", "Conversion scoring"],
    },
  ];

  return (
    <>
      <Head>
        <title>AI SaaS Applications – FoundLabs</title>
        <meta
          name="description"
          content="Discover powerful AI SaaS tools by FoundLabs to automate workflows, sales, analytics, and customer engagement."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1c1c1e] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Our SaaS Applications
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Powerful, AI-powered tools built to solve real business
              challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {saasProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#2a2a2d] rounded-2xl border border-[#333] hover:border-[#724bf0] transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center p-2 mr-4">
                      <Image
                        src={product.logo}
                        alt={`${product.name} logo`}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-white">
                        {product.name}
                      </h2>
                      <span className="text-sm text-[#724bf0] bg-[#724bf0]/10 px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{product.description}</p>

                  <h3 className="font-medium text-white mb-3">Key Features:</h3>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <span className="text-[#724bf0] mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#724bf0] hover:text-[#9c82f9] font-medium transition-colors"
                  >
                    Visit {product.name}
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center bg-[#724bf0]/5 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Need a Custom AI Solution?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              We build bespoke SaaS platforms tailored to your business needs.
            </p>
            <button className="bg-[#724bf0] hover:bg-[#5e3ac7] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              Request a Demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplicationsPageClient;
