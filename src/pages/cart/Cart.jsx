import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "placeholder.jpg",
      description: "A long, curved fruit with a yellow skin and sweet, creamy white flesh.",
      price: 71,
      quantity: 6,
    },
    {
      id: 2,
      image: "placeholder.jpg",
      description: "A staple food made from flour, water, and yeast, baked into a loaf.",
      price: 88,
      quantity: 4,
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems(cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(0, item.quantity + delta) }
        : item
    ));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-yellow-50 min-h-screen">
      <div className="flex items-center gap-3 px-10 py-5">
        <NavLink className="text-2xl" to="/home">
          Home
        </NavLink>
        <GoChevronRight className="text-2xl" />
        <NavLink className="text-2xl" to="/products">
          Products
        </NavLink>
      </div>
      <h1 className="text-2xl py-5 px-10">Savat</h1>
      <div className="px-10 py-5">
        <div className="flex items-center gap-10">
          <input type="checkbox" className="w-5 h-5 border border-red-300" />
          <button className="text-2xl hover:text-red-500 cursor-pointer">
            Barchasini tanlash
          </button>
          <input type="checkbox" className="w-5 h-5" />
          <button className="text-2xl hover:text-red-500 cursor-pointer">
            Tanlanganlarni o'chirish
          </button>
        </div>
      </div>
      <div className="px-10 py-5 space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white rounded-lg shadow-md p-4"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-5 h-5 mr-4"
              />
              <img
                src={item.image}
                alt={item.description}
                className="w-12 h-12 mr-4"
              />
              <div>
                <p className="text-sm text-gray-700">{item.description}</p>
                <p className="text-xs text-gray-500">
                  {item.price}р за шт.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <button
                className="bg-green-500 text-white px-2 py-1 rounded-l"
                onClick={() => handleQuantityChange(item.id, -1)}
              >
                -
              </button>
              <span className="px-3">{item.quantity}</span>
              <button
                className="bg-green-500 text-white px-2 py-1 rounded-r"
                onClick={() => handleQuantityChange(item.id, 1)}
              >
                +
              </button>
              <span className="ml-4 text-xs text-gray-500">
                {item.price * item.quantity} р
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="px-10 py-5 flex justify-between items-center bg-white rounded-lg shadow-md">
        <span>Итог</span>
        <div>
          <span className="text-lg font-bold">{total} р</span>
          <p className="text-xs text-green-600">
            Вы получите 100 бонусов
          </p>
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">
          Оформить заказ
        </button>
      </div>
    </div>
  );
}