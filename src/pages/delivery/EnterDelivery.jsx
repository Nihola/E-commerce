import React from 'react'
import { useEffect } from 'react'

const FloatingInput = ({ label, name, register, type = "text", width = "w-[180px]" }) => {
  return (
    <div className={`relative ${width} m-2`}>
      <input
        type={type}
        {...register(name)}
        className="peer block px-2.5 pb-2.5 ml-1 cursor-pointer pt-5 w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600"
        placeholder=" "
      />
      <label
        className={`absolute text-sm text-gray-500 duration-200 transform scale-100 top-1 left-3 z-10 origin-[0] 
          peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100
          peer-focus:scale-75 peer-focus:-translate-y-1
        `}> {label}
      </label>
    </div>
  )
}

const EnterDelivery = ({ register, setValue, watch }) => {
  const phone = watch("phone") || ""

  useEffect(() => {
    const cleaned = phone.replace(/\D/g, "").slice(0, 9)
    if (phone !== cleaned) {
      setValue("phone", cleaned)
    }
  }, [phone, setValue])

  return (
    <section className=' w-[450px]'>
      <h2 className='text-xl text-gray-700 font-bold pb-4 ml-4'>O'zingiz haqingizda</h2>
      <div className='flex justify-around gap-4 items-center flex-wrap'>

        <FloatingInput label="Ismingiz" name="name" register={register} width="w-[200px]"/>

        <div className="relative w-[200px] m-2">
          <div className="">
            <p className='absolute top-[14px] text-gray-700 ml-2'>+998 | </p>
            <input type="text" {...register("phone", { required: "Telefon raqam kerak" })} className="peer py-4 pl-13 cursor-pointer pr-2 w-[180px] text-sm text-gray-900 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600"/>
          </div>
          <label className={`absolute text-sm text-gray-400 duration-200 transform scale-100 top-[16px] left-13 z-10 origin-[0] ${phone ? "-translate-y-4 scale-15 text-purple-700 " : "peer-placeholder-shown:translate-y-5 peer-placeholder-shown:scale-80"} peer-focus:scale-15 peer-focus:-translate-y-4 peer-focus:text-purple-700`}>Telefon raqamingiz</label>
        </div>

      </div>
    </section>
  )
}

export default EnterDelivery
