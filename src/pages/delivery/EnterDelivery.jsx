import React from 'react'
import { useEffect } from 'react'

const FloatingInput = ({ label, name, register, type = "text", width = "w-[180px]" }) => {
  return (
    <div className={`relative ${width} m-2`}>
      <input
        type={type}
        {...register(name)}
        className="peer block px-2.5 pb-2.5 pt-6 w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600"
        placeholder=" "
      />
      <label
        className={`absolute text-sm text-gray-500 duration-200 transform scale-100 top-1 left-2.5 z-10 origin-[0] 
          peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100
          peer-focus:scale-75 peer-focus:-translate-y-1
        `}
      >
        {label}
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
      <h2 className='text-2xl font-bold pb-4'>O'zingiz haqingizda</h2>
      <div className='flex justify-around gap-4 items-center flex-wrap'>

        <FloatingInput
          label="Ismingiz"
          name="name"
          register={register}
          width="w-[200px]"
        />

        <div className="relative w-[200px] m-2">
          <div className="absolute left-2 top-[22px] text-gray-700 z-10">+998</div>
          <input
            type="text"
            {...register("phone", { required: "Telefon raqam kerak" })}
            className="peer pl-12 pt-6 pb-2.5 cursor-pointer pr-2 w-[180px] text-sm text-gray-900 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600"
            placeholder=" "
          />
          <label
            className={`absolute text-sm text-gray-500 duration-200 transform scale-100 top-2.5 left-12 z-10 origin-[0]
              ${phone ? "-translate-y-1 scale-75 text-purple-700 " : "peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100"}
              peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-purple-700
            `}
          >
            Telefon raqamingiz
          </label>
        </div>

      </div>
    </section>
  )
}

export default EnterDelivery
