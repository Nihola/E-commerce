import React from 'react'
import { NavLink } from 'react-router-dom'
import { GoChevronRight } from "react-icons/go";


export default function Cart() {
  return (
    <>
    <div className='flex items-center gap-3 px-10 py-5 bg-yellow-100 shadow-md'>
      <NavLink className={'text-2xl'} to={'/home'}>Home</NavLink>
      <GoChevronRight className='text-2xl' />
      <NavLink className={'text-2xl'} to={'/products'}>Products</NavLink>
    </div>
    <div>
      <p>Korzinka</p>
    </div>
    </>
  )
}
