import React from 'react'
import Image from 'next/image'
import image2 from '../assets/image2.png'
import '../app/globals.css'
import { FaArrowRight } from "react-icons/fa";
const Card = () => {
  return (
    <div className='container'>
    <div className="image-container w-full h-[370px]">
      <Image src={image2} alt="image" width={558} height={370}/>
    </div>
    <div className="content-container w-full h-[217px]">
      <div className='heading w-full'>Start-up Support</div>
        <div className='text-container'>
        Launch and scale start-up ideas faster, with AI pulling real-time  data to identify risks, technical research and insights, along with the building blocks to a marketing, development and business plan to support you.
         </div>
      <div className='button'>
        <div className="button1 one">
          <div className='inner'>Learn More</div>
          <FaArrowRight className='arrow'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card