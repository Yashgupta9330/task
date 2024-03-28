import React from 'react'
import img1 from '@/assets/Customer Satisfaction.svg'
import img2 from '@/assets/Target Vs Reality.svg'
import img3 from '@/assets/Total Revenue.svg'
import Image from 'next/image'
import tickimg from '@/assets/Check icon.svg'
import { Link } from 'lucide-react'

const Top = () => {
  return (
    <div className='bg-[#285B52] text-white w-full xlarge:px-[80px] xlarge:h-[80vh] xlarge:gap-0 sm:h-screen flex sm:flex-row flex-col sm:gap-[56px] items-center justify-around '>
      <div className=' top-0 w-full p-[20px] sm:w-1/2  '>
        <div className='flex flex-col items-center justify-between w-full gap-[20px] sm:gap-[0px] sm:justify-start  '>
          <h1 className=' font-[600] text-[36px] sm:text-[56px] xlarge:text-[86px] leading-10 xlarge:leading-[100px] sm:leading-[68.26px] sm:mb-[28px] '>Business with Intelligent Solutions</h1>
          <p className=' font-[400] text-[18px] xlarge:text-[44px] xlarge:leading-[60px] leading-[26px] w-[100%] '>Amet, fames enim vel nec elit aliquet vestibulum vitae tempus. Lacus adipiscing vitae, aliquet lorem. Praesent nulla consequat mauris
          </p>
        </div>
        <div className=' w-[90%] sm:w-[392px] xlarge:w-[50%] flex items-center  gap-[10px] sm:z-[9999] mt-[20px] sm:mt-[50px] '>
          <Link href='/Startup'><button className='bg-white hover:bg-slate-200 w-[180px] xlarge:w-[50%] xlarge:h-[100px] mr-[10px] h-[56px] rounded-[12px] px-[24px] py-[14px] text-black font-bold xlarge:text-3xl '>
            Start-ups
          </button></Link>
          <button className='bg-[#7F39EB] hover:bg-[#9c5aff] w-[180px] xlarge:w-[50%] xlarge:h-[100px] h-[56px] rounded-[12px] px-[24px] py-[14px] text-white border border-[#E863FF] font-bold xlarge:text-3xl '>
            Investors
          </button>
        </div>
        <div className='text-white text-[16px] xlarge:text-4xl font-[400] mt-[20px] sm:mt-[70px] '>
          <div className='flex gap-2 mb-2'>
            <Image
              src={tickimg}
            
              alt=''
              className=' w-[24px] h-[24px] xlarge:w-[48px] xlarge:h-[48px] '
            />
            <span>
              Assess your opportunities
            </span>
          </div>
          <div className='flex gap-2 mb-2'>
            <Image
              src={tickimg}
              
              alt=''
              className=' w-[24px] h-[24px] xlarge:w-[48px] xlarge:h-[48px] '
            />
            <span>
              Reduce ambiguity
            </span>
          </div>
          <div className='flex gap-2 mb-2'>
            <Image
              src={tickimg}
           
              alt=''
              className=' w-[24px] h-[24px] xlarge:w-[48px] xlarge:h-[48px] '
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
            alt=''
            className=' w-[200px] h-[190px] sm:w-[259.91px] sm:h-[217.21px] xlarge:w-[606px] xlarge:h-[531px] '
          />
          <Image
            src={img2}
            alt=''
            className=' w-[200px] h-[190px] xlarge:w-[606px] xlarge:h-[531px] '
          />
        </div>
        <div className='flex justify-center items-center xlarge:w-[1000px] sm:w-[511.49px]'>
          <Image
            src={img3}
            alt=''
            className='w-[399.14px] h-[217.21px] xlarge:w-[800px] xlarge:h-[500px] '
          />
        </div>
      </div>
    </div>
  )
}

export default Top
