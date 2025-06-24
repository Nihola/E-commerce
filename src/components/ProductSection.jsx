import React from 'react'
import ProductCard from './ProductCard';

import { products } from '../products-data'; // adjust path if needed

export default function ProductSection({ title, data }) {

  const promotions = products.filter(product => product.tag === "Promotions");
  const newArrivals = products.filter(product => product.tag === "New Arrivals");
  const previouslyBought = products.filter(product => product.tag === "Previously Bought");


  return (
    <div>
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      
    </div>
  )
}
