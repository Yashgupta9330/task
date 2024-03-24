import React from 'react'
import img1 from '@/assets/Customer Satisfaction.png'
import img2 from '@/assets/Target Vs Reality.png'
import img3 from '@/assets/Total Revenue.svg'
import Image from 'next/image'
import tickimg from '@/assets/Check icon.svg'

const Top = () => {
  return (
    <div className='bg-[#285B52] text-white w-full sm:h-screen flex sm:flex-row flex-col sm:gap-[56px] items-center justify-around '>
      <div className=' top-0 w-full p-[20px] sm:w-1/2  '>
        <div className='flex flex-col items-center justify-between w-full gap-[20px] sm:gap-[0px] sm:justify-start  '>
          <h1 className=' font-[600] text-[36px] sm:text-[56px] leading-10 sm:leading-[68.26px] sm:mb-[28px] '>Business with Intelligent Solutions</h1>
          <p className=' font-[400] text-[18px] leading-[26px] w-[100%] '>Amet, fames enim vel nec elit aliquet vestibulum vitae tempus. Lacus adipiscing vitae, aliquet lorem. Praesent nulla consequat mauris
          </p>
        </div>
        <div className=' w-full sm:w-[392px] flex items-center  gap-[10px] sm:z-[9999] mt-[20px] sm:mt-[50px] '>
          <button className='bg-white hover:bg-slate-200 w-[180px] mr-[10px] h-[56px] rounded-[12px] px-[24px] py-[14px] text-black font-bold '>
            Start-ups
          </button>
          <button className='bg-[#7F39EB] hover:bg-[#9c5aff] w-[180px] h-[56px] rounded-[12px] px-[24px] py-[14px] text-white border border-[#E863FF] font-bold '>
            Investors
          </button>
        </div>
        <div className='text-white text-[16px] font-[400] mt-[20px] sm:mt-[70px] '>
          <div className='flex gap-2 mb-2'>
            <Image
              src={tickimg}
              width={24}
              height={24}
              alt=''
            />
            <span>
              Assess your opportunities
            </span>
          </div>
          <div className='flex gap-2 mb-2'>
            <Image
              src={tickimg}
              width={24}
              height={24}
              alt=''
            />
            <span>
              Reduce ambiguity
            </span>
          </div>
          <div className='flex gap-2 mb-2'>
            <Image
              src={tickimg}
              width={24}
              height={24}
              alt=''
            />
            <span>
              AI powered solutions
            </span>
          </div>
        </div>
      </div>
      <div className=' flex-col justify-center items-center '>
        <div className='flex justify-center items-center'>
          <Image
            src={img1}
            width={259.91}
            height={217.21}
            alt=''
            className=' w-[] h-[] sm:w-[259.91px] sm:h-[217.21px]  '
          />
          <Image
            src={img2}
            width={229.58}
            height={217.21}
            alt=''
          />
        </div>
        <div className='flex justify-center items-center sm:w-[511.49px]'>
          <Image
            src={img3}
            width={399.14}
            height={217.21}
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default Top
