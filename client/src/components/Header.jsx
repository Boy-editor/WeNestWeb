import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

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
      '/about': 'About Us',
      '/how-it-works': 'How It Works',
      '/properties': 'Properties',
      '/pricing': 'Pricing',
      '/blog': 'Blog'
    };
    setCurrentPage(pageMap[path] || 'Home');
  }, []);

  return (
    <header className="w-full bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-12">
        {/* Logo */}
        <div className="text-xl sm:text-2xl lg:text-3xl font-bold cursor-pointer bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent hover:from-teal-600 hover:to-emerald-600 transition-all duration-300" tabIndex="0">
          WeNest
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex space-x-8">
          {[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "How It Works", href: "/how-it-works" },
            { name: "Properties", href: "/properties" },
            { name: "Pricing", href: "/pricing" },
            { name: "Blog", href: "/blog" },
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
        </nav>

        {/* Auth Buttons - Desktop */}
        <div className="hidden lg:flex space-x-4">
          <button className="border-2 border-emerald-600 text-emerald-600 px-5 py-2 rounded-xl font-medium hover:bg-emerald-50 transition-all duration-200">
            Login
          </button>
          <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-2 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            Sign Up
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
              { name: "About Us", href: "/about" },
              { name: "How It Works", href: "/how-it-works" },
              { name: "Properties", href: "/properties" },
              { name: "Pricing", href: "/pricing" },
              { name: "Blog", href: "/blog" },
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
          </nav>

          {/* Mobile Auth Buttons */}
          <div className="space-y-3 pt-4 border-t border-gray-200">
            <button className="w-full border-2 border-emerald-600 text-emerald-600 py-3 rounded-xl font-medium hover:bg-emerald-50 transition-all duration-200">
              Login
            </button>
            <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;