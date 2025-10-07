import React from "react";

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
            ₦{property.price.toLocaleString()} 
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

export default PropertyCard;