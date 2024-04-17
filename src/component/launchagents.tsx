import React, { useRef, useState } from 'react'
import RadioCardComponent from './radiocard'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
function LaunchAgents() {
    const cardContent = [
        {
            heading: "Idea Validation",
            content: "Amet, fames enim vel nec elit aliquet vestibulum vitae tempus. Lacus adipiscing ",
            comingsoon: false,
            color: "#32A24C",
            textColor: "#fff"
        },
        {
            heading: "Market Research",
            content: "Amet, fames enim vel nec elit aliquet vestibulum vitae tempus. Lacus adipiscing ",
            comingsoon: true,
            color: "#2E294E",
            textColor: "#fff"
        },
        {
            heading: "Technical Assessment",
            content: "Amet, fames enim vel nec elit aliquet vestibulum vitae tempus. Lacus adipiscing ",
            comingsoon: false,
            color: "#32A24C",
            textColor: "#000"
        },
        {
            heading: "Business Plan",
            content: "Amet, fames enim vel nec elit aliquet vestibulum vitae tempus. Lacus adipiscing ",
            comingsoon: true,
            color: "#2EC4B6",
            textColor: "#000"
        }
    ]
    const [formData, setFormData] = useState([]);
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("FORM DATA", formData);
      }
    const cref = useRef<HTMLButtonElement>(null);
    return (
        <div className=' w-full sm:w-[90vw] min-h-[60vh] flex flex-col xlarge:justify-around gap-[30px] p-[20px]  '>
            <h1 className='font-[600] text-4xl xlarge:text-6xl sm:max-w-[60%] '>
                Choose your launch Agents
            </h1>
            <p className='font-[400] text-base xlarge:text-3xl sm:max-w-[50%]'>
                Choose from a range of support skills to suit your needs. Iterate over time to keep your dataset up to date and relevant
            </p>
            <form onSubmit={(e) => handleFormSubmit(e)} className="flex flex-col w-[90vw] justify-start items-start gap-[10px]">
            <div className='w-full gap-[20px] grid grid-cols-2 sm:grid-rows sm:grid-cols-4 flex-wrap '>
                {cardContent.map((card, index) => (
                    <RadioCardComponent
                        heading={card.heading}
                        content={card.content}
                        comingsoon={card.comingsoon}
                        color={card.color}
                        textColor={card.textColor}
                        key={index}
                        ref={cref}
                    />
                ))}
            </div>

            <div className='w-full flex justify-center items-center'>
                <div className="flex flex-col w-[90vw] justify-start items-start gap-[10px]">
                    <Label htmlFor="name" className=' text-base xlarge:text-3xl font-bold text-left '>Startup Name</Label>
                    <Input type="text" id="name" className=' border border-[#285B52] shadow-md h-[60px] sm:max-w-[50%] focus:outline-none focus:ring-0 ' />
                    <Label htmlFor="name" className=' text-base xlarge:text-3xl font-bold text-left '>Description</Label>
                    <Input type="text" id="name" className=' border border-[#285B52] shadow-md h-[60px] min-w-[50%] ' />
                    <Button type='submit' className='w-[220px] h-[60px] xlarge:w-[310px] xlarge:h-[85px] bg-[#285B52] font-semibold text-xl xlarge:text-3xl  mt-[5px] text-[#FFFFFF]'>Analyse</Button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default LaunchAgents
