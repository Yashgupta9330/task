import React from 'react'
import tickimg from '@/assets/Vector.svg'
import Image from 'next/image'
import img1 from '@/assets/Frame 87.svg'
import img2 from '@/assets/Frame 88.svg'
import img3 from '@/assets/image 10.svg'

function Datasimplified() {
    return (
        <div className='w-full h-screen sm:h-[543px] xlarge:h-[800px] flex justify-center items-center '>
            <div className='lg:w-[90%] xlarge:w-[90%] xlarge:h-full h-[760px] sm:h-[543px] rounded-[12px] bg-[#EEEBEA] flex flex-col sm:flex-row items-center p-[30px] sm:p-[50px] relative '>
                <div className=' lg:w-[70%] xlarge:flex xlarge:justify-around xlarge:items-start xlarge:h-[750px] xlarge:flex-col xlarge:w-[50%]   '>
                    <div className=' w-[100%] xlarge:h-[200px] flex flex-col items-start justify-around sm:justify-between'>
                        <h1 className='text-[40px] xlarge:text-[76px] font-[600]'>
                            Data - Simplified
                        </h1>
                        <p className=' w-[90%] h-[47px] xlarge:text-[42px] '>
                            Amet, fames enim vel nec elit aliquet vestibulum vitae tempus. Lacus adipiscing.
                        </p>
                    </div>
                    <div className='text-[#292A48] text-[16px] xlarge:text-[32px] font-[400] mt-[40px] w-[252.12px] xlarge:w-[500px] xlarge:mt-[105px]  '>
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
                    <button className='bg-[#0D0E10] xlarge:w-[300px] xlarge:h-[100px] xlarge:text-3xl w-[177px] h-[56px] mt-[30px] rounded-[12px] px-[24px] py-[14px] text-white font-bold text-center '>
                        Get Started
                    </button>
                </div>
                <div className='w-[70%] sm:h-full sm:m-0 mt-10 flex flex-col justify-center items-center'>
                    <div className='w-[90%] h-[60%] flex justify-center items-center '>
                        <Image
                            src={img1}
                            alt=''
                            className='w-[278px] h-[280px] sm:w-[278px] sm:h-[280px] lg:w-[225px] lg:h-[220px] xlarge:w-[430px] xlarge:h-[430px] '
                        />
                        <Image
                            src={img2}
                            alt=''
                            className='w-[170px] h-[170px] sm:w-[296px] sm:h-[283px]  lg:w-[238px] lg:h-[230px] xlarge:w-[430px] xlarge:h-[430px] '
                        />
                    </div>
                    <div className='w-[80%] flex items-center justify-center '>
                        <Image
                            src={img3}
                            alt=''
                            className='w-[262px] h-[70.39px] sm:w-[314.4px] sm:h-[126.46px] xlarge:w-[600px] xlarge:h-[200px] '
                        />
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Datasimplified
