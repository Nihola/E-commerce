import React from 'react'

const WhereDelivery = () => {
  return (
    <section className='border '>
        <h2 className='text-2xl font-bold pb-6 ml-4'>Where</h2>
        <div className='flex flex-wrap gap-8 justify-around items-center'>
           <span>
               <label className='text-gray-700 block mb-1'>Topshiriladigan hudud:</label>
               <select className='border rounded-md w-[200px] py-1 outline-none cursor-pointer'>
                <option className=''>Hudud tanlang</option>
                <option className='text-black'>Yunusobod</option>
                <option>Sergeli</option>
                <option>Chilonzor</option>
                <option>Yashnobod</option>
                <option>Mirzo Ulug'bek</option>
                <option>Shayxontohur</option>
                <option>Mirobod</option>
               </select>
           </span>
            <span>
              <label className='text-gray-700 block my-1'>Ko'cha:</label>
              <input className='border-2 border-gray-600 outline-none rounded-md py-1 px-2 focus:bg-blue-50 focus:border-gray-500' type="text" placeholder="Ko'chani kiriting"/>
            </span>
            <span>
              <label className='text-gray-700 block my-1'>Uy:</label>
              <input className='border-2 border-gray-600 outline-none rounded-md py-1 px-2 focus:bg-blue-50 focus:border-gray-500' type="number" placeholder='Uy'/>
            </span>
            <span>
              <label className='text-gray-700 block my-1'>Kvartira:</label>
              <input className='border-2 border-gray-600 outline-none rounded-md py-1 px-2 focus:bg-blue-50 focus:border-gray-500' type="number" placeholder='Kvartira'/>
            </span>
            <span>
              <label className='text-gray-700 block my-1'>Qo'shimcha:</label>
              <input className='border-2 border-gray-600 outline-none rounded-md py-1 px-2 focus:bg-blue-50 focus:border-gray-500' type="text" placeholder="Qo'shimcha"/>
            </span>
        </div>
    </section>
  )
}

export default WhereDelivery