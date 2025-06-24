import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Cart() {
  return (
    <>
    <div>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/products'}>Products</NavLink>
    </div>
    </>
  )
}
