 
import { products } from './../../products-data';
import ProductSection from './../../components/ProductSection';
import ProductCard from "./../../components/ProductCard";
const promotions = products.filter(p => p.tag === "Promotions");
const newArrivals = products.filter(p => p.tag === "New Arrivals");
const previouslyBought = products.filter(p => p.tag === "Previously Bought");

function HomePage() {
  return (
    <div className='bg-[#FFF3E9]'>

      <ProductSection title="🔥 Promotions" data={promotions}/>
      <ProductSection title="🆕 New Arrivals" data={newArrivals} />
      <ProductSection title="🛍️ Previously Bought" data={previouslyBought} />
    </div>
  );
}

export default HomePage;
