import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const SumDelivery = ({ register, handleSubmit, sendMessage = () => {} }) => {
  const [isOn, setIsOn] = useState(false);
  const location = useLocation();

  const products = location.state?.products || [];
  const total = location.state?.total || 0;
  const discount = isOn ? 8 : 0;
  const finalTotal = total - discount;

  return (
      <section className="w-[400px] bg-gray-100 border border-gray-400 py-4 px-6 rounded-lg mx-auto my-10">
        <div className="flex items-center justify-center gap-4 py-1 text-center mx-auto">
          <div onClick={() => setIsOn(!isOn)} className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${isOn ? "bg-green-500" : "bg-gray-300"}`}>
            <div className={`bg-white w-6 h-6 rounded-full shadow-md transform ${isOn ? "translate-x-6" : ""}`}/>
          </div>
          <p className="text-[#414141] text-xl">200$ Chegirma</p>
        </div>

        <div className="py-4 space-y-2">
          <span className="flex justify-between gap-4 py-0.5 border-b border-b-gray-300">
            <p className="text-xl text-gray-800">{products.length} ta mahsulot</p>
            <p className="text-xl text-[#414141] font-bold">${total.toFixed(2)}</p>
          </span>

          <input type="hidden" value={products.length} {...register("product")}/>
          <input type="hidden" value={total.toFixed(2)} {...register("price")}/>

          <span className="flex justify-between gap-4 py-0.5 my-2 border-b border-b-gray-300">
            <p className="text-xl text-gray-800">Chegirma</p>
            <p className="text-xl text-[#FF6633] font-bold">-${discount}</p>
          </span>
        </div>

        <div className="flex justify-between items-center gap-4 mb-6 py-0.5 border-b border-b-gray-300">
          <h2 className="text-2xl text-[#2f2d2d] font-[400]">Umumiy summa</h2>
          <p className="text-2xl font-bold text-[#414141]">${finalTotal.toFixed(2)}</p>
          <input type="hidden" value={finalTotal.toFixed(2)} {...register("prices")}/>
        </div>

        <div className="border border-gray-400 rounded-md bg-white px-4 py-5 mb-2">
          <h2 className="text-xl font-bold mb-3">Promokod</h2>
          <input type="text" placeholder="Promokod kiriting" className="border my-2 p-2 outline-none w-full rounded-lg focus:bg-gray-200" />
          <button type="button"className="border border-gray-300 text-gray-600 font-semibold p-2 cursor-pointer bg-gray-200 rounded-md w-full active:bg-[#FF7F3F] active:scale-95 duration-350">Qo'llash</button>
        </div>

        <button onClick={handleSubmit(sendMessage)} type="submit" className="w-full border p-3 bg-green-500 text-white rounded-lg font-semibold cursor-pointer hover:bg-green-400 active:scale-96 duration-250">Yetkazib bergandan keyin to'lov</button>
      </section>
  );
};

export default SumDelivery;
