"use client"
import Navbar from '@/component/Navbar'
import Footer from '@/component/footer'
import React from 'react'
import { Input } from "@/components/ui/input"
import { InputWithLabel } from '@/component/inputlabel'
import { Button } from '@/components/ui/button'
import { Label } from '@radix-ui/react-label'
import Investorcard from '@/component/investorcard'


const page = () => {
  const handleFormSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
  }
  return (
    <div className='w-full flex flex-col'>
    <div className="w-full h-[450px] flex flex-col  gap-8 rounded-tl-none rounded-tr-none rounded-bl-lg rounded-br-lg bg-[#FFFFFF] border  border-1 border-solid border-gray-100 shadow-md shadow-x-0 shadow-y-4 shadow-blur-4 shadow-spread-0 shadow-color-black">
      <Navbar/>
      <div className='w-full flex justify-center items-center'>
      <form onSubmit={(e)=>handleFormSubmit(e)} className="flex flex-col w-[90vw] justify-start items-start gap-[10px]">
      <Label htmlFor="name" className=' text-base font-bold text-left '>Startup Name</Label>
      <Input type="text" id="name" className=' border border-[#285B52] shadow-md h-[60px] max-w-[50%] focus:outline-none focus:ring-0 ' />
      <Label htmlFor="name" className=' text-base font-bold text-left '>Description(Optional)</Label>
      <Input type="text" id="name" className=' border border-[#285B52] shadow-md h-[60px] min-w-[50%]' />
      <div className='border border-[#285B52] shadow-md  w-full rounded h-[124px] mb-2 flex items-center gap-4 flex-start pl-4'>
        <Investorcard head="Company URL" def="www.immersive-engineering.c.." fl='1'/>
        <Investorcard head="Pitch Deck" def="IE bVildR Pitch Deck.pdf" fl='0'/>
        <Investorcard head="Company URL" def="IE bVildR Business Plan.pdf" fl='0'/>
        <Button type='submit' className='w-[113px] h-[48px] bg-[#FFFFFF] font-semibold text-[16px]  px-[8px] py-[24px] leading-8 border border-[2px] border-[#7F39EB] rounded-[16px] text-[#7F39EB]'>Analyse</Button>
        <Button type='submit' className='w-[124px] h-[48px] bg-[#7F39EB] font-semibold text-[16px]  px-[8px] py-[24px] leading-8 text-[#FFFFFF] rounded-[16px]'>Generate</Button>
      </div>
     </form>
    </div>
    </div>
    </div>
  )
}

export default page