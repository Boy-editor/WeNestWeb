import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
      '/assets/home/house-35.jpg',
      '/assets/home/house-37.jpg',
      '/assets/home/house-36.jpg',
      '/assets/home/house-34.jpg',
    // Add more image paths here
  ];

  // Auto-switch images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="relative text-white pt-24 md:py-44 overflow-hidden">
      {/* Image Carousel */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black/50"></div>

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

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-amber-400 w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-amber-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-20 w-24 h-24 bg-cyan-400/30 rounded-full blur-lg"></div>
    </section>
  );
};

export default HeroSection;