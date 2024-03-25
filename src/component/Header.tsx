import React from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.svg'


function Header() {
    return (
        <div className='w-full h-[80px] xlarge:h-[160px] bg-white flex justify-center sm:justify-between items-center  '>

            <Image
                className='sm:absolute sm:left-[111px] w-[296.67px] h-[32px] xlarge:w-[600px] xlarge:h-[65px] '
                src={logo}
                priority
                alt="logo"
            />

            <div className='sm:w-[57px] sm:h-[24px] '></div>
        </div>
    )
}

export default Header
