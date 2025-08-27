import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
      <button
        onClick={onClick}
        className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset"
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-800 pr-4">{question}</h3>
          <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>
      
      <div className={`transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-6 pb-6">
          <div className="h-px bg-gradient-to-r from-emerald-200 to-teal-200 mb-4"></div>
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = ({ 
  title = "Frequently Asked Questions", 
  subtitle = "Common questions about using WeNest",
  faqs = [],
  className = "",
  showSearch = true,
  layout = "grid" // "grid" or "single"
}) => {
  const [openItems, setOpenItems] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  // Default FAQ data if none provided
  const defaultFAQs = [
    {
      category: "General",
      question: "Is WeNest free to use?",
      answer: "Yes! Creating an account and browsing properties is completely free for tenants. Landlords and agencies have access to basic listing features for free, with premium options available for enhanced visibility and advanced tools."
    },
    {
      category: "Trust & Safety",
      question: "How do you verify properties?",
      answer: "Our team physically inspects properties, verifies ownership documents, and conducts background checks on all landlords and agencies before approving listings. We also use advanced technology to detect fraudulent listings."
    },
    {
      category: "Payments",
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, debit cards, mobile money (including PalmPay, Opay, Kuda), and other popular Nigerian payment methods. All transactions are secured with bank-grade encryption and fraud protection."
    },
    {
      category: "General",
      question: "Can I negotiate rent prices?",
      answer: "Absolutely! Our messaging system allows direct communication with landlords and agents where you can discuss and negotiate rental terms, payment schedules, and other conditions."
    },
    {
      category: "Legal",
      question: "Do you provide legal support?",
      answer: "We offer standardized rental agreement templates and can connect you with verified legal professionals for complex transactions. We also provide guidance on tenant rights and landlord obligations in Nigeria."
    },
    {
      category: "General",
      question: "How quickly can I find a property?",
      answer: "With over 15,000 verified listings across Nigeria, most users find suitable properties within 2-3 days. Our AI-powered smart matching system and personalized recommendations speed up the process significantly."
    },
    {
      category: "Features",
      question: "Can I save properties for later?",
      answer: "Yes! You can save unlimited properties to your wishlist, create multiple lists for different needs, and receive notifications when similar properties become available or when saved properties have price changes."
    },
    {
      category: "Support",
      question: "What if I have issues with a property or landlord?",
      answer: "Our customer support team is available 24/7 to help resolve disputes. We also have a rating system and mediation services to ensure fair treatment for all parties. Serious issues are escalated to our legal team."
    },
    {
      category: "Features",
      question: "Do you have a mobile app?",
      answer: "Yes! Our mobile apps for iOS and Android offer full functionality including property search, messaging, document management, and push notifications for new listings and messages."
    },
    {
      category: "Trust & Safety", 
      question: "How do I know a landlord is legitimate?",
      answer: "All landlords undergo identity verification, property ownership verification, and background checks. Look for the 'Verified' badge on profiles, check ratings and reviews from previous tenants, and use our secure messaging system for all communications."
    },
    {
      category: "Payments",
      question: "Are there any hidden fees?",
      answer: "No hidden fees! We believe in transparent pricing. Tenants use the platform for free. Landlords pay only when they successfully rent out their property. All fees are clearly stated upfront with no surprises."
    },
    {
      category: "Features",
      question: "Can I schedule virtual tours?",
      answer: "Yes! Many properties offer virtual tours, video calls with landlords, and 360° property photos. You can schedule live virtual walkthroughs directly through our platform, making it easy to view properties from anywhere."
    }
  ];

  const faqData = faqs.length > 0 ? faqs : defaultFAQs;

  // Filter FAQs based on search query
  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Remove grouping logic - we'll display all FAQs in a single list

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <>
      <Header />
    <section className={`py-28 bg-gradient-to-r from-emerald-50 to-teal-50 ${className}`}>
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>

          {/* Search Bar */}
          {showSearch && (
            <div className="max-w-md mx-auto relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-lg transition-all duration-200"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* FAQ Content */}
        {filteredFAQs.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No FAQs found</h3>
            <p className="text-gray-500">Try a different search term or browse all FAQs.</p>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
              >
                Clear search
              </button>
            )}
          </div>
        ) : (
          <div className={layout === "grid" ? "grid grid-cols-1 lg:grid-cols-2 gap-6" : "space-y-4"}>
            {filteredFAQs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openItems.has(index)}
                onClick={() => toggleItem(index)}
              />
            ))}
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our support team is here to help you 24/7. Get in touch and we'll respond within minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Contact Support
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-all duration-200">
                Live Chat
              </button>
            </div>
            
            {/* Contact Info */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-500">
              <div className="flex items-center justify-center space-x-2">
                <span>📧</span>
                <span>support@wenest.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span>📞</span>
                <span>+234 800 123 4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default FAQ;