import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (pageName) => {
    setCurrentPage(pageName);
    setIsMobileMenuOpen(false);
  };

  // Determine current page based on URL
  useEffect(() => {
    const path = window.location.pathname;
    const pageMap = {
      '/': 'Home',
      '/properties': 'Properties',
      '/pages': 'Pages',
      '/about': 'Pages',
      '/our-services': 'Pages',
      '/pricing': 'Pages',
      '/contact': 'Pages',
      '/faqs': 'Pages',
      '/privacy-policy': 'Pages',
      '/blog': 'Blog',
      '/dashboard': 'Dashboard'
    };
    setCurrentPage(pageMap[path] || 'Home');
  }, []);

  const pagesLinks = [
    { name: "About Us", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Our Services", href: "/our-services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/faqs" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <header className="w-full bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-3 lg:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img src="/assets/WE NEST 3.png" alt="WeNest Logo" className="w-36" />
        </Link>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex space-x-8">
          {[
            { name: "Home", href: "/" },
            { name: "Properties", href: "/properties" },
          ].map((link) => {
            const isActive = currentPage === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.name)}
                className={`font-medium transition-colors duration-200 relative group rounded-md px-2 py-1 ${
                  isActive 
                    ? "text-emerald-600" 
                    : "text-gray-700 hover:text-emerald-600"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-2 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 transition-all duration-300 ${
                  isActive 
                    ? "w-[calc(100%-16px)]" 
                    : "w-0 group-hover:w-[calc(100%-16px)]"
                }`}></span>
              </a>
            );
          })}

          {/* Pages Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPagesDropdownOpen(true)}
            onMouseLeave={() => setIsPagesDropdownOpen(false)}
          >
            <button
              className={`font-medium transition-colors duration-200 relative group rounded-md px-2 py-1 ${
                currentPage === 'Pages'
                  ? "text-emerald-600"
                  : "text-gray-700 hover:text-emerald-600"
              }`}
            >
              Pages
              <svg
                className={`ml-1 w-4 h-4 inline transition-transform duration-200 ${
                  isPagesDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className={`absolute -bottom-1 left-2 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 transition-all duration-300 ${
                currentPage === 'Pages'
                  ? "w-[calc(100%-16px)]" 
                  : "w-0 group-hover:w-[calc(100%-16px)]"
              }`}></span>
            </button>

            {/* Dropdown Menu */}
            {isPagesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                {pagesLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200"
                    onClick={() => handleNavClick('Pages')}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="/blog"
            onClick={() => handleNavClick("Blog")}
            className={`font-medium transition-colors duration-200 relative group rounded-md px-2 py-1 ${
              currentPage === "Blog"
                ? "text-emerald-600" 
                : "text-gray-700 hover:text-emerald-600"
            }`}
          >
            Blog
            <span className={`absolute -bottom-1 left-2 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 transition-all duration-300 ${
              currentPage === "Blog"
                ? "w-[calc(100%-16px)]" 
                : "w-0 group-hover:w-[calc(100%-16px)]"
            }`}></span>
          </a>

          <a
            href="/dashboard"
            onClick={() => handleNavClick("Dashboard")}
            className={`font-medium transition-colors duration-200 relative group rounded-md px-2 py-1 ${
              currentPage === "Dashboard"
                ? "text-emerald-600" 
                : "text-gray-700 hover:text-emerald-600"
            }`}
          >
            Dashboard
            <span className={`absolute -bottom-1 left-2 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 transition-all duration-300 ${
              currentPage === "Dashboard"
                ? "w-[calc(100%-16px)]" 
                : "w-0 group-hover:w-[calc(100%-16px)]"
            }`}></span>
          </a>
        </nav>

        {/* Auth Buttons - Desktop */}
        <div className="hidden lg:flex space-x-4">
          <button className="border-2 border-emerald-600 text-emerald-600 px-5 py-2 rounded-xl font-medium hover:bg-emerald-50 transition-all duration-200 flex items-center space-x-2">
            <User size={18} />
            <span>Sign Up</span>
          </button>
          <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-2 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            Submit Property
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0.5"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu (inline, pushes content down) */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="container mx-auto py-6 px-6">
          {/* Mobile Navigation Links */}
          <nav className="space-y-4 mb-6">
            {[
              { name: "Home", href: "/" },
              { name: "Properties", href: "/properties" },
            ].map((link) => {
              const isActive = currentPage === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block font-medium py-2 px-4 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-emerald-600 bg-emerald-50 border-l-4 border-emerald-600"
                      : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                  }`}
                  onClick={() => handleNavClick(link.name)}
                >
                  {link.name}
                </a>
              );
            })}

            {/* Pages Submenu */}
            <div>
              <div className="font-medium py-2 px-4 text-emerald-900">Pages</div>
              <div className="pl-4 space-y-2">
                {pagesLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block py-2 px-4 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-200"
                    onClick={() => handleNavClick('Pages')}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/blog"
              className={`block font-medium py-2 px-4 rounded-lg transition-all duration-200 ${
                currentPage === "Blog"
                  ? "text-emerald-600 bg-emerald-50 border-l-4 border-emerald-600"
                  : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
              }`}
              onClick={() => handleNavClick("Blog")}
            >
              Blog
            </a>

            <a
              href="/dashboard"
              className={`block font-medium py-2 px-4 rounded-lg transition-all duration-200 ${
                currentPage === "Dashboard"
                  ? "text-emerald-600 bg-emerald-50 border-l-4 border-emerald-600"
                  : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
              }`}
              onClick={() => handleNavClick("Dashboard")}
            >
              Dashboard
            </a>
          </nav>

          {/* Mobile Auth Buttons */}
          <div className="space-y-3 pt-4 border-t border-gray-200">
            <button className="w-full border-2 border-emerald-600 text-emerald-600 py-3 rounded-xl font-medium hover:bg-emerald-50 transition-all duration-200 flex items-center justify-center space-x-2">
              <User size={18} />
              <span>Sign Up</span>
            </button>
            <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200">
              Submit Property
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;