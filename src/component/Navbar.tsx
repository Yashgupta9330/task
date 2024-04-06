import Image from 'next/image'
import React from 'react'
import logo from './logo.png'
import { Button } from '@/components/ui/button'
import {Nav} from './Sheet'
import Link from 'next/link'

interface NavbarProps {
  title: string;
  color: string;
}

const Navbar: React.FC<NavbarProps> = ({ title, color }) => {
  return (
    <div className='w-full bg-[#FFFFFF] h-20 border border-1 flex justify-center items-center'>
      <div className='flex justify-between  w-[95%]'>
        <div className="flex  justify-center items-center gap-2 lg:gap-1 cursor-pointer">
          <div className={`w-6 h-6 `} style={{ backgroundColor: color }}></div>
          <div
            className={`font-montserrat   text-xl lg:text-3xl font-semibold leading-6 text-left `}
            style={{ color: color }}
          >
            {title}
          </div>
        </div>


        <div className='hidden md:block'>
          <div className="flex w-[455px] md:w-[400px] lg:w-[400px] h-12  items-center justify-between  pr-10 pl-10 md:pr-6 lg:pl-6 lg:pr-6">
            <div className="flex justify-between gap-8 md:gap-6">
              <Link href='/' className='cursor-pointer'>Home</Link>
            <div className='cursor-pointer'>Pricing</div>
          </div>
          <div className='h-full flex justify-center items-center px-2 py-6 text-[#0D0E10] font-semibold text-4  leading-6 cursor-pointer'>Sign-up</div>
          <div className='h-full flex justify-center items-center font-semibold w-24 cursor-pointer'><Button className='w-full h-full' style={{ backgroundColor: color }}>Login</Button></div>
        </div>
      </div>
      <div className='md:hidden'>
        <Nav color={ title==='Diligent Insights  -  Startup Hub'? '#285B52':'#512A8D'} />
      </div>
    </div>
    </div >
  )
}

export default Navbar