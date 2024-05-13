import React from 'react'
import background from '../assets/homebg.mp4' 




const Home = () => {
  return (
    <>
    <section name="Home" className='w-full h-screen  -z-0'>
    <div className='w-full h-full  absolute top-0 -z-1'>
      <div className='w-full h-full absolute bg-[#0000001c]'></div>
      <video src={background} autoPlay loop muted className='w-full h-full object-cover' />
    </div>
    </section>
    </>
  )
}

export default Home