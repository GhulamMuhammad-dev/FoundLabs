import { ArrowTopRightOnSquareIcon, CloudArrowUpIcon, CommandLineIcon, ChartBarIcon,ChatBubbleBottomCenterTextIcon,ArrowTrendingUpIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const ApplicationsPage = () => {
  const saasProducts = [
    {
      id: 1,
      name: "AutoFlow",
      description: "AI-powered workflow automation that connects your apps and automates repetitive tasks.",
      category: "Productivity",
      logo: "/logos/autoflow.svg",
      link: "https://autoflow.example.com",
      features: [
        "No-code automation builder",
        "100+ app integrations",
        "Smart error handling"
      ]
    },
    {
      id: 2,
      name: "ChatGenius",
      description: "Custom AI chatbots trained on your knowledge base for 24/7 customer support.",
      category: "Customer Support",
      logo: "/logos/chatgenius.svg",
      link: "https://chatgenius.example.com",
      features: [
        "Multilingual support",
        "Seamless human handoff",
        "Real-time analytics"
      ]
    },
    {
      id: 3,
      name: "DataPilot",
      description: "Business intelligence platform that turns your data into actionable insights.",
      category: "Analytics",
      logo: "/logos/datapilot.svg",
      link: "https://datapilot.example.com",
      features: [
        "Automated reporting",
        "Predictive analytics",
        "Custom dashboards"
      ]
    },
    {
      id: 4,
      name: "LeadEngine",
      description: "AI-driven lead generation and qualification system for sales teams.",
      category: "Sales",
      logo: "/logos/leadengine.svg",
      link: "https://leadengine.example.com",
      features: [
        "Intent detection",
        "CRM integrations",
        "Conversion scoring"
      ]
    }
  ];

  const categories = [
    { name: "All", icon: <CommandLineIcon className="h-5 w-5" />, count: saasProducts.length },
    { name: "Productivity", icon: <CloudArrowUpIcon className="h-5 w-5" />, count: saasProducts.filter(p => p.category === "Productivity").length },
    { name: "Customer Support", icon: <ChatBubbleBottomCenterTextIcon className="h-5 w-5" />, count: saasProducts.filter(p => p.category === "Customer Support").length },
    { name: "Analytics", icon: <ChartBarIcon className="h-5 w-5" />, count: saasProducts.filter(p => p.category === "Analytics").length },
    { name: "Sales", icon: <ArrowTrendingUpIcon className="h-5 w-5" />, count: saasProducts.filter(p => p.category === "Sales").length }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1c1c1e] mb-4">
            Our SaaS Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-powered applications designed to solve specific business challenges
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:border-[#724bf0] hover:bg-[#724bf0]/10 transition-colors"
            >
              {category.icon}
              <span>{category.name}</span>
              <span className="text-gray-500 text-sm">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {saasProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-[#fafafc] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
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
                    <h2 className="text-xl font-bold text-[#1c1c1e]">{product.name}</h2>
                    <span className="text-sm text-[#724bf0] bg-[#724bf0]/10 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <h3 className="font-medium text-[#1c1c1e] mb-3">Key Features:</h3>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="text-[#724bf0] mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#724bf0] hover:text-[#5e3ac7] font-medium"
                >
                  Visit {product.name}
                  <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-[#724bf0]/5 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-[#1c1c1e] mb-4">
            Need a Custom AI Solution?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We build tailored SaaS applications to solve your unique business challenges.
          </p>
          <button className="bg-[#724bf0] hover:bg-[#5e3ac7] text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300">
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsPage;