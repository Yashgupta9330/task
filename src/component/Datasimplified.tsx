import React from 'react'
import tickimg from '@/assets/Vector.svg'
import Image from 'next/image'
import img1 from '@/assets/Frame 87.png'
import img2 from '@/assets/Frame 88.png'
import img3 from '@/assets/image 10.png'

function Datasimplified() {
    return (
        <div className='w-full h-screen sm:h-[543px] flex justify-center items-center '>
            <div className='lg:w-[90%] xl:w-[80%] h-[760px] sm:h-[543px] rounded-[12px] bg-[#EEEBEA] flex flex-col sm:flex-row items-center p-[30px] sm:p-[50px] relative '>
                <div className=' lg:w-[70%] xl:w-[50%]   '>
                    <div className=' w-[100%] h-[178px]  flex flex-col items-start justify-around sm:justify-between'>
                        <h1 className='text-[40px] font-[600]'>
                            Data - Simplified
                        </h1>
                        <p className=' w-[90%] h-[47px] '>
                            Amet, fames enim vel nec elit aliquet vestibulum vitae tempus. Lacus adipiscing.
                        </p>
                    </div>
                    <div className='text-[#292A48] text-[16px] font-[400] mt-[40px] w-[252.12px] h-[100px] '>
                        <div className='flex gap-2 mb-2'>
                            <Image
                                src={tickimg}
                                width={14.2}
                                height={10}
                                alt=''
                            />
                            <span>
                                Understand your options
                            </span>
                        </div>
                        <div className='flex gap-2 mb-2'>
                            <Image
                                src={tickimg}
                                width={14.2}
                                height={10}
                                alt=''
                            />
                            <span>
                                Access insights immediately
                            </span>
                        </div>
                        <div className='flex gap-2 mb-2'>
                            <Image
                                src={tickimg}
                                width={14.2}
                                height={10}
                                alt=''
                            />
                            <span>
                                Understand your options
                            </span>
                        </div>
                    </div>
                    <button className='bg-[#0D0E10] w-[177px] h-[56px] mt-[30px] rounded-[12px] px-[24px] py-[14px] text-white font-bold text-center '>
                        Get Started
                    </button>
                </div>
                <div className='w-[70%] h-full sm:m-0 mt-10 flex flex-col justify-center items-center'>
                    <div className='w-[90%] h-[60%] flex justify-center items-center '>
                        <Image
                            src={img1}
                            width={278}
                            height={280}
                            alt=''
                            className=' lg:w-[225px] lg:h-[220px] xl:w-[278px] xl:h-[280px] '
                        />
                        <Image
                            src={img2}
                            width={296}
                            height={283}
                            alt=''
                            className=' lg:w-[238px] lg:h-[230px] xl:w-[296px] xl:h-[283px] '
                        />
                    </div>
                    <div className='w-[80%] flex items-center justify-center '>
                        <Image
                            src={img3}
                            width={314.4}
                            height={84.46}
                            alt=''
                            className=''
                        />
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Datasimplified
