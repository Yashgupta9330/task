"use client"
import Navbar from '@/component/Navbar'
import Footer from '@/component/footer'
import React from 'react'
import { Input } from "@/components/ui/input"
import { InputWithLabel } from '@/component/inputlabel'
import { Button } from '@/components/ui/button'
import { Label } from '@radix-ui/react-label'
import Investorcard from '@/component/investorcard'
import { GrStatusGood } from "react-icons/gr";
import Performance from '@/component/performance'

const page = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  return (
    <div className='w-full flex flex-col'>
      <Navbar />
      <div className="w-full min-h-[450px] flex flex-col  gap-8 rounded-tl-none rounded-tr-none rounded-bl-lg rounded-br-lg bg-[#FFFFFF] border border-solid border-gray-100 shadow-md shadow-x-0 shadow-y-4 shadow-blur-4 shadow-spread-0 pt-4 ">


        <div className='w-full flex justify-center items-center'>
          <form onSubmit={(e) => handleFormSubmit(e)} className="flex flex-col w-[90vw] justify-start items-start gap-[10px]">
            <Label htmlFor="name" className=' xlarge:text-2xl text-base font-bold text-left '>Startup Name</Label>
            <Input type="text" id="name" className=' border border-[#BDBDBD] shadow-md h-[60px] max-w-[50%] focus:outline-none focus:ring-0 ' />
            <Label htmlFor="name" className=' xlarge:text-2xl text-base font-bold text-left '>Description(Optional)</Label>
            <Input type="text" id="name" className=' border border-[#BDBDBD] shadow-md h-[60px] min-w-[50%]' />



            <div className='border border-[#BDBDBD] shadow-md  w-full min-w-fit rounded-lg min-h-[124px] my-2 items-center gap-4 px-5 py-6 grid grid-rows-4 md:grid-rows-1 md:grid-cols-4 '>

              <Investorcard head="Company URL" def="www.immersive-engineering.c.." fl='1' />
              <Investorcard head="Pitch Deck" def="IE bVildR Pitch Deck.pdf" fl='0' />
              <Investorcard head="Company URL" def="IE bVildR Business Plan.pdf" fl='0' />


              <div className='flex flex-col items-center flex-wrap '>
                <div className=' flex justify-between items-center gap-2 w-full '>
                  <Button type='submit' className='w-[113px] h-[48px] bg-[#FFFFFF] font-semibold text-[16px]  px-[8px] py-[24px] leading-8 border-2 border-[#7F39EB] rounded-[16px] text-[#7F39EB] hover:text-white hover:bg-[#7F39EB] '>Analyse</Button>
                  <Button type='submit' className='w-[124px] h-[48px] bg-[#7F39EB] font-semibold text-[16px]  px-[8px] py-[24px] leading-8 text-[#FFFFFF] rounded-[16px] hover:bg-[#532f89] hover:border-2 hover:border-[#7F39EB] '>Generate</Button>
                </div>

                <span className=' flex justify-center items-center mt-5 '>
                  <GrStatusGood width={18} height={18} className='text-[#285B52]' />
                  <span className=' text-[#666666] text-base border border-[#BDBDBD80] px-2 lg:text-small rounded-md '>
                    Financial Analysis Discount Rate
                  </span>
                </span>

              </div>
            </div>
          </form>
        </div>



        <div className='w-full flex items-center justify-center mb-10 '>
          <Performance />
        </div>


        {/* <div className='h-screen'></div> */}

      </div>
      <Footer />
    </div>
  )
}

export default page