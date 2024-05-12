import React from 'react'
import mehrabanlogo from "../assets/Mehrabansport-Logo1.png"
import { IoIosArrowDown  } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
  return (
    <section name="Navbar" className='w-full h-[80px] font-iranyekan  grid grid-row-2 absolute top-0 z-10 '>


      {/* ---- upper nav ------ */}
      <div className='w-full max-h-80px flex justify-between items-center px-2'>
        {/* ---- authentication ------ */}
        <div className='flex flex-row-reverse items-center'>
        <div className='flex items-center bg-[#6d6d6d69] px-4 py-2 rounded-lg'>
          <p className='text-md text-[#ffff] mx-1'>ورود / ثبت نام</p>
          <GoPerson className='text-white text-2xl ' />
        </div>
        <div className='flex items-center mx-2 bg-[#ef6f146f] px-4 py-2 rounded-xl'>
          <p className='flex flex-row-reverse items-center' ><span className='mx-1 mt-1'>0</span>تومان </p>
        <MdOutlineShoppingBag className='text-white text-2xl ' />
        </div>
        </div>
        {/* ---- search bar ------ */}
        <div className='flex items-center bg-[#ef6f146f]  rounded-full w-[40%] h-[45%]'>
          

           <FiSearch className='text-[#fff] text-3xl mx-6' />

              <div className='bg-[#ef6f14c2]  text-white px-4 py-2 flex flex-row-reverse items-center rounded-full hover:cursor-pointer'>
                <p className='px-2'>انتخاب دسته بندی</p>
                <IoIosArrowDown className='mt-1' />
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
               <input type="text" className='flex-1 mx-1 h-[90%] rounded-r-full outline-none border-none text-[#000] text-right px-4 placeholder:text-black' placeholder='.... جستجوی محصولات ' />
           
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