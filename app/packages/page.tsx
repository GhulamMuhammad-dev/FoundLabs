// app/packages/page.tsx
import React from "react";
import Link from "next/link";

const PackagesPage = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Header */}
      <header className="bg-gray-900 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-[#724BF0]">FOUNDLABS</h1>
          <p className="mt-4 text-xl text-gray-300">
            AI Chatbot Services — Powered by GPT-4 + Embeddings
          </p>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-lg">
            Let an intelligent AI chatbot handle your support, sales, and lead
            capture — trained on your website, FAQs, or documents.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#724BF0] mb-2">
              🔹 Our Packages
            </h2>
            <p className="text-gray-400 italic">Clear Value. Fast Setup.</p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Bot */}
            <div className="bg-gray-900 rounded-xl border overflow-hidden  transition-all duration-300">
              <div className="p-6 h-full flex flex-col">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold flex items-center">
                      <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                      Starter Bot
                    </h3>
                    <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm">
                      $299-$399
                    </span>
                  </div>
                  <p className="text-gray-300 italic">
                    For solopreneurs & small online businesses
                  </p>
                  <p className="text-gray-400 mt-3 text-sm">
                    Launch a branded AI chatbot that lives on your site and
                    answers common customer questions 24/7.
                  </p>
                </div>

                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold mb-3 text-[#3389FF] border-b border-gray-700 pb-2">
                    What You Get:
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Chatbot on 1 page (embedded)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Trained on FAQs or your text</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>GPT-4o smart responses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Custom avatar + welcome message</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>100 monthly interactions</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-[#3389FF] border-b border-gray-700 pb-2">
                    Add-ons:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2">+</span>
                      <span>Extra page: +$50</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">+</span>
                      <span>Hosting & support: +$29/month</span>
                    </li>
                  </ul>
                </div>

                <button className="w-full py-3 bg-white text-black hover:bg-gray-200 font-medium rounded-lg transition duration-200 mt-auto">
                  <Link
                    href={{
                      pathname: "/contact",
                      query: { package: "starter" },
                    }}
                  >
                    Get Started
                  </Link>
                </button>
              </div>
            </div>

            {/* Smart RAG Chatbot */}
            <div className="bg-gray-900 rounded-xl border-2 border-[#724BF0] overflow-hidden transform scale-105 z-10 ">
              <div className="p-6 h-full flex flex-col">
                <div className="absolute top-0 right-0 bg-[#724BF0] text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Most Popular
                </div>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold flex items-center">
                      <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                      Smart RAG Chatbot
                    </h3>
                    <span className="bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-sm">
                      $499-$799
                    </span>
                  </div>
                  <p className="text-gray-300 italic">
                    For e-commerce stores, SaaS, and coaches
                  </p>
                  <p className="text-gray-400 mt-3 text-sm">
                    Your chatbot becomes a smart assistant trained on your PDFs,
                    site content, or internal docs. Ideal for reducing support
                    tickets and boosting engagement.
                  </p>
                </div>

                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold mb-3 text-[#724BF0] border-b border-gray-700 pb-2">
                    What You Get:
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        GPT-4o chatbot with real-time knowledge from your
                        content (RAG system)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Vector DB (Supabase or Chroma)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Custom branding (logo, colors, tone)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Embed on up to 3 pages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Up to 50MB of content indexed</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-[#724BF0] border-b border-gray-700 pb-2">
                    Add-ons:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2">+</span>
                      <span>Multilingual chat: +$99</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">+</span>
                      <span>Hosting & support: +$39/month</span>
                    </li>
                  </ul>
                </div>

                <button className="w-full py-3 bg-[#724BF0] hover:bg-[#6338E0] text-white font-medium rounded-lg transition duration-200 mt-auto">
                  <Link
                    href={{
                      pathname: "/contact",
                      query: { package: "smart-rag" },
                    }}
                  >
                    Get Started
                  </Link>
                </button>
              </div>
            </div>

            {/* AI Support Assistant */}
            <div className="bg-gray-900 rounded-xl border overflow-hidden  transition-all duration-300">
              <div className="p-6 h-full flex flex-col">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold flex items-center">
                      <span className="w-3 h-3 rounded-full bg-amber-500 mr-2"></span>
                      AI Support Assistant
                    </h3>
                    <span className="bg-amber-900/30 text-amber-400 px-3 py-1 rounded-full text-sm">
                      $999-$1499
                    </span>
                  </div>
                  <p className="text-gray-300 italic">
                    For scaling teams & high-traffic businesses
                  </p>
                  <p className="text-gray-400 mt-3 text-sm">
                    Your 24/7 AI support rep — complete with analytics, lead
                    capture, and automation. Built for businesses ready to
                    scale.
                  </p>
                </div>

                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold mb-3 text-[#3389FF] border-b border-gray-700 pb-2">
                    What You Get:
                  </h4>
                  <p className="text-xs text-gray-500 mb-2">
                    Everything in Smart RAG +
                  </p>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Usage analytics dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Lead form + CRM sync (Airtable, Notion, Sheets)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Email/Slack alerts for hot leads or support queries
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Admin panel to update content anytime</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Handles 10K+ queries/month</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>30-day support & updates included</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-[#3389FF] border-b border-gray-700 pb-2">
                    Add-ons:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2">+</span>
                      <span>Multi-site install: +$100/site</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">+</span>
                      <span>Advanced support: +$79–$199/month</span>
                    </li>
                  </ul>
                </div>

                <button className="w-full py-3 bg-white text-black hover:bg-gray-200 font-medium rounded-lg transition duration-200 mt-auto">
                  <Link
                    href={{
                      pathname: "/contact",
                      query: { package: "support-assistant" },
                    }}>
                    Get Started
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PackagesPage;
