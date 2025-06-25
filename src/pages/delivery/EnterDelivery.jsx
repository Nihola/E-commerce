import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const EnterDelivery = ({register}) => {
  const [phone, setPhone] = useState('')

  const handleChange = (e) => {
    let value = e.target.value.replace(/\D/g, '')
    if (value.length > 9) value = value.slice(0, 9)
    setPhone(value)
  }

  return (
    <section>
      <h2 className='text-2xl font-bold pb-4'>Kirish</h2>
      <div className='flex flex-wrap justify-center gap-4 items-center'>
        <div>
          <label className='block mb-1'>Ismingizni kiriting:</label>
          <input type="text" placeholder="Ism g'ulombek" className='border rounded-md py-1 px-2 outline-none'/>
        </div>
        <div className="flex items-center border rounded-md px-2 py-1 bg-white">
          <span className="text-gray-700 mr-1">+998</span>
          <input
            type="tel"
            value={phone}
            {...register("phone")}
            onChange={handleChange}
            maxLength={9}
            placeholder='901234567'
            className="outline-none w-[120px]"
          />
        </div>
      </div>

    </section>
  )
}

export default EnterDelivery
