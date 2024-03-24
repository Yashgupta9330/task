import React from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.png'


function Header() {
    return (
        <div className='w-full h-[80px] bg-white flex justify-center sm:justify-between items-center  '>

            <Image
                className='sm:absolute sm:left-[111px]'
                src={logo}
                width={296.67}
                height={24}
                priority
                alt="logo"
            />

            <div className='sm:w-[57px] sm:h-[24px] '></div>
        </div>
    )
}

export default Header
