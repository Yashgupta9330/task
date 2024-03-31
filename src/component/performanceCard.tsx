import React from 'react'
interface PerformanceCard {
    heading: string;
    content?: string;
  }
export const PerformanceCard: React.FC<PerformanceCard> =({heading, content=""}) =>{
  return (
    <div className=' min-h-[260px] w-full rounded-xl shadow-lg bg-[#F6F6F6] flex flex-col items-start xlarge:text-2xl text-lg text-[#0D0E10] font-medium p-5 ' >
        <h2>{heading}</h2>

        <ul>
            <li>{content}</li>
        </ul>
      </div>
  )
}

