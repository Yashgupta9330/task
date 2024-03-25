import React from 'react'
import Image from 'next/image'
import image2 from '../assets/image2.svg'
import '../app/globals.css'
import { FaArrowRight } from "react-icons/fa";
const Card = () => {
  return (
    <div className='flex flex-col gap-7 w-[90%] sm:w-2/5 h-auto'>
      <div className="w-full h-fit">
        <Image src={image2} alt="image" className=' w-[558px] h-[267.41px] xlarge:w-[918px] xlarge:h-[680px]  ' />
      </div>
      <div className="flex flex-col gap-8 w-full h-1/3 relative">
        <div className='font-semibold text-4xl xlarge:text-[4rem] leading-6 text-gray-800 w-full'>Start-up Support</div>
        <div className='w-full text-base xlarge:text-[40px] xlarge:leading-[3.25rem] font-normal leading-7 h-[47%] text-[#2A2B2C] text-left '>
          Launch and scale start-up ideas faster, with AI pulling real-time  data to identify risks, technical research and insights, along with the building blocks to a marketing, development and business plan to support you.
        </div>
        <div className=''>
          <div className="flex justify-center items-center xlarge:w-[16rem] xlarge:h-[4rem] w-32 h-8 gap-1.5 pointer rounded text-[#FFFFFF] bg-[#285B52] pointer">
            <div className='inner xlarge:text-2xl '>Learn More</div>
            <FaArrowRight className='arrow' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
