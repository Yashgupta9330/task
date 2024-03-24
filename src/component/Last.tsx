import React from 'react'
import Image from 'next/image'
import img2 from '@/assets/illu 1.png'
import img1 from '@/assets/Frame.svg'

function Last() {
    return (

        <div className='w-4/5 h-[503px] flex gap-22 '>
            <div className='w-1/2 h-full flex flex-col justify-between gap-8'> 
                <div className='w-[88%] h-[66%]  md:h-[89%] xl:w-[68%] flex flex-col my-auto relative'>
                    <div className='w-full flex flex-col h-4/5 lg:h-3/5 xl:h-3/5'>
                        <div className="flex flex-col gap-4 w-full h-3/5">
                        <div>
                        <span className='uppercase font-normal text-xl'>
                            Integration - Coming Soon!
                        </span>
                        </div>
                        <h1 className='  font-semibold  text-3xl leading-10 text-[#0D0E10]  '>
                            Leverage our solutions from your existing tools
                        </h1>
                        </div>
                    <p className=' w-full h-2/5 xl:h-1/2  text-base font-normal leading-6 mt-1'>
                        Integrate Digital Insights directly into your existing platforms for the same user experience and benefits, for a more seamless experience. Coming Soon!
                    </p>
                    </div>
                <div className='absolute left-0 bottom-0 lg:bottom-16 md:bottom-6 xl:bottom-24'>
                <button className=' w-full h-9 flex  hover:border hover:border-[#29292928] rounded-xl  '>
                    <Image
                        src={img1}
                        alt=''
                        className=''
                    />
                    <span className=' font-semibold text-[18px] text-[#0D0E10] ml-2.5 '>Get in touch</span>
                </button>
                </div>
                </div>
            </div>
          <div className="w-1/2 h-full">
            <Image
                src={img2}
                alt=''
            />
        </div>
        </div>
    )
}

export default Last
