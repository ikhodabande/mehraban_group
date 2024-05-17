import React from 'react'

const Main = () => {
  return (
    <section name="Main" className='w-full h-screen  flex flex-col items-center justify-end -mt-[50px]'>

      <div className='w-[95%] h-[100px] rounded-xl bg-[#6b6b6bc0]'></div>
         {/* offers */}
         <div className='w-full h-[40%] bg-[#ffffff3d] font-iranyekanBold grid md:grid-cols-4 grid-cols-1 gap-4 px-10 my-5'>
           <div className='bg-[#6b6b6bc0] min-h-[200px] relative rounded-xl'>
            <p className='text-2xl absolute bottom-8 right-8 text-end text-[#adadad]'>بهترین‌های<br />کراپ</p>
           </div>
           <div className='bg-[#6b6b6bc0] relative rounded-md'>
            <p className='text-2xl absolute bottom-8 right-8 text-end text-[#adadad]'>بهترین‌های<br />کراپ</p>
           </div>
           <div className='bg-[#6b6b6bc0] relative rounded-md'>
            <p className='text-2xl absolute bottom-8 right-8 text-end text-[#adadad]'>بهترین‌های<br />کراپ</p>
           </div>
           <div className='bg-[#6b6b6bc0] relative rounded-md'>
            <p className='text-2xl absolute bottom-8 right-8 text-end text-[#adadad]'>بهترین‌های<br />کراپ</p>
           </div>
         </div>
         
    </section>
  )
}

export default Main