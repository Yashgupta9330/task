import React from 'react'
import { RadioCard } from './radiocard'

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

    return (
        <div className=' w-[90vw] h-[60vh] flex flex-col gap-[30px] p-[20px]  '>
            <h1 className='font-[600] text-4xl sm:max-w-[50%] '>
                Choose your launch Agents
            </h1>
            <p className='font-[400] text-base sm:max-w-[50%]'>
                Choose from a range of support skills to suit your needs. Iterate over time to keep your dataset up to date and relevant
            </p>

            <div className='w-full gap-[20px] grid grid-cols-2 sm:grid-rows sm:grid-cols-4 flex-wrap '>
                {cardContent.map((card, index) => (
                    <RadioCard
                        heading={card.heading}
                        content={card.content}
                        comingsoon={card.comingsoon}
                        color={card.color}
                        textColor={card.textColor}
                        key={index}
                    />
                ))}
            </div>

        </div>
    )
}

export default LaunchAgents
