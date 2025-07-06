'use client';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const WorkPage = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce AI Assistant",
      description: "Automated customer support for online stores with 85% query resolution rate.",
      tags: ["AI Chatbot", "E-commerce", "Customer Support"],
      image: "/projects/ecommerce-ai.jpg",
      link: "#",
      results: [
        { metric: "70%", label: "Support tickets reduced" },
        { metric: "24/7", label: "Availability" },
        { metric: "4.9/5", label: "Customer satisfaction" }
      ]
    },
    {
      id: 2,
      title: "SaaS Onboarding Automation",
      description: "Streamlined user onboarding process reducing setup time from 3 days to 2 hours.",
      tags: ["Workflow Automation", "SaaS", "User Experience"],
      image: "/projects/saas-onboarding.jpg",
      link: "#",
      results: [
        { metric: "90%", label: "Onboarding completion" },
        { metric: "2 hours", label: "Average setup time" },
        { metric: "40%", label: "Churn reduction" }
      ]
    },
    {
      id: 3,
      title: "Lead Qualification System",
      description: "AI-powered lead scoring that increased sales team efficiency by 60%.",
      tags: ["Lead Generation", "Sales Automation", "Machine Learning"],
      image: "/projects/lead-qualification.jpg",
      link: "#",
      results: [
        { metric: "60%", label: "Team efficiency gain" },
        { metric: "3x", label: "More qualified leads" },
        { metric: "28%", label: "Conversion increase" }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1c1c1e] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Work</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            AI solutions that deliver measurable results for our clients
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2">
          {projects.map(project => (
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
                  <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
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
                      <p className="text-xl font-bold text-white">{result.metric}</p>
                      <p className="text-sm text-gray-400">{result.label}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center text-[#724bf0] hover:text-[#9c82f9] font-medium"
                >
                  View case study
                  <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to transform your business with AI?
          </h2>
          <button className="bg-[#724bf0] hover:bg-[#5e3ac7] text-white px-8 py-3 rounded-lg font-medium transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkPage;
