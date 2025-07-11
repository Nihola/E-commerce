import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../products-data";
import ProductSection from "../../components/ProductSection";
import ProductCard from "./../../components/ProductCard";
import { parsePrice } from "./parsePrice";
import Articles from "../../components/Articles";
import "./category.css"
const promotions = products.filter((p) => p.tag === "Promotions");
const Categoryfilter = () => {
  const { id } = useParams();
  const [visibleProducts, setProduct] = useState([]);
  const [togle, setTogle] = useState(true);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  useEffect(() => {
    if (id == 1) {
      const promotions = products.filter((p) => p.category == "Dairy");
      //const listproduct= products.filter((item)=>item.category=="Dairy")
      const filtered = promotions.filter((product) => {
        const productPrice = parsePrice(product.disprice); // Преобразование цены в число
        return productPrice >= minPrice && productPrice <= maxPrice;
      });
      setProduct(filtered);
    } else if (id == 2) {
      const listproduct = products.filter((item) => item.category == "Bakery");

      const filtered = listproduct.filter((product) => {
        const productPrice = parsePrice(product.disprice); // Преобразование цены в число
        return productPrice >= minPrice && productPrice <= maxPrice;
      });
      setProduct(filtered);
    } else if (id == 3) {
      const listproduct = products.filter((item) => item.category == "Fruit");

      const filtered = listproduct.filter((product) => {
        const productPrice = parsePrice(product.disprice); // Преобразование цены в число
        return productPrice >= minPrice && productPrice <= maxPrice;
      });
      setProduct(filtered);
    } else if (id == 4) {
      const listproduct = products.filter((item) => item.category == "Dessert");

      const filtered = listproduct.filter((product) => {
        const productPrice = parsePrice(product.disprice); // Преобразование цены в число
        return productPrice >= minPrice && productPrice <= maxPrice;
      });
      setProduct(filtered);
    } else if (id == 5) {
      const listproduct = products.filter((item) => item.category == "Dessert");

      const filtered = listproduct.filter((product) => {
        const productPrice = parsePrice(product.disprice); // Преобразование цены в число
        return productPrice >= minPrice && productPrice <= maxPrice;
      });
      setProduct(filtered);
    } else if (id == 6) {
      const listproduct = products.filter((item) => item.category == "Lunch");

      const filtered = listproduct.filter((product) => {
        const productPrice = parsePrice(product.disprice); // Преобразование цены в число
        return productPrice >= minPrice && productPrice <= maxPrice;
      });
      setProduct(filtered);
    } else if (id == 7) {
      const listproduct = products.filter(
        (item) => item.category == "Breakfast"
      );

      const filtered = listproduct.filter((product) => {
        const productPrice = parsePrice(product.disprice); // Преобразование цены в число
        return productPrice >= minPrice && productPrice <= maxPrice;
      });
      setProduct(filtered);
    } else if (id == 8) {
      const listproduct = products.filter((item) => item.category == "Fruit");

      const filtered = listproduct.filter((product) => {
        const productPrice = parsePrice(product.disprice); // Преобразование цены в число
        return productPrice >= minPrice && productPrice <= maxPrice;
      });
      setProduct(filtered);
    } else if (id == 9) {
      const listproduct = products.filter((item) => item.category == "Dessert");

      const filtered = listproduct.filter((product) => {
        const productPrice = parsePrice(product.disprice); // Преобразование цены в число
        return productPrice >= minPrice && productPrice <= maxPrice;
      });
      setProduct(filtered);
    } else if (id == 10) {
      const listproduct = products.filter((item) => item.category == "Dinner");

      const filtered = listproduct.filter((product) => {
        const productPrice = parsePrice(product.disprice); // Преобразование цены в число
        return productPrice >= minPrice && productPrice <= maxPrice;
      });
      setProduct(filtered);
    } else if (id == 11) {
      const listproduct = products.filter((item) => item.category == "Lunch");

      const filtered = listproduct.filter((product) => {
        const productPrice = parsePrice(product.disprice); // Преобразование цены в число
        return productPrice >= minPrice && productPrice <= maxPrice;
      });
      setProduct(filtered);
    } else if (id == 12) {
      const listproduct = products.filter((item) => item.category == "Meat");

      const filtered = listproduct.filter((product) => {
        const productPrice = parsePrice(product.disprice); // Преобразование цены в число
        return productPrice >= minPrice && productPrice <= maxPrice;
      });
      setProduct(filtered);
    } else if (id == 13) {
      const listproduct = products.filter(
        (item) => item.category == "Fast food"
      );

      const filtered = listproduct.filter((product) => {
        const productPrice = parsePrice(product.disprice); // Преобразование цены в число
        return productPrice >= minPrice && productPrice <= maxPrice;
      });
      setProduct(filtered);
    }
  }, [minPrice, maxPrice, id]);

  return (
    <>
      <div className="bg-[#FFF3E9] min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Боковая панель фильтра */}
            {togle ? (
              <>
                <button
                  className="text-lg text-white rounded-sm cursor-pointer bg-[#70C05B] p-2  font-semibold lg:absolute"
                  onClick={(e) => {
                    setTogle(!togle);
                  }}
                >
                  Фильтр
                </button>
              </>
            ) : (
              <>
                <aside className="category_aside w-full lg:w-[300px] bg-white rounded-xl p-6 shadow">
                  <div className="flex p-2 rounded-sm items-center justify-between mb-4 bg-gray-200">
                    <h2 className="text-lg font-semibold">Фильтр</h2>
                    <button
                      className="py-1 px-3 bg-[#FF6633] text-white text-lg font-semibold cursor-pointer rounded-sm hover:bg-[#ed5b2e]"
                      onClick={(e) => {
                        setTogle(!togle);
                      }}
                    >
                      X
                    </button>
                  </div>
                  {/* Минимальная цена */}
                  <div className="mb-4">
                    <label
                      htmlFor="minPrice"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Минимальная цена: {minPrice} ₽
                    </label>
                    <input
                      type="range"
                      id="minPrice"
                      min="0"
                      max="100"
                      value={minPrice}
                      onChange={(e) => setMinPrice(parseInt(e.target.value))}
                      className="w-full accent-green-500"
                    />
                  </div>

                  {/* Максимальная цена */}
                  <div className="mb-4">
                    <label
                      htmlFor="maxPrice"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Максимальная цена: {maxPrice} ₽
                    </label>
                    <input
                      type="range"
                      id="maxPrice"
                      min="0"
                      max="100"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                      className="w-full accent-green-500"
                    />
                  </div>

                  {/* Диапазон */}
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>0 ₽</span>
                    <span>100 ₽</span>
                  </div>
                  <div className="flex justify-end">
                    <button
                      className="py-1 px-3 my-3 bg-gray-200 text-lg font-semibold cursor-pointer rounded-sm hover:bg-gray-300"
                      onClick={(e) => {
                        setMinPrice(0);
                        setMaxPrice(100);
                      }}
                    >
                      Очистить
                    </button>
                  </div>
                </aside>
              </>
            )}

            {/* Список продуктов h-[90vw] */}
            <main className="flex-1  lg:mt-15">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {visibleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </main>
          </div>
          <Articles />
        </div>
      </div>
    </>
  );
};

export default Categoryfilter;
