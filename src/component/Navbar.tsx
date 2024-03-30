import Image from 'next/image'
import React from 'react'
import logo from './logo.png'
import { Button } from '@/components/ui/button'
const Navbar = () => {
  return (
        <div className='w-full bg-[#FFFFFF] h-20 border border-1 flex justify-center items-center'>
        <div className='flex justify-between  w-[95%]'>
         <div className="flex  justify-center items-center gap-2 lg:gap-1 cursor-pointer">
         <div className="w-6 h-6 bg-[#285B52]"></div>
         <div className='font-montserrat text-2xl  lg:text-3xl 2xl:text-3xl  font-semibold leading-6 text-left text-[#285B52]'>
           Diligent Insights  -  Startup Hub
         </div>
         </div>
     
        
       
         <div className="flex  w-[455px]  lg:w-[400px] h-12  items-center justify-between  pr-10 pl-10 lg:pr-6 lg:pl-6">
             <div className="flex justify-between gap-8">
               <div className='cursor-pointer'>Home</div>
               <div className='cursor-pointer'>Pricing</div>
             </div>
             <div className='h-full flex justify-center items-center px-2 py-6 text-[#0D0E10] font-semibold text-4  leading-6 cursor-pointer'>Sign-up</div>
             <div className='h-full flex justify-center items-center w-24 cursor-pointer'><Button className='w-full h-full bg-[#285B52]'>Login</Button></div>
         </div>
        </div>
    </div>
  )
}

export default Navbar