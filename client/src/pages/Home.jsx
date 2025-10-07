import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import { MapPin, Star, Search, Users, Calendar, HomeIcon } from "lucide-react"; // Added for icon replacement

const Home = () => {
  // Sample properties matching Properties.jsx data (reused 6 varied ones)
  const featuredProperties = [
    {
      id: 1,
      title: "Modern 3-Bedroom Apartment",
      location: "Victoria Island, Lagos",
      state: "Lagos",
      price: 2500000,
      period: "year",
      type: "Apartment",
      bedrooms: 3,
      bathrooms: 2,
      area: "120 sqm",
      images: ["/assets/home/house-1.jpg"],
      amenities: ["Swimming Pool", "Gym", "Security", "Parking"],
      isVerified: true,
      isFeatured: true,
      rating: 4.8,
    },
    {
      id: 2,
      title: "Cozy 2-Bedroom House",
      location: "Lekki Phase 1, Lagos",
      state: "Lagos",
      price: 1800000,
      period: "year",
      type: "House",
      bedrooms: 2,
      bathrooms: 2,
      area: "95 sqm",
      images: ["/assets/home/house-2.jpg"],
      amenities: ["Garden", "Security", "Parking"],
      isVerified: true,
      isFeatured: false,
      rating: 4.5,
    },
    {
      id: 3,
      title: "Executive 4-Bedroom Duplex",
      location: "Ikoyi, Lagos",
      state: "Lagos",
      price: 4200000,
      period: "year",
      type: "Duplex",
      bedrooms: 4,
      bathrooms: 3,
      area: "200 sqm",
      images: ["/assets/home/house-3.jpg"],
      amenities: ["Swimming Pool", "Gym", "Security", "Parking", "Generator"],
      isVerified: true,
      isFeatured: true,
      rating: 4.9,
    },
    {
      id: 4,
      title: "Affordable 1-Bedroom Studio",
      location: "Surulere, Lagos",
      state: "Lagos",
      price: 800000,
      period: "year",
      type: "Studio",
      bedrooms: 1,
      bathrooms: 1,
      area: "45 sqm",
      images: ["/assets/home/house-4.jpg"],
      amenities: ["Security", "Parking"],
      isVerified: true,
      isFeatured: false,
      rating: 4.2,
    },
    {
      id: 5,
      title: "Luxury 5-Bedroom Villa",
      location: "Banana Island, Lagos",
      state: "Lagos",
      price: 8500000,
      period: "year",
      type: "Villa",
      bedrooms: 5,
      bathrooms: 4,
      area: "350 sqm",
      images: ["/assets/home/house-5.jpg"],
      amenities: ["Swimming Pool", "Gym", "Security", "Parking", "Generator", "Maid's Room"],
      isVerified: true,
      isFeatured: true,
      rating: 5.0,
    },
    {
      id: 6,
      title: "Commercial Office Space",
      location: "Central Business District, Abuja",
      state: "FCT",
      price: 3200000,
      period: "year",
      type: "Commercial",
      bedrooms: 0,
      bathrooms: 2,
      area: "150 sqm",
      images: ["/assets/home/house-6.jpg"],
      amenities: ["Security", "Parking", "Generator", "Air Conditioning"],
      isVerified: true,
      isFeatured: false,
      rating: 4.6,
    },
  ];

  const formatPrice = (price) => `₦${price.toLocaleString()}`;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <HeroSection />

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
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden group transform hover:scale-105 transition-all duration-300 border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {property.isFeatured && (
                    <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-xl text-gray-800 flex-1 pr-2">{property.title}</h3>
                    {property.isVerified && (
                      <div className="w-4 h-4 bg-emerald-500 rounded-full flex-shrink-0"></div>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm mb-2 flex items-center">
                    <MapPin size={16} className="mr-1 text-gray-400" />
                    {property.location}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3 text-xs text-gray-600">
                    <span className="px-2 py-1 bg-gray-100 rounded-full">{property.type}</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-full">{property.bedrooms} Beds</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-full">{property.bathrooms} Baths</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-full">{property.area}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="flex text-amber-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < Math.floor(property.rating) ? "currentColor" : "none"}
                          className="mr-1"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{property.rating}</span>
                  </div>
                  <p className="text-emerald-600 font-bold text-xl mb-3">
                    {formatPrice(property.price)} / {property.period}
                  </p>
                  <div className="mb-3">
                    <p className="text-xs text-gray-500">Amenities: {property.amenities.slice(0, 2).join(", ")}{property.amenities.length > 2 ? " + more" : ""}</p>
                  </div>
                  <button className="w-full bg-gray-100 hover:bg-emerald-600 hover:text-white text-gray-700 font-medium py-2 rounded-lg transition-colors duration-200">
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
                icon: <Search size={32} />, 
                title: "Search Properties", 
                desc: "Browse through thousands of verified listings across Nigeria",
                color: "from-emerald-500 to-teal-500"
              },
              { 
                icon: <Users size={32} />, 
                title: "Connect Securely", 
                desc: "Message landlords and agencies directly through our platform",
                color: "from-teal-500 to-cyan-500"
              },
              { 
                icon: <Calendar size={32} />, 
                title: "Schedule Visit", 
                desc: "Book property viewings at your convenient time",
                color: "from-cyan-500 to-blue-500"
              },
              { 
                icon: <HomeIcon size={32} />, 
                title: "Move In", 
                desc: "Complete paperwork and move into your dream home",
                color: "from-amber-500 to-orange-500"
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
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
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current mr-1" />
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