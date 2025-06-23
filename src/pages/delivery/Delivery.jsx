import React from 'react'
import WhereDelivery from './WhereDelivery'
import EnterDelivery from './EnterDelivery'

export default function Delivery() {
  return (
    <section>
      <div >
         {/* left div  */}
         <div>
          <WhereDelivery/>
          <WhereDelivery/>
          <EnterDelivery/>
         </div>


         {/* right div  */}
         <div>

         </div>
      </div>
    </section>
  )
}
