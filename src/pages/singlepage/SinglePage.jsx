
import React, { useEffect, useState } from 'react'
import { products } from '../../products-data'
import { Link, useParams } from 'react-router-dom'
import { useCartStore } from '../../store/cartStore';
import { favoriteStore } from '../../store/favoriteStore';

import { FaCommentAlt, FaFacebookF, FaHeart, FaInstagram, FaStar, FaTelegramPlane, FaTwitter, FaYoutube } from
'react-icons/fa';
import { FiHeart, FiShare2 } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import ProductSection from '../../components/ProductSection';

function SinglePage() {
const {isInCart,getQuantity,decrement,increment,addToCart} = useCartStore();
const { addFavorites, isFavorite, removeFavorites } = favoriteStore();
const [singleCard,setSingleCard]= useState(null);
const inCart = singleCard ? isInCart(singleCard.id) : false
const quantity = singleCard ? getQuantity(singleCard.id) : 0
const {id} = useParams();
const [image,setImage] = useState("");
const promotions = products.filter(p => p.tag === "Promotions");
const [activeImg, setActiveImg] = useState(singleCard?.images?.[0]);
const [showShare, setShowShare] = useState(false);


useEffect(()=> {
const updatecard = products.find(p => p.id.toString()=== id );
setSingleCard(updatecard)
if (updatecard?.images.length > 0) {
setImage(updatecard.images[0]);
setActiveImg(updatecard.images[0])
}
},[id])

if (!singleCard) {
return <div className="text-center py-10 text-gray-500">Loading...</div>
}
const toggleFavorite = () => {
isFavorite(singleCard.id)
? removeFavorites(singleCard.id)
: addFavorites(singleCard);
};

const handleClick = (img) => {
setImage(img);
setActiveImg(img)
};

return (
<div className=" bg-[#F9F4E2] py-[60px] ">
  <div className="container  mx-auto px-10  flex flex-col  gap-3">
    <div className="flex text-center">
      <h2 className='font-[Rubik] font-[600] text-[20px] lg:text-[24px] '>{singleCard.name},{singleCard?.description} </h2>
    </div>
    <div className="flex lg:gap-10  gap-5  items-center">
      <p className='font-[Rubik] text-[10px] lg:text-[16px] '>арт. 371431</p>
      <div className="flex  group-hover:scale-105">
        {Array.from({ length: 5 }).map((_, i) => (
        <FaStar key={i} className={`text-sm ${i < Math.round(singleCard.rating) ? "text-orange-400" : "text-gray-300"
          }`} />
        ))}
      </div>
      <div className="flex items-center text-gray-600 text-sm gap-1 hover:text-blue-600 cursor-pointer">
        <FaCommentAlt size={14} />
        <span className='hidden md:inline'>3 отзыва</span>
      </div>

      <div className="">
        <button onClick={()=> setShowShare(!showShare)} className="flex items-center gap-2 text-[#414141]
          hover:text-blue-500">
          <FiShare2 size={18} />
          <span className="text-sm hidden md:inline ">Поделиться</span>
        </button>
        {showShare && (
        <div className="absolute z-10 mt-2 p-4 bg-white border rounded-lg shadow-lg flex flex-col gap-3 min-w-[180px]">
          <button onClick={()=> setShowShare(false)}
            className="absolute top-1 right-1 text-gray-500 hover:text-red-500"
            >
            <IoClose size={20} />
          </button>
          <a href="https://t.me/share/url?url=https://your-site.com" target="_blank"
            className="flex items-center gap-2 hover:text-blue-500">
            <FaTelegramPlane /> Telegram
          </a>
          <a href="https://www.instagram.com/" target="_blank" className="flex items-center gap-2 hover:text-pink-500">
            <FaInstagram /> Instagram
          </a>
          <a href="https://www.youtube.com/" target="_blank" className="flex items-center gap-2 hover:text-red-500">
            <FaYoutube /> YouTube
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://your-site.com" target="_blank"
            className="flex items-center gap-2 hover:text-blue-700">
            <FaFacebookF /> Facebook
          </a>
          <a href="https://twitter.com/intent/tweet?url=https://your-site.com" target="_blank"
            className="flex items-center gap-2 hover:text-sky-500">
            <FaTwitter /> Twitter
          </a>
        </div>
        )}
      </div>

      <div className="">
        <button onClick={toggleFavorite} className=" flex items-center gap-3 rounded-full p-2 ">
          {isFavorite(singleCard.id) ? (
          <FaHeart size={20} className="text-red-500" />
          ) : (
          <FiHeart size={20} className="text-gray-400" />
          )}
          <span className='hidden md:inline'>В избраное</span>
        </button>
      </div>
    </div>
    <div className=' flex flex-col lg:flex-row gap-8 '>
      <div className="w-full flex flex-col lg:flex-row gap-5 lg:h-[400px]">
        <div className="flex lg:flex-col sm:gap-1.5 lg:gap-2 justify-between w-full  lg:w-[120px]">
          {singleCard.images.slice(0, 4).map((img, index) => (
          <img key={index} src={img} alt={`img-${index}`} onClick={()=> handleClick(img)}
          className={`w-[65px] sm:w-[120px] md:w-[150px] lg:w-[180px] h-70px lg:h-[90px]  object-cover rounded-lg
          cursor-pointer border transition-transform duration-300 ease-in-out hover:scale-105 ${
          activeImg === img ? "border-blue-500 scale-110" : "border-transparent"
          }`}
          />
          ))}
        </div>
        <div className="relative flex-1 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[400px]">
          {singleCard.discount !== "0%" && (
          <div className="absolute top-3 left-3 bg-[#FF6633] text-white text-xs font-bold px-2 py-1 rounded">
            -{singleCard.discount}
          </div>
          )}
          <img src={image} alt="Selected" className="w-full h-full object-cover rounded-xl shadow-md" />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-6 ">
        <div className="">
          <div className="flex items-center w-full  justify-between">
            <div className="flex w-[140px] flex-col ">
              <p
                className="font-[Rubik] text-[#606060] font-normal mt-4 text-[18px] lg:text-[24px] leading-[150%] tracking-[0%] align-middle">
                {singleCard?.price}
              </p>
              <span
                className='font-[Rubik] text-[#606060]  font-normal text-[10px] lg:text-[12px] leading-[150%] tracking-[0%] align-middle '>
                Обычная цена
              </span>
            </div>
            <div className="flex flex-col justify-center  mt-3 ">
              <p className='font-[Rubik] text-[#414141] font-[700] leading-10 text-[30px] lg:text-[40px] tracking-[0%] align-middle'>
                {singleCard?.disprice}
              </p>
              <div className="flex items-center gap-2">
                <span
                  className='font-[Rubik] text-[#8F8F8F]  font-normal text-[10px] lg:text-[12px] leading-[100%] tracking-[0%] align-middle '>
                  С картой Северяночки
                </span>
                <img className='w-[15px] lg:w-[20px] ' src="/images/tovar/info.png" alt="photo" />


function SinglePage() {
  const { isInCart, getQuantity, decrement, increment, addToCart } = useCartStore();
  const { addFavorites, isFavorite, removeFavorites } = favoriteStore();
  const [singleCard, setSingleCard] = useState(null);
  const inCart = singleCard ? isInCart(singleCard.id) : false
  const quantity = singleCard ? getQuantity(singleCard.id) : 0
  const { id } = useParams()

  useEffect(() => {
    const updatecard = products.find(p => p.id.toString() === id);
    setSingleCard(updatecard)
  }, [id])

  if (!singleCard) {
    return <div className="text-center py-10 text-gray-500">Loading...</div>
  }

  return (
    <div className=" bg-[#F9F4E2] py-8 ">
      <div className='container  mx-auto  flex gap-4 '>
        <div className="flex gap-4 w-[50%] h-[400px] ">
          <div className="w-[150px] h-full flex flex-col gap-3 ">
            <img className=' rounded-[4px] w-[150px] h-[70px] ' src={singleCard?.images[0]} alt="photo" />
            <img className=' rounded-[4px] w-[150px] h-[70px] ' src={singleCard?.images[1]} alt="photo" />
            <img className=' rounded-[4px] w-[150px] h-[70px] ' src={singleCard?.images[2]} alt="photo" />
            <img className=' rounded-[4px] w-[150px] h-[70px] ' src={singleCard?.images[3]} alt="photo" />
            <img className=' rounded-[4px] w-[150px] h-[70px] ' src={singleCard?.images[1]} alt="photo" />
          </div>
          <div className=" relative ">
            {singleCard.discount !== "0%" && (
              <div className="absolute top-3 left-3 bg-[#FF6633] text-white text-xs font-bold px-2 py-1 rounded">
                -{singleCard.discount}
              </div>
            )}
            <img className='relative rounded-[4px] w-full max-w-[400px] h-[300px] sm:h-[350px] md:h-[400px] flex-shrink-0"' src={singleCard?.images[0]} alt="photo" />
          </div>
        </div>
        <div className="flex w-[50%] flex-col ">
          <div className="">
            <div className="flex  justify-between gap-[320px] ">
              <div className="flex flex-col items-center">
                <p
                  className="font-[Rubik] text-[#606060] font-normal mt-4 text-[24px] leading-[150%] tracking-[0%] align-middle">
                  {singleCard?.price}
                </p>
                <span
                  className='font-[Rubik] text-[#606060] font-normal text-[12px] leading-[150%] tracking-[0%] align-middle '>
                  Обычная цена
                </span>
              </div>
              <div className="flex flex-col items-center ">
                <p className='font-[Rubik] text-[#414141] font-[700] text-[36px]  tracking-[0%] align-middle'>
                  {singleCard?.disprice}
                </p>
                <div className="flex gap-2">
                  <span
                    className='font-[Rubik] text-[#8F8F8F] font-normal text-[12px] leading-[150%] tracking-[0%] align-middle '>
                    С картой Северяночки
                  </span>
                  <img src="/images/tovar/info.png" alt="photo" />
                </div>

              </div>
            </div>
          </div>
          <div className="flex justify-center py-[40px] ">
            {!inCart ? (
              <button
                onClick={() => addToCart(singleCard)}
                className=" flex items-center gap-8 px-4 w-[250px] bg-[#FF7F3F] text-white font-bold text-sm py-3 mt-3 rounded-xl hover:bg-[#ff6826] transition"
              >
                <img src="/images/tovar/shopping-cart.png" alt="photo" />
                <span className='font-[Rubik] font-[400] text-[24px] '>
                  В корзину
                </span>
              </button>
            ) : (
              <div className="flex items-center justify-around rounded-3xl w-[250px] h-[60px] mt-3">
                <button
                  onClick={() => decrement(singleCard.id)}
                  className="bg-lime-500 text-black text-xl w-1/2  py-4 px-4  hover:bg-lime-600  rounded-l-2xl"
                >
                  −
                </button>
                <span className="bg-gray-200 text-black   py-4 px-4  text-lg font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => increment(singleCard.id)}
                  className="bg-lime-500 text-black text-xl  w-1/2  py-4 px-4 rounded-r-2xl hover:bg-lime-600"
                >
                  +
                </button>
              </div>

            )}
          </div>
          <div className="flex flex-col gap-2 ">
            <div className='flex py-0.5 px-3 bg-[#F3F2F1] rounded-[10px] '>
              <p className='w-[50%] '>
                Бренд
              </p>
              <p>
                ПРОСТОКВАШИНО
              </p>
            </div>
            <div className='flex py-0.5 px-3 bg-[#F3F2F1] rounded-[10px] '>
              <p className='w-[50%] '>
                Страна производителя
              </p>
              <p>
                Россия
              </p>
            </div>
            <div className='flex py-0.5 px-3 bg-[#F3F2F1] rounded-[10px] '>
              <p className='w-[50%] '>
                Упаковка
              </p>
              <p>
                180 г
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage;