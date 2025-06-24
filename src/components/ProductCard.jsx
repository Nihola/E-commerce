import React from 'react'

import { products } from '../products-data'
function ProductCard({ product }) {
  return (
    <div className="border rounded-xl p-4 shadow-md hover:shadow-lg transition">
      <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="text-green-600 font-bold">{product.disprice}</span>
        <span className="line-through text-gray-400">{product.price}</span>
      </div>
      <p className="text-yellow-500">⭐ {product.rating}</p>
      <span className="text-sm text-red-500">{product.discount} OFF</span>
    </div>
  );
}
export default ProductCard;
