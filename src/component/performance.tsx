import React from 'react'
import {PerformanceCard} from './performanceCard'

function Performance() {
    const headings = [
        {
            heading: "Business Model and Value Proposition Analysis",
            content: ""
        },
        {
            heading: "Moat Analysis",
            content: ""
        },
        {
            heading: "Competitive Landscape",
            content: ""
        },
        {
            heading: "Compliance and Legal Insights",
            content: ""
        },
        {
            heading: "Management Team Overview",
            content: ""
        },
    ]
    return (
        <div className='w-[90vw] flex flex-col items-center justify-between gap-5 '>
            <div className=' w-full flex flex-col md:flex-row items-center justify-between gap-2 '>

                <div className='gap-[10px] h-full flex flex-col md:w-[70%] '>
                    <PerformanceCard heading="Executive Analysis Summary (DI Assessment of company)" content="Key Talking Points & Insights for further investigation" />
                    <PerformanceCard heading="Product  / Service Overview and Insights"  />
                    
                </div>
                <div className='min-h-[460px] w-[90%] md:w-[30%] rounded-xl shadow-lg bg-[#F6F6F6] flex flex-col items-start xlarge:text-2xl text-lg text-[#0D0E10] font-medium p-8 '>
                    <h1 className=' xlarge:text-3xl text-lg text-left' >Financial Ratios (beta)</h1>
                    <div className='w-full flex flex-col gap-[10px]  '>
                        <span className='w-full flex justify-between items-center py-5 '>
                            <span className='text-[#0D0E10] opacity-50 '>Gross Margin</span>
                            <span className=' text-[#0D0E10] font-semibold '>4,324.32</span>
                        </span>
                        <span className='w-full flex justify-between items-center py-5 '>
                            <span className='text-[#0D0E10] opacity-50 '>R&D Spend</span>
                            <span className=' text-[#0D0E10] font-semibold '>4,834.32 - 4,932.53</span>
                        </span>
                        <span className='w-full flex justify-between items-center py-5 '>
                            <span className='text-[#0D0E10] opacity-50 '>Sales</span>
                            <span className=' text-[#0D0E10] font-semibold '>2,623.28 - 3,823.74</span>
                        </span>
                        <span className='w-full flex justify-between items-center py-5 '>
                            <span className='text-[#0D0E10] opacity-50 '>Net Margin</span>
                            <span className=' text-[#0D0E10] font-semibold '>32%</span>
                        </span>
                        <span className='w-full flex justify-between items-center py-5 '>
                            <span className='text-[#0D0E10] opacity-50 '>Capex</span>
                            <span className=' text-[#0D0E10] font-semibold '>82.73</span>
                        </span>
                    </div>
                    <h1 className=' xlarge:text-3xl text-lg text-left' >Valuation</h1>
                    <span className=' bg-[#7F39EB] w-[90%] h-[64px] p-5 xlarge:text-2xl text-xl font-semibold text-white rounded-xl text-center '>$ 525,125.00</span>
                    
                </div>
            </div>
            <div className='w-full flex flex-col gap-4 '>
                {headings.map(({heading, content}, key)=>(
                    <PerformanceCard key={key} heading={heading} content={content} />
                ))}


            </div>
            <div className='w-full flex flex-col gap-4 mt-20 '>
                <PerformanceCard heading='Intellectual Property Overview' content='' />
                <PerformanceCard heading='Risk Assessment Profile' content='' />
            </div>

        </div>
    )
}

export default Performance
