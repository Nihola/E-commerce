import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const EnterDelivery = () => {
  const [phone, setPhone] = useState('')

  const handleChange = (e) => {
    let value = e.target.value.replace(/\D/g, '')
    if (value.length > 9) value = value.slice(0, 9)
    setPhone(value)
  }

  return (
    <section className='border p-4'>
      <h2 className='text-2xl font-bold pb-4'>Kirish</h2>
      <div className='flex flex-wrap justify-center gap-4 items-center'>
        <div className="flex items-center border rounded-md px-2 py-1 bg-white">
          <span className="text-gray-700 mr-1">+998</span>
          <input
            type="tel"
            value={phone}
            onChange={handleChange}
            maxLength={9}
            placeholder='901234567'
            className="outline-none w-[120px]"
          />
        </div>
        <button className='bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-500 active:scale-95 duration-200'>
          Kodni jo'natish
        </button>
        <NavLink>
          <button className='bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-500 active:scale-95 duration-200'>
            Email orqali kirish
          </button>
        </NavLink>
      </div>
    </section>
  )
}

export default EnterDelivery
