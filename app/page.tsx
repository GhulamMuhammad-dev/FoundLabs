'use client'
import Image from "next/image";

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
  PhoneArrowUpRightIcon,
  CircleStackIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
 
} from "@heroicons/react/24/outline";
import TestimonialsSection from "@/components/TestimonialsSection";


export default function Home() {
 const services = [
    {
      icon: <CpuChipIcon className="h-10 w-10 text-white" />,
      title: "AI Agents",
      description: "Intelligent agents for customer support, lead generation, and more that work 24/7 to grow your business",
      examples: ["Support bots", "Sales assistants", "Research agents"]
    },
    {
      icon: <ChatBubbleBottomCenterTextIcon className="h-10 w-10 text-white" />,
      title: "Custom AI Chatbots",
      description: "Tailored conversational AI trained on your data to engage customers and automate interactions",
      examples: ["Website chatbots", "Slack/Discord bots", "WhatsApp automation"]
    },
    {
      icon: <CodeBracketIcon className="h-10 w-10 text-white" />,
      title: "AI Web Apps & Dashboards",
      description: "Custom applications that leverage AI to provide insights and automate decision making",
      examples: ["Analytics dashboards", "AI-powered CRMs", "Business intelligence tools"]
    },
    {
      icon: <RocketLaunchIcon className="h-10 w-10 text-white" />,
      title: "Micro SaaS Products",
      description: "Lightweight SaaS solutions that solve specific business problems with AI at their core",
      examples: ["Niche automation tools", "Vertical-specific solutions", "API-first products"]
    },
    {
      icon: <ArrowsRightLeftIcon className="h-10 w-10 text-white" />,
      title: "Workflow Automation",
      description: "Streamline operations by automating repetitive tasks across your business processes",
      examples: ["Sales pipelines", "Customer onboarding", "HR operations"]
    }
  ];





   const groups = [
    {
      icon: <LightBulbIcon className="h-8 w-8 text-[#724bf0]" />,
      title: "Startup founders",
      description: "Launch and scale faster with AI-powered operations"
    },
    {
      icon: <BuildingStorefrontIcon className="h-8 w-8 text-[#724bf0]" />,
      title: "Small business owners",
      description: "Automate routine tasks to focus on growth"
    },
    {
      icon: <UserGroupIcon className="h-8 w-8 text-[#724bf0]" />,
      title: "Product teams",
      description: "Build AI features without massive engineering resources"
    },
    {
      icon: <UserIcon className="h-8 w-8 text-[#724bf0]" />,
      title: "Solo creators",
      description: "Multiply your output without hiring a team"
    }
  ];
   
  const steps = [
    {
      icon: <PhoneArrowUpRightIcon className="h-8 w-8 text-[#724bf0]" />,
      title: "Strategy Call & Workflow Mapping",
      description: "We analyze your business processes to identify automation opportunities and design optimal AI solutions"
    },
    {
      icon: <CircleStackIcon className="h-8 w-8 text-[#724bf0]" />,
      title: "AI Solution Design & Development",
      description: "Our team builds custom AI agents and workflows tailored to your specific business needs"
    },
    {
      icon: <RocketLaunchIcon className="h-8 w-8 text-[#724bf0]" />,
      title: "Launch & Scale with Ongoing Support",
      description: "We deploy your solution and provide continuous optimization as your business grows"
    }
  ];




  const caseStudies = [
    {
      title: "E-commerce Support Automation",
      before: "8-hour response times, 3 support staff overwhelmed",
      after: "Instant 24/7 responses with AI handling 80% of inquiries",
      metrics: [
        { icon: <ArrowTrendingUpIcon className="h-5 w-5" />, value: "70%", label: "Reduced workload" },
        { icon: <ClockIcon className="h-5 w-5" />, value: "24/7", label: "Response time" },
        { icon: <UserGroupIcon className="h-5 w-5" />, value: "2 → 1", label: "Team members needed" }
      ],
      logo: "/logos/ecom-company.svg"
    },
    {
      title: "SaaS Onboarding Automation",
      before: "Manual onboarding taking 5+ hours per client",
      after: "Fully automated onboarding with 98% completion rate",
      metrics: [
        { icon: <ArrowTrendingUpIcon className="h-5 w-5" />, value: "90%", label: "Time saved" },
        { icon: <ClockIcon className="h-5 w-5" />, value: "15min", label: "Average setup" },
        { icon: <UserGroupIcon className="h-5 w-5" />, value: "1 AI", label: "Replaced team" }
      ],
      logo: "/logos/saas-company.svg"
    }
  ];



  return (
    <>
    {/* hero section */}
     <section
      className="relative flex items-center justify-center text-center bg-[#1c1c1e] h-screen lg:h-[600px] w-full"
      style={{
        backgroundImage: "url('/images/herobg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center h-full">
          {/* Main heading with gradient text */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">GROW FASTER</span>
            <span className="block text-[#5e3ac7]">AND WORK LESS</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10">
            FoundLabs automates your business with intelligent AI workflows and agents, 
            helping startups streamline operations and accelerate growth.
          </p>
          
          {/* Button group */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-8 shadow-xl">
      
            <a
              href="#contact"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-3 rounded-lg font-medium transition-all duration-300 text-lg flex items-center justify-center"
            >
              CONTACT
            </a>
            <a
              href="#services"
              className="bg-[#724bf0] hover:bg-[#5e3ac7] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 text-lg flex items-center justify-center gap-2"
            >
              SERVICES
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>


    {/* About section */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1c1c1e]">
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1  items-center justify-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
             <span className="text-[#5e3ac7]">About </span>FoundLabs
            </h2>
            <div className="space-y-6 text-white">
              <p>
                At FoundLabs, we're on a mission to democratize AI automation for businesses of all sizes. 
                We believe that every company—not just tech giants—should have access to intelligent tools 
                that eliminate busywork and unlock growth.
              </p>
              <p>
                Our vision is a world where entrepreneurs spend their time on strategy and creativity, 
                not repetitive tasks. We started FoundLabs after seeing too many brilliant founders 
                overwhelmed by operational complexity instead of focused on their big ideas.
              </p>
              <p>
                Today, we combine cutting-edge AI with deep business understanding to create solutions 
                that feel like you've hired an expert team—at a fraction of the cost.
              </p>
            </div>

            <div className="mt-8 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  src="/images/profileimg.webp" // Replace with your photo path
                  alt="Founder of FoundLabs"
                  width={64}
                  height={64}
                  className="rounded-full object-cover h-16 w-16 border-2 border-[#724bf0]"
                />
              </div>
              <div>
                <h4 className="font-bold text-white">Ghulam Muhammad</h4>
                <p className="text-[#5e3ac7]">Founder & CEO</p>
                <p className="text-sm text-gray-500 mt-1">
                  "We build the tools I wish I had when starting my first company"
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
              className="bg-gray-900 p-6 rounded-lg border-2 border-[#724bf0]"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-[#724bf0] mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-200 mb-4">{service.description}</p>
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
                <h3 className="text-xl font-bold text-white mb-2">{group.title}</h3>
                <p className="text-gray-300">{group.description}</p>
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
          <p className="text-xl text-gray-600">
            Our Simple 3-Step Process
          </p>
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
                    <div className="p-4 rounded-full bg-[#724bf0]/10 mr-4 md:mr-0">
                      {step.icon}
                    </div>
                    <span className="md:hidden ml-2 text-2xl font-bold text-[#724bf0]">0{index + 1}</span>
                  </div>
                  <div className="md:flex md:items-center md:justify-center md:mb-4 hidden">
                    <span className="text-2xl font-bold text-[#724bf0]">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-200">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* case studies section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1c1c1e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#724bf0] mb-4">
            Proven Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Before/After AI Implementation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-[#1c1c1e] rounded-xl overflow-hidden border border-gray-200 hover:border-[#724bf0]/50 transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center mr-4">
                    <img src={study.logo} alt="Company logo" className="h-10 w-10 object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-500">Before AI</h4>
                    <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-red-400">
                      <p className="text-gray-200">{study.before}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-500">After AI</h4>
                    <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-[#724bf0]">
                      <p className="text-gray-200">{study.after}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="bg-gray-900 rounded-lg p-4 text-center shadow-sm">
                      <div className="flex justify-center text-[#724bf0] mb-2">
                        {metric.icon}
                      </div>
                      <p className="text-2xl font-bold text-white">{metric.value}</p>
                      <p className="text-sm text-gray-600">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-[#724bf0]/10 px-8 py-4 border-t border-gray-200">
                <a href="#" className="text-[#724bf0] font-medium flex items-center justify-end">
                  View full case study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* testimonials section */}
     <TestimonialsSection />


    </>

  );
}
