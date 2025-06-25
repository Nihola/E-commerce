import React from "react";
import { favoriteStore } from "./../../store/favoriteStore";
import { FiHeart } from "react-icons/fi";
import { FaHeart, FaStar } from "react-icons/fa";

export default function Favorites() {
  const { favorites, removeFavorites, isFavorite } = favoriteStore();

  return (
    <div className="bg-[#FFFDF6] min-h-screen py-10 px-4">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        {favorites.length === 0 ? (
          <div className="text-center text-gray-500 text-lg sm:text-xl">
            You haven't added any favorites yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map((item) => (
              <div
                key={item.id}
                className="group bg-white p-4 rounded-xl relative shadow-sm transition hover:shadow-md"
              >
                {/* Heart Icon - shows only on hover */}
                <button
                  onClick={() => removeFavorites(item.id)}
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-1 shadow"
                >
                  <FaHeart size={18} className="text-red-500" />
                </button>

                {/* Discount Badge */}
                {item.discount !== "0%" && (
                  <div className="absolute top-3 left-3 bg-[#FF6633] text-white text-xs font-bold px-3 py-1 rounded">
                    -{item.discount}
                  </div>
                )}

                {/* Product Image */}
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full h-36 object-cover rounded mb-4"
                />

                {/* Prices */}
                <div className="flex justify-between items-center text-sm mb-1">
                  <span className="text-black font-bold text-lg">{item.disprice}</span>
                  <span className="text-gray-400 line-through">{item.price}</span>
                </div>

                <div className="text-xs text-gray-500">С картой</div>

                {/* Name */}
                <div className="text-sm text-[#FF9900] font-semibold">{item.name}</div>

                {/* Description */}
                <div className="text-xs text-gray-600 mt-1 line-clamp-2">
                  {item.description}
                </div>

                {/* Rating Stars */}
                <div className="flex mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-sm ${i < Math.round(item.rating)
                        ? "text-orange-400"
                        : "text-gray-300"
                        }`}
                    />
                  ))}
                </div>

                {/* Add to Cart */}
                <button className="w-full bg-[#FF7F3F] text-white font-bold text-sm py-2 mt-3 rounded-xl hover:bg-[#ff6826] transition">
                  В корзину
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
