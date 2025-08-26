import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-20">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
        {/* Logo & Description */}
        <div>
          <div className="text-2xl font-bold mb-2">WeNest</div>
          <p className="text-gray-600">
            Connecting landlords, tenants, and agencies seamlessly.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-600">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/how-it-works">How It Works</a></li>
            <li><a href="/properties">Properties</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        {/* Legal & Contact */}
        <div>
          <h3 className="font-semibold mb-2">Legal & Careers</h3>
          <ul className="space-y-1 text-gray-600">
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Contact</h3>
            <p>Email: support@wenest.com</p>
            <p>Hotline: +234 800 123 4567</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-500">
        &copy; {new Date().getFullYear()} WeNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; // ✅ Default export
