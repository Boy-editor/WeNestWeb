import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-emerald-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-600/10 rounded-full blur-2xl"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto py-16 px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                WeNest
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Nigeria's leading real estate platform connecting landlords, tenants, and agencies seamlessly across all 36 states.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4">
                {[
                  { name: "Facebook", icon: "📘" },
                  { name: "Twitter", icon: "🐦" },
                  { name: "Instagram", icon: "📷" },
                  { name: "LinkedIn", icon: "💼" }
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 bg-gray-700 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-teal-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-emerald-400">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "How It Works", href: "/how-it-works" },
                  { name: "Properties", href: "/properties" },
                  { name: "Pricing", href: "/pricing" },
                  { name: "Blog", href: "/blog" },
                  { name: "Support", href: "/support" },
                  { name: "Faq", href: "/faq" }
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 hover:pl-2 transform transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Legal */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-emerald-400">Support & Legal</h3>
              <ul className="space-y-3 mb-6">
                {[
                  { name: "Terms & Conditions", href: "/terms" },
                  { name: "Privacy Policy", href: "/privacy" },
                  { name: "FAQs", href: "/faqs" },
                  { name: "Careers", href: "/careers" },
                  { name: "Contact Us", href: "/contact" }
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 hover:pl-2 transform transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-emerald-400">📧</span>
                  <a 
                    href="mailto:support@wenest.com"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                  >
                    support@wenest.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-emerald-400">📞</span>
                  <a 
                    href="tel:+2348001234567"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                  >
                    +234 800 123 4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-700 bg-gray-800/50 backdrop-blur-sm">
          <div className="container mx-auto py-8 px-6 lg:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-bold text-lg text-emerald-400 mb-2">Stay Updated</h3>
                <p className="text-gray-300">Get the latest property listings and market insights.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-200 w-full sm:w-64"
                />
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700">
          <div className="container mx-auto py-6 px-6 lg:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-center md:text-left">
                &copy; {new Date().getFullYear()} WeNest. All rights reserved. Made with ❤️ in Nigeria.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                  Privacy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                  Terms
                </a>
                <a href="/cookies" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;