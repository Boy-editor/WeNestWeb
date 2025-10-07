import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PropertiesPage = () => {
  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
    amenities: []
  });
  
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);

  // Sample property data
  const properties = [
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
      landlord: "Adebayo Properties",
      rating: 4.8,
      description: "Luxurious apartment in the heart of Victoria Island with stunning views and modern amenities."
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
      landlord: "Prime Homes",
      rating: 4.5,
      description: "Beautiful house with garden in secure estate, perfect for small families."
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
      landlord: "Elite Estates",
      rating: 4.9,
      description: "Spacious duplex with premium finishes and exclusive amenities in prestigious Ikoyi."
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
      landlord: "Budget Homes",
      rating: 4.2,
      description: "Perfect starter home for young professionals, well-located with good transport links."
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
      landlord: "Luxury Living Ltd",
      rating: 5.0,
      description: "Ultra-luxury villa with private beach access and world-class amenities."
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
      landlord: "Business Centers Ltd",
      rating: 4.6,
      description: "Modern office space in prime business district with excellent connectivity."
    },
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
      landlord: "Adebayo Properties",
      rating: 4.8,
      description: "Luxurious apartment in the heart of Victoria Island with stunning views and modern amenities."
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
      landlord: "Prime Homes",
      rating: 4.5,
      description: "Beautiful house with garden in secure estate, perfect for small families."
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
      landlord: "Elite Estates",
      rating: 4.9,
      description: "Spacious duplex with premium finishes and exclusive amenities in prestigious Ikoyi."
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
      landlord: "Budget Homes",
      rating: 4.2,
      description: "Perfect starter home for young professionals, well-located with good transport links."
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
      landlord: "Luxury Living Ltd",
      rating: 5.0,
      description: "Ultra-luxury villa with private beach access and world-class amenities."
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
      landlord: "Business Centers Ltd",
      rating: 4.6,
      description: "Modern office space in prime business district with excellent connectivity."
    }
  ];

  const nigerianStates = [
    "Lagos", "FCT", "Kano", "Rivers", "Oyo", "Delta", "Edo", "Ogun", "Kaduna", "Imo",
    "Anambra", "Plateau", "Borno", "Osun", "Ondo", "Enugu", "Kwara", "Bauchi", "Cross River",
    "Akwa Ibom", "Abia", "Ekiti", "Sokoto", "Katsina", "Yobe", "Taraba", "Benue", "Niger",
    "Jigawa", "Gombe", "Adamawa", "Bayelsa", "Kogi", "Zamfara", "Ebonyi", "Kebbi", "Nasarawa"
  ];

  const propertyTypes = ["Apartment", "House", "Duplex", "Villa", "Studio", "Commercial"];
  const amenitiesList = ["Swimming Pool", "Gym", "Security", "Parking", "Generator", "Garden", "Air Conditioning", "Maid's Room"];

  const formatPrice = (price) => {
    return `₦${price.toLocaleString()}`;
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleAmenityToggle = (amenity) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const filteredProperties = properties.filter(property => {
    const matchesLocation = !filters.location || 
      property.location.toLowerCase().includes(filters.location.toLowerCase()) ||
      property.state.toLowerCase().includes(filters.location.toLowerCase());
    
    const matchesType = !filters.propertyType || property.type === filters.propertyType;
    
    const matchesMinPrice = !filters.minPrice || property.price >= parseInt(filters.minPrice);
    const matchesMaxPrice = !filters.maxPrice || property.price <= parseInt(filters.maxPrice);
    
    const matchesBedrooms = !filters.bedrooms || property.bedrooms >= parseInt(filters.bedrooms);
    const matchesBathrooms = !filters.bathrooms || property.bathrooms >= parseInt(filters.bathrooms);
    
    const matchesAmenities = filters.amenities.length === 0 || 
      filters.amenities.every(amenity => property.amenities.includes(amenity));

    return matchesLocation && matchesType && matchesMinPrice && matchesMaxPrice && 
           matchesBedrooms && matchesBathrooms && matchesAmenities;
  });

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch(sortBy) {
      case "price-low": return a.price - b.price;
      case "price-high": return b.price - a.price;
      case "bedrooms": return b.bedrooms - a.bedrooms;
      case "rating": return b.rating - a.rating;
      default: return b.id - a.id; // newest first
    }
  });

  const PropertyCard = ({ property, isListView }) => (
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden group transform hover:scale-105 transition-all duration-300 border border-gray-100 ${
      isListView ? 'flex' : ''
    }`}>
      <div className={`relative overflow-hidden ${isListView ? 'w-80 flex-shrink-0' : ''}`}>
        <img
          src={property.images[0]}
          alt={property.title}
          className={`object-cover group-hover:scale-110 transition-transform duration-300 ${
            isListView ? 'w-full h-full' : 'w-full h-56'
          }`}
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {property.isFeatured && (
            <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </span>
          )}
          {property.isVerified && (
            <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              ✓ Verified
            </span>
          )}
        </div>
        <div className="absolute top-4 right-4">
          <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bold text-xl text-gray-800 group-hover:text-emerald-600 transition-colors duration-200">
            {property.title}
          </h3>
          <div className="flex items-center space-x-1 text-amber-500">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-gray-600">{property.rating}</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm mb-3 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {property.location}
        </p>

        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
          {property.bedrooms > 0 && (
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2V7z" />
              </svg>
              {property.bedrooms} bed{property.bedrooms > 1 ? 's' : ''}
            </span>
          )}
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
            {property.bathrooms} bath{property.bathrooms > 1 ? 's' : ''}
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            {property.area}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {property.amenities.slice(0, 3).map((amenity, index) => (
            <span key={index} className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-lg text-xs font-medium">
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs font-medium">
              +{property.amenities.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-emerald-600">
              {formatPrice(property.price)} 
              <span className="text-sm font-normal text-gray-500">/{property.period}</span>
            </div>
            <div className="text-xs text-gray-500">{property.landlord}</div>
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white pt-24 md:pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Find Your Perfect <span className="text-amber-300">Property</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100 leading-relaxed mb-8">
            Discover verified properties across Nigeria's major cities
          </p>
          
          {/* Quick Search Bar */}
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Location (e.g. Lagos, Abuja)"
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent backdrop-blur-sm"
              />
              <select
                value={filters.propertyType}
                onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                className="px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent backdrop-blur-sm"
              >
                <option value="">Property Type</option>
                {propertyTypes.map(type => (
                  <option key={type} value={type} className="text-gray-800">{type}</option>
                ))}
              </select>
              <select
                value={filters.bedrooms}
                onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                className="px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent backdrop-blur-sm"
              >
                <option value="" className="text-gray-800">Bedrooms</option>
                <option value="1" className="text-gray-800">1+ Bedrooms</option>
                <option value="2" className="text-gray-800">2+ Bedrooms</option>
                <option value="3" className="text-gray-800">3+ Bedrooms</option>
                <option value="4" className="text-gray-800">4+ Bedrooms</option>
              </select>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 transform hover:scale-105">
                Search Properties
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-amber-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-cyan-400/30 rounded-full blur-lg"></div>
      </section>

      {/* Filters & Results */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <span>Filters</span>
              </button>
              <span className="text-gray-600">
                {sortedProperties.length} properties found
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="bedrooms">Most Bedrooms</option>
                <option value="rating">Highest Rated</option>
              </select>

              <div className="flex bg-white border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-emerald-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-emerald-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Filters Panel */}
      {showFilters && (
        <section className="py-6 bg-white border-b border-gray-200">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="Min Price"
                    value={filters.minPrice}
                    onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Max Price"
                    value={filters.maxPrice}
                    onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                <select
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                >
                  <option value="">All States</option>
                  {nigerianStates.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
                <select
                  value={filters.bathrooms}
                  onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                >
                  <option value="">Any</option>
                  <option value="1">1+ Bathrooms</option>
                  <option value="2">2+ Bathrooms</option>
                  <option value="3">3+ Bathrooms</option>
                  <option value="4">4+ Bathrooms</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
                <div className="space-y-2 max-h-24 overflow-y-auto">
                  {amenitiesList.map(amenity => (
                    <label key={amenity} className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        checked={filters.amenities.includes(amenity)}
                        onChange={() => handleAmenityToggle(amenity)}
                        className="mr-2 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                      />
                      {amenity}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => setFilters({
                  location: "", propertyType: "", minPrice: "", maxPrice: "",
                  bedrooms: "", bathrooms: "", amenities: []
                })}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Clear Filters
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Properties Grid */}
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          {sortedProperties.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No Properties Found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters to see more results.</p>
              <button
                onClick={() => setFilters({
                  location: "", propertyType: "", minPrice: "", maxPrice: "",
                  bedrooms: "", bathrooms: "", amenities: []
                })}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
              : "space-y-6"
            }>
              {sortedProperties.map((property) => (
                <PropertyCard 
                  key={property.id} 
                  property={property} 
                  isListView={viewMode === 'list'} 
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          {sortedProperties.length > 0 && (
            <div className="mt-12 flex justify-center">
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium">1</button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">2</button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">3</button>
                <span className="px-2 text-gray-500">...</span>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">10</button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100 leading-relaxed">
            Let us know your requirements and we'll help you find the perfect property
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Request Property
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-emerald-700 transition-all duration-200 backdrop-blur-sm">
              Contact Agent
            </button>
          </div>
        </div>
      </section>

      {/* Featured Landlords */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Trusted Landlords & Agencies
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Connect with verified property owners and professional agencies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Adebayo Properties", "Prime Homes", "Elite Estates", 
              "Budget Homes", "Luxury Living Ltd", "Business Centers Ltd"
            ].map((landlord, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {landlord.split(' ').map(word => word[0]).join('').slice(0, 2)}
                </div>
                <h3 className="font-semibold text-gray-800 text-sm mb-2">{landlord}</h3>
                <div className="flex justify-center items-center space-x-1 text-amber-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-gray-500">Verified Partner</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-emerald-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Never Miss a Property Update
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to get notified about new properties matching your preferences and market insights
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">
              By subscribing, you agree to our Privacy Policy and Terms of Service
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertiesPage;