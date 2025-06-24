import React from 'react'
import WhereDelivery from './WhereDelivery'
import EnterDelivery from './EnterDelivery'
import SumDelivery from './SumDelivery'
import WhenDelivery from './WhenDelivery'

export default function Delivery() {
  return (
    <section className='bg-[#f2eddc] p-6 '>
      <div className='container mx-auto flex justify-between gap-8 items-center'>
         <div className='flex flex-col gap-8 w-[600px]'>
          <WhereDelivery/>
          <WhenDelivery/>
          <EnterDelivery/>
         </div>
         <div>
          <SumDelivery/>
         </div>
      </div>
    </section>
  )
}
