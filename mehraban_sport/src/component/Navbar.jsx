import React from 'react'
import mehrabanlogo from "../assets/Mehrabansport-Logo1.png"

const Navbar = () => {
  return (
    <section name="Navbar" className='w-full h-[80px]  grid grid-row-2 absolute top-0 z-10'>


      {/* ---- upper nav ------ */}
      <div className='w-full max-h-80px flex justify-between items-center px-2'>
        {/* ---- authentication ------ */}
        <div className='-mt-10'>
          <p className='text-xl text-black'>ورود / ثبت نام</p>
        </div>
        {/* ---- search bar ------ */}
        <div className='flex -mt-10'>
          <input type="text" className='bg-transparent text-white'  />
          <div className='flex'>
           <div className='bg-orange-500 text-white px-4 py-2'>
           <p>انتخاب دسته بندی</p>
          <ul className='hidden'>
            <li>اورال</li>
            <li>پیشنهاد ویژه</li>
            <li>تخفیفی ها</li>
            <li>تیشرت ورزشی زنانه</li>
            <li>جوراب ورزشی</li>
            <li>کلاه ورزشی</li>
            <li>کراپ ورزشی</li>
            <li> لگ ورزشی زنانه</li>
            <li>نیم تنه ورزشی</li>
            <li>هدبند</li>
          </ul>
           </div>
          </div>
        </div>
        {/* ---- logo image ------ */}
        
          <img className='w-[120px]' src={mehrabanlogo} alt="" />
        
      </div>


      {/* ---- downer nav ------ */}
      <div>
        {/* ---- dropdown menu ------ */}
        <div></div>
        {/* ---- categories ------ */}
        <div></div>
      </div>
    </section>
  )
}

export default Navbar