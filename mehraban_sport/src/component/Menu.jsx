import React, { useContext, useState } from 'react'
import { BiHomeAlt2, BiSolidHomeAlt2, BiSolidCategoryAlt, BiCategoryAlt, BiSolidShoppingBag, BiShoppingBag     } from "react-icons/bi";
import { GoPerson, GoPersonFill  } from "react-icons/go";
import productContext from './context/product';




const Menu = () => {
 const {searchBar,setSearchBar} = useContext(productContext);
 const[homeIcon, setHomeIcon] = useState(false)
 const[categoriesIcon, setCategoriesIcon] = useState(false)
 const[shopIcon, setShopIcon] = useState(false)
 const[loginIcon, setLoginIcon] = useState(false)
 
 const homeIconHandler =()=> {
  if(shopIcon === true){
    shopIconHandler();
  }if (categoriesIcon === true) {
    categoriesIconHandler();
  }if(loginIcon === true) {
    loginIconHandler();
  }
  setHomeIcon(!homeIcon);
};

 const categoriesIconHandler =()=> {
  if(homeIcon === true){
    homeIconHandler();
  }if (shopIcon === true) {
    shopIconHandler();
  }if(loginIcon === true) {
    loginIconHandler();
  }
  setCategoriesIcon(!categoriesIcon);
};

const shopIconHandler =()=> {
  if(homeIcon === true){
    homeIconHandler();
  }if (categoriesIcon === true) {
    categoriesIconHandler();
  }if(loginIcon === true) {
    loginIconHandler();
  }
  setShopIcon(!shopIcon);
};

const loginIconHandler =()=> {
  if(homeIcon === true){
    homeIconHandler();
  }if (categoriesIcon === true) {
    categoriesIconHandler();
  }if(shopIcon === true) {
    shopIconHandler();
  }
  setLoginIcon(!loginIcon);
};

  return (
    <section name="Menu" className={`${searchBar ? ' translate-y-[50%] opacity-0 transition-all 200ms ease-in-out': 'w-full h-[55px] fixed bottom-0 sm:hidden z-10 grid grid-cols-4 items-center bg-[#d3d3d33b]'}`}>
         <div onClick={loginIconHandler} className='flex flex-col items-center'>{ loginIcon ? 
         <div className='w-full h-full flex flex-col items-center'>
         <GoPersonFill className='text-3xl mx-auto hover:cursor-pointer' />
         <p className='font-iranyekanBold text-[#000000]'>مهرآبان من</p>
         </div> 
         : 
         <div className='w-full h-full flex flex-col items-center'>
         <GoPerson className='text-3xl text-[#3b3b3b] mx-auto hover:cursor-pointer' />
         <p className='font-iranyekanBold text-[#3b3b3b]'>مهرآبان من</p>
         </div>}
         
         </div>
        <div onClick={shopIconHandler} className='flex flex-col items-center'>{ shopIcon ? 
        <div className='w-full h-full flex flex-col items-center'>
        <BiSolidShoppingBag className='text-3xl mx-auto hover:cursor-pointer' /> 
        <p className='font-iranyekanBold text-[#000000]'>سبد خرید</p>
        </div>
        : 
        <div className='w-full h-full flex flex-col items-center'>
        <BiShoppingBag className='text-3xl text-[#3b3b3b] mx-auto hover:cursor-pointer' />
        <p className='font-iranyekanBold text-[#3b3b3b]'>سبد خرید</p>
        </div>}
        
        </div>
        <div onClick={categoriesIconHandler} className='flex flex-col items-center'>{ categoriesIcon ?
        <div className='w-full h-full flex flex-col items-center'>
        <BiSolidCategoryAlt className='text-3xl mx-auto hover:cursor-pointer' /> 
        <p className='font-iranyekanBold text-[#000000]'>دسته‌بندی</p>
        </div>
        : 
        <div className='w-full h-full flex flex-col items-center'>
        <BiCategoryAlt className='text-3xl text-[#3b3b3b] mx-auto hover:cursor-pointer ' />
        <p className='font-iranyekanBold text-[#3b3b3b]'>دسته‌بندی</p>
        </div>}
        </div>
       <div onClick={homeIconHandler} >{
        homeIcon ?
        <div className='w-full h-full flex flex-col items-center'>
        <BiSolidHomeAlt2 className='text-3xl mx-auto' /> 
        <p className='font-iranyekanBold text-[#000000]'>خانه</p>
       </div>
        :
        <div className='w-full h-full flex flex-col items-center'>
          <BiHomeAlt2 className='text-3xl text-[#3b3b3b] mx-auto'/> 
          <p className='font-iranyekanBold text-[#3b3b3b]'>خانه</p>
       </div>
        }
       
       </div>
    </section>
  )
}

export default Menu