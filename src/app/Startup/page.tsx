"use client";
import Navbar from '@/component/Navbar'
import LaunchAgents from '@/component/launchagents'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { HiDownload } from "react-icons/hi";
import Footer from '@/component/footer'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  const handleFormSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
  }
  return (
    <div className='w-full flex flex-col mx-auto '>
    <div className="flex w-full h-[496px]  relative">
    <Navbar/>

     <div className='absolute w-[650px] h-60 top-52 left-28 flex flex-col gap-14  lg:top-32 lg:left-16'>
      <div className='w-full h-36  text-[56px] font-semibold leading-16 text-[#0D0E10] text-left'>Smart tools to Launch and Scale your ideas</div>
      <div className='flex justify-center items-center w-48 h-14 cursor-pointer'>
      <Button className='w-full h-full bg-[#285B52] font-semibold text-xl text-[#FFFFFF]'>Get Started</Button>
      </div>
     </div>
    </div>

    {/* Video component */}
    <div className="flex justify-center items-center w-full h-[600px] mb-4">
     <div className='flex justify-center items-center w-[95%] h-full border rounded bg-[#EEEBEA] text-center'>
     <div className="text-center font-semibold text-[40px] leading-[48px] text-[#0D0E10]"> INSERT DEMO VIDEO</div>
    </div>
    </div>
    <div className=' w-full flex items-center justify-center mb-10 mt-5 '>
    <LaunchAgents/>
    </div>
    <div className='w-full flex justify-center items-center'>
    <form onSubmit={(e)=>handleFormSubmit(e)} className="flex flex-col w-[90vw] justify-start items-start gap-[10px]">
      <Label htmlFor="name" className=' text-base font-bold text-left '>Startup Name</Label>
      <Input type="text" id="name" className=' border border-[#285B52] shadow-md h-[60px] max-w-[50%] focus:outline-none focus:ring-0 ' />
      <Label htmlFor="name" className=' text-base font-bold text-left '>Description</Label>
      <Input type="text" id="name" className=' border border-[#285B52] shadow-md h-[60px] min-w-[50%] ' />
      <Button type='submit' className='w-[220px] h-[60px] bg-[#285B52] font-semibold text-xl mt-[5px] text-[#FFFFFF]'>Analyse</Button>
    </form>
    </div>


    <div className=' w-[90vw] h-screen border border-[#285B52] rounded-xl justify-self-center mx-auto flex justify-between p-[10px] my-[20px] '>
      <span className=' text-base font-bold text-left ' >Report</span>
      <HiDownload className='cursor-pointer' />
    </div>
    <Footer/>
    </div>
  )
}

export default page
