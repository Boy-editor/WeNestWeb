import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white pt-24 md:pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            About <span className="text-amber-300">WeNest</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100 leading-relaxed">
            Transforming Nigeria's real estate landscape through technology, trust, and transparency
          </p>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-amber-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-cyan-400/30 rounded-full blur-lg"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                WeNest was born from a simple observation: finding quality housing in Nigeria was unnecessarily complex, time-consuming, and often frustrating for both tenants and landlords.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Founded in 2023 by a team of Nigerian tech enthusiasts and real estate professionals, WeNest set out to bridge the gap between property seekers and providers across all 36 states of Nigeria.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, we're proud to be Nigeria's fastest-growing real estate platform, connecting thousands of landlords, tenants, and agencies with verified listings and secure communication tools.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-8 shadow-lg">
                <img
                  src="/images/about-story.jpg"
                  alt="WeNest Story"
                  className="w-full h-64 object-cover rounded-xl shadow-md"
                />
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">2023</div>
                    <div className="text-gray-600">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">36</div>
                    <div className="text-gray-600">States Covered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Our Foundation
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at WeNest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To simplify real estate transactions in Nigeria by providing a secure, transparent, and user-friendly platform that connects property seekers with verified listings and trusted providers.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl text-white">🔭</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become Africa's leading real estate technology platform, revolutionizing how people find, rent, and own properties across the continent through innovation and trust.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl text-white">💎</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Transparency, trust, innovation, and customer-centricity drive everything we do. We believe in empowering every Nigerian to find their perfect home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The passionate professionals behind WeNest's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Adebayo Ogundimu",
                role: "CEO & Co-Founder",
                bio: "Former McKinsey consultant with 10+ years in African tech. Passionate about solving housing challenges.",
                image: "/images/team-ceo.jpg"
              },
              {
                name: "Chioma Ikechukwu",
                role: "CTO & Co-Founder", 
                bio: "Software architect with expertise in scalable platforms. Previously at Paystack and Flutterwave.",
                image: "/images/team-cto.jpg"
              },
              {
                name: "Ibrahim Hassan",
                role: "Head of Operations",
                bio: "Real estate veteran with 15+ years experience. Expert in property verification and market analysis.",
                image: "/images/team-ops.jpg"
              },
              {
                name: "Blessing Okoro",
                role: "Head of Customer Success",
                bio: "Customer experience specialist ensuring every user has an exceptional journey on WeNest.",
                image: "/images/team-cs.jpg"
              }
            ].map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300 border border-gray-100">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose WeNest */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Why Choose WeNest?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              What sets us apart in Nigeria's real estate landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "✅",
                title: "Verified Listings",
                description: "Every property is verified by our team to ensure authenticity and accuracy.",
                color: "from-emerald-500 to-teal-500"
              },
              {
                icon: "🔒",
                title: "Secure Messaging",
                description: "Direct, secure communication between tenants and landlords through our platform.",
                color: "from-teal-500 to-cyan-500"
              },
              {
                icon: "🏘️",
                title: "Nationwide Coverage",
                description: "Properties available across all 36 states of Nigeria, from Lagos to Maiduguri.",
                color: "from-cyan-500 to-blue-500"
              },
              {
                icon: "⚡",
                title: "Smart Matching",
                description: "AI-powered search that matches you with properties based on your preferences.",
                color: "from-blue-500 to-purple-500"
              },
              {
                icon: "💰",
                title: "Transparent Pricing",
                description: "No hidden fees. Clear, upfront pricing for all our services and listings.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "📱",
                title: "Mobile First",
                description: "Optimized mobile experience for property searching on-the-go.",
                color: "from-amber-500 to-orange-500"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100">
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

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              WeNest in Numbers
            </h2>
            <p className="text-gray-100 text-lg">
              Our impact across Nigeria's real estate ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15,000+", label: "Properties Listed", icon: "🏠" },
              { number: "8,500+", label: "Happy Tenants", icon: "😊" },
              { number: "1,200+", label: "Verified Landlords", icon: "🏢" },
              { number: "95%", label: "Customer Satisfaction", icon: "⭐" }
            ].map((stat, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform duration-200">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-amber-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-100 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Join the WeNest Family?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100 leading-relaxed">
            Whether you're looking for your dream home or want to list your property, WeNest is here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-emerald-700 transition-all duration-200 backdrop-blur-sm">
              Contact Us
            </button>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-400/30 rounded-full blur-xl"></div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;