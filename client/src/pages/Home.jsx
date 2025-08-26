import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white pt-24 md:pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 md:px-12 text-center md:text-left relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Find Your Perfect Home with 
              <span className="text-amber-300"> WeNest</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto md:mx-0 text-gray-100 leading-relaxed">
              Connecting landlords, tenants, and agencies seamlessly across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-12">
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-emerald-700 transition-all duration-200 backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-amber-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-cyan-400/30 rounded-full blur-lg"></div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Featured Properties
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover handpicked properties from trusted landlords and agencies across Nigeria
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((property) => (
              <div
                key={property}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden group transform hover:scale-105 transition-all duration-300 border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={`/images/property-${property}.jpg`}
                    alt={`Property ${property}`}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-800">Modern Apartment</h3>
                  <p className="text-gray-500 text-sm mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Lagos, Nigeria
                  </p>
                  <p className="text-emerald-600 font-bold text-xl">₦1,200,000 / year</p>
                  <button className="mt-4 w-full bg-gray-100 hover:bg-emerald-600 hover:text-white text-gray-700 font-medium py-2 rounded-lg transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            How WeNest Works
          </h2>
          <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Finding your perfect home has never been easier with our streamlined process
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: "🔍", 
                title: "Search Properties", 
                desc: "Browse through thousands of verified listings across Nigeria",
                color: "from-emerald-500 to-teal-500"
              },
              { 
                icon: "🤝", 
                title: "Connect Securely", 
                desc: "Message landlords and agencies directly through our platform",
                color: "from-teal-500 to-cyan-500"
              },
              { 
                icon: "📅", 
                title: "Schedule Visit", 
                desc: "Book property viewings at your convenient time",
                color: "from-cyan-500 to-blue-500"
              },
              { 
                icon: "🏡", 
                title: "Move In", 
                desc: "Complete paperwork and move into your dream home",
                color: "from-amber-500 to-orange-500"
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                  {step.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              What Our Users Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join thousands of satisfied customers who found their perfect home through WeNest
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Adebayo Johnson",
                role: "Tenant",
                review: "WeNest made finding my new apartment in Lagos so easy and stress-free! The verification process gave me confidence.",
                rating: 5
              },
              {
                name: "Chioma Okafor",
                role: "Landlord", 
                review: "As a property owner, WeNest helped me connect with quality tenants quickly. The platform is user-friendly and efficient.",
                rating: 5
              },
              {
                name: "Ibrahim Musa",
                role: "Real Estate Agent",
                review: "WeNest has transformed how I do business. The direct messaging feature makes client communication seamless.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10,000+", label: "Properties Listed" },
              { number: "5,000+", label: "Happy Tenants" },
              { number: "500+", label: "Trusted Landlords" },
              { number: "36", label: "States Covered" }
            ].map((stat, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform duration-200">
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

      {/* Call To Action Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100 leading-relaxed">
            Join thousands of Nigerians who have found their perfect home through WeNest. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Get Started Now
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-emerald-700 transition-all duration-200 backdrop-blur-sm">
              Browse Properties
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

export default Home;