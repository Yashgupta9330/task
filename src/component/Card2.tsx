import React from 'react'
import Image from 'next/image'
import image1 from '../assets/image1.png'
import '../app/globals.css'
import { FaArrowRight } from "react-icons/fa";
const Card2 = () => {
  return (
    <div className='container'>
    <div className="image-container w-full h-[370px]">
      <Image src={image1} alt="image" width={558} height={370}/>
    </div>
    <div className="content-container w-full h-[217px]">
      <div className='heading w-full'>Investor Solutions</div>
        <div className='text-container'>
        Create status updates faster, with AI pulling from real-time work data to identify risks, open questions,
         and roadblocks standing in the way of hitting goals.
         </div>
      <div className='button'>
        <div className="button1 two">
          <div className='inner'>Learn More</div>
          <FaArrowRight className='arrow'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card2