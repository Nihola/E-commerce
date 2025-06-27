import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaBox, FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import Logo from "./logo.svg";
import avatarImg from "./avatar.png";
import { favoriteStore } from "../../store/favoriteStore";
import { products } from "../../products-data";
import { useCartStore } from "../../store/cartStore";

export default function Header() {
  const navigate = useNavigate();
  const { favorites } = favoriteStore();
  const { cartItems } = useCartStore();
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [search, setSearch] = useState("");

  const goToFavorites = () => {
    navigate("/favorites");
  };

  const goToProduct = (id) => {
    navigate(`/product/${id}`);
    setSearch(""); 
  };

  const filteredProducts = useMemo(() => {
    return products.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="relative w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-2 gap-3 flex-wrap">

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

        <div className="relative max-w-[600px] w-full">
          <div className="flex items-center flex-1">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Найти товар"
              className="w-full border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
              value={search}
            />
            <button className="bg-green-500 p-[13px] rounded-r-lg">
              <FaSearch className="text-white" />
            </button>
          </div>

          {search && (
            <div className="absolute z-10 w-full flex flex-col top-[45px] bg-white p-1.5 max-h-[300px] overflow-y-auto shadow-lg">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => goToProduct(product.id)}
                    className="flex gap-[20px] p-1.5 hover:bg-gray-100 cursor-pointer"
                  >
                    <img width="60px" src={product.images[0]} alt="rasm" />
                    <div>
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm text-gray-600">{product.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-gray-500 px-4 py-2">Товар не найден</div>
              )}
            </div>
          )}
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
              <div className="text-sm text-center">Заказы</div>
            </div>
          </Link>

          <Link to="/cart">
            <div className="relative cursor-pointer hover:text-red-500 transition">
              <FaShoppingCart className="text-2xl text-gray-700" />
              <div className="absolute -top-2 right-[12px] bg-red-500 text-white text-xs rounded-full px-1">
                {cartItems.length}
              </div>
              <div className="text-sm text-center">Корзина</div>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <img src={avatarImg} alt="Алексей" className="w-8 h-8 rounded-full" />
            <span>Алексей</span>
          </div>
        </div>
      </div>

      {isCatalogOpen && (
        <div className="absolute left-0 top-full w-full bg-white shadow-lg py-4 z-10 grid grid-cols-2 md:grid-cols-4 gap-4 px-10">
          <div className="flex flex-col gap-2">
            <Link to="/category" onClick={() => setIsCatalogOpen(false)} className='font-semibold hover:text-orange-400'>Молоко, сыр, яйца</Link>
            <Link to="/category" onClick={() => setIsCatalogOpen(false)} className='font-semibold hover:text-orange-400'>Хлеб</Link>
            <Link to="/category" onClick={() => setIsCatalogOpen(false)} className='font-semibold hover:text-orange-400'>Фрукты и овощи</Link>
            <Link to="/category" onClick={() => setIsCatalogOpen(false)} className='font-semibold hover:text-orange-400'>Замороженные продукты</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link to="/category" onClick={() => setIsCatalogOpen(false)} className='font-semibold hover:text-orange-400'>Напитки</Link>
            <Link to="/category" onClick={() => setIsCatalogOpen(false)} className='font-semibold hover:text-orange-400'>Кондитерские изделия</Link>
            <Link to="/category" onClick={() => setIsCatalogOpen(false)} className='font-semibold hover:text-orange-400'>Чай, кофе</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link to="/category" onClick={() => setIsCatalogOpen(false)} className='font-semibold hover:text-orange-400'>Бакалея</Link>
            <Link to="/category" onClick={() => setIsCatalogOpen(false)} className='font-semibold hover:text-orange-400'>Здоровое питание</Link>
            <Link to="/category" onClick={() => setIsCatalogOpen(false)} className='font-semibold hover:text-orange-400'>Зоотовары</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link to="/category" onClick={() => setIsCatalogOpen(false)} className='font-semibold hover:text-orange-400'>Непродовольственные товары</Link>
            <Link to="/category" onClick={() => setIsCatalogOpen(false)} className='font-semibold hover:text-orange-400'>Детское питание</Link>
            <Link to="/category" onClick={() => setIsCatalogOpen(false)} className='font-semibold hover:text-orange-400'>Мясо, птица, колбаса</Link>
          </div>
        </div>
      )}
    </div>
  );
}
