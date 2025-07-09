'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  EnvelopeIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

const ContactPage = () => {
  const searchParams = useSearchParams();
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    package: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  useEffect(() => {
    const packageParam = searchParams.get('package');
    if (packageParam) {
      setSelectedPackage(packageParam);
      
      // Set package info and default message
      let packageInfo = {
        name: '',
        price: '',
        message: ''
      };

      switch(packageParam) {
        case 'starter':
          packageInfo = {
            name: 'Starter Bot',
            price: '$299-$399',
            message: "I'm interested in the Starter Bot package and would like to learn more about implementation."
          };
          break;
        case 'smart-rag':
          packageInfo = {
            name: 'Smart RAG Chatbot',
            price: '$499-$799',
            message: "I'm interested in the Smart RAG Chatbot package and would like to discuss my specific needs."
          };
          break;
        case 'support-assistant':
          packageInfo = {
            name: 'AI Support Assistant',
            price: '$999-$1499',
            message: "I'm interested in the AI Support Assistant package for my business."
          };
          break;
        default:
          packageInfo = {
            name: 'AI Chatbot Services',
            price: '',
            message: "I'm interested in your AI chatbot services and would like more information."
          };
      }
      
      setFormData(prev => ({ 
        ...prev, 
        message: packageInfo.message,
        package: `${packageInfo.name} ${packageInfo.price}` 
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ 
          name: '', 
          email: '', 
          message: '',
          package: formData.package // Keep package info
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const packageDetails = () => {
    if (!selectedPackage) return null;
    
    let features : string[] = [];
    switch(selectedPackage) {
      case 'starter':
        features = [
          '1-page website chatbot',
          'Pre-trained on your FAQs',
          'GPT-4o powered',
          '100 monthly interactions'
        ];
        break;
      case 'smart-rag':
        features = [
          'Trained on your documents',
          'GPT-4o + vector search',
          'Branded UI',
          'Up to 3 pages'
        ];
        break;
      case 'support-assistant':
        features = [
          'Analytics dashboard',
          'CRM integration',
          'Slack/email alerts',
          '10K+ queries/month'
        ];
        break;
    }

    return (
      <div className="bg-[#724bf0]/10 p-4 rounded-lg mb-6 border border-[#724bf0]/30">
        <h3 className="font-bold text-lg text-[#724bf0] mb-2">
          {formData.package || 'AI Chatbot Services'}
        </h3>
        <ul className="space-y-1 text-sm text-gray-300">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section className="min-h-screen px-4 py-12 bg-[#1c1c1e] text-white">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/packages" 
            className="inline-flex items-center text-[#724bf0] hover:text-[#6338E0] transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-1" />
            Back to packages
          </Link>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">Get Started</h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Complete this form and we&apos;ll help you set up your AI chatbot
          </p>
        </div>

        <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            {packageDetails()}
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <input 
                type="hidden" 
                name="package" 
                value={formData.package} 
              />
              
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-300 mb-1 block">
                  Your Name
                </label>
                <div className="relative">
                  <UserIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10 pr-4 py-2.5 w-full bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#724bf0] focus:border-[#724bf0] outline-none text-white"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-300 mb-1 block">
                  Email Address
                </label>
                <div className="relative">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 pr-4 py-2.5 w-full bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#724bf0] focus:border-[#724bf0] outline-none text-white"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-300 mb-1 block">
                  Your Message
                </label>
                <div className="relative">
                  <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="pl-10 pr-4 py-2.5 w-full bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#724bf0] focus:border-[#724bf0] outline-none text-white"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white bg-[#724bf0] hover:bg-[#6338E0] transition-colors font-semibold py-3 rounded-lg shadow-sm ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Inquiry'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-3 bg-green-900/30 text-green-400 rounded-lg text-center">
                  Message sent successfully! We&apos;ll contact you shortly.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-900/30 text-red-400 rounded-lg text-center">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Need immediate assistance? Email us at <a href="mailto:support@foundlabs.com" className="text-[#724bf0] hover:underline">support@foundlabs.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;