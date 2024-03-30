
import * as React from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import {Card} from "@/components/ui/card"

interface RadioCardProps {
  heading: string;
  content: string;
  comingsoon?: boolean;
  color: string;
  textColor: string;
}

export const RadioCard: React.FC<RadioCardProps> = ({ heading, content, comingsoon = false, color, textColor }) => {
  return (
    <Card className="p-[20px] min-w-[170px] min-h-[270px] " style={{backgroundColor: color}} >
       <div className={`w-full flex flex-col gap-[20px] text-[#fff]`} style={{color:textColor}}>
       <RadioGroup className="w-[40px] h-[40px] rounded-lg bg-white outline-none border-0 flex items-center justify-center">
       <RadioGroupItem value="default" id="r1" className="w-[20px] h-[20px] outline-none border-0 scale-[2] " />
       </RadioGroup>
       <h1 className="text-base sm:text-lg font-semibold " >{heading}</h1>
       <p className=" text-sm sm:text-base" >{content} </p>
       { comingsoon && <span className=" font-bold text-xl text-center ">Coming Soon!</span> }
       </div>
    </Card>
  )
}

