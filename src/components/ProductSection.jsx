import React from 'react'
import ProductCard from './ProductCard';

import { products } from '../products-data'; // adjust path if needed

export default function ProductSection({ title, data }) {

 


  return (
    <div>
      <section className="m-auto justify-around">
        <h2 className="text-2xl font-bold ml-14 mb-5 mt-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      
    </div>
  )
}
