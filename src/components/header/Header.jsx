import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaBox, FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import Logo from "./logo.svg";
import avatarImg from "./avatar.png";
import { favoriteStore } from "../../store/favoriteStore";

export default function Header() {
  const navigate = useNavigate();
  const { favorites } = favoriteStore();
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  const goToFavorites = () => {
    navigate("/favorites");
  };

  return (
    <div className="relative w-full flex items-center justify-between bg-white p-2 shadow-md gap-3">
      <div className="flex items-center gap-2">
        <Link to="/">
          <div className="flex items-center">
            <img src={Logo} alt="logo" />
            <div className="ml-1 font-semibold text-sm">СЕВЕРЯНОЧКА</div>
          </div>
        </Link>

        <button
          className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg"
          onClick={() => setIsCatalogOpen(!isCatalogOpen)}
        >
          <FaBars className="mr-2" />
          Каталог
        </button>
      </div>

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
          <div className="text-sm text-center">Избранное</div>
        </div>

        <Link to="/delivery">
          <div className="flex flex-col items-center text-sm text-gray-700 cursor-pointer hover:text-red-500 transition">
            <FaBox className="text-xl" />
            <div className="text-sm text-center">Заказы </div>
          </div>
        </Link>

        <Link to="/cart">
          <div className="relative cursor-pointer hover:text-red-500 transition">
            <FaShoppingCart className="text-2xl text-gray-700 cursor-pointer hover:text-red-500 transition" />
            <div className="absolute -top-2 right-[12px] bg-red-500 text-white text-xs rounded-full px-1">
              0
            </div>
            <div className="text-sm text-center">Корзина</div>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <img src={avatarImg} alt="Алексей" className="w-8 h-8 rounded-full" />
          <span>Алексей</span>
        </div>
      </div>

      {isCatalogOpen && (
        <div className="absolute left-0 top-full w-full bg-white shadow-lg py-4 z-10 grid grid-cols-4 gap-4 px-10">
          <div className="flex flex-col gap-2 ">
            <Link className='font-semibold hover:text-orange-400' to="/category"> Молоко, сыр, яйца </Link>
            <Link className='font-semibold hover:text-orange-400' to="/category"> Хлеб </Link>
            <Link className='font-semibold hover:text-orange-400' to="/category"> Фрукты и овощи </Link>
            <Link className='font-semibold hover:text-orange-400' to="/category"> Замороженные продукты </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link className='font-semibold hover:text-orange-400' to="/category"> Напитки </Link>
            <Link className='font-semibold hover:text-orange-400' to="/category"> Кондитерские изделия </Link>
            <Link className='font-semibold hover:text-orange-400' to="/category"> Чай, кофе </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link className='font-semibold hover:text-orange-400'to="/category"> Бакалея </Link>
            <Link className='font-semibold hover:text-orange-400'to="/category"> Здоровое питание </Link>
            <Link className='font-semibold hover:text-orange-400'to="/category"> Зоотовары </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link className='font-semibold hover:text-orange-400' to="/category"> Непродовольственные товары </Link>
            <Link className='font-semibold hover:text-orange-400' to="/category"> Детское питание </Link>
            <Link className='font-semibold hover:text-orange-400' to="/category">Мясо, птица, колбаса</Link>
          </div>
        </div>
      
      )}
    </div>
  );
}
