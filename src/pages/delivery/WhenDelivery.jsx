import React, { useState } from 'react'


const WhenDelivery = ({register}) => {

  return (
    <section className=''>
      <h2 className='text-xl text-gray-700 font-bold pb-4 ml-4'>Qachon</h2>
      <div className=''>
        <span className='flex ml-5 items-center gap-2'>
          <p className='mb-1 text-xl font-semibold'>Sana:</p>
          <input type="date" className='border bg-white p-1 rounded-md' {...register("date")} />
        </span>
      </div>

    </section>
  )
}

export default WhenDelivery
