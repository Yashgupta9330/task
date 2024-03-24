import React from 'react'
import { Input } from "@/components/ui/input"
import InputButton from './InputButton'

const Footer = () => {
  return (
    <div className='w-full h-[345px] bg-[#0D0E10] relative'>
      <div className="sm:w-[309px] w-full h-[114px] p-[40px] sm:p-0 sm:absolute sm:top-[67px] sm:left-[114px] ">
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
      <div className=" absolute top-[60%] left-[5%]  sm:absolute sm:w-[115px] sm:h-[24px] sm:top-[228px] sm:left-[114px] font-montserrat text-base font-bold leading-[24px] p-[5px] text-left text-white">Get in touch</div>
      <div className="sm:absolute w-[90%] absolute left-[5%] top-[70%] sm:w-[calc(100%-548px)]  sm:top-[274px] sm:left-[114px] gap-0  border border-t  border-[#555657] opacity-1"></div>
      <div className=' text-[#555657] w-[60%] absolute top-[80%] left-[5%] sm:absolute sm:top-[300px] sm:left-[114px] '>
        <span className=' text-[12px] sm:text-[16px] w-full'>Company Registration</span> <span className=' text-[12px] sm:text-[16px] w-full'>XXXXXXXXX</span>
        <span className=' block sm:inline text-[12px] sm:text-[16px] w-full sm:ml-[34px] '>Linkedin</span>
        <span className=' text-[12px] sm:text-[16px] w-full sm:ml-[34px] '>2024 All rights Reserved</span>
      </div>

    </div>
  )
}

export default Footer