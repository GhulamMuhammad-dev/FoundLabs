"use client";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const WorkPageClient = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Client Projects – FoundLabs",
    url: "https://foundlabs.online/work",
    description:
      "Explore case studies and success stories where FoundLabs AI products drove efficiency and ROI.",
    itemListElement: [
      {
        "@type": "CreativeWork",
        name: "Upwork Proposal Analyzer AI",
        url: "https://proposalanalysis.netlify.app",
        description:
          "AI-powered tool that analyzes Upwork proposals to increase client conversion.",
      },
      {
        "@type": "CreativeWork",
        name: "AI Assistant for Customer Onboarding",
        url: "https://company-ai-assistant.vercel.app",
        description:
          "Custom AI assistant for onboarding SaaS users using internal training documents.",
      },
      {
        "@type": "CreativeWork",
        name: "Lead Qualification System",
        description:
          "AI-powered lead scoring tool that increased sales team efficiency by 60%.",
      },
    ],
  };

  const projects = [
    {
      id: 1,
      title: "Upwork Proposal Analyzer AI",
      description:
        "AI-powered tool that analyzes and improves Upwork proposals to boost response rates and client conversion.",
      tags: ["AI Tool", "Freelancing", "Proposal Optimization"],
      image: "/images/upworkProposalThum.webp",
      link: "https://proposalanalysis.netlify.app",
      results: [
        { metric: "3x", label: "Higher response rate" },
        { metric: "90%", label: "Improvement suggestions accuracy" },
        { metric: "4.8/5", label: "User satisfaction" },
      ],
    },
    {
      id: 2,
      title: "AI-Powered Assistant for Customer Onboarding",
      description:
        "Developed an AI assistant chatbot trained on internal company data to automate and personalize the SaaS user onboarding experience, reducing manual support and setup time from 3 days to just 2 hours.",
      tags: ["AI Chatbot", "SaaS", "Conversational UX", "Automation"],
      image: "/images/AIassistantThum.webp",
      link: "https://company-ai-assistant.vercel.app",
      results: [
        { metric: "90%", label: "Onboarding completion rate" },
        { metric: "2 hours", label: "Average onboarding time" },
        { metric: "40%", label: "Reduction in customer churn" },
      ],
    },
    {
      id: 3,
      title: "Lead Qualification System",
      description:
        "AI-powered lead scoring that increased sales team efficiency by 60%.",
      tags: ["Lead Generation", "Sales Automation", "Machine Learning"],
      image: "/projects/lead-qualification.jpg",
      link: "#",
      results: [
        { metric: "60%", label: "Team efficiency gain" },
        { metric: "3x", label: "More qualified leads" },
        { metric: "28%", label: "Conversion increase" },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Our Work – FoundLabs AI Projects</title>
        <meta
          name="description"
          content="See real-world results from FoundLabs AI tools. From onboarding bots to lead scoring and GPT-4 AI assistants."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1c1c1e] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Work</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              AI solutions that deliver measurable results for our clients
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#2a2a2d] rounded-2xl overflow-hidden border border-[#2f2f32] hover:border-[#724bf0] transition duration-300"
              >
                <div className="relative h-56 sm:h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h2 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-sm px-3 py-1 bg-[#724bf0]/20 text-[#724bf0] rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-300 mb-6">{project.description}</p>

                  <div className="grid grid-cols-3 gap-4 text-center mb-6">
                    {project.results.map((result, i) => (
                      <div key={i}>
                        <p className="text-xl font-bold text-white">
                          {result.metric}
                        </p>
                        <p className="text-sm text-gray-400">{result.label}</p>
                      </div>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center text-[#724bf0] hover:text-[#9c82f9] font-medium"
                  >
                    View Project
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to transform your business with AI?
            </h2>
            <button className="bg-[#724bf0] hover:bg-[#5e3ac7] text-white px-8 py-3 rounded-lg font-medium transition">
              <Link href="/contact">Contact</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkPageClient;
