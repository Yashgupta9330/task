import React from 'react'
import { Input } from "@/components/ui/input"
import InputButton from './InputButton'

const Footer = () => {
  return (
    <div className='w-full h-[345px] bg-[#0D0E10] relative'>
      <div className="w-[309px] h-[114px] absolute top-[67px] left-[114px] ">
        <div className="flex flex-col gap-[24px]">
        <div className="w-full font-montserrat text-[36px] font-[600] leading-[24px] text-left text-[#FFFFFF]">Diligent Insights</div>
        <div className="flex flex-col gap-[16px] w-[288px] h-[94px]">
         <div className="w-full font-montserrat text-[16px] font-[400] leading-[24px] text-left text-[#FFFFFF]">Subscribe for Updates</div>
         <div className="w-[288px] h-[54px] p-[12px] gap-[10px] border-[1px] rounded-[8px] border-gray-700  opacity-1 flex justify-center items-center">
           <InputButton/>
        </div>
        </div>
       </div>
      </div>
      <div className="absolute w-[105px] h-[24px] top-[228px] left-[114px] font-montserrat text-base font-bold leading-[24px] text-left text-white">Get in touch</div>
      <div className="absolute w-[calc(100%-548px)]  top-[274px] left-[114px] gap-0  border border-t  border-[#555657] opacity-1"></div>
      <div className=' text-[#555657] absolute top-[300px] left-[114px] '>
        <span className='text-[16px] '>Company Registration XXXXXXXXX</span>
        <span className='text-[16px] ml-[34px] '>Linkedin</span>
        <span className='text-[16px] ml-[34px] '>2024 All rights Reserved</span>
      </div>

    </div>
  )
}

export default Footer