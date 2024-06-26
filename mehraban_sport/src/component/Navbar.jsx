import React, { useContext, useState } from 'react'
import mehrabanlogo from "../assets/Mehrabansport-Logo1.png"
import { IoIosArrowDown  } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { MdOutlineShoppingBag } from "react-icons/md";
import productContext from './context/product';
import { GoX } from "react-icons/go";

const Navbar = () => {
 const [dropdown, setDropDown] = useState(true)
//  const [serachBar, setSearchBar] = useState(false)
 const {searchBar, setSearchBar} = useContext(productContext)
 
 const searchHandler =()=> {
  setSearchBar(!searchBar)
  
 }

 const handleDropDownCategories =()=> setDropDown(!dropdown);

  return (
    <section name="Navbar" className='w-full h-full font-iranyekan  grid grid-row-2 absolute top-0 z-10  '>
   
      {/* ---- upper nav ------ */}
      <div className='w-full max-h-[80px] flex md:justify-between justify-around items-center px-2'>

     {/* ---- authentication ------ */}

        <div className='sm:flex flex-row-reverse items-center mr-10 md:mr-0 hidden'>
        <div className='flex items-center bg-[#6d6d6d69] px-4 py-2 rounded-lg'>
          <p className='text-md text-[#ffff] mx-1 md:flex hidden'>ورود / ثبت نام</p>
          <GoPerson className='text-white text-2xl ' />
        </div>
        <div className='flex items-center mx-2 bg-[#ef6f146f] px-4 py-2 rounded-xl'>
          <p className='md:flex flex-row-reverse items-center hidden ' ><span className='mx-1 mt-1'>0</span>تومان </p>
        <MdOutlineShoppingBag className='text-white text-2xl ' />
        </div>
        </div>

    {/* ---- search bar ------ */}

        <div className='sm:flex hidden items-center bg-[#ef6f146f]  rounded-full w-[40%] h-[65%] z-20  mx-20 md:mx-0'>
           <FiSearch className='text-[#fff] text-3xl mx-6 hidden md:flex' />
           <div className='flex flex-col items-center mt-[342px]' >
            <div onClick={handleDropDownCategories} className='bg-[#ef6f14c2]  text-white md:mx-0 mx-4 px-4 py-2 flex flex-row-reverse items-center rounded-full z-20 hover:cursor-pointer'>
                <p className='px-2 lg:flex hidden'>انتخاب دسته بندی</p>
                <IoIosArrowDown className='mt-1' />
               </div>
               <ul className={`${dropdown ? 'text-end -z-20 w-[160px] opacity-0 -trnslate-y-[100%] transition-all duration-300': 'text-end w-[160px]   text-white backdrop-blur-sm bg-[#b0b0b02c] border-2  border-[#ca6d04] rounded transition-all duration-300'
               }`}>
                  <li >اورال</li>
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
        
          <img className='w-[120px] sm:flex hidden' src={mehrabanlogo} alt="" />
        

   {/* ------ Mobile view ------- */}
        
          
          <div onClick={searchHandler} className='sm:hidden w-[90%] h-[55px] top-2 fixed z-50 flex items-center bg-[#edededd2] rounded-xl justify-end px-4'>
           <p className='mx-2 text-3xl font-jalayarBold text-[#ef6f14c2] '> مهرآبان اسپرت</p>
           <p className='text-[#6e6e6e]'>جستجو در</p>
           <FiSearch className='text-2xl  text-[#6e6e6e]'/>
           </div>
          
      
      

      {/* search bar in mobile view */}

       <div className={`${searchBar ? 'sm:hidden w-full h-full bg-white z-50 fixed  bottom-0 opacity-100 translate-x-[0%] transition-all duration-300': ' bg-white w-full h-screen absolute  -translate-x-[100%]  opacity-0 transition-all duration-300'}`}>
       <GoX onClick={searchHandler} className='text-3xl absolute top-5 right-8' />
       </div>
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