import Image from 'next/image';
import { LightBulbIcon, ScaleIcon, SparklesIcon } from '@heroicons/react/24/outline';

const AboutPage = () => {
  const stats = [
    { value: "50+", label: "Businesses Automated" },
    { value: "90%", label: "Client Retention" },
    { value: "3x", label: "Average Efficiency Gain" }
  ];

  const values = [
    {
      icon: <LightBulbIcon className="h-10 w-10 text-[#724bf0]" />,
      title: "Innovation",
      description: "We constantly push boundaries to develop cutting-edge AI solutions that deliver real results."
    },
    {
      icon: <ScaleIcon className="h-10 w-10 text-[#724bf0]" />,
      title: "Balance",
      description: "We believe AI should amplify human potential, not replace it—creating harmony between technology and teams."
    },
    {
      icon: <SparklesIcon className="h-10 w-10 text-[#724bf0]" />,
      title: "Excellence",
      description: "From concept to deployment, we obsess over every detail to ensure exceptional quality and performance."
    }
  ];

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#1c1c1e] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-16 pt-48 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Building the Future of <span className="text-[#724bf0]">Business Automation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              FoundLabs was born from a simple idea: AI should work for everyone, not just tech giants.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/about-bg-pattern.svg"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1c1c1e] mb-6">Our Story</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                Founded in 2022 by a team of AI engineers and startup veterans, FoundLabs emerged from our frustration with seeing brilliant founders bogged down by operational tasks instead of focusing on growth.
              </p>
              <p>
                We started with a simple chatbot for a local e-commerce store. Today, we&apos;ve grown into a full-service AI automation partner for businesses across multiple industries.
              </p>
              <p>
                What hasn&apos;t changed is our commitment to making powerful AI accessible and actionable for businesses of all sizes.
              </p>
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/about-team.jpg"
              alt="FoundLabs team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#fafafc] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <p className="text-5xl font-bold text-[#724bf0] mb-2">{stat.value}</p>
                <p className="text-lg text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-[#1c1c1e] mb-12 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-[#fafafc] rounded-xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-[#724bf0]/10 rounded-full">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1c1c1e] mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team CTA */}
      <div className="bg-[#724bf0] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl text-white/90 mb-8">
            Our team of AI experts is ready to help you identify and implement the right automation solutions for your business.
          </p>
          <button className="bg-white text-[#724bf0] hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors duration-300">
            Meet Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;