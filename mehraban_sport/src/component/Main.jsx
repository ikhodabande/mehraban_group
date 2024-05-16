import React from 'react'

const Main = () => {
  return (
    <section name="Main" className='w-full h-screen  flex flex-col items-center justify-end'>

      <div className='w-[95%] h-[100px] rounded-xl bg-black'></div>
         {/* offers */}
         <div className='w-full h-[40%] bg-[#ffffff3d] font-iranyekanBold grid grid-cols-4 gap-4 px-10 my-10'>
           <div className='bg-black relative rounded-xl'>
            <p className='text-2xl absolute bottom-8 right-8 text-end text-[#adadad]'>بهترین‌های<br />کراپ</p>
           </div>
           <div className='bg-black relative rounded-md'>
            <p className='text-2xl absolute bottom-8 right-8 text-end text-[#adadad]'>بهترین‌های<br />کراپ</p>
           </div>
           <div className='bg-black relative rounded-md'>
            <p className='text-2xl absolute bottom-8 right-8 text-end text-[#adadad]'>بهترین‌های<br />کراپ</p>
           </div>
           <div className='bg-black relative rounded-md'>
            <p className='text-2xl absolute bottom-8 right-8 text-end text-[#adadad]'>بهترین‌های<br />کراپ</p>
           </div>
         </div>
         
    </section>
  )
}

export default Main