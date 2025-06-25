import React from 'react'
import { useForm } from 'react-hook-form'
import WhereDelivery from './WhereDelivery'
import EnterDelivery from './EnterDelivery'
import SumDelivery from './SumDelivery'
import WhenDelivery from './WhenDelivery'

export default function Delivery() {
  const { register, handleSubmit, reset } = useForm()
  const sendMessage = async (data) => {
    const message = `
    🛒 <b>Yangi buyurtma</b>:
    📍 <b>Hudud:</b> ${data.district}
    🏘 <b>Ko'cha:</b> ${data.street}, Uy: ${data.home}, Kvartira: ${data.apartment}
    📝 <b>Qo'shimcha:</b> ${data.additional || 'yo‘q'}
    📅 <b>Sana:</b> ${data.date}
    ⏰ <b>Vaqt:</b> ${data.times}
    📞 <b>Tel:</b> ${data.phone}
    👤 <b>Ism:</b> ${data.name}
    `
    const TOKEN = '8171242828:AAGekrDGyZJMZdghTIZurMr78LZpCBTQZiQ'
    const CHAT_ID = '1456386212'
    const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`
    
    try {
      await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        })
      })
      alert('Buyurtma yuborildi ✅')
      reset()
    } catch (error) {
      alert('Xatolik yuz berdi!')
      console.error(error)
    }
  }

  return (
    <section className='bg-[#f2eddc] p-6'>
      <form onSubmit={handleSubmit(sendMessage)} className='max-w-[1000px] p-4 mx-auto flex justify-between gap-12 items-start'>
        <div className='flex flex-col gap-8 w-[600px]'>
          <WhereDelivery register={register} />
          <WhenDelivery register={register} />
          <EnterDelivery register={register} />
        </div>
        <div>
          <SumDelivery />
        </div>
      </form>
    </section>
  )
}
