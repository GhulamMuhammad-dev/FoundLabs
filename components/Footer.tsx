import React from 'react';
import Link from 'next/link';
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1c1e] text-[#fafafc] pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-[#724bf0] rounded-lg flex items-center justify-center text-white font-bold mr-2">
                FL
              </div>
              <span className="text-xl font-bold">FoundLabs</span>
            </div>
            <p className="text-gray-400">
              Helping startups and businesses grow faster with intelligent AI automation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#724bf0] transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#724bf0] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#724bf0] transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services">
                  <span className="text-gray-400 hover:text-[#724bf0] transition-colors cursor-pointer">
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/work">
                  <span className="text-gray-400 hover:text-[#724bf0] transition-colors cursor-pointer">
                    Our Work
                  </span>
                </Link>
              </li>
              {/* <li>
                <Link href="/about">
                  <span className="text-gray-400 hover:text-[#724bf0] transition-colors cursor-pointer">
                    About Us
                  </span>
                </Link>
              </li> */}
              {/* <li>
                <Link href="/blog">
                  <span className="text-gray-400 hover:text-[#724bf0] transition-colors cursor-pointer">
                    Blog
                  </span>
                </Link>
              </li> */}
              {/* <li>
                <Link href="/careers">
                  <span className="text-gray-400 hover:text-[#724bf0] transition-colors cursor-pointer">
                    Careers
                  </span>
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#">
                  <span className="text-gray-400 hover:text-[#724bf0] transition-colors cursor-pointer">
                    AI Agents
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="text-gray-400 hover:text-[#724bf0] transition-colors cursor-pointer">
                    Custom Chatbots
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="text-gray-400 hover:text-[#724bf0] transition-colors cursor-pointer">
                    AI Web Apps
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="text-gray-400 hover:text-[#724bf0] transition-colors cursor-pointer">
                    Micro SaaS
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="text-gray-400 hover:text-[#724bf0] transition-colors cursor-pointer">
                    Workflow Automation
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <EnvelopeIcon className="h-5 w-5 text-[#724bf0] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">foundlabs.online@gmail.com</span>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 text-[#724bf0] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">(+92) 3488269862</span>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-[#724bf0] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Islamabad, Pakistan</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link href="/contact">
                <span className="inline-flex items-center text-sm font-medium text-[#724bf0] hover:text-[#5e3ac7] transition-colors cursor-pointer">
                  Get in touch
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} FoundLabs. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#">
              <span className="text-gray-500 hover:text-gray-300 text-sm cursor-pointer">
                Privacy Policy
              </span>
            </Link>
            <Link href="#">
              <span className="text-gray-500 hover:text-gray-300 text-sm cursor-pointer">
                Terms of Service
              </span>
            </Link>
            <Link href="#">
              <span className="text-gray-500 hover:text-gray-300 text-sm cursor-pointer">
                Cookie Policy
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;