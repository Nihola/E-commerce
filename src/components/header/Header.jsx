import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaBox, FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import Logo from "./logo.svg"
import Avatar from "./avatar.png"
import { favoriteStore } from "../../store/favoriteStore";

export default function Header() {
  const navigate = useNavigate();
  const { favorites } = favoriteStore();
  const goToFavorites = () => {
    navigate("/favorites");
  };
  return (
    <div className="w-full flex items-center justify-between bg-white p-2 shadow-md">
      {/* Logo va katalog */}
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          <img src={Logo} alt="logo" />
          <div className="ml-1 font-semibold text-sm">СЕВЕРЯНОЧКА</div>
        </div>
        <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg">
          <FaBars className="mr-2" />
          Каталог
        </button>
      </div>

      {/* Qidiruv */}
      <div className="flex items-center flex-1 mx-4">
        <input
          type="text"
          placeholder="Найти товар"
          className="w-full border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
        />
        <button className="bg-green-500 p-[13px] rounded-r-lg">
          <FaSearch className="text-white" />
        </button>
      </div>

      {/* Icons va profil */}
      <div className="flex items-center gap-4">
        <div
          onClick={goToFavorites}
          className="relative flex flex-col items-center text-sm text-gray-700 cursor-pointer hover:text-red-500 transition"
        >
           
          <FaHeart className="text-xl mb-1" />
 
          {favorites.length > 0 && (
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-[2px] rounded-full">
              {favorites.length}
            </span>
          )}

          {/* Label */}
          <div className="text-sm text-center">Избранное</div>
        </div>

        <div className="flex flex-col items-center text-sm text-gray-700">
          <FaBox className="text-xl" />
          <div className="text-sm text-center">Заказы </div>
        </div>
        <div className="relative">
          <FaShoppingCart className="text-2xl text-gray-700" />
          <div className="absolute -top-2 right-[12px] bg-red-500 text-white text-xs rounded-full px-1">0</div>
          <div className="text-sm text-center">Корзина</div>
        </div>
        <div className="flex items-center gap-2">
            <img
              src={Avatar}
              alt="Алексей"
              className="w-8 h-8 rounded-full"
            />
          <span>Алексей</span>
        </div>
      </div>
    </div>
  );
}
