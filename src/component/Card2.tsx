import React from 'react'
import Image from 'next/image'
import image1 from '../assets/image1.png'
import '../app/globals.css'
import { FaArrowRight } from "react-icons/fa";
const Card2= () => {
  return (
    <div className='flex flex-col gap-7 h-auto w-[90%] sm:w-[41%]'>
    <div className="w-full h-3/5">
      <Image src={image1} alt="image"/>
    </div>
    <div className="flex flex-col gap-8 w-full h-1/3">
      <div className='font-semibold text-4xl leading-6 text-gray-800 w-full'>Investor Solutions</div>
        <div className=' text-base font-normal leading-7 w-full h-[47%] text-[#2A2B2C] text-left'>
        Create status updates faster, with AI pulling from real-time work data to identify risks, open questions, and roadblocks standing in the way of hitting goals.
         </div>
         <div>
  
  <div className='flex-end'>
    <div className="flex justify-center items-center w-32 h-8 gap-1.5 pointer rounded text-[#FFFFFF] bg-[#7F39EB]">
      <div className='inner'>Learn More</div>
      <FaArrowRight className='arrow'/>
    </div>
  </div>
</div>

      </div>
    </div>
  )
}

export default Card2
