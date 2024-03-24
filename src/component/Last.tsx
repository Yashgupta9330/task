import React from 'react'
import Image from 'next/image'
import img2 from '@/assets/illu 1.png'
import img1 from '@/assets/Frame.svg'

function Last() {
    return (

        <div className=' w-[90%] sm:w-4/5 h-[600px] flex sm:flex-row flex-col gap-22 '>
            <div className=' w-full sm:w-1/2 h-full flex flex-col justify-between gap-8'> 
                <div className='w-[88%]  md:h-[89%] xl:w-[68%] flex flex-col justify-between sm:justify-normal items-start h-[70%] my-auto relative'>
                    <div className='w-full flex flex-col  lg:h-3/5 xl:h-3/5'>
                        <div className="flex flex-col gap-4 w-full sm:h-3/5">
                        <div>
                        <span className='uppercase font-normal text-md sm:text-xl'>
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
                    <div className=' lg:bottom-16 md:bottom-6 xl:bottom-24 mt-6 sm:mt-0 '>
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
          <div className=" w-full flex justify-center items-center sm:m-0 mt-14 h-fit sm:w-1/2 sm:h-fit">
            <Image
                src={img2}
                alt=''
                className='w-[70%] sm:w-full xl:w-[1110px] h-full m-0'
            />
        </div>
        </div>
    )
}

export default Last
