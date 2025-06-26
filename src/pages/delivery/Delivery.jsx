import React from 'react'
import WhenDelivery from './WhenDelivery'
import EnterDelivery from './EnterDelivery'
import WhereDelivery from './WhereDelivery'
import SumDelivery from './SumDelivery'
import { useDeliveryData } from './hook/useDelivery'


export default function Delivery() {
  const { register, handleSubmit, sendMessage, setValue, watch } = useDeliveryData()

  return (
    <section className='bg-[#FFF3E9] p-6'>
      <form
        onSubmit={handleSubmit(sendMessage)}
        className='max-w-[1000px] p-4 mx-auto flex justify-between gap-12 items-center'>
        <div className='flex flex-col gap-3 w-[460px] bg-gray-50 py-4 rounded-md border border-gray-400'>
          <EnterDelivery register={register} setValue={setValue} watch={watch} />
          <WhereDelivery register={register} />
          <WhenDelivery register={register} />
        </div>
        <div>
          <SumDelivery handleSubmit={handleSubmit} sendMessage={sendMessage} />
        </div>
      </form>
    </section>
  )
}
