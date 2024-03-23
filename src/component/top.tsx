import React from 'react'
import img1 from '@/assets/Customer Satisfaction.png'
import img2 from '@/assets/Target Vs Reality.png'
import img3 from '@/assets/Total Revenue.svg'
import Image from 'next/image'
import tickimg from '@/assets/Check icon.svg'

const Top = () => {
  return (
    <div className='bg-[#285B52] text-white w-full h-screen flex gap-[56px] items-center justify-around '>
      <div className='w-1/2 h-[530px] flex-col items-start justify-normal px-[20px] '>
        <div className='flex-col  w-[100%] '>
          <h1 className=' font-[600] text-[56px] leading-[68.26px] mb-[28px] '>Business with Intelligent Solutions</h1>
          <p className=' font-[400] text-[18px] leading-[26px] w-[100%] '>Amet, fames enim vel nec elit aliquet vestibulum vitae tempus. Lacus adipiscing vitae, aliquet lorem. Praesent nulla consequat mauris
        </p></div>
          <div className=' w-[392px] flex items-center  gap-[10px] z-[9999] mt-[50px] '>
            <button className='bg-white hover:bg-slate-200 w-[180px] mr-[10px] h-[56px] rounded-[12px] px-[24px] py-[14px] text-black font-bold '>
              Start-ups
            </button>
            <button className='bg-[#7F39EB] hover:bg-[#9c5aff] w-[180px] h-[56px] rounded-[12px] px-[24px] py-[14px] text-white border border-[#E863FF] font-bold '>
              Investors
            </button>
          </div>
          <div className='text-white text-[16px] font-[400] mt-[70px] '>
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
      <div className=' h-[457.52px] '>
          <div className='flex'>
            <Image
            src={img1}
            width={259.91}
            height={217.21}
            alt=''
            />
            <Image
            src={img2}
            width={229.58}
            height={217.21}
            alt=''
            />
          </div>
          <div className='flex justify-center items-center w-[511.49px]'>
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