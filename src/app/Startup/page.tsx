import Navbar from '@/component/Navbar'
import { Button } from '@/components/ui/button'
import React from 'react'
//import banner1 from '../../assets/banner1.mp4';
const page = () => {
  return (
    <div className='w-full flex flex-col'>
    <div className="flex w-full h-[496px]  relative">
    <Navbar/>
     <div className='absolute w-[650px] h-60 top-52 left-28 flex flex-col gap-14  lg:top-40 lg:left-16'>
      <div className='w-full h-36  text-[56px] font-semibold leading-16 text-[#0D0E10] text-left'>Smart tools to Launch and Scale your ideas</div>
      <div className='flex justify-center items-center w-48 h-14 cursor-pointer'>
      <Button className='w-full h-full bg-[#285B52] font-semibold text-xl text-[#FFFFFF]'>Get Started</Button>
      </div>
     </div>
    </div>
    <div className="flex justify-center items-center w-full h-[609px] mb-4">
      <div className='w-[95%] h-full border rounded'>
      <video
            muted
            loop
            autoPlay
          >
          <source src='' type="video/mp4" />
          Your browser does not support the video tag.
      </video>
      </div>
    </div>
    </div>
  )
}

export default page