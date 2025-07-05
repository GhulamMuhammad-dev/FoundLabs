import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "FoundLabs' AI solutions reduced our customer support workload by 70% while improving response times. Their automation allowed us to scale without hiring additional staff.",
      avatar: "/avatars/sarah-johnson.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, EcomDash",
      content: "The AI workflow automation cut our onboarding process from 3 days to just 2 hours. The FoundLabs team understood our needs perfectly and delivered beyond expectations.",
      avatar: "/avatars/michael-chen.jpg"
    },
    {
      id: 3,
      name: "David Rodriguez",
      role: "CTO, SaaSMetrics",
      content: "We replaced two full-time employees with one of FoundLabs' AI agents. The accuracy and efficiency has been remarkable, with zero complaints from our customers.",
      avatar: "/avatars/david-rodriguez.jpg"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1c1c1e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#724bf0] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by startups and businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-transparent rounded-xl p-8 shadow-sm border border-[#724bf0]"
            >
              <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-[#724bf0] mb-4" />
              <p className="text-gray-400 mb-6">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center text-[#724bf0] font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-[#724bf0] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;