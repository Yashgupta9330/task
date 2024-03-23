import React from 'react'
import Image from 'next/image'
import img2 from '@/assets/illu 1.png'
import img1 from '@/assets/Frame.svg'

function Last() {
    return (
        <div className=' w-[1110px] h-[503px] flex justify-center items-center gap-[20px]  '>
            <div className='h-[326px] flex flex-col justify-between items-start'>
                <div className='w-[520px] h-[250px] flex flex-col justify-between items-start '>
                    <div className='w-full flex flex-col justify-between items-start h-[144px] '>
                    <span className='uppercase font-[400] text-[16px]  '>
                        Integration - Coming Soon!
                    </span>
                    <h1 className=' w-full h-[98px] font-[600] text-[40px] leading-[48.76px] text-[#0D0E10]  '>
                        Leverage our solutions from your existing tools
                    </h1>

                    </div>
                    <p className=' w-[495px] h-[82px] font-[400] text-[16px] leading-[24px] '>
                        Integrate Digital Insights directly into your existing platforms for the same user experience and benefits, for a more seamless experience. Coming Soon!
                    </p>
                </div>
                <div className=' w-[166px] h-[32px] flex justify-center items-center'>
                    <Image
                        src={img1}
                        width={32}
                        height={32}
                        alt=''
                    />
                    <span className=' font-[600] text-[18px] text-[#0D0E10] ml-[10px] '>Get in touch</span>
                </div>
            </div>
            <div className='h-full'>
                <Image
                    src={img2}
                    width={503}
                    height={503}
                    alt=''
                />
            </div>
        </div> 
    )
}

export default Last
