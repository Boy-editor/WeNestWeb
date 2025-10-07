import React from "react";
import { supabase } from "../lib/supabaseClient";
import { Link } from "react-router-dom";
import {
  MapPin,
  Star,
  Heart,
  Bed,
  Bath,
  Ruler,
  CheckCircle,
  Crown,
} from "lucide-react";

const PropertyCard = ({ property, isListView }) => {
  const formatPrice = (price) => `₦${price.toLocaleString()}`;
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden group transform hover:scale-105 transition-all duration-300 border border-gray-100 ${
        isListView ? "flex" : ""
      }`}
    >
      {/* Property Image */}
      <div
        className={`relative overflow-hidden ${
          isListView ? "w-80 flex-shrink-0" : ""
        }`}
      >
        <img
          src={property.images[0]}
          alt={property.title}
          className={`object-cover group-hover:scale-110 transition-transform duration-300 ${
            isListView ? "w-full h-full" : "w-full h-56"
          }`}
        />

        {/* Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {property.isFeatured && (
            <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
              <Crown size={14} />
              <span>Featured</span>
            </span>
          )}
          {property.isVerified && (
            <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
              <CheckCircle size={14} />
              <span>Verified</span>
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <div className="absolute top-4 right-4">
          <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bold text-xl text-gray-800 group-hover:text-emerald-600 transition-colors duration-200">
            {property.title}
          </h3>
          <div className="flex items-center space-x-1 text-amber-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium text-gray-600">
              {property.rating}
            </span>
          </div>
        </div>

        {/* Location */}
        <p className="text-gray-500 text-sm mb-3 flex items-center">
          <MapPin className="w-4 h-4 mr-1 text-emerald-600" />
          {property.location}
        </p>

        {/* Stats */}
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
          {property.bedrooms > 0 && (
            <span className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              {property.bedrooms} bed
              {property.bedrooms > 1 ? "s" : ""}
            </span>
          )}
          <span className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            {property.bathrooms} bath
            {property.bathrooms > 1 ? "s" : ""}
          </span>
          <span className="flex items-center">
            <Ruler className="w-4 h-4 mr-1" />
            {property.area}
          </span>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {property.amenities.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-lg text-xs font-medium"
            >
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs font-medium">
              +{property.amenities.length - 3} more
            </span>
          )}
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-emerald-600">
              {formatPrice(property.price)}
              <span className="text-sm font-normal text-gray-500">
                /{property.period}
              </span>
            </div>
            <div className="text-xs text-gray-500">{property.landlord}</div>
          </div>

          <Link
            to={`/property/${property.id}`}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
