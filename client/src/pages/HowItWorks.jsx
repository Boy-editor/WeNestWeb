import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Faq from "../components/Faq";

const HowItWorks = () => {
  const [activeUserType, setActiveUserType] = useState('tenant');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white pt-24 md:pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            How <span className="text-amber-300">WeNest</span> Works
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100 leading-relaxed mb-8">
            Simple, secure, and transparent real estate transactions for everyone
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              🏠 For Tenants
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              🏢 For Landlords
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              🤝 For Agencies
            </span>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-amber-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-cyan-400/30 rounded-full blur-lg"></div>
      </section>

      {/* User Type Selector */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Choose Your Journey
            </h2>
            <p className="text-gray-600 text-lg">
              Select your role to see how WeNest works for you
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'tenant', label: 'I\'m Looking for a Home', icon: '🏠', color: 'emerald' },
              { id: 'landlord', label: 'I Own Properties', icon: '🏢', color: 'teal' },
              { id: 'agency', label: 'I\'m a Real Estate Agent', icon: '🤝', color: 'cyan' }
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveUserType(type.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 ${
                  activeUserType === type.id
                    ? `bg-${type.color}-600 text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl">{type.icon}</span>
                <span>{type.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Process Steps */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 md:px-12">
          {/* Tenant Journey */}
          {activeUserType === 'tenant' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Your Journey as a Tenant
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  From search to move-in, we've simplified every step
                </p>
              </div>

              <div className="space-y-16">
                {[
                  {
                    step: "01",
                    title: "Create Your Profile",
                    description: "Sign up for free and tell us about your preferences - location, budget, property type, and amenities you need.",
                    features: ["Free account creation", "Preference settings", "Budget calculator", "Wishlist creation"],
                    color: "emerald"
                  },
                  {
                    step: "02", 
                    title: "Search & Discover",
                    description: "Browse thousands of verified properties across Nigeria. Use our smart filters to find exactly what you're looking for.",
                    features: ["Advanced search filters", "Map-based browsing", "Save favorites", "Get personalized recommendations"],
                    color: "teal"
                  },
                  {
                    step: "03",
                    title: "Connect & Communicate",
                    description: "Message landlords and agents directly through our secure platform. Ask questions, request additional photos, and negotiate terms.",
                    features: ["Direct messaging", "Photo requests", "Virtual tours", "Secure communication"],
                    color: "cyan"
                  },
                  {
                    step: "04",
                    title: "Schedule Viewings",
                    description: "Book property visits at your convenience. Our calendar system makes scheduling easy for both parties.",
                    features: ["Online booking", "Calendar integration", "Reminder notifications", "Flexible timing"],
                    color: "blue"
                  },
                  {
                    step: "05",
                    title: "Secure Your Home",
                    description: "Found your perfect home? Complete the paperwork digitally and move in with confidence.",
                    features: ["Digital contracts", "Secure payments", "Document verification", "Move-in checklist"],
                    color: "purple"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col lg:flex-row items-center gap-12">
                    <div className={`flex-shrink-0 w-32 h-32 bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-lg`}>
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">{item.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {item.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 bg-${item.color}-500 rounded-full`}></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Landlord Journey */}
          {activeUserType === 'landlord' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Your Journey as a Landlord
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  List your properties and connect with quality tenants effortlessly
                </p>
              </div>

              <div className="space-y-16">
                {[
                  {
                    step: "01",
                    title: "Verify Your Identity",
                    description: "Create your landlord account and complete our quick verification process to build trust with potential tenants.",
                    features: ["ID verification", "Property ownership proof", "Bank account linking", "Profile optimization"],
                    color: "teal"
                  },
                  {
                    step: "02",
                    title: "List Your Properties",
                    description: "Upload high-quality photos, detailed descriptions, and set your rental terms. Our team helps optimize your listing.",
                    features: ["Professional photos", "Detailed descriptions", "Pricing guidance", "Listing optimization"],
                    color: "emerald"
                  },
                  {
                    step: "03",
                    title: "Manage Inquiries",
                    description: "Receive messages from interested tenants. Screen applications and communicate securely through our platform.",
                    features: ["Inquiry management", "Tenant screening", "Background checks", "Communication tools"],
                    color: "cyan"
                  },
                  {
                    step: "04",
                    title: "Show Your Property",
                    description: "Schedule and conduct property viewings. Our calendar system helps you manage multiple appointments efficiently.",
                    features: ["Booking management", "Virtual tour options", "Showing reminders", "Feedback collection"],
                    color: "blue"
                  },
                  {
                    step: "05",
                    title: "Close the Deal",
                    description: "Complete rental agreements digitally, collect deposits securely, and welcome your new tenant.",
                    features: ["Digital contracts", "Secure payments", "Deposit collection", "Tenant onboarding"],
                    color: "purple"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col lg:flex-row items-center gap-12">
                    <div className={`flex-shrink-0 w-32 h-32 bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-lg`}>
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">{item.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {item.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 bg-${item.color}-500 rounded-full`}></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Agency Journey */}
          {activeUserType === 'agency' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Your Journey as an Agency
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Expand your reach and manage multiple properties efficiently
                </p>
              </div>

              <div className="space-y-16">
                {[
                  {
                    step: "01",
                    title: "Agency Registration",
                    description: "Register your real estate agency and complete our comprehensive verification process to access premium features.",
                    features: ["Business registration", "License verification", "Team member addition", "Premium access"],
                    color: "cyan"
                  },
                  {
                    step: "02",
                    title: "Portfolio Management",
                    description: "Upload and manage multiple property listings efficiently. Use our bulk upload tools and portfolio dashboard.",
                    features: ["Bulk property upload", "Portfolio dashboard", "Property categorization", "Performance analytics"],
                    color: "teal"
                  },
                  {
                    step: "03",
                    title: "Client Management",
                    description: "Manage relationships with both property owners and tenants. Track all interactions and maintain detailed client profiles.",
                    features: ["CRM integration", "Client profiles", "Interaction history", "Lead management"],
                    color: "emerald"
                  },
                  {
                    step: "04",
                    title: "Marketing & Promotion",
                    description: "Promote your listings with featured placements, professional photography, and targeted marketing campaigns.",
                    features: ["Featured listings", "Marketing campaigns", "Social media integration", "SEO optimization"],
                    color: "blue"
                  },
                  {
                    step: "05",
                    title: "Transaction Management",
                    description: "Handle multiple transactions simultaneously with our comprehensive management tools and automated workflows.",
                    features: ["Transaction tracking", "Document management", "Commission calculation", "Reporting tools"],
                    color: "purple"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col lg:flex-row items-center gap-12">
                    <div className={`flex-shrink-0 w-32 h-32 bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-lg`}>
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">{item.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {item.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 bg-${item.color}-500 rounded-full`}></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Powerful Features for Everyone
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Advanced tools and features that make WeNest the best choice for real estate in Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🔍",
                title: "Smart Search",
                description: "AI-powered search that learns your preferences and suggests perfect matches.",
                color: "from-emerald-500 to-teal-500"
              },
              {
                icon: "📱",
                title: "Mobile App",
                description: "Full-featured mobile apps for iOS and Android with offline capabilities.",
                color: "from-teal-500 to-cyan-500"
              },
              {
                icon: "💬",
                title: "Real-time Chat",
                description: "Instant messaging with read receipts, file sharing, and voice messages.",
                color: "from-cyan-500 to-blue-500"
              },
              {
                icon: "📊",
                title: "Market Analytics",
                description: "Detailed market insights, price trends, and neighborhood analysis.",
                color: "from-blue-500 to-purple-500"
              },
              {
                icon: "🏦",
                title: "Secure Payments",
                description: "Multiple payment options with bank-grade security and fraud protection.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "📋",
                title: "Document Management",
                description: "Digital document storage, e-signatures, and automated contract generation.",
                color: "from-amber-500 to-orange-500"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100">
                <div className={`w-12 h-12 mb-4 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-xl shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section 
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Common questions about using WeNest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Is WeNest free to use?",
                answer: "Yes! Creating an account and browsing properties is completely free for tenants. Landlords and agencies have access to basic listing features for free, with premium options available."
              },
              {
                question: "How do you verify properties?",
                answer: "Our team physically inspects properties, verifies ownership documents, and conducts background checks on all landlords and agencies before approving listings."
              },
              {
                question: "Can I negotiate rent prices?",
                answer: "Absolutely! Our messaging system allows direct communication with landlords and agents where you can discuss and negotiate rental terms."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept bank transfers, debit cards, mobile money, and other popular Nigerian payment methods. All transactions are secured and encrypted."
              },
              {
                question: "Do you provide legal support?",
                answer: "We offer standardized rental agreement templates and can connect you with verified legal professionals for complex transactions."
              },
              {
                question: "How quickly can I find a property?",
                answer: "With over 15,000 verified listings, most users find suitable properties within 2-3 days. Our smart matching system speeds up the process significantly."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold mb-3 text-gray-800">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}
      

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100 leading-relaxed">
            Join thousands of Nigerians who have simplified their real estate journey with WeNest
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-emerald-700 transition-all duration-200 backdrop-blur-sm">
              Watch Demo Video
            </button>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-400/30 rounded-full blur-xl"></div>
      </section>

      <Faq />

      <Footer />
    </div>
  );
};

export default HowItWorks;