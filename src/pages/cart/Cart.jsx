import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCartStore } from "../../store/cartStore";

export default function Cart() {
  const {
    cartItems,
    increment,
    decrement,
    clearSelected
  } = useCartStore();

  const [selectedItems, setSelectedItems] = useState([]);

  const handleOrder = () => {
    toast.success("Zakaz berildi !", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleQuantityChange = (id, delta) => {
    if (delta > 0) increment(id);
    else if (delta < 0) decrement(id);
  };

  const handleSelect = (id, checked) => {
    setSelectedItems(prev =>
      checked ? [...prev, id] : prev.filter(itemId => itemId !== id)
    );
  };

  const total = cartItems.reduce((sum, item) => {
    const price = item.disprice || parseFloat(item.price.replace("$", ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="bg-yellow-50 min-h-screen">
      <div className="flex items-center gap-3 px-4 py-3 sm:px-6 md:px-10">
        <NavLink className="text-lg sm:text-xl md:text-2xl" to="/home">
          Home
        </NavLink>
        <GoChevronRight />
        <NavLink className="text-lg sm:text-xl md:text-2xl" to="/products">
          Products
        </NavLink>
      </div>

      <h1 className="text-xl sm:text-2xl md:text-3xl py-3 px-4 sm:px-6 md:px-10">
        Savat ({cartItems.length})
      </h1>

      <div className="px-4 py-3 sm:px-6 md:px-10">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            className="text-lg hover:text-red-500"
            onClick={() => {
              const allIds = cartItems.map(item => item.id);
              setSelectedItems(allIds);
            }}
          >
            Barchasini tanlash
          </button>

          <button
            className="text-lg hover:text-red-500"
            onClick={() => {
              clearSelected(selectedItems);
              setSelectedItems([]);
            }}
          >
            Tanlanganlarni o'chirish
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 px-4 py-3 sm:px-6 md:px-10">
        <div className="w-full md:w-3/4 space-y-4">
          {cartItems.map((item) => {
            const price = item.disprice || parseFloat(item.price.replace("$", ""));
            const itemTotal = price * item.quantity;

            return (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-md p-4"
              >
                <div className="flex items-center w-full md:w-auto mb-2 md:mb-0">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mr-3"
                    checked={selectedItems.includes(item.id)}
                    onChange={(e) => handleSelect(item.id, e.target.checked)}
                  />
                  <img
                    src={item.image || item.images?.[0] || "placeholder.jpg"}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                  <div>
                    <p className="font-semibold">{item.name || "No Name"}</p>
                    <p className="text-gray-600 text-sm">
                      {item.description || "No Description"}
                    </p>
                    <div className="flex items-center gap-2 text-sm mt-1">
                      <span className="text-black font-bold">{price.toLocaleString()} р</span>
                      {item.disprice && item.price && (
                        <span className="line-through text-gray-400">
                          {parseFloat(item.price.replace("$", "")).toLocaleString()} р
                        </span>
                      )}
                    </div>
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
                  <span className="ml-4 text-gray-500 text-sm">
                    {itemTotal.toLocaleString()} р
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full md:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center border-b pb-3 mb-3">
              <span className="text-xl">Jami:</span>
              <span className="text-xl font-bold">{total.toLocaleString()} р</span>
            </div>
            <ToastContainer />
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded w-full"
              onClick={handleOrder}
            >
              Zakaz berish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
