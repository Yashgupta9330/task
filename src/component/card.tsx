import React from 'react'
import Image from 'next/image'
import image1 from '../assets/image1.png'
import '../app/globals.css'
import { FaArrowRight } from "react-icons/fa";
const Card = () => {
  return (
    <div className='container'>
    <div className="image-container">
      <Image src={image1} alt="image" width={558} height={370}/>
    </div>
    <div className="content-container">
      <div className='heading'>Start-up Support</div>
      <div className='w-[558px] h-[120px] overflow-hidden text-2xl'>
        <div className='text-2xl text-container'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Nemo, labore. Quo vero eaque impedit aperiam aliquam cupiditate eius ipsa. 
         Laborum voluptatibus, exercitationem aperiam quis minima maiores vel consequuntur architecto. 
         Necessitatibus.
         </div>
      </div>
      <div className='button'>
        <div className="button1">
          <div className='inner'>Learn More</div>
          <div>
          <FaArrowRight className='arrow'/>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Card