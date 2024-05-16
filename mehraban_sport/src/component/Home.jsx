import React from 'react'
import background from '../assets/backgrounds/back.mp4' 
import img1 from '../assets/Products/krops/New-Jordan/jordan1.jpg'




const Home = () => {
  return (
    <>
    <section name="Home" className='w-full h-screen  -z-0'>
    <div className='w-full h-screen  absolute top-0 -z-1 flex justify-center'>
     
      <div className='w-full h-full absolute bg-[#00000036]'></div>
      <video src={background} autoPlay loop muted className='w-full h-full object-cover' /> 
      <div className='w-[95%] h-[60%] text-end pt-20 px-[80px]  absolute  top-[10%]  hidden sm:block'>
        <h1 className=' font-jalayarBold  text-9xl text-[#ef6f14c2] '>مهرآبان اسپرت</h1>
        <p className='px-2 font-iranyekanBold text-3xl text-[#5a5a5af5]'>پوشاک ورزشی بانوهای ورزشکار خوشتیپ</p>
      </div>


      <div className='w-[100%] sm:w-[95%] h-[80%] sm:h-[60%] shadow-xl absolute bg-[#ef6f14c2] top-[50%] sm:top-[70%] rounded-xl sm:grid sm:grid-cols-6 gap-5 flex flex-col-reverse items-center justify-center sm:scale-100 scale-90 '>
      <div className='bg-[#ef6f1400] w-full h-full p-4 flex items-center overflow-x-auto overflow-y-hidden col-span-5 scale-90 sm:scale-100'>
  
    <div className='min-w-[300px] object-cover rounded-sm hover:shadow-md hover:cursor-pointer  h-full mx-2 hover:scale-105 duration-150 img1'><img/></div>
    <div className='min-w-[300px] object-cover rounded-sm hover:shadow-md hover:cursor-pointer  h-full mx-2 hover:scale-105 duration-150 img2'><img/></div>
    <div className='min-w-[300px] object-cover rounded-sm hover:shadow-md hover:cursor-pointer  h-full mx-2 hover:scale-105 duration-150 img3'><img/></div>
    <div className='min-w-[300px] object-cover rounded-sm hover:shadow-md hover:cursor-pointer  h-full mx-2 hover:scale-105 duration-150 img1'><img/></div>
    <div className='min-w-[300px] object-cover rounded-sm hover:shadow-md hover:cursor-pointer  h-full mx-2 hover:scale-105 duration-150 img1'><img/></div>
    <div className='min-w-[300px] object-cover rounded-sm hover:shadow-md hover:cursor-pointer  h-full mx-2 hover:scale-105 duration-150 img1'><img/></div>
    <div className='min-w-[300px] object-cover rounded-sm hover:shadow-md hover:cursor-pointer  h-full mx-2 hover:scale-105 duration-150 img1'><img/></div>
    <div className='min-w-[300px] object-cover rounded-sm hover:shadow-md hover:cursor-pointer  h-full mx-2 hover:scale-105 duration-150 img1'><img/></div>
  </div>
        <div className='sm:w-[95%] sm:h-[95%] h-[20px]  rounded font-iranyekanBold flex-col flex items-center justify-center '> 
           <h2 className='text-4xl sm:flex hidden text-center text-[#ffff]'>پیشنهاد<br /> شگفت <br />انگیز</h2>
           <h2 className='text-xl flex  sm:hidden absolute top-4 right-6 text-[#ffff]'>شگفت‌انگیزهای امروز</h2>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default Home