import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { User, House } from "lucide-react";
import { useAuth } from "../contexts/useAuth";
import logoDark from "/assets/logo/WENEST3.png"; // dark logo (for white header)
import logoLight from "/assets/logo/WENEST1.png"; // light/white logo (for transparent header)

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  // Determine current page based on URL
  useEffect(() => {
    const path = location.pathname;
    const pageMap = {
      "/": "Home",
      "/properties": "Properties",
      "/pages": "Pages",
      "/about": "Pages",
      "/our-services": "Pages",
      "/pricing": "Pages",
      "/contact": "Contact",
      "/faqs": "Pages",
      "/privacy-policy": "Pages",
      "/blog": "Blog",
      "/dashboard": "Dashboard",
    };
    setCurrentPage(pageMap[path] || "Home");
  }, [location]);

  // Detect mobile (width < 1024px for lg breakpoint)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Set initial value before paint (avoids initial flash)
  useLayoutEffect(() => {
    const y = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    setIsScrolled(y > 20);
  }, []);

  // Scroll handler with rAF + hysteresis to avoid jitter
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
          setIsScrolled((prev) => {
            // Hysteresis: only switch to true above 20px, switch to false below 10px
            if (!prev && y > 20) return true;
            if (prev && y < 10) return false;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((s) => !s);

  const handleNavClick = (pageName) => {
    setCurrentPage(pageName);
    setIsMobileMenuOpen(false);
  };

  // Colors toggled by isScrolled (but always "scrolled" style on mobile)
  const navTextClass = isMobile || isScrolled ? "text-gray-700" : "text-white";
  const iconColorClass = isMobile || isScrolled ? "bg-gray-700" : "bg-white";
  const headerBgClass = isMobile
    ? "bg-white/95 shadow-lg border-b border-gray-100"
    : isScrolled
    ? "bg-white/95 shadow-lg border-b border-gray-100"
    : "bg-transparent";

  const pagesLinks = [
    { name: "How It Works", href: "/how-it-works" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/our-services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/faqs" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ];

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-colors duration-300 ${headerBgClass}`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0" onClick={() => handleNavClick("Home")}>
          {/* Use two logo files if possible; fallback to single */}
          <img src={isScrolled ? logoDark : logoLight} alt="WeNest Logo" className="w-36" /> 
          {/*<img
            src="/assets/logo/WE NEST 1.png"
            alt="WeNest Logo"
            className={`w-36 transition-opacity duration-300 ${
              isMobile || isScrolled ? "opacity-100" : "opacity-90"
            }`}
          />*/}
        </Link>

        {/* Navigation Links - Desktop */}
        <nav className={`hidden lg:flex space-x-8 items-center`}>
          {[
            { name: "Home", href: "/" },
            { name: "Properties", href: "/properties" },
          ].map((link) => {
            const isActive = currentPage === link.name;
            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleNavClick(link.name)}
                className={`font-medium transition-colors duration-200 relative group rounded-md px-2 py-1 ${
                  isActive
                    ? "text-emerald-600"
                    : navTextClass + " hover:text-emerald-600"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-2 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 transition-all duration-300 ${
                    isActive ? "w-[calc(100%-16px)]" : "w-0 group-hover:w-[calc(100%-16px)]"
                  }`}
                />
              </Link>
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
                currentPage === "Pages" ? "text-emerald-600" : navTextClass
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
              <span
                className={`absolute -bottom-1 left-2 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 transition-all duration-300 ${
                  currentPage === "Pages" ? "w-[calc(100%-16px)]" : "w-0 group-hover:w-[calc(100%-16px)]"
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isPagesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                {pagesLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200"
                    onClick={() => handleNavClick("Pages")}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/blog"
            onClick={() => handleNavClick("Blog")}
            className={`font-medium transition-colors duration-200 relative group rounded-md px-2 py-1 ${
              currentPage === "Blog"
                ? "text-emerald-600"
                : navTextClass + " hover:text-emerald-600"
            }`}
          >
            Blog
            <span
              className={`absolute -bottom-1 left-2 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 transition-all duration-300 ${
                currentPage === "Blog" ? "w-[calc(100%-16px)]" : "w-0 group-hover:w-[calc(100%-16px)]"
              }`}
            />
          </Link>

          <Link
            to="/Contact"
            onClick={() => handleNavClick("Contact")}
            className={`font-medium transition-colors duration-200 relative group rounded-md px-2 py-1 ${
              currentPage === "Contact"
                ? "text-emerald-600"
                : navTextClass + " hover:text-emerald-600"
            }`}
          >
            Contact
            <span
              className={`absolute -bottom-1 left-2 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 transition-all duration-300 ${
                currentPage === "Contact" ? "w-[calc(100%-16px)]" : "w-0 group-hover:w-[calc(100%-16px)]"
              }`}
            />
          </Link>

          {user && (
            <Link
              to="/dashboard"
              onClick={() => handleNavClick("Dashboard")}
              className={`font-medium transition-colors duration-200 relative group rounded-md px-2 py-1 ${
                currentPage === "Dashboard"
                  ? "text-emerald-600"
                  : navTextClass + " hover:text-emerald-600"
              }`}
            >
              Dashboard
              <span
                className={`absolute -bottom-1 left-2 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 transition-all duration-300 ${
                  currentPage === "Dashboard" ? "w-[calc(100%-16px)]" : "w-0 group-hover:w-[calc(100%-16px)]"
                }`}
              />
            </Link>
          )}
        </nav>

        {/* Auth Buttons - Desktop */}
        <div className="hidden lg:flex space-x-4">
          {!user ? (
            <>
              <Link
                to="/signup"
                onClick={() => handleNavClick("Sign Up")}
                className={`border-2 border-emerald-600 px-5 py-2 rounded-xl font-medium hover:bg-emerald-50 flex items-center space-x-2 transition-all duration-200 ${
                  isMobile || isScrolled ? "text-emerald-600" : "text-white hover:text-emerald-500"
                }`}
              >
                <User size={18} />
                <span>Sign Up</span>
              </Link>

              <Link
                to="/Login"
                onClick={() => handleNavClick("Login")}
                className={`bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-2 rounded-xl font-medium flex items-center space-x-2 hover:shadow-lg transform hover:scale-105 transition-all duration-200'
                }`}
              >
                <House size={18} />
                <span>Submit Property</span>
              </Link>
             {/* <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-2 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Submit Property
              </button>*/}
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className={`border-2 border-emerald-600 px-5 py-2 rounded-xl font-medium hover:bg-emerald-50 flex items-center space-x-2 transition-all duration-200 ${
                  isMobile || isScrolled ? "text-emerald-600" : "text-white hover:text-emerald-500"
                }`}
              >
                <User size={18} />
                <span>Dashboard</span>
              </Link>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-2 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Submit Property
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${
            isMobile || isScrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
          }`}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block h-0.5 w-6 rounded-sm transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5"
              } ${iconColorClass}`}
            />
            <span
              className={`block h-0.5 w-6 rounded-sm my-0.5 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              } ${iconColorClass}`}
            />
            <span
              className={`block h-0.5 w-6 rounded-sm transition-transform duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0.5"
              } ${iconColorClass}`}
            />
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
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block font-medium py-2 px-4 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-emerald-600 bg-emerald-50 border-l-4 border-emerald-600"
                      : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                  }`}
                  onClick={() => handleNavClick(link.name)}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Pages Submenu */}
            <div>
              <div className="font-medium py-2 px-4 text-emerald-900">Pages</div>
              <div className="pl-4 space-y-2">
                {pagesLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block py-2 px-4 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-200"
                    onClick={() => handleNavClick("Pages")}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/blog"
              className={`block font-medium py-2 px-4 rounded-lg transition-all duration-200 ${
                currentPage === "Blog"
                  ? "text-emerald-600 bg-emerald-50 border-l-4 border-emerald-600"
                  : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
              }`}
              onClick={() => handleNavClick("Blog")}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className={`block font-medium py-2 px-4 rounded-lg transition-all duration-200 ${
                currentPage === "Contact"
                  ? "text-emerald-600 bg-emerald-50 border-l-4 border-emerald-600"
                  : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
              }`}
              onClick={() => handleNavClick("Contact")}
            >
              Contact
            </Link>

            {user && (
              <Link
                to="/dashboard"
                className={`block font-medium py-2 px-4 rounded-lg transition-all duration-200 ${
                  currentPage === "Dashboard"
                    ? "text-emerald-600 bg-emerald-50 border-l-4 border-emerald-600"
                    : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                }`}
                onClick={() => handleNavClick("Dashboard")}
              >
                Dashboard
              </Link>
            )}
          </nav>

          {/* Mobile Auth Buttons */}
          <div className="space-y-3 pt-4 border-t border-gray-200">
            {!user ? (
              <>
                <Link
                  to="/signup"
                  onClick={() => handleNavClick("Sign Up")}
                  className="w-full border-2 border-emerald-600 text-emerald-600 py-3 rounded-xl font-medium hover:bg-emerald-50 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <User size={18} />
                  <span>Sign Up</span>
                </Link>
                
                <Link
                to="/Login"
                onClick={() => handleNavClick("Login")}
                className={`bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-2 rounded-xl font-medium flex items-center justify-center space-x-2 hover:shadow-lg transform hover:scale-105 transition-all duration-200'
                }`}
              >
                <House size={18} />
                <span>Submit Property</span>
              </Link>

                {/*<button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200">
                  Submit Property
                </button>*/}
              </>
            ) : (
              <>
                <Link
                  to="/dashboard"
                  className="w-full border-2 border-emerald-600 text-emerald-600 py-3 rounded-xl font-medium hover:bg-emerald-50 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <User size={18} />
                  <span>Dashboard</span>
                </Link>
                <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200">
                  Submit Property
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;