
import React, { useState, forwardRef, ForwardRefRenderFunction } from "react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface RadioCardProps {
  heading: string;
  content: string;
  comingsoon?: boolean;
  color: string;
  textColor: string;
  onClick?: () => void; // onClick prop
  cref?: React.RefObject<HTMLButtonElement>;
}

const RadioCard: ForwardRefRenderFunction<HTMLButtonElement, RadioCardProps> = ({ heading, content, comingsoon = false, color, textColor, onClick, cref }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleChecked = () => {
    setIsChecked(prev => !prev);
    if (onClick) {
      onClick(); // Trigger onClick callback if provided
    }
  };

  return (
    <Card className="p-[20px] xlarge:p-[40px] min-w-[170px] min-h-[270px] " style={{ backgroundColor: color }}>
      <div className={`w-full flex flex-col gap-[20px] text-[#fff]`} style={{ color: textColor }}>
        <Checkbox
          className="w-[40px] h-[40px] rounded-lg bg-white outline-none border-0"
          value={heading}
          ref={cref}
         />
        <h1 className="text-sm sm:text-lg xlarge:text-4xl font-semibold">{heading}</h1>
        <p className="text-xs sm:text-base xlarge:text-2xl">{content}</p>
        {comingsoon && (
          <span className="font-bold text-base sm:text-xl xlarge:text-3xl text-center">Coming Soon!</span>
        )}
      </div>
    </Card>
  );
};


const RadioCardComponent = forwardRef(RadioCard);

export default RadioCardComponent;