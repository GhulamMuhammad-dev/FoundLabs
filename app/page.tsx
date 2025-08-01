
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Head from "next/head";

import {
  ArrowRightIcon,
  ChatBubbleBottomCenterTextIcon,
  CpuChipIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  ArrowsRightLeftIcon,
  LightBulbIcon,
  BuildingStorefrontIcon,
  UserGroupIcon,
  UserIcon,
  // PhoneArrowUpRightIcon,
  // CircleStackIcon,
} from "@heroicons/react/24/outline";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata = {
  title: "FoundLabs | AI Business Automation for Startups & Creators",
  description:
    "Grow faster and work less with FoundLabs. We automate your business using intelligent AI agents, workflows, and micro SaaS tools.",
  keywords: [
    "AI automation",
    "AI chatbot for business",
    "AI agents",
    "startup automation",
    "micro SaaS",
    "AI workflows",
    "FoundLabs",
    "business automation tools",
  ],
  robots: "index, follow",
  openGraph: {
    title: "FoundLabs | AI Business Automation for Startups & Creators",
    description:
      "FoundLabs builds AI agents and automation workflows to help you scale your business faster with less effort.",
    url: "https://foundlabs.online", // Replace with your live URL
    siteName: "FoundLabs",
    images: [
      {
        url: "https://foundlabs.online/opengraph-image.png", // Replace with your OG image
        width: 1200,
        height: 630,
        alt: "FoundLabs AI Automation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FoundLabs | AI Business Automation for Startups",
    description:
      "Automate your startup or business with intelligent AI tools. Work less, grow more.",
    images: ["https://foundlabs.online/opengraph-image.png"], // Replace with your OG image
  },
};

<NextSeo
  title="FoundLabs | AI Business Automation for Startups & Creators"
  description="FoundLabs helps businesses grow faster with AI-powered automation agents, workflows, and micro SaaS tools."
  canonical="https://foundlabs.online"
  openGraph={{
    url: "https://foundlabs.online",
    title: "FoundLabs | AI Business Automation for Startups & Creators",
    description:
      "Grow faster and work less with FoundLabs. We build AI agents, chatbots, and automations for startups and creators.",
    images: [
      {
        url: "https://foundlabs.online/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "FoundLabs AI Automation",
      },
    ],
    siteName: "FoundLabs",
  }}
/>;

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FoundLabs",
    url: "https://foundlabs.online",
    description:
      "AI-powered automation for businesses: chatbots, workflow tools, and smart SaaS.",
    publisher: {
      "@type": "Organization",
      name: "FoundLabs",
    },
  };

  const services = [
    {
      icon: <CpuChipIcon className="h-10 w-10 text-white" />,
      title: "AI Agents",
      description:
        "Intelligent agents for customer support, lead generation, and more that work 24/7 to grow your business",
      examples: ["Support bots", "Sales assistants", "Research agents"],
    },
    {
      icon: <ChatBubbleBottomCenterTextIcon className="h-10 w-10 text-white" />,
      title: "Custom AI Chatbots",
      description:
        "Tailored conversational AI trained on your data to engage customers and automate interactions",
      examples: [
        "Website chatbots",
        "Slack/Discord bots",
        "WhatsApp automation",
      ],
    },
    {
      icon: <CodeBracketIcon className="h-10 w-10 text-white" />,
      title: "AI Web Apps & Dashboards",
      description:
        "Custom applications that leverage AI to provide insights and automate decision making",
      examples: [
        "Analytics dashboards",
        "AI-powered CRMs",
        "Business intelligence tools",
      ],
    },
    {
      icon: <RocketLaunchIcon className="h-10 w-10 text-white" />,
      title: "Micro SaaS Products",
      description:
        "Lightweight SaaS solutions that solve specific business problems with AI at their core",
      examples: [
        "Niche automation tools",
        "Vertical-specific solutions",
        "API-first products",
      ],
    },
    {
      icon: <ArrowsRightLeftIcon className="h-10 w-10 text-white" />,
      title: "Workflow Automation",
      description:
        "Streamline operations by automating repetitive tasks across your business processes",
      examples: ["Sales pipelines", "Customer onboarding", "HR operations"],
    },
  ];

  const groups = [
    {
      icon: <LightBulbIcon className="h-8 w-8 text-[#724bf0]" />,
      title: "Startup founders",
      description: "Launch and scale faster with AI-powered operations",
    },
    {
      icon: <BuildingStorefrontIcon className="h-8 w-8 text-[#724bf0]" />,
      title: "Small business owners",
      description: "Automate routine tasks to focus on growth",
    },
    {
      icon: <UserGroupIcon className="h-8 w-8 text-[#724bf0]" />,
      title: "Product teams",
      description: "Build AI features without massive engineering resources",
    },
    {
      icon: <UserIcon className="h-8 w-8 text-[#724bf0]" />,
      title: "Solo creators",
      description: "Multiply your output without hiring a team",
    },
  ];

  const steps = [
    {
      // icon: <PhoneArrowUpRightIcon className="h-8 w-8 text-[#724bf0]" />,
      title: "Strategy Call & Workflow Mapping",
      description:
        "We analyze your business processes to identify automation opportunities and design optimal AI solutions",
    },
    {
      // icon: <CircleStackIcon className="h-8 w-8 text-[#724bf0]" />,
      title: "AI Solution Design & Development",
      description:
        "Our team builds custom AI agents and workflows tailored to your specific business needs",
    },
    {
      // icon: <RocketLaunchIcon className="h-8 w-8 text-[#724bf0]" />,
      title: "Launch & Scale with Ongoing Support",
      description:
        "We deploy your solution and provide continuous optimization as your business grows",
    },
  ];

  return (
    <>
      <Head>
        <title>FoundLabs – AI Automation for Businesses</title>
        <meta
          name="description"
          content="FoundLabs builds AI solutions like chatbots, RAG tools, and workflow automation to help businesses grow faster."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      {/* hero section */}
      <section
        className="relative flex items-center justify-center text-center bg-[#1c1c1e] h-screen lg:h-[600px] w-full "
        // style={{
        //   backgroundImage: "url('/images/herobg3.webp')",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80  transition duration-300"></div>

        {/* Content container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center h-full">
            {/* Main heading with gradient text */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block bg-gradient-to-tl from-gray-400 to-white bg-clip-text text-transparent">
                GROW FASTER
              </span>
              <span className="block  bg-gradient-to-tl from-[#5e3ac7]/60 to-[#5e3ac7] bg-clip-text text-transparent">
                AND WORK LESS
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10">
              FoundLabs automates your business with intelligent AI workflows
              and agents, helping startups streamline operations and accelerate
              growth.
            </p>

            {/* Button group */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center ">
              <Link
                href="/contact"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-3 rounded-lg font-medium transition-all duration-300 text-lg flex items-center justify-center"
              >
                CONTACT
              </Link>
              <Link
                href="/services"
                className="bg-[#724bf0] hover:bg-[#5e3ac7] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 text-lg flex items-center justify-center gap-2"
              >
                SERVICES
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1c1c1e]">
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1  items-center justify-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
                <span className="text-[#5e3ac7]">About </span>FoundLabs
              </h2>
              <div className="space-y-6 text-white text-center text-2xl font-bold">
                <p>
                  &quot;At FoundLabs, we&apos;re on a mission to democratize AI
                  automation for businesses of all sizes. We believe that every
                  company—not just tech giants—should have access to intelligent
                  tools that eliminate busywork and unlock growth.&quot;
                </p>
              </div>

              <div className="mt-8 flex items-center space-x-4 justify-center">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/profileimg.webp"
                    alt="Photo of Ghulam Muhammad, Founder of FoundLabs"
                    width={64}
                    height={64}
                    priority
                    className="rounded-full object-cover h-16 w-16 border-2 border-[#724bf0]"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">Ghulam Muhammad</h4>
                  <p className="text-[#5e3ac7]">Founder & CEO</p>
                  <p className="text-sm text-gray-500 mt-1 secondary-font">
                    &quot;We build the tools I wish I had when starting my first
                    company &quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // Services section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1c1c1e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#724bf0] mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-Powered Solutions for Startups & Businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-transparent to-gray-800  p-6 rounded-lg border-t-2 border-[#724bf0]"
              >
                <div className="flex items-center mb-6">
                  {/* <div className="p-3 rounded-lg bg-[#724bf0] mr-4">
                  {service.icon}
                </div> */}
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-200 mb-4 ">{service.description}</p>
                <ul className="space-y-2">
                  {service.examples.map((example, i) => (
                    <li key={i} className="flex items-center text-gray-400">
                      <span className="text-[#724bf0] mr-2">✓</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* how we help section */}

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1c1c1e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#724bf0] mb-4">
              Who We Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We Help Startups, Small Businesses, and Founders Scale Smarter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {groups.map((group, index) => (
              <div
                key={index}
                className="bg-gradient-to-bl from-[#724bf0] to-[#724bf0]/50 rounded-xl p-8 hover:border-[#724bf0]/50 border border-transparent transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-white mb-4">
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {group.title}
                  </h3>
                  <p className="text-gray-300 ">{group.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* how it works section  */}

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1c1c1e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#724bf0] mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">Our Simple 3-Step Process</p>
          </div>

          <div className="relative">
            {/* Progress line */}
            {/* <div className="hidden md:block absolute top-12 left-1/2 transform -translate-x-1/2 h-1 w-3/4 bg-[#724bf0]/20 rounded-full">
            <div className="h-1 bg-[#724bf0] rounded-full w-full"></div>
          </div> */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-transparent rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center mb-6">
                      {/* <div className="p-4 rounded-full bg-[#724bf0]/10 mr-4 md:mr-0">
                      {step.icon}
                    </div> */}
                      <span className="md:hidden ml-2 text-2xl font-bold text-[#724bf0]">
                        0{index + 1}
                      </span>
                    </div>
                    <div className="md:flex md:items-center md:justify-center md:mb-4 hidden">
                      <span className="text-2xl font-bold text-[#724bf0]">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-200">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* testimonials section */}
      <TestimonialsSection />
    </>
  );
}
