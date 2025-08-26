import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="logo text-2xl font-bold cursor-pointer">
          WeNest
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/about" className="hover:text-blue-600">About Us</a>
          <a href="/how-it-works" className="hover:text-blue-600">How It Works</a>
          <a href="/properties" className="hover:text-blue-600">Properties</a>
          <a href="/pricing" className="hover:text-blue-600">Pricing</a>
          <a href="/blog" className="hover:text-blue-600">Blog</a>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Sign Up
          </button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-100">
            Login
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          {/* You can add a hamburger menu later */}
        </div>
      </div>
    </header>
  );
};

export default Header; // ✅ Default export
