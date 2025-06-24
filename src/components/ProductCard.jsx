import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { favoriteStore } from "./../store/favoriteStore";

export default function ProductCard({ product }) {
  const { addFavorites, isFavorite, removeFavorites } = favoriteStore();

  const toggleFavorite = () => {
    isFavorite(product.id)
      ? removeFavorites(product.id)
      : addFavorites(product);
  };

  return (
    <div className="group bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all relative max-w-xs w-full m-auto">

      {/* Heart Icon (appears on hover) */}
      <button
        onClick={toggleFavorite}
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-1 shadow"
      >
        {isFavorite(product.id) ? (
          <FaHeart size={18} className="text-red-500" />
        ) : (
          <FiHeart size={18} className="text-gray-400" />
        )}
      </button>

      {/* Discount Badge */}
      {product.discount !== "0%" && (
        <div className="absolute top-3 left-3 bg-[#FF6633] text-white text-xs font-bold px-2 py-1 rounded">
          -{product.discount}
        </div>
      )}

      {/* Product Image */}
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg mt-3 mb-4 transition-transform duration-300 group-hover:scale-94"
      />

      {/* Price Section */}
      <div className="flex justify-between items-center text-sm mb-1 group-hover:scale-105">
        <span className="text-black font-bold text-lg">{product.disprice}</span>
        <span className="text-gray-400 line-through">{product.price}</span>
      </div>

      {/* Extra Info */}
      <div className="text-xs text-gray-500 mb-1 group-hover:scale-105">С картой</div>

      {/* Product Name */}
      <div className="text-sm text-[#FF9900] font-semibold group-hover:scale-105">{product.name}</div>

      {/* Description */}
      <div className="text-xs text-gray-600 mt-1 line-clamp-2 group-hover:scale-105">
        {product.description}
      </div>

      {/* Star Rating */}
      <div className="flex mt-2 group-hover:scale-105">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={`text-sm ${i < Math.round(product.rating) ? "text-orange-400" : "text-gray-300"
              }`}
          />
        ))}
      </div>

      {/* Add to Cart Button */}
      <button className="w-full bg-[#FF7F3F] hover:bg-[#ff6826] transition text-white font-bold text-sm py-2 mt-3 rounded-xl group-hover:scale-105">
        В корзину
      </button>
    </div>
  );
}
