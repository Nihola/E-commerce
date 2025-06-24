import React from 'react'
import WhereDelivery from './WhereDelivery'
import EnterDelivery from './EnterDelivery'
import SumDelivery from './SumDelivery'

export default function Delivery() {
  return (
    <section>
      <div className='container mx-auto flex justify-between gap-8 items-center'>
         <div>
          <WhereDelivery/>
          <WhereDelivery/>
          <EnterDelivery/>
         </div>
         <div>
          <SumDelivery/>
         </div>
      </div>
    </section>
  )
}
