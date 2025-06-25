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

  const parsePrice = (price) => {
    if (typeof price === 'number') return price;
    
    if (typeof price === 'string') {
      const numericString = price.replace(/[^\d.,]/g, '')
                                 .replace(',', '.'); 
      const parsed = parseFloat(numericString);
      return isNaN(parsed) ? 0 : parsed; 
    }
    
    return 0; 
  };

  const formatPrice = (price) => {
    return price.toLocaleString('ru-RU', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const handleOrder = () => {
    if (cartItems.length === 0) {
      toast.warning("Savat bo'sh!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    toast.success("Zakaz berildi!", {
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

  const handleSelectAll = () => {
    if (selectedItems.length === cartItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map(item => item.id));
    }
  };

  const calculateTotal = (items) => {
    return items.reduce((sum, item) => {
      const price = parsePrice(item.disprice || item.price);
      const quantity = Number(item.quantity) || 0;
      return sum + (price * quantity);
    }, 0);
  };

  const selectedTotal = calculateTotal(
    cartItems.filter(item => selectedItems.includes(item.id))
  );

  const grandTotal = calculateTotal(cartItems);

  return (
    <div className="bg-yellow-50 min-h-screen pb-10">
      <div className="flex items-center gap-3 px-4 py-3 sm:px-6 md:px-10">
        <NavLink to="/" className="text-lg sm:text-xl md:text-2xl">
          Home
        </NavLink>
        <GoChevronRight />
        <NavLink className="text-lg sm:text-xl md:text-2xl">
          Products
        </NavLink>
        <GoChevronRight />
      </div>

      <h1 className="text-xl sm:text-2xl md:text-3xl py-3 px-4 sm:px-6 md:px-10">
        Savat ({cartItems.length})
      </h1>

      <div className="px-4 py-3 sm:px-6 md:px-10">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            className={`text-lg ${selectedItems.length === cartItems.length ? 'text-red-500' : 'hover:text-red-500'}`}
            onClick={handleSelectAll}
          >
            {selectedItems.length === cartItems.length ? "Tanlovni bekor qilish" : "Barchasini tanlash"}
          </button>

          {selectedItems.length > 0 && (
            <button
              className="text-lg hover:text-red-500"
              onClick={() => {
                clearSelected(selectedItems);
                setSelectedItems([]);
              }}
            >
              Tanlanganlarni o'chirish ({selectedItems.length})
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 px-4 py-3 sm:px-6 md:px-10">
        <div className="w-full md:w-3/4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h2 className="text-xl font-semibold mb-4">Savat bo'sh</h2>
              <NavLink 
                to="/" 
                className="bg-orange-500 text-white px-6 py-2 rounded inline-block hover:bg-orange-600"
              >
                Mahsulotlar sahifasiga o'tish
              </NavLink>
            </div>
          ) : (
            cartItems.map((item) => {
              const price = parsePrice(item.disprice || item.price);
              const originalPrice = item.disprice ? parsePrice(item.price) : null;
              const quantity = Number(item.quantity) || 0;
              const itemTotal = price * quantity;

              return (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center w-full md:w-auto mb-2 md:mb-0">
                    <input
                      type="checkbox"
                      className="w-4 h-4 mr-3 cursor-pointer"
                      checked={selectedItems.includes(item.id)}
                      onChange={(e) => handleSelect(item.id, e.target.checked)}
                    />
                    <img
                      src={item.image || item.images?.[0] || "placeholder.jpg"}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <div className="flex-1">
                      <p className="font-semibold">{item.name || "No Name"}</p>
                      <p className="text-gray-600 text-sm line-clamp-1">
                        {item.description || "No Description"}
                      </p>
                      <div className="flex items-center gap-2 text-sm mt-1">
                        <span className="text-black font-bold">
                          {formatPrice(price)} ₽
                        </span>
                        {originalPrice && (
                          <span className="line-through text-gray-400">
                            {formatPrice(originalPrice)} ₽
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded-md overflow-hidden">
                      <button
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 py-1"
                        onClick={() => handleQuantityChange(item.id, -1)}
                        disabled={quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-3 min-w-[20px] text-center">
                        {quantity}
                      </span>
                      <button
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 py-1"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                    <span className="font-semibold min-w-[80px] text-right">
                      {formatPrice(itemTotal)} ₽
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
              <div className="space-y-3">
                {selectedItems.length > 0 && (
                  <div className="flex justify-between items-center">
                    <span>Tanlanganlar:</span>
                    <span className="font-semibold">
                      {formatPrice(selectedTotal)} ₽
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-center border-t pt-3">
                  <span className="text-lg">Jami:</span>
                  <span className="text-lg font-bold">
                    {formatPrice(grandTotal)} ₽
                  </span>
                </div>
                <ToastContainer />
                <NavLink to="/delivery">
                  
                  <button
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded w-full mt-4 transition-colors"
                  onClick={handleOrder}
                >
                  Zakaz berish
                </button>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}