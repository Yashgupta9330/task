import Navbar from '@/component/Navbar'
import Footer from '@/component/footer'
import { Button } from '@/components/ui/button'
import React from 'react'
const page = () => {
  return (
    <div className='w-full flex flex-col'>
    <div className="flex w-full h-[496px]  relative">
    <Navbar/>
     <div className='absolute w-[650px] h-60 top-52 left-28 flex flex-col gap-14  lg:top-32 lg:left-16'>
      <div className='w-full h-36  text-[56px] font-semibold leading-16 text-[#0D0E10] text-left'>Smart tools to Launch and Scale your ideas</div>
      <div className='flex justify-center items-center w-48 h-14 cursor-pointer'>
      <Button className='w-full h-full bg-[#285B52] font-semibold text-xl text-[#FFFFFF]'>Get Started</Button>
      </div>
     </div>
    </div>
    <div className="flex justify-center items-center w-full h-[620px] mb-4">
      <div className='flex justify-center items-center w-[95%] h-full border rounded bg-[#EEEBEA] text-center'>
        <div className="text-center font-semibold text-[40px] leading-[48px] text-[#0D0E10]"> INSERT DEMO VIDEO</div>
      </div>
     </div>
     <Footer/>
    </div>
  )
}

export default page