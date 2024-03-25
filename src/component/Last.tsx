import React from 'react'
import Image from 'next/image'
import img2 from '@/assets/illu 1.svg'
import img1 from '@/assets/Frame.svg'

function Last() {
    return (

        <div className=' w-[90%] sm:w-4/5 h-[600px] xlarge:h-[800px] flex sm:flex-row flex-col gap-22 '>
            <div className=' w-full sm:w-1/2 h-full flex flex-col justify-between gap-8'>
                <div className='w-[93%] md:h-[89%] xlarge:w-[80%] flex flex-col justify-between sm:justify-normal items-start h-[70%] xlarge:gap-10 my-auto relative'>
                    <div className='w-full flex flex-col xlarge:gap-10 lg:h-3/5 xlarge:h-3/5'>
                        <div className="flex flex-col xlarge:gap-4 w-full sm:h-3/5">
                            <div>
                                <span className='uppercase font-normal xlarge:text-3xl text-md sm:text-xl'>
                                    Integration - Coming Soon!
                                </span>
                            </div>
                            <h1 className='font-semibold xlarge:text-[55px] text-3xl xlarge:leading-[56px] leading-10 text-[#0D0E10]  '>
                                Leverage our solutions from your existing tools
                            </h1>
                        </div>
                        <p className=' w-full h-2/5 text-base xlarge:text-4xl font-normal leading-6 mt-1'>
                            Integrate Digital Insights directly into your existing platforms for the same user experience and benefits, for a more seamless experience. Coming Soon!
                        </p>
                    </div>
                    <div className=' lg:bottom-16 md:bottom-6 xlarge:bottom-24 mt-6 sm:mt-0 xlarge:mt-14 '>
                        <button className=' w-full h-9 xlarge:h-11 xlarge:mt-10  hover:border hover:border-[#29292928] rounded-xl flex justify-center items-center  '>
                            <Image
                                src={img1}
                                alt=''
                                className='w-[32px] h-[32px] xlarge:w-[64px] xlarge:h-[64px] '
                            />
                            <span className=' font-semibold xlarge:text-4xl text-[18px] text-[#0D0E10] xlarge:ml-4 ml-2.5 '>Get in touch</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className=" w-full flex justify-center items-center sm:m-0 mt-14 h-fit sm:w-1/2 sm:h-fit">
                <Image
                    src={img2}
                    alt=''
                    className='w-[70%] sm:w-[70%] sm:h-[70%] sm:mt-10 xlarge:w-[70%] h-[full] xlarge:h-[70%] m-0'
                />
            </div>
        </div>
    )
}

export default Last
