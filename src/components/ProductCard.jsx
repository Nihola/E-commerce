import React from "react";
import { FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white m-auto  p-4 rounded-xl  max-w-[280px] relative shadow-sm transition hover:shadow-md">
      {/* Heart Icon */}
      <div className="absolute top-3 right-3 bg-white rounded-full p-1 shadow text-gray-400 cursor-pointer">
        <FiHeart size={18} />
      </div>

      {/* Discount Badge */}
      {product.discount !== "0%" && (
        <div className="absolute top-3 left-3 bg-[#FF6633] text-white text-xs font-bold px-2 py-1 rounded">
          -{product.discount}
        </div>
      )}

      {/* Image */}
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-32 object-cover mt-3 mb-4"
      />

      {/* Prices */}
      <div className="flex justify-between items-center text-sm mb-1">
        <span className="text-black font-bold text-lg">{product.disprice}</span>
        <span className="text-gray-400 line-through">{product.price}</span>
      </div>

      {/* With Card */}
      <div className="text-xs text-gray-500">С картой</div>

      {/* Name */}
      <div className="text-sm text-[#FF9900] font-semibold">{product.name}</div>

      {/* Description */}
      <div className="text-xs text-gray-600 mt-1 line-clamp-2">
        {product.description}
      </div>

      {/* Stars */}
      <div className="flex mt-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={`text-sm ${i < Math.round(product.rating) ? "text-orange-400" : "text-gray-300"
              }`}
          />
        ))}
      </div>

      {/* Add to Cart */}
      <button className="w-full bg-[#FF7F3F] text-white font-bold text-sm py-2 mt-3 rounded-xl hover:bg-[#ff6826] transition">
        В корзину
      </button>
    </div>
  );
}
