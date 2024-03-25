import React from 'react'
import Image from 'next/image'
import image1 from '../assets/image1.svg'
import '../app/globals.css'
import { FaArrowRight } from "react-icons/fa";
const Card2 = () => {
  return (
    <div className='flex flex-col gap-7 h-auto w-[90%] sm:w-[41%]'>
      <div className="w-full h-fit ">
        <Image src={image1} alt="image" className=' w-[558px] h-[267.41px] xlarge:w-[918px] xlarge:h-[680px] ' />
      </div>
      <div className="flex flex-col gap-8 w-full h-1/3">
        <div className='font-semibold text-4xl leading-6 text-gray-800 xlarge:text-[4rem] w-full'>Investor Solutions</div>
        <div className=' text-base font-normal leading-7 w-full h-[47%] xlarge:text-[40px] xlarge:leading-[3.25rem] text-[#2A2B2C] text-left'>
          Create status updates faster, with AI pulling from real-time work data to identify risks, open questions, and roadblocks standing in the way of hitting goals.
        </div>
        <div>

          <div className='flex-end'>
            <div className="flex justify-center items-center w-32 h-8 gap-1.5 pointer rounded xlarge:w-[16rem] xlarge:h-[4rem]  text-[#FFFFFF] bg-[#7F39EB] pointer">
              <div className='inner xlarge:text-2xl '>Learn More</div>
              <FaArrowRight className='arrow' />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Card2
