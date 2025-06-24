import React from 'react'
import { Link } from "react-router-dom";
import { FaInstagram, FaVk, FaFacebookF, FaOdnoklassniki, FaPhoneAlt } from "react-icons/fa";


export default function Footer() {
  return (
     <footer className="bg-[#fdf6e8] w-full text-gray-700 text-sm py-4 border-t border-gray-200 " >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap justify-center gap-4 ">
          <Link className='hover:text-orange-400'>О компании</Link>
          <Link className='hover:text-orange-400' >Контакты</Link>
          <Link className='hover:text-orange-400' >Вакансии</Link>
          <Link className='hover:text-orange-400' >Статьи</Link>
          <Link className='hover:text-orange-400' >Политика обработки персональных данных</Link>
        </div>
        <div className="flex items-center gap-4">
          <FaInstagram className="text-xl hover:text-orange-400" />
          <FaVk className="text-xl  hover:text-orange-400" />
          <FaFacebookF className="text-xl hover:text-orange-400" />
          <FaOdnoklassniki className="text-xl  hover:text-orange-400" />
        </div>
        <div className="flex items-center gap-2  hover:text-orange-400">
          <FaPhoneAlt /> <span>8 800 777 33 33</span>
        </div>
      </div>
    </footer>
  )
}

