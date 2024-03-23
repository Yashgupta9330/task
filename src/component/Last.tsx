import React from 'react'
import Image from 'next/image'
import img2 from '@/assets/illu 1.png'
import img1 from '@/assets/Frame.svg'

function Last() {
    return (
        <div className=' lg:w-[80%] xl:w-[80%] lg:h-[600px] xl:h-[503px] flex justify-around items-center gap-[20px]  '>
            <div className=' w-[50%] lg:h-[350px] xl:h-[326px] flex flex-col justify-between items-start'>
                <div className='w-[40%px] lg:h-full xl:h-[80%] flex flex-col justify-between items-start '>
                    <div className=' lg:w-full xl:w-[90%] flex flex-col justify-between items-start h-[144px] '>
                        <span className='uppercase font-[400] text-[16px]  '>
                            Integration - Coming Soon!
                        </span>
                        <h1 className='  font-[600] lg:text-[36px] xl:text-[40px] leading-[48.76px] text-[#0D0E10]  '>
                            Leverage our solutions from your existing tools
                        </h1>
                        {/* lg:w-[100%] xl:w-full h-[98px] */}
                    </div>
                    <p className=' w-[90%] xl:h-[82px] font-[400] text-[16px] leading-[24px] '>
                        Integrate Digital Insights directly into your existing platforms for the same user experience and benefits, for a more seamless experience. Coming Soon!
                    </p>
                </div>
                <button className=' w-[180px] lg:h-[38px] xl:h-[32px] flex justify-center items-center hover:border hover:border-[#29292928] rounded-xl py-6 '>
                    <Image
                        src={img1}
                        width={32}
                        height={32}
                        alt=''
                        className=''
                    />
                    <span className=' font-[600] text-[18px] text-[#0D0E10] ml-[10px] '>Get in touch</span>
                </button>
            </div>

            <Image
                src={img2}
                width={503}
                height={503}
                alt=''
            />
        </div>
    )
}

export default Last
