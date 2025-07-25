import React from 'react'
import { FaHome } from "react-icons/fa";

const FloatingInput = ({ label, name, register, type = "text", width = "w-[100px]" }) => {
  return (
    <div className={`relative ${width} mx-4 my-2`}>
      <input
        type={type}
        {...register(name)}
        className="peer cursor-pointer block px-2.5 pb-2.5 pt-6 w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600" placeholder=" "/><label
        className={`absolute text-sm font-bold text-center py-1 text-gray-500 duration-400 transform scale-100 top-0 left-2.5 z-10 origin-[0] peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-1`}>{label}
      </label>
    </div>
  )
}

const WhereDelivery = ({ register }) => {
  return (
    <section className='max-w-[500px]'>
      <h2 className='text-xl text-gray-700 font-bold pb-6 ml-4'>Qayerdan</h2>
      <div className='flex flex-wrap justify-center items-center'>
        <span className='w-full text-center flex ml-5 gap-4 items-center'>
          <label className='text-gray-700 font-bold text-[40px] '><FaHome /></label>
          <select {...register("district")} className='border bg-white rounded-md p-2 border-gray-400 outline-none cursor-pointer w-[250px] md:w-[300px]'>
            <option>Hudud tanlang</option>
            <option value="Yunusobod">Yunusobod</option>
            <option value="Sergeli">Sergeli</option>
            <option value="Chilonzor">Chilonzor</option>
            <option value="Yashnobod">Yashnobod</option>
            <option value="Mirzo Ulug'bek">Mirzo Ulug'bek</option>
            <option value="Shayxontohur">Shayxontohur</option>
            <option value="Mirobod">Mirobod</option>
          </select>
        </span>

        <FloatingInput label="Ko'cha" name="street" register={register} width='w-[120px]' />
        <FloatingInput label="Uy" name="home" register={register} type="number" width="w-[120px]" />
        <FloatingInput label="Kvartira" name="apartment" register={register} type="number" width="w-[120px]" />
        <span className='border border-gray-400 w-[320px] md:w-[420px] rounded-md px-2 bg-[white] my-2'>
          <label className='block py-1 text-gray-700 font-semibold text-[14px]'>Yetkazib beruvchiga qo'shimcha ma'lumot</label>
          <textarea rows={1} className='outline-none w-full text-gray-700' {...register("additional")}></textarea>
        </span>
      </div>
    </section>
  )
}

export default WhereDelivery
