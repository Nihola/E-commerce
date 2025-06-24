import React from 'react'

const WhereDelivery = () => {
  return (
    <section className='bg-[#FAF7EC]'>
        <h2>Where</h2>
        <div>
            <label>Topshiriladigan hudud</label>
            <select>
                <option>Yunusobod</option>
                <option>Sergeli</option>
                <option>Chilonzor</option>
                <option>Yashnobod</option>
                <option>Mirzo Ulug'bek</option>
                <option>Shayxontohur</option>
                <option>Mirobod</option>
            </select>
            <label></label>
            <input type="text" placeholder="Ko'chani kiriting"/>
            <label></label>
            <input type="number" placeholder='Uy'/>
            <label></label>
            <input type="number" placeholder='Kvartira'/>
            <label></label>
            <input type="number" placeholder="Qo'shimcha"/>
        </div>
    </section>
  )
}

export default WhereDelivery