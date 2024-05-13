import React from 'react'
import background from '../assets/homebg.mp4' 
import Slides from './Slides'
import img1 from '../assets/slides/adult-training-body-building (1).jpg'
import img2 from '../assets/slides/adult-training-body-building (2).jpg'
import img3 from '../assets/slides/adult-training-body-building (3).jpg'

const slides = [
  img1,
  img2,
  img3
]


const Home = () => {
  return (
    <>
    <section name="Home" className='w-full md:h-screen h-full -z-0'>
    {/* <main className=' absolute top-[55%] -translate-y-[50%] left-[4%] z-10'>
            <div className='max-w-[50%]'>
              <Slides  autoSlide={false} autoSlideInterval={1000}>
              {
                slides.map((s)=>(
                 <img className='rounded-3xl p-2' src={s} />
                ))
              }
              </Slides>
        
            </div>
          </main> 
         */}
     
    <div className='md:w-full md:h-full w-[620px] h-[1050px] absolute top-0 -z-1'>
      <div className='w-full h-full absolute bg-[#0000001c]'></div>
      <video src={background} autoPlay loop muted className='w-full h-full object-cover' />
    </div>
    </section>
    </>
  )
}

export default Home