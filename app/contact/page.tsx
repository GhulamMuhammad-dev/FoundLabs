'use client';
import React, { useState } from 'react';
import {
  EnvelopeIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

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
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen px-4 py-20 bg-[#1c1c1e] text-white border2 md:relative md:flex md:justify-center ">
      <div className="max-w-3xl mx-auto   md:absolute md:top-10 ">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">Contact Us</h2>
          <p className="text-gray-400">
            We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as we can.
          </p>
        </div>

        <div className="bg-white text-black rounded-2xl shadow-md p-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1 block">
                Name
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
                  className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-md focus:ring-[#724bf0] focus:border-[#724bf0] outline-none"
                  placeholder="Your name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">
                Email
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
                  className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-md focus:ring-[#724bf0] focus:border-[#724bf0] outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1 block">
                Message
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
                  className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-md focus:ring-[#724bf0] focus:border-[#724bf0] outline-none"
                  placeholder="Write your message..."
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full text-white bg-[#724bf0] hover:bg-[#5e3ac7] transition-colors font-semibold py-2.5 rounded-md shadow-sm ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-600 font-medium text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 font-medium text-center">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
