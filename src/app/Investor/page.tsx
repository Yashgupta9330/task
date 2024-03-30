import Navbar from '@/component/Navbar'
import Footer from '@/component/footer'
import React from 'react'
import { Input } from "@/components/ui/input"
import { InputWithLabel } from '@/component/inputlabel'


const page = () => {
  return (
    <div className='w-full flex flex-col'>
    <div className="w-full h-[405px] flex flex-col  gap-8 rounded-tl-none rounded-tr-none rounded-bl-lg rounded-br-lg bg-[#FFFFFF] border  border-1 border-solid border-gray-100 shadow-md shadow-x-0 shadow-y-4 shadow-blur-4 shadow-spread-0 shadow-color-black">
      <Navbar/>
      <div className="w-2/5  ml-24">
      <InputWithLabel place="Startup Type"/>
      </div>
      <div className="w-4/5  ml-24">
      <InputWithLabel place="Description(Optional)"/>
      </div>
       <div className="w-4/5 ml-24 h-[124px] mb-2 flex gap-2 border rounded-md border-[#BDBDBD] shadow-md shadow-x-0 shadow-y-4 shadow-blur-4 shadow-spread-0 shadow-color-black opacity-25"></div>
    </div>
 
    </div>
  )
}

export default page