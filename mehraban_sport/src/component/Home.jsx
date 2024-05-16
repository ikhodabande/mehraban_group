import React from 'react'
import background from '../assets/backgrounds/back.mp4' 
import img1 from '../assets/Products/krops/New-Jordan/jordan1.jpg'




const Home = () => {
  return (
    <>
    <section name="Home" className='w-full h-screen  -z-0'>
    <div className='w-full h-screen  absolute top-0 -z-1 flex justify-center'>
     
      {/* <div className='w-full h-full absolute bg-[#0000001c]'></div> */}
      <video src={background} autoPlay loop muted className='w-full h-full object-cover' /> 
      <div className='w-[95%] h-[60%] text-end pt-20 px-[80px]  absolute  top-[10%] z-50'>
        <h1 className=' font-jalayarBold text-9xl text-[#ef6f14c2] '>مهرآبان اسپرت</h1>
        <p className='px-2 font-iranyekanBold text-3xl text-[#fffffff5]'>پوشاک ورزشی بانوهای ورزشکار خوشتیپ</p>
      </div>
      <div className='w-[95%] h-[60%] shadow-xl absolute bg-[#ef6f14c2] top-[70%] rounded-xl grid grid-cols-6 gap-5 items-center justify-center z-50'>
      <div className='bg-[#ef6f14c2] w-full h-full p-4 flex items-center overflow-x-auto overflow-y-hidden col-span-5'>
  
    <div className='min-w-[300px] object-cover rounded-sm hover:shadow-md hover:cursor-pointer  h-full mx-2 hover:scale-105 duration-150 img1'><img/></div>
    <div className='min-w-[300px] object-cover rounded-sm hover:shadow-md hover:cursor-pointer  h-full mx-2 hover:scale-105 duration-150 img2'><img/></div>
    <div className='min-w-[300px] object-cover rounded-sm hover:shadow-md hover:cursor-pointer  h-full mx-2 hover:scale-105 duration-150 img3'><img/></div>
    <div className='min-w-[300px] object-cover rounded-sm hover:shadow-md hover:cursor-pointer  h-full mx-2 hover:scale-105 duration-150 img1'><img/></div>
    <div className='min-w-[300px] object-cover rounded-sm hover:shadow-md hover:cursor-pointer  h-full mx-2 hover:scale-105 duration-150 img1'><img/></div>
    <div className='min-w-[300px] object-cover rounded-sm hover:shadow-md hover:cursor-pointer  h-full mx-2 hover:scale-105 duration-150 img1'><img/></div>
    <div className='min-w-[300px] object-cover rounded-sm hover:shadow-md hover:cursor-pointer  h-full mx-2 hover:scale-105 duration-150 img1'><img/></div>
    <div className='min-w-[300px] object-cover rounded-sm hover:shadow-md hover:cursor-pointer  h-full mx-2 hover:scale-105 duration-150 img1'><img/></div>
  </div>
        <div className='w-[95%] h-[95%]  rounded font-iranyekanBold flex-col flex items-center justify-center '> 
           <h2 className='text-4xl text-center text-[#ffff]'>پیشنهاد<br /> شگفت <br />انگیز</h2>
           
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default Home